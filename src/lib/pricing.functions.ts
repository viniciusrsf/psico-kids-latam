import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";

import {
  currencyForCountry,
  localeForCountry,
  normalizeCountry,
  usdFallbackContext,
  type CurrencyContext,
} from "./pricing";

const RATE_CACHE_TTL_MS = 12 * 60 * 60 * 1000;
const LOCATION_CACHE_SECONDS = 24 * 60 * 60;
const LOCATION_COOKIE = "pmk_country";

type RateRow = { date: string; quote: string; rate: number };
type SupplementalRates = {
  result?: string;
  time_last_update_utc?: string;
  rates?: Record<string, number>;
};
type RatesCache = { expiresAt: number; rates: Record<string, number>; dates: Record<string, string> };

let ratesCache: RatesCache | null = null;

function countryFromCookie(cookieHeader: string | undefined) {
  if (!cookieHeader) return null;
  const value = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${LOCATION_COOKIE}=`))
    ?.slice(LOCATION_COOKIE.length + 1);
  return normalizeCountry(value);
}

function countryFromLanguage(languageHeader: string | undefined) {
  if (!languageHeader) return null;
  for (const item of languageHeader.split(",")) {
    const match = item.trim().match(/^[a-z]{2,3}-([a-z]{2})/i);
    const country = normalizeCountry(match?.[1]);
    if (country) return country;
  }
  return null;
}

async function getRates() {
  if (ratesCache && ratesCache.expiresAt > Date.now()) return ratesCache;

  const response = await fetch("https://api.frankfurter.dev/v2/rates?base=USD", {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(1200),
  });
  if (!response.ok) throw new Error(`Exchange rate request failed: ${response.status}`);

  const rows = (await response.json()) as RateRow[];
  const rates: Record<string, number> = {};
  const dates: Record<string, string> = {};
  for (const row of rows) {
    if (/^[A-Z]{3}$/.test(row.quote) && Number.isFinite(row.rate) && row.rate > 0) {
      rates[row.quote] = row.rate;
      dates[row.quote] = row.date;
    }
  }

  const supplementalCurrencies = ["DOP", "PYG", "UYU"];
  if (supplementalCurrencies.some((currency) => !rates[currency])) {
    try {
      const supplementalResponse = await fetch("https://open.er-api.com/v6/latest/USD", {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(1200),
      });
      if (supplementalResponse.ok) {
        const supplemental = (await supplementalResponse.json()) as SupplementalRates;
        if (supplemental.result === "success") {
          for (const currency of supplementalCurrencies) {
            const rate = supplemental.rates?.[currency];
            if (!rates[currency] && Number.isFinite(rate) && Number(rate) > 0) {
              rates[currency] = Number(rate);
              dates[currency] = supplemental.time_last_update_utc?.slice(0, 16) ?? "latest";
            }
          }
        }
      }
    } catch {
      // Keep the safe USD fallback when a supplemental quote is unavailable.
    }
  }

  ratesCache = { rates, dates, expiresAt: Date.now() + RATE_CACHE_TTL_MS };
  return ratesCache;
}

export const getCurrencyContext = createServerFn({ method: "GET" }).handler(
  async (): Promise<CurrencyContext> => {
    const cookieCountry = countryFromCookie(getRequestHeader("cookie"));
    const detectedCountry =
      normalizeCountry(getRequestHeader("cf-ipcountry")) ??
      normalizeCountry(getRequestHeader("x-vercel-ip-country")) ??
      normalizeCountry(getRequestHeader("x-country-code")) ??
      countryFromLanguage(getRequestHeader("accept-language"));
    const country = cookieCountry ?? detectedCountry ?? "US";

    if (!cookieCountry && detectedCountry) {
      setResponseHeader(
        "Set-Cookie",
        `${LOCATION_COOKIE}=${country}; Max-Age=${LOCATION_CACHE_SECONDS}; Path=/; SameSite=Lax; Secure`,
      );
    }

    const currency = currencyForCountry(country);
    if (currency === "USD") return usdFallbackContext(country);

    try {
      const { rates, dates } = await getRates();
      const rate = rates[currency];
      if (!rate) return usdFallbackContext(country);
      return {
        country,
        currency,
        locale: localeForCountry(country),
        rate,
        converted: true,
        rateDate: dates[currency] ?? null,
      };
    } catch {
      return usdFallbackContext(country);
    }
  },
);