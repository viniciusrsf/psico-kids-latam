import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ApproximatePriceNote, LocalizedPrice } from "@/components/localized-price";
import { getCurrencyContext } from "@/lib/pricing.functions";
import { USD_PRICES, usdFallbackContext } from "@/lib/pricing";

import act001 from "@/assets/actividad-001.webp";
import act002 from "@/assets/actividad-002.webp";
import act003 from "@/assets/actividad-003.webp";
import act004 from "@/assets/actividad-004.webp";
import act005 from "@/assets/actividad-005.webp";
import act006 from "@/assets/actividad-006.webp";
import act007 from "@/assets/actividad-007.webp";
import act008 from "@/assets/actividad-008.webp";
import act009 from "@/assets/actividad-009.webp";
import act010 from "@/assets/actividad-010.webp";
import antesDespues from "@/assets/antes-despues.webp";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import bono1 from "@/assets/bonos_1.webp";
import bono2 from "@/assets/bonos_2.webp";
import bono3 from "@/assets/bonos_3.webp";
import planoBasico from "@/assets/plano_basico.webp";
import planoPremium from "@/assets/plano_premium.webp";
import garantiaSello from "@/assets/garantia-30.webp";
import autoraFoto from "@/assets/autora.webp";
import mockupHero640 from "@/assets/mockup-hero-640.webp";
import mockupHero960 from "@/assets/mockup-hero-960.webp";
const bonoImages = [bono1, bono2, bono3];

const activityImages = [
  { src: act001, title: "Salto Estrella" },
  { src: act002, title: "Saltos de Colores" },
  { src: act003, title: "Carrera en Zigzag" },
  { src: act004, title: "Camino de Animales" },
  { src: act005, title: "Carrera de la Rana" },
  { src: act006, title: "Túnel Aventurero" },
  { src: act007, title: "Islas en Movimiento" },
  { src: act008, title: "Montaña y Valle" },
  { src: act009, title: "Carrera de Cangrejos" },
  { src: act010, title: "Caminata del Gigante" },
];
import {
  Check,
  X,
  Star,
  Info,
  ShieldCheck,
  ChevronDown,
  CreditCard,
  Mail,
  Flame,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): { currency?: string } => ({
    currency: typeof search.currency === "string" ? search.currency : undefined,
  }),
  loaderDeps: ({ search }) => ({ forceUsd: search.currency?.toUpperCase() === "USD" }),
  loader: async ({ deps }) => {
    const currencyContext = deps.forceUsd ? usdFallbackContext() : await getCurrencyContext();
    return {
      currencyContext,
      today: new Intl.DateTimeFormat("es-MX", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "America/Mexico_City",
      }).format(new Date()),
    };
  },
  head: () => ({
    meta: [
      { title: "+200 Actividades de Psicomotricidad Infantil" },
      {
        name: "description",
        content:
          "+200 actividades de psicomotricidad infantil listas para aplicar en solo 5 minutos. Material práctico para maestras, psicopedagogas y familias.",
      },
      { property: "og:title", content: "+200 Actividades de Psicomotricidad Infantil" },
      {
        property: "og:description",
        content:
          "+200 actividades de psicomotricidad infantil listas para aplicar en solo 5 minutos. Material práctico para maestras, psicopedagogas y familias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: mockupHero640,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
  }),
  component: SalesPage,
});

/* ---------------- Small helpers ---------------- */
const CHECKOUT_BASIC = "https://pay.hotmart.com/F106852226O?off=f01tmy2k&checkoutMode=10";
const CHECKOUT_UPSELL = "https://pay.hotmart.com/F106852226O?off=rdf6dqps&checkoutMode=10";
const CHECKOUT_COMPLETO = "https://pay.hotmart.com/F106852226O?off=qrp2nno7&checkoutMode=10";

