import countryToCurrency from "country-to-currency";

export const USD_PRICES = {
  bonuses: [19, 17, 15],
  basic: { original: 37, current: 6.9, savings: 30.1 },
  complete: { original: 67, current: 12.9, savings: 54.1 },
  upsell: { original: 12.9, current: 9.9, difference: 3 },
} as const;

export type CurrencyContext = {
  country: string;
  currency: string;
  locale: string;
  rate: number;
  converted: boolean;
  rateDate: string | null;
};

const LOCAL_CURRENCY_SPREAD = 1.08;

const COUNTRY_CURRENCIES = countryToCurrency as Record<string, string>;

const COUNTRY_LOCALES: Record<string, string> = {
  AR: "es-AR",
  BO: "es-BO",
  BR: "pt-BR",
  BZ: "en-BZ",
  CA: "en-CA",
  CL: "es-CL",
  CO: "es-CO",
  CR: "es-CR",
  DO: "es-DO",
  EC: "es-EC",
  ES: "es-ES",
  GT: "es-GT",
  HN: "es-HN",
  MX: "es-MX",
  PA: "es-PA",
  PE: "es-PE",
  PY: "es-PY",
  SV: "es-SV",
  US: "en-US",
  UY: "es-UY",
};

export function normalizeCountry(value: string | null | undefined) {
  const country = value?.trim().toUpperCase();
  return country && /^[A-Z]{2}$/.test(country) ? country : null;
}

export function currencyForCountry(country: string) {
  if (country === "PA" || country === "EC") return "USD";
  if (country === "DO") return "DOP";
  if (country === "PY") return "PYG";
  if (country === "UY") return "UYU";
  return COUNTRY_CURRENCIES[country] ?? "USD";
}

export function localeForCountry(country: string) {
  return COUNTRY_LOCALES[country] ?? `en-${country}`;
}

export function usdFallbackContext(country = "US"): CurrencyContext {
  return {
    country,
    currency: "USD",
    locale: country === "US" ? "es-US" : localeForCountry(country),
    rate: 1,
    converted: false,
    rateDate: null,
  };
}

export function convertedAmount(usdAmount: number, context: CurrencyContext) {
  if (!context.converted || context.currency === "USD") return usdAmount;
  return Math.ceil(usdAmount * context.rate * LOCAL_CURRENCY_SPREAD);
}

export function formatLocalizedPrice(usdAmount: number, context: CurrencyContext) {
  try {
    return new Intl.NumberFormat(context.locale, {
      style: "currency",
      currency: context.currency,
      currencyDisplay: context.currency === "DOP" ? "symbol" : "narrowSymbol",
    }).format(convertedAmount(usdAmount, context));
  } catch {
    return new Intl.NumberFormat("es-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(usdAmount);
  }
}

export function localizedPriceParts(usdAmount: number, context: CurrencyContext) {
  try {
    return new Intl.NumberFormat(context.locale, {
      style: "currency",
      currency: context.currency,
      currencyDisplay: context.currency === "DOP" ? "symbol" : "narrowSymbol",
    }).formatToParts(convertedAmount(usdAmount, context));
  } catch {
    return [{ type: "literal", value: formatLocalizedPrice(usdAmount, usdFallbackContext()) }];
  }
}