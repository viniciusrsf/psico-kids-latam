import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import act001 from "@/assets/PsicoMotion-IT-01.webp";
import act002 from "@/assets/PsicoMotion-IT-02.webp";
import act003 from "@/assets/PsicoMotion-IT-03.webp";
import act004 from "@/assets/PsicoMotion-IT-04.webp";
import act005 from "@/assets/PsicoMotion-IT-05.webp";
import act006 from "@/assets/PsicoMotion-IT-06.webp";
import act007 from "@/assets/PsicoMotion-IT-07.webp";
import act008 from "@/assets/PsicoMotion-IT-08.webp";
import act009 from "@/assets/PsicoMotion-IT-09.webp";
import act010 from "@/assets/PsicoMotion-IT-10.webp";
import antesDespues from "@/assets/antes-depois-it.webp";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import bono1 from "@/assets/bono-1-it.webp";
import bono2 from "@/assets/bono-2-it.webp";
import bono3 from "@/assets/bono-3-it.webp";
import planoBasico from "@/assets/plano-base-it.webp";
import planoPremium from "@/assets/plano-completo-it.webp";
import garantiaSello from "@/assets/garantia-it.webp";
import autoraFoto from "@/assets/autora.webp";
import mockupHero from "@/assets/hero-it.webp";

import {
  Check,
  X,
  Star,
  ShieldCheck,
  ChevronDown,
  CreditCard,
  Mail,
  Flame,
  CheckCircle2,
  FileText,
  Users,
  Box,
  Layers,
  Sparkles,
  ArrowRight,
  Target,
} from "lucide-react";

const bonoImages = [bono1, bono2, bono3];

const activityImages = [
  { src: act001, title: "Salto a stella" },
  { src: act002, title: "Salti tra i colori" },
  { src: act003, title: "Corsa a zig-zag" },
  { src: act004, title: "Il percorso degli animali" },
  { src: act005, title: "La corsa della rana" },
  { src: act006, title: "Il tunnel dell’avventura" },
  { src: act007, title: "Isole in movimento" },
  { src: act008, title: "Montagna e valle" },
  { src: act009, title: "La corsa dei granchi" },
  { src: act010, title: "La camminata del gigante" },
];