const CtaButton = ({
  children,
  className = "",
  href = "#planes",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  id?: string;
}) => (
  <a
    href={href}
    id={id}
    className={`gtm-link-click inline-flex items-center justify-center gap-2 rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-extrabold uppercase tracking-wide px-6 py-4 text-sm sm:text-base shadow-lg shadow-green-900/20 touch-manipulation ${className}`}
  >
    {children}
  </a>
);

/* ---------------- Page ---------------- */
function SalesPage() {
  const [showUpsell, setShowUpsell] = useState(false);
  const { currencyContext, today } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden">
      {/* Top red bar */}
      <div className="w-full bg-[#e11d1d] text-white text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider py-2 px-3">
        Oferta especial disponible solo hoy {today}
      </div>

      {/* HERO */}
      <section className="bg-white pt-6 pb-8 sm:pt-8 sm:pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#d5f5d8] text-[#166534] text-[11px] font-bold uppercase px-3 py-1 rounded-full mb-6">
            <ShieldCheck className="w-3.5 h-3.5" /> Compra 100% segura y protegida
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.05] text-slate-900 uppercase">
            +200 Actividades de Psicomotricidad Infantil listas para aplicar
          </h1>

<div className="mt-8 max-w-xl mx-auto">
            <img
              src={mockupHero960}
              srcSet={`${mockupHero640} 640w, ${mockupHero960} 960w`}
              sizes="(max-width: 640px) calc(100vw - 32px), 576px"
              alt="Mockup del pack PsicoMotion Kids con +200 actividades de psicomotricidad infantil"
              width={960}
              height={984}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />
          </div>


          <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Recibe <strong className="text-slate-900">+200 actividades psicomotoras listas para aplicar</strong>,
            organizadas por edad y objetivo pedagógico, con paso a paso completo para estimular{" "}
            <strong className="text-slate-900">coordinación, equilibrio, lateralidad, atención y desarrollo motor</strong>{" "}
            sin tener que crear nada desde cero.
          </p>

          <div className="mt-8">
            <CtaButton id="cta-hero" className="w-full sm:w-auto">QUIERO ACCEDER AHORA</CtaButton>
            <p className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-2 flex-wrap">
              Recibes todo al instante, directo en tu
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                <Mail className="w-4 h-4 text-[#ea4335]" /> correo
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ACTIVIDADES PREVIEW */}
      <section className="deferred-section bg-white py-8 sm:py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-900 mb-10">
            Mira algunas actividades que vas a recibir
          </h2>
          <div
            className="relative overflow-hidden"
            style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
          >
            <div className="flex gap-5 w-max animate-[marquee_45s_linear_infinite]">
              {[...activityImages, ...activityImages].map((a, i) => (
                <div key={i} className="w-[260px] sm:w-[300px] shrink-0 rounded-2xl overflow-hidden shadow-md bg-white ring-1 ring-slate-200">
                  <img src={a.src} alt={a.title} width={620} height={930} loading="lazy" decoding="async" className="w-full h-auto block" />
                </div>
              ))}
            </div>
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </section>

      {/* COMPARACIÓN SIN / CON */}
      <section className="deferred-section bg-white py-8 sm:py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 mb-8">
            Mira la diferencia
          </h2>
          <img
            src={antesDespues}
            alt="Comparación: sin PsicoMotion Kids vs con PsicoMotion Kids"
            width={1280}
            height={854}
            loading="lazy"
            decoding="async"
            className="w-full max-w-5xl mx-auto h-auto rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="deferred-section bg-[#faf6ee] py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 mb-10">
            PsicoMotion Kids es para ti que:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Pasas horas planificando actividades para estimular el desarrollo infantil.",
              "Trabajas con niños con dificultad motora, atención o coordinación.",
              "Estás cansada de repetir siempre las mismas actividades.",
              "Quieres materiales listos para abrir y aplicar de inmediato.",
            ].map((t) => (
              <div
                key={t}
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#e8f7ea] flex items-center justify-center">
                  <Check className="w-5 h-5 text-[#1fa84a]" strokeWidth={3} />
                </div>
                <p className="text-sm text-slate-700 uppercase tracking-wide font-medium leading-relaxed">
                  {t}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">
            Si te identificaste con al menos <strong>2 de estas situaciones</strong>, PsicoMotion Kids es
            exactamente lo que estabas buscando.
          </p>
        </div>
      </section>

      {/* CTA INTERMEDIO */}
      <section className="deferred-section bg-white py-8 sm:py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#faf6ee] rounded-3xl p-8 sm:p-12 text-center">
            <h3 className="text-xl sm:text-3xl font-black uppercase text-slate-900 leading-tight">
              ¿Cuántos niños aún dejan de evolucionar por falta de estímulos correctos?
            </h3>
            <p className="mt-3 text-slate-600 text-sm">Aprovecha esta oferta por tiempo limitado.</p>
            <div className="mt-6">
              <CtaButton id="cta-intermedio">Quiero acceder ahora y estimular con seguridad</CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="deferred-section bg-[#faf6ee] py-8 sm:py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-xl sm:text-3xl font-black uppercase text-slate-900 mb-8">
            Mira lo que dicen quienes ya lo usaron
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { n: "María Hernández", t: "Por fin encontré actividades realmente listas. Ahorré horas de planeación.", img: testimonial1 },
              { n: "Valentina Ramírez", t: "Los niños quedaron mucho más enganchados y ya noté evolución motora.", img: testimonial2 },
              { n: "Sofía Gutiérrez", t: "Lo uso en la clínica y en la escuela. Material sumamente práctico.", img: testimonial3 },
              { n: "Camila Restrepo", t: "Hasta los niños con más dificultad participaron súper bien.", img: testimonial4 },
            ].map((r) => (
              <div key={r.n} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4">
                <img
                  src={r.img}
                  alt={r.n}
                  loading="lazy"
                  decoding="async"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex text-yellow-500 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-sm text-slate-700">"{r.t}"</p>
                  <p className="mt-2 text-xs font-bold uppercase text-slate-900">{r.n}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONOS */}
      <section className="deferred-section bg-white py-10 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 mb-2 flex items-center justify-center flex-wrap gap-3">
            Además recibes
            <span className="inline-flex items-center gap-1.5 bg-[#e11d1d] text-white text-sm sm:text-base rounded-full px-4 py-1.5">
              <Flame className="w-4 h-4" /> +3 Bonos exclusivos
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                n: "Bono #1",
                t: "Planificación Psicomotora Anual",
                d: "Sabrás exactamente qué aplicar durante todo el año.",
                v: USD_PRICES.bonuses[0],
              },
              {
                n: "Bono #2",
                t: "Guía de Hitos del Desarrollo",
                d: "Entiende qué necesita desarrollar cada rango de edad.",
                v: USD_PRICES.bonuses[1],
              },
              {
                n: "Bono #3",
                t: "Ficha de Evaluación Psicomotora",
                d: "Evalúa la evolución del niño con criterios claros.",
                v: USD_PRICES.bonuses[2],
              },
            ].map((b, i) => (
              <div key={b.n} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">{b.n}</div>
                <div className="mt-4 aspect-square flex items-center justify-center">
                  <img src={bonoImages[i]} alt={b.t} width={640} height={640} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <h3 className="mt-5 text-base font-black text-slate-900">{b.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{b.d}</p>
                <p className="mt-4 text-sm">
                  <span className="line-through text-[#e11d1d] font-bold">
                    Valor: <LocalizedPrice usd={b.v} context={currencyContext} />
                  </span>{" "}
                  <span className="text-[#1fa84a] font-black">GRATIS</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="deferred-section bg-white py-10 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-slate-900 mb-12">
            Elige la opción ideal para ti
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* BÁSICO */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col shadow-sm">
              <div className="text-center">
                <h3 className="text-xl font-black uppercase text-slate-900">Plan Básico</h3>
                <p className="text-xs text-slate-500 mt-1">PsicoMotion Kids</p>
              </div>
              <div className="mt-6">
                <img src={planoBasico} alt="Plan Básico 50 actividades" width={860} height={860} loading="lazy" decoding="async" className="w-full max-w-[250px] mx-auto aspect-square object-contain" />
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                {[
                  "50 actividades psicomotoras",
                  "Acceso de por vida",
"Garantía de 30 días",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-slate-400">
                  <X className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Sin bonos</span>
                </li>
              </ul>

<div className="mt-auto pt-6 text-center border-t border-slate-100 mt-6">
<p className="text-sm line-through text-[#e11d1d] font-bold">De <LocalizedPrice usd={USD_PRICES.basic.original} context={currencyContext} /></p>
                <LocalizedPrice
                  usd={USD_PRICES.basic.current}
                  context={currencyContext}
                  className="block text-5xl font-black text-[#1fa84a] leading-none"
                  fractionClassName="text-2xl align-top"
                />
                <p className="text-xs text-[#1fa84a] font-semibold mt-1">Ahorras <LocalizedPrice usd={USD_PRICES.basic.savings} context={currencyContext} /></p>
                <ApproximatePriceNote context={currencyContext} />
                <div className="mt-2 inline-flex items-center gap-1.5 bg-[#fff7ed] text-[#9a3412] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                  <Info className="w-3.5 h-3.5" />
                  El valor se convertirá a tu moneda local al momento del pago.
                </div>
                <a
                  href={CHECKOUT_BASIC}
                  id="cta-plan-basico"
                  className="gtm-link-click mt-5 block w-full rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-black uppercase tracking-wide py-4 text-sm touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowUpsell(true);
                  }}
                >
                  Quiero el Plan Básico
                </a>
                <p className="text-[11px] text-slate-500 mt-4">
                  92% de las personas aprovechan la oferta de al lado:
                </p>
                <div className="mt-2 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#1fa84a] text-white flex items-center justify-center animate-bounce">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* COMPLETO */}
            <div className="relative rounded-3xl border-2 border-[#f5b301] bg-white p-6 sm:p-8 flex flex-col shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-[#1fa84a] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  ✓ Más vendido
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-black uppercase text-slate-900">Plan Completo</h3>
                <p className="text-xs text-slate-500 mt-1">Todo incluido + Bonos</p>
              </div>
              <div className="mt-6">
                <img src={planoPremium} alt="Plan Completo +200 actividades + bonos" width={853} height={1280} loading="lazy" decoding="async" className="w-full aspect-square object-contain" />
              </div>

              <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                {[
                  "Todo del Básico",
                  "+200 actividades psicomotoras listas",
                  "Coordinación gruesa y fina",
                  "Equilibrio y propiocepción",
                  "Lateralidad y noción espacial",
                  "Atención y respuesta motora",
                  "Organizado por edad",
"Acceso de por vida",
"Garantía de 30 días",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🎁</span>
                  <span>Bono #1 Planificación Psicomotora Anual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🎁</span>
                  <span>Bono #2 Guía de Hitos del Desarrollo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-base leading-none">🎁</span>
                  <span>Bono #3 Ficha de Evaluación Psicomotora</span>
                </li>
              </ul>

<div className="mt-auto pt-6 text-center border-t border-slate-100 mt-6">
<p className="text-sm line-through text-[#e11d1d] font-bold">De <LocalizedPrice usd={USD_PRICES.complete.original} context={currencyContext} /> por</p>
                <LocalizedPrice
                  usd={USD_PRICES.complete.current}
                  context={currencyContext}
                  className="block text-5xl font-black text-[#1fa84a] leading-none"
                  fractionClassName="text-2xl align-top"
                />
                <p className="text-xs text-[#1fa84a] font-semibold mt-1">Ahorras <LocalizedPrice usd={USD_PRICES.complete.savings} context={currencyContext} /></p>
                <ApproximatePriceNote context={currencyContext} />
                <div className="mt-2 inline-flex items-center gap-1.5 bg-[#fff7ed] text-[#9a3412] text-[11px] font-semibold px-3 py-1.5 rounded-full">
                  <Info className="w-3.5 h-3.5" />
                  El valor se convertirá a tu moneda local al momento del pago.
                </div>
                <a
                  href={CHECKOUT_COMPLETO}
                  id="cta-plan-completo"
                  className="gtm-link-click mt-5 block w-full rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-black uppercase tracking-wide py-4 text-sm touch-manipulation"
                >
                  Quiero el Plan Completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* GARANTÍA */}
      <section className="deferred-section bg-[#faf6ee] py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
<img src={garantiaSello} alt="30 días de garantía" width={180} height={180} loading="lazy" decoding="async" className="w-44 h-44 object-contain drop-shadow-xl rounded-2xl" />
          </div>
<h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900">Garantía de 30 días</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Tienes 30 días de garantía total. Si no te gusta, te devolvemos el 100% del valor. Sin burocracia.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Si por cualquier motivo consideras que este material no es para ti, solo pide el reembolso dentro
            de los 30 días y te devolvemos cada centavo.
          </p>
        </div>
      </section>

      {/* PASOS */}
      <section className="deferred-section bg-white py-10 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-xl sm:text-3xl font-black uppercase text-slate-900 mb-10">
            Compra ahora y recibe tu acceso en el correo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { i: <CreditCard className="w-6 h-6 text-[#3b82f6]" />, t: "Haz tu compra", d: "Finaliza tu pedido de forma segura." },
              { i: <Mail className="w-6 h-6 text-[#e11d1d]" />, t: "Recibe el material", d: "Acceso inmediato por correo y WhatsApp." },
              { i: <CheckCircle2 className="w-6 h-6 text-[#1fa84a]" />, t: "Aplícalo hoy mismo", d: "Abre, elige la actividad y aplícala en minutos." },
            ].map((s) => (
              <div key={s.t} className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-slate-100 mx-auto flex items-center justify-center">
                  {s.i}
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{s.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTORA */}
      <section className="deferred-section bg-white py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900">
              Conoce a Nuestra Mentora
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm ring-1 ring-slate-200 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-10 items-center">
            <div className="mx-auto md:mx-0 flex justify-center">
              <img
                src={autoraFoto}
                alt="Dra. Lucía Mendoza, especialista en neurodesarrollo infantil"
                width={700}
                height={700}
                loading="lazy"
                decoding="async"
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Referente en desarrollo infantil, cuenta con más de 20 años de experiencia en la
                intersección entre neurociencia, psicomotricidad clínica y estimulación sensorial.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Creó PsicoMotion Kids con un propósito claro: transformar la comprensión del
                neurodesarrollo infantil mediante un enfoque rigurosamente científico, estructurado e
                integral. Su labor acompaña a familias y terapeutas a derribar barreras motoras,
                conductuales y de atención, fortaleciendo la confianza y la autonomía de cada niño a
                través del movimiento consciente.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-lg sm:text-xl font-black text-slate-900">Dra. Lucía Mendoza</p>
                <p className="text-xs sm:text-sm font-semibold text-[#6d28d9] mt-1">
                  Especialista en Neurodesarrollo Infantil y Fundadora de PsicoMotion Kids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="deferred-section bg-white py-10 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black uppercase text-slate-900 mb-8">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {[
              { q: "¿Necesito tener experiencia?", a: "No. El material fue creado tanto para principiantes como para profesionales." },
              { q: "¿Funciona en el celular?", a: "Sí, puedes usarlo en celular, tablet o computadora." },
              { q: "¿Necesito muchos materiales?", a: "No. La mayoría usa objetos comunes que ya tienes en casa o en la escuela." },
              { q: "¿Cómo recibo el acceso?", a: "Al instante por correo y WhatsApp después de la confirmación del pago." },
              { q: "¿El acceso es de por vida?", a: "Sí. Compras una vez y accedes para siempre, incluidas las actualizaciones." },
              { q: "¿Para qué edades sirve?", a: "Actividades organizadas para niños de 2 a 10 años, con adaptaciones por edad." },
              { q: "¿Tiene garantía?", a: "Sí, 30 días de garantía total. Si no te gusta, te devolvemos el 100%." },
            ].map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-slate-200 rounded-full open:rounded-2xl px-5 py-3 shadow-sm"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm font-semibold text-slate-900">
                  {f.q}
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-slate-500" />
                </summary>
                <p className="mt-3 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="deferred-section bg-white py-10 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900">Empieza ahora</h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Deja de perder horas planificando estímulos motores desde cero. Ten actividades validadas, listas
            para aplicar y observa evolución real en los niños.
          </p>
          <div className="mt-8">
            <CtaButton id="cta-final">
              Quiero el Plan Premium
            </CtaButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center text-xs leading-relaxed">
        <p>Este material es educativo y de apoyo pedagógico.</p>
        <p className="mt-2">
          La evolución infantil depende de la aplicación consistente e individual de cada profesional.
        </p>
        <p className="mt-2">
          La reproducción no autorizada de esta publicación, total o parcial, por cualquier medio, constituye
          una violación de los derechos de autor.
        </p>
        <p className="mt-6 text-slate-500">© {new Date().getFullYear()} PsicoMotion Kids. Todos los derechos reservados.</p>
      </footer>

      {/* UPSELL MODAL */}
      {showUpsell && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-3 sm:p-4 animate-in fade-in"
          onClick={() => setShowUpsell(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-[20rem] w-full max-h-[88dvh] overflow-hidden p-3 sm:p-3.5 shadow-2xl border-4 border-[#f5b301]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowUpsell(false)}
              className="absolute top-1 right-1 w-5 h-5 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600"
              aria-label="Cerrar"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="text-center">
              <span className="inline-flex items-center gap-1 bg-[#e11d1d] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                <Flame className="w-2.5 h-2.5" /> Oferta única
              </span>
              <h3 className="mt-1.5 text-base sm:text-lg font-black uppercase text-slate-900 leading-tight">
                Plan Completo con descuento
              </h3>

              <div className="mt-2 rounded-xl bg-[#faf6ee] p-2">
                <p className="text-[10px] text-slate-500 line-through">Antes <LocalizedPrice usd={USD_PRICES.upsell.original} context={currencyContext} /></p>
                <LocalizedPrice
                  usd={USD_PRICES.upsell.current}
                  context={currencyContext}
                  className="block text-2xl font-black text-[#1fa84a] leading-none mt-0.5"
                  fractionClassName="text-base align-top"
                />
                <ApproximatePriceNote context={currencyContext} />
                <p className="text-[10px] text-slate-500 mt-0.5">acceso de por vida</p>
              </div>

              <p className="mt-2 text-xs font-black text-[#f5b301] uppercase tracking-wide">
                Por solo <LocalizedPrice usd={USD_PRICES.upsell.difference} context={currencyContext} /> más lleva el Plan Completo
              </p>

              <ul className="mt-1.5 space-y-0 text-[10px] text-slate-700 text-left">
                {[
                  "+200 actividades psicomotoras",
                  "Bono #1 Planificación Anual",
                  "Bono #2 Guía de Hitos",
                  "Bono #3 Ficha de Evaluación",
                  "Garantía de 30 días",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_UPSELL}
                id="cta-upsell-completo"
                className="gtm-link-click mt-2 block w-full rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-black uppercase tracking-wide py-3 text-[11px] touch-manipulation"
              >
                Sí, quiero el Plan Completo por <LocalizedPrice usd={USD_PRICES.upsell.current} context={currencyContext} />
              </a>
              <a
                href={CHECKOUT_BASIC}
                id="cta-upsell-basico"
                className="gtm-link-click mt-1.5 inline-flex items-center justify-center w-full rounded-md bg-[#f97316] hover:bg-[#ea580c] active:scale-[0.98] transition text-white font-bold uppercase tracking-wide py-1.5 text-[9px] touch-manipulation"
              >
                No gracias, seguir con el Básico por <LocalizedPrice usd={USD_PRICES.basic.current} context={currencyContext} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