export const Route = createFileRoute("/it")({
  loader: async () => ({
    today: new Intl.DateTimeFormat("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Europe/Rome",
    }).format(new Date()),
  }),
  head: () => ({
    meta: [
      { title: "+200 Attività Psicomotorie Infantili Pronte da Proporre | PsicoMotion Kids" },
      {
        name: "description",
        content:
          "Riduci le ore di programmazione: oltre 200 attività psicomotorie pronte da proporre a scuola e in studio. Schede pratiche in PDF per insegnanti ed educatori.",
      },
      {
        property: "og:title",
        content: "+200 Attività Psicomotorie Infantili Pronte da Proporre",
      },
      {
        property: "og:description",
        content:
          "Raccolta strutturata per fascia d'età e obiettivo pedagogico. Formato PDF stampabile, download immediato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: mockupHero,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
  }),
  component: ItalianSalesPage,
});

/* ---------------- Checkout Links ---------------- */
const CHECKOUT_BASIC = "https://pay.hotmart.com/S108152248Q?off=s17k1lp6";
const CHECKOUT_UPSELL = "https://pay.hotmart.com/S108152248Q?off=myxmuntt";
const CHECKOUT_COMPLETO = "https://pay.hotmart.com/S108152248Q?off=uv9t0mmj";

const CtaButton = ({
  children,
  className = "",
  href = "#pacchetti",
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

/* ---------------- Main Page Component ---------------- */
function ItalianSalesPage() {
  const [showUpsell, setShowUpsell] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden font-sans">
      {/* 1. BARRA SUPERIORE */}
      <div className="w-full bg-[#1e293b] text-white text-center text-[11px] sm:text-xs font-bold tracking-wide py-2.5 px-3">
        Pensato per insegnanti, educatori e professionisti dell’età evolutiva.
      </div>

      {/* 2. HERO SECTION */}
      <section className="bg-white pt-6 pb-8 sm:pt-10 sm:pb-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#d5f5d8] text-[#166534] text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" /> Risorse didattiche digitali · Download istantaneo in PDF · Pagamento protetto al 100%
          </span>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.08] text-slate-900">
            Riduci le ore di programmazione: oltre 200 attività psicomotorie pronte da proporre a scuola e in studio
          </h1>

          {/* Mockup */}
          <div className="mt-8 max-w-xl mx-auto">
            <img
              src={mockupHero}
              alt="Raccolta PsicoMotion Kids con oltre 200 attività psicomotorie per bambini"
              width={960}
              height={984}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />
          </div>

          {/* Sottotitolo */}
          <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Una raccolta strutturata per fascia d'età e obiettivo pedagogico, con schede passo dopo passo per stimolare{" "}
            <strong className="text-slate-900">coordinazione, equilibrio, lateralità, orientamento spaziale e attenzione</strong>{" "}
            — senza dover inventare ogni laboratorio da zero.
          </p>

          {/* CTA Principale */}
          <div className="mt-8">
            <CtaButton id="cta-hero-it" className="w-full sm:w-auto">
              VOGLIO ACCEDERE ALLA RACCOLTA
            </CtaButton>
            <p className="mt-4 text-xs text-slate-500 max-w-md mx-auto leading-normal">
              Accesso immediato via e-mail dopo la conferma · Formato PDF stampabile · Garanzia di rimborso di 30 giorni
            </p>
          </div>
        </div>
      </section>

      {/* 3. ANTEPRIMA DELLE ATTIVITÀ (Marquee slider) */}
      <section className="bg-slate-50 py-10 sm:py-16 px-4 border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
            Alcuni esempi di schede pratiche incluse nella raccolta:
          </h2>
          <p className="text-sm text-slate-500 mb-8 max-w-xl mx-auto">
            Esempi estratti dal materiale didattico. Il contenuto varia in base al pacchetto scelto.
          </p>

          <div
            className="relative overflow-hidden"
            style={{
              maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div className="flex gap-4 sm:gap-5 w-max animate-[marquee_45s_linear_infinite]">
              {[...activityImages, ...activityImages].map((a, i) => (
                <div
                  key={i}
                  className="w-[220px] sm:w-[270px] shrink-0 rounded-2xl overflow-hidden shadow-md ring-1 ring-slate-200/80 bg-white"
                >
                  <img
                    src={a.src}
                    alt={a.title}
                    width={620}
                    height={930}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
              ))}
            </div>
          </div>
          <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
        </div>
      </section>

      {/* 4. ANATOMIA DI UNA SCHEDA TIPO */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#166534] bg-[#d5f5d8] px-3 py-1 rounded-full">
              Struttura Chiara & Immediata
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3">
              Cosa trovi all'interno di ogni scheda operativa
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Progettata per essere consultata in 30 secondi prima dell'inizio della lezione.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Target className="w-5 h-5 text-[#1fa84a]" />,
                title: "Obiettivo psicomotorio specifico",
                desc: "Motricità globale o fine, schema corporeo, coordinazione oculo-manuale, equilibrio o autoregolazione.",
              },
              {
                icon: <Users className="w-5 h-5 text-[#3b82f6]" />,
                title: "Fascia d'età consigliata",
                desc: "Indicazioni dai 2 ai 10 anni con varianti per semplificare o aumentare la complessità del gioco.",
              },
              {
                icon: <Box className="w-5 h-5 text-[#f59e0b]" />,
                title: "Materiali necessari",
                desc: "Oggetti di uso comune già reperibili a scuola o in studio (nastro adesivo, palline, cerchi, cuscini).",
              },
              {
                icon: <FileText className="w-5 h-5 text-[#8b5cf6]" />,
                title: "Istruzioni passo dopo passo",
                desc: "Spiegazioni chiare e sintetiche, pronte da consultare rapidamente prima o durante l'attività.",
              },
              {
                icon: <Layers className="w-5 h-5 text-[#ec4899]" />,
                title: "Gestione del contesto",
                desc: "Suggerimenti per adattare l'esercizio a grandi gruppi classe, piccoli laboratori o sedute individuali.",
              },
              {
                icon: <Sparkles className="w-5 h-5 text-[#1fa84a]" />,
                title: "Pronta all'uso",
                desc: "Stampa le schede nei formati standard oppure visualizzale comodamente su smartphone e tablet.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONFRONTO: LA TUA GIORNATA LAVORATIVA */}
      <section className="bg-[#faf6ee] py-12 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              Dalle idee sparse sul web a una programmazione strutturata
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Guarda come cambia la tua quotidianità didattica:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Colonna 1: Senza */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-6 text-red-600 font-black text-base uppercase">
                <X className="w-6 h-6 p-1 rounded-full bg-red-100 text-red-600" />
                Quando prepari tutto da zero
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                {[
                  "Ore serali e weekend trascorsi a cercare spunti disorganizzati su blog e social media.",
                  "Fatica nel variare le proposte settimanali con il rischio di ripetere sempre gli stessi schemi.",
                  "Difficoltà ad adattare rapidamente il gioco quando il gruppo manifesta cali di attenzione.",
                  "Assenza di strumenti pratici per monitorare l'evoluzione motoria dei bambini.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonna 2: Con PsicoMotion Kids */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#1fa84a] shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-6 text-[#1fa84a] font-black text-base uppercase">
                <Check className="w-6 h-6 p-1 rounded-full bg-emerald-100 text-[#1fa84a]" />
                Con PsicoMotion Kids
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                {[
                  "Un archivio completo e pronto all'uso, ordinato per fascia d'età e obiettivo educativo.",
                  "Fiches pratiche da stampare o aprire su tablet e smartphone in pochi secondi.",
                  "Attività calibrate per favorire l'inclusione di ogni bambino, anche con fragilità attentive o motorie.",
                  "Più tempo libero per te e meno stress nella preparazione delle lezioni.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span className="font-medium text-slate-900">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Immagine prima/dopo */}
          <div className="mt-10 text-center">
            <img
              src={antesDespues}
              alt="Confronto visivo prima e dopo l'adozione di PsicoMotion Kids"
              width={1280}
              height={854}
              loading="lazy"
              decoding="async"
              className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 6. A CHI È RIVOLTO */}
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">
            Questo materiale è pensato per te se:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Sei un’insegnante della scuola dell'infanzia o primaria e vuoi ridurre i tempi di preparazione didattica.",
              "Sei un educatore o un professionista dell’età evolutiva (terapista, psicomotricista) alla ricerca di attività strutturate.",
              "Lavori con bambini che mostrano difficoltà di coordinazione motoria, orientamento spaziale o concentrazione.",
              "Desideri una risorsa flessibile, da consultare in aula, in palestra, in studio o da consigliare alle famiglie.",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-full bg-[#e8f7ea] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#1fa84a]" strokeWidth={3} />
                </div>
                <p className="text-sm text-slate-800 font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIANZE / PROVA SOCIALE */}
      <section className="bg-[#faf6ee] py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-900 mb-8">
            L'esperienza di chi utilizza già le schede operative
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                n: "Martina Moretti",
                role: "Insegnante scuola dell'infanzia",
                t: "Finalmente una raccolta davvero pratica e pronta da stampare. Ho risparmiato ore di programmazione didattica per la mia sezione.",
                img: testimonial1,
              },
              {
                n: "Federica Lombardi",
                role: "Educatrice",
                t: "I bambini partecipano con grande entusiasmo e ho riscontrato miglioramenti evidenti nella coordinazione e nell'equilibrio.",
                img: testimonial2,
              },
              {
                n: "Elena Marchetti",
                role: "Terapista dell'età evolutiva",
                t: "Lo utilizzo sia nei laboratori a scuola sia nelle sedute individuali. Schede sintetiche, chiare e ricche di varianti.",
                img: testimonial3,
              },
              {
                n: "Sara Ricci",
                role: "Insegnante di sostegno",
                t: "Anche gli alunni con maggiore agitazione motoria e difficoltà attentive sono riusciti a seguire le attività con continuità.",
                img: testimonial4,
              },
            ].map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex gap-4">
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
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-sm text-slate-700 leading-relaxed">"{r.t}"</p>
                  <p className="mt-2 text-xs font-bold text-slate-900">{r.n}</p>
                  <p className="text-[11px] text-slate-500">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Nota: Testimonianze tradotte dall'originale. Le esperienze riportate riflettono percorsi individuali.
          </p>
        </div>
      </section>

      {/* 8. RISORSE AGGIUNTIVE (BONUS) */}
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 flex items-center justify-center flex-wrap gap-2">
            3 Risorse extra incluse gratuitamente nel
            <span className="inline-flex items-center gap-1.5 bg-[#e11d1d] text-white text-sm sm:text-base rounded-full px-3.5 py-1">
              <Flame className="w-4 h-4" /> Pacchetto Completo
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                n: "Bonus 1",
                t: "Piano di Programmazione Psicomotoria Annuale",
                d: "Una traccia organizzata per distribuire le competenze motorie lungo l'intero anno scolastico, facilitando il raccordo con la pianificazione didattica.",
                v: "19,00 €",
              },
              {
                n: "Bonus 2",
                t: "Guida alle Tappe dello Sviluppo Motorio",
                d: "Uno schema di orientamento per identificare i traguardi evolutivi attesi nelle diverse fasce d'età e calibrare le attività sulle reali capacità del gruppo.",
                v: "17,00 €",
              },
              {
                n: "Bonus 3",
                t: "Scheda di Osservazione delle Abilità Motorie",
                d: "Una griglia pratica per annotare i progressi dei bambini, utile sia per la verifica educativa interna sia per il confronto con colleghi e famiglie.",
                v: "15,00 €",
              },
            ].map((b, i) => (
              <div key={b.n} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center flex flex-col">
                <div className="text-xs font-bold uppercase text-slate-500 tracking-wider">{b.n}</div>
                <div className="mt-4 aspect-square flex items-center justify-center">
                  <img
                    src={bonoImages[i]}
                    alt={b.t}
                    width={640}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="mt-5 text-base font-black text-slate-900 leading-snug">{b.t}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed grow">{b.d}</p>
                <p className="mt-4 pt-3 border-t border-slate-100 text-sm">
                  <span className="line-through text-[#e11d1d] font-bold">Valore: {b.v}</span>{" "}
                  <span className="text-[#1fa84a] font-black ml-1">INCLUSO GRATIS</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TABELLA OFFERTA E PREZZI */}
      <section id="pacchetti" className="bg-slate-50 py-12 sm:py-20 px-4 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl sm:text-4xl font-black text-slate-900 mb-3">
            Scegli la raccolta più adatta alla tua attività
          </h2>
          <p className="text-center text-sm text-slate-600 mb-12">
            Accesso a vita senza abbonamento · Garanzia di rimborso 30 giorni
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-stretch pt-4 sm:pt-6">
            {/* OPZIONE 1: Pacchetto Base */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col shadow-sm">
              <div className="text-center">
                <h3 className="text-xl font-black uppercase text-slate-900">Pacchetto Base</h3>
                <p className="text-xs text-slate-500 mt-1">Per iniziare con una selezione essenziale</p>
              </div>
              <div className="mt-5">
                <img
                  src={planoBasico}
                  alt="Pacchetto Base 50 attività psicomotorie"
                  width={860}
                  height={860}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[160px] sm:max-w-[190px] mx-auto aspect-square object-contain"
                />
              </div>

              <ul className="mt-6 space-y-2.5 text-sm text-slate-700">
                {[
                  "50 attività psicomotorie dettagliate",
                  "Formato PDF stampabile e compatibile con tutti gli schermi (smartphone, tablet, PC)",
                  "Accesso a vita senza limiti di tempo",
                  "Garanzia totale di 30 giorni",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-slate-400">
                  <X className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Le 3 risorse aggiuntive non sono incluse</span>
                </li>
              </ul>

              <div className="mt-auto pt-6 text-center border-t border-slate-100">
                <p className="text-sm line-through text-[#e11d1d] font-bold">Da 37,00 € a</p>
                <div className="block text-8xl sm:text-9xl font-black text-[#1fa84a] leading-none my-2 tracking-tighter">
                  12 <span className="text-5xl sm:text-6xl align-top">€</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1fa84a] font-bold">Pagamento unico · Risparmi 25,00 €</p>

                <a
                  href={CHECKOUT_BASIC}
                  id="cta-pacchetto-base-it"
                  className="gtm-link-click mt-5 block w-full rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-black uppercase tracking-wide py-4 text-sm touch-manipulation shadow-md"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowUpsell(true);
                  }}
                >
                  ACQUISTA IL PACCHETTO BASE
                </a>
                <p className="text-[11px] text-slate-500 mt-4">
                  Il 92% di insegnanti ed educatori sceglie il Pacchetto Completo a fianco:
                </p>
                <div className="mt-2 flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#1fa84a] text-white flex items-center justify-center animate-bounce">
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* OPZIONE 2: Pacchetto Completo */}
            <div className="relative rounded-3xl border-2 border-[#f5b301] bg-white p-6 sm:p-8 flex flex-col shadow-xl mt-4 lg:mt-0">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-[92%] max-w-sm text-center z-10 pointer-events-none">
                <span className="inline-block bg-[#1fa84a] text-white text-[10.5px] sm:text-xs font-black uppercase px-3.5 py-1.5 rounded-full shadow-md leading-tight tracking-wide border border-white/20">
                  ✓ Scelto dal 92% di insegnanti ed educatori
                </span>
              </div>
              <div className="text-center mt-3 sm:mt-2">
                <h3 className="text-xl font-black uppercase text-slate-900">Pacchetto Completo</h3>
                <p className="text-xs text-slate-500 mt-1">La raccolta operativa definitiva per tutto l'anno scolastico</p>
              </div>
              <div className="mt-5">
                <img
                  src={planoPremium}
                  alt="Pacchetto Completo oltre 200 attività psicomotorie con bonus"
                  width={853}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-w-[420px] sm:max-w-[480px] mx-auto aspect-square object-contain drop-shadow-2xl"
                />
              </div>

              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {[
                  "Tutte le attività del Pacchetto Base incluse",
                  "Oltre 200 attività psicomotorie guidate passo dopo passo",
                  "Schede su motricità globale, motricità fine ed equilibrio",
                  "Attività su lateralità, orientamento spazio-temporale e coordinazione oculo-manuale",
                  "Esercizi di modulazione del tono e risposta motoria",
                  "Organizzazione completa per fascia d'età (dai 2 ai 10 anni)",
                  "Accesso a vita con download illimitato e futuri aggiornamenti inclusi",
                  "Garanzia totale di 30 giorni",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 font-medium text-slate-900 pt-1">
                  <span className="text-base leading-none">🎁</span>
                  <span>Bonus 1: Piano di Programmazione Psicomotoria Annuale</span>
                </li>
                <li className="flex items-start gap-2 font-medium text-slate-900">
                  <span className="text-base leading-none">🎁</span>
                  <span>Bonus 2: Guida alle Tappe dello Sviluppo Motorio</span>
                </li>
                <li className="flex items-start gap-2 font-medium text-slate-900">
                  <span className="text-base leading-none">🎁</span>
                  <span>Bonus 3: Scheda di Osservazione delle Abilità Motorie</span>
                </li>
              </ul>

              <div className="mt-auto pt-6 text-center border-t border-slate-100">
                <p className="text-sm line-through text-[#e11d1d] font-bold">Da 67,00 € a</p>
                <div className="block text-8xl sm:text-9xl font-black text-[#1fa84a] leading-none my-2 tracking-tighter">
                  19 <span className="text-5xl sm:text-6xl align-top">€</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1fa84a] font-bold">Pagamento unico · Risparmi 48,00 €</p>

                <a
                  href={CHECKOUT_COMPLETO}
                  id="cta-pacchetto-completo-it"
                  className="gtm-link-click mt-5 block w-full rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-black uppercase tracking-wide py-4 text-sm touch-manipulation shadow-md"
                >
                  ACQUISTA IL PACCHETTO COMPLETO
                </a>
                <p className="text-[11px] text-slate-500 mt-3 italic">
                  Al costo equivalente di una pizza margherita, hai a disposizione un archivio che ti farà risparmiare decine di ore di lavoro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GARANZIA E MODALITÀ DI ACCESSO */}
      <section className="bg-[#faf6ee] py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src={garantiaSello}
              alt="Garanzia di 30 giorni"
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
              className="w-56 h-56 sm:w-72 sm:h-72 object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Prova il materiale in classe o in studio per 30 giorni
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Prenditi un mese intero per applicare le schede con i tuoi alunni o pazienti. Se ritieni che il materiale non risponda alle tue esigenze professionali, richiedi il rimborso completo entro 30 giorni dall'acquisto. Senza moduli complessi, basta un messaggio.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              {
                num: "1",
                icon: <CreditCard className="w-5 h-5 text-blue-600" />,
                title: "Concludi l'ordine",
                desc: "Transazione sicura e crittografata al 100%.",
              },
              {
                num: "2",
                icon: <Mail className="w-5 h-5 text-red-600" />,
                title: "Ricevi l'accesso immediato",
                desc: "Link di download inviato direttamente alla tua casella e-mail.",
              },
              {
                num: "3",
                icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
                title: "Utilizza le schede",
                desc: "Consulta il PDF da tablet/PC oppure stampa le fiches da portare direttamente sul campo.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center mb-3">
                  {step.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                <p className="mt-1 text-xs text-slate-600 leading-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CHI HA IDEATO IL PROGETTO */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Un supporto operativo nato dall'esperienza sul campo
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm ring-1 ring-slate-200 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-10 items-center">
            <div className="mx-auto md:mx-0 flex justify-center">
              <img
                src={autoraFoto}
                alt="Dott.ssa Anna Bianchi, esperta in neurosviluppo infantile"
                width={700}
                height={700}
                loading="lazy"
                decoding="async"
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                PsicoMotion Kids nasce dall'esperienza ventennale della Dott.ssa Anna Bianchi nell'osservazione dello sviluppo infantile e della stimolazione motoria e sensoriale.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Il progetto risponde a un'esigenza sentita da docenti ed educatori: disporre di schede pratiche, chiare e prive di formalismi inutili, capaci di sostenere la coordinazione, l'autonomia e la fiducia corporea di ogni bambino attraverso il gioco guidato.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-lg sm:text-xl font-black text-slate-900">Dott.ssa Anna Bianchi</p>
                <p className="text-xs sm:text-sm font-semibold text-[#6d28d9] mt-1">
                  Specialista in Neurosviluppo Infantile e Fondatrice di PsicoMotion Kids
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. DOMANDE FREQUENTI (FAQ) */}
      <section className="bg-slate-50 py-12 sm:py-20 px-4 border-t border-slate-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-900 mb-8">
            Domande Frequenti (FAQ)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Serve una specializzazione clinica in psicomotricità per usare queste schede?",
                a: "No. Le schede sono redatte con un linguaggio chiaro e istruzioni sequenziali, ideali per insegnanti, educatori, animatori e terapisti che desiderano proposte pratiche da inserire nella loro routine.",
              },
              {
                q: "Riceverò un libro o materiale cartaceo via posta?",
                a: "No. Si tratta di una raccolta in formato digitale (PDF) ad alta risoluzione, pronta per essere scaricata subito e stampata nei formati standard oppure consultata comodamente su tablet, computer o smartphone.",
              },
              {
                q: "È necessario acquistare attrezzature particolari o costose?",
                a: "No. La quasi totalità delle proposte prevede l'uso di materiali già presenti a scuola o in studio (nastro carta, cuscini, cartoncini, palline, piccoli ostacoli).",
              },
              {
                q: "Le attività sono adatte a bambini con difficoltà attentive o ritardo motorio?",
                a: "Sì. Ogni scheda specifica varianti di semplificazione o progressione, consentendo al professionista di adattare l'intensità e la complessità alle reali risposte del singolo o del gruppo.",
              },
              {
                q: "Come funziona il pagamento unico?",
                a: "Paghi una sola volta al momento dell'ordine. Non ci sono canoni mensili, abbonamenti o addebiti successivi. L'accesso ai file e agli aggiornamenti rimane tuo a tempo indeterminato.",
              },
            ].map((f, i) => (
              <details
                key={i}
                className="group bg-white border border-slate-200 rounded-2xl px-5 py-4 shadow-xs"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none text-sm font-bold text-slate-900">
                  {f.q}
                  <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180 text-slate-500 shrink-0 ml-2" />
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Inizia oggi stesso
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Riduci le ore di programmazione e offri attività strutturate ed efficaci per lo sviluppo psicomotorio di ogni bambino.
          </p>
          <div className="mt-8">
            <CtaButton id="cta-finale-it">VOGLIO ACCEDERE ALLA RACCOLTA</CtaButton>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center text-xs leading-relaxed">
        <div className="max-w-3xl mx-auto space-y-3">
          <p>
            Questo materiale ha finalità educative e di supporto pedagogico-didattico. Le proposte vanno calibrate in base alle caratteristiche individuali dei bambini e svolte sotto la supervisione di personale adulto. Non costituisce strumento diagnostico o valutazione clinica.
          </p>
          <p>
            È vietata la riproduzione e diffusione non autorizzata dei contenuti.
          </p>
          <p className="text-slate-500 pt-4">
            © {new Date().getFullYear()} PsicoMotion Kids. Tutti i diritti riservati.
          </p>
          <div className="pt-2 text-[11px] text-slate-500 flex justify-center gap-3 flex-wrap">
            <span>Contatti</span> · 
            <span>Condizioni generali di vendita</span> · 
            <span>Informativa sulla privacy</span> · 
            <span>Politica sui cookie</span> · 
            <span>Richiesta di rimborso</span>
          </div>
        </div>
      </footer>

      {/* UPSELL MODAL (ITALIANO) */}
      {showUpsell && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-3 sm:p-4 animate-in fade-in"
          onClick={() => setShowUpsell(false)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-[21rem] w-full max-h-[90dvh] overflow-y-auto p-4 sm:p-5 shadow-2xl border-4 border-[#f5b301]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowUpsell(false)}
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 cursor-pointer"
              aria-label="Chiudi"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="text-center">
              <span className="inline-flex items-center gap-1 bg-[#e11d1d] text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                <Flame className="w-3 h-3" /> Offerta unica · Sconto 20%
              </span>
              <h3 className="mt-2 text-base sm:text-lg font-black uppercase text-slate-900 leading-tight">
                Pacchetto Completo con il 20% di sconto
              </h3>
              <div className="mt-2.5 rounded-xl bg-[#faf6ee] p-2.5">
                <p className="text-[11px] text-slate-500 line-through">Da 19,00 € a soli</p>
                <div className="block text-3xl font-black text-[#1fa84a] leading-none my-0.5">
                  15,20 <span className="text-lg align-top">€</span>
                </div>
                <p className="text-[10px] text-slate-500">20% di sconto sul prezzo di 19,00 € · Accesso a vita</p>
              </div>

              <p className="mt-2 text-xs font-black text-[#f5b301] uppercase tracking-wide">
                Per soli 3,20 € in più porti a casa il Pacchetto Completo
              </p>

              <ul className="mt-2 space-y-1 text-[11px] text-slate-700 text-left">
                {[
                  "Oltre 200 attività psicomotorie guidate",
                  "Bonus 1: Programmazione Annuale",
                  "Bonus 2: Guida Tappe dello Sviluppo",
                  "Bonus 3: Scheda di Osservazione",
                  "Garanzia totale di 30 giorni",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CHECKOUT_UPSELL}
                id="cta-upsell-completo-it"
                className="gtm-link-click mt-3 block w-full rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-black uppercase tracking-wide py-3.5 text-xs touch-manipulation"
              >
                Sì, voglio il Pacchetto Completo a 15,20 €
              </a>
              <a
                href={CHECKOUT_BASIC}
                id="cta-upsell-base-it"
                className="gtm-link-click mt-2 inline-flex items-center justify-center w-full rounded-md bg-slate-100 hover:bg-slate-200 active:scale-[0.98] transition text-slate-700 font-bold uppercase tracking-wide py-2 text-[9px] touch-manipulation"
              >
                No grazie, preferisco continuare con il Base a 12 €
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
