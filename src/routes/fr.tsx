import { createFileRoute } from "@tanstack/react-router";

import act001 from "@/assets/PsicoMotion_FR_001.webp";
import act002 from "@/assets/PsicoMotion_FR_002.webp";
import act003 from "@/assets/PsicoMotion_FR_003_Course_en_zigzag.webp";
import act004 from "@/assets/PsicoMotion_FR_004_Le_parcours_des_animaux.webp";
import act005 from "@/assets/PsicoMotion_FR_005_La_course_de_la_grenouille.webp";
import act006 from "@/assets/PsicoMotion_FR_006_Le_Tunnel_de_l_Aventure.webp";
import act007 from "@/assets/PsicoMotion_FR_007_Les_iles_en_mouvement.webp";
import act008 from "@/assets/PsicoMotion_FR_008_Montagne_et_Vallee.webp";
import act009 from "@/assets/PsicoMotion_FR_009_La_Course_du_Crabe.webp";
import act010 from "@/assets/PsicoMotion_FR_010_La_Marche_du_Geant.webp";
import antesDespues from "@/assets/psicomotion_kids_comparativo_fr.webp";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import bono1 from "@/assets/bonus_1_programmation_annuelle_fr.webp";
import bono2 from "@/assets/bonus_2_guide_etapes_developpement_psychomoteur_fr.webp";
import bono3 from "@/assets/bonus_3_fiche_observation_habiletes_motrices_fr.webp";
import planoPremium from "@/assets/psicomotion_kids_pack_premium_fr.webp";
import garantiaSello from "@/assets/selo_garantia_30_dias_frances.webp";
import autoraFoto from "@/assets/autora.webp";
import mockupHero from "@/assets/hero_psicomotion_kids_fr_webp.webp";

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
  { src: act001, title: "Saut en étoile" },
  { src: act002, title: "Sauts de couleur en couleur" },
  { src: act003, title: "Course en zigzag" },
  { src: act004, title: "Le parcours des animaux" },
  { src: act005, title: "La course des grenouilles" },
  { src: act006, title: "Le tunnel de l'aventure" },
  { src: act007, title: "Les îles en mouvement" },
  { src: act008, title: "Montagne et vallée" },
  { src: act009, title: "La marche du crabe" },
  { src: act010, title: "Le pas du géant" },
];

export const Route = createFileRoute("/fr")({
  loader: async () => ({
    today: new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "Europe/Paris",
    }).format(new Date()),
  }),
  head: () => ({
    meta: [
      { title: "+200 Activités de Motricité Infantile Prêtes à l'Emploi | PsicoMotion Kids" },
      {
        name: "description",
        content:
          "Réduisez vos heures de préparation : plus de 200 activités de motricité prêtes à l'emploi pour la classe et le cabinet. Fiches pratiques en PDF pour enseignants et éducateurs.",
      },
      {
        property: "og:title",
        content: "+200 Activités de Motricité Infantile Prêtes à l'Emploi",
      },
      {
        property: "og:description",
        content:
          "Collection structurée par tranche d'âge et objectif pédagogique. Format PDF imprimable, téléchargement immédiat.",
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
  component: FrenchSalesPage,
});

/* ---------------- Lien Checkout (Offre Unique - Pack Complet) ---------------- */
const CHECKOUT_COMPLETO = "https://pay.hotmart.com/S108152248Q?off=uv9t0mmj&checkoutMode=10";

const CtaButton = ({
  children,
  className = "",
  href = "#offre",
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

/* ---------------- Composant Principal (Version Française — Offre Unique Directe) ---------------- */
function FrenchSalesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden font-sans">
      {/* 1. BARRE SUPÉRIEURE */}
      <div className="w-full bg-[#1e293b] text-white text-center text-[11px] sm:text-xs font-bold tracking-wide py-2.5 px-3">
        Conçu pour les enseignants, éducateurs et professionnels de la petite enfance.
      </div>

      {/* 2. HERO SECTION */}
      <section className="bg-white pt-6 pb-8 sm:pt-10 sm:pb-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#d5f5d8] text-[#166534] text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" /> Ressources didactiques numériques · Téléchargement immédiat en PDF · Paiement 100 % sécurisé
          </span>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.08] text-slate-900">
            Réduisez vos heures de préparation : plus de 200 activités de motricité prêtes à l'emploi pour la classe et le cabinet
          </h1>

          {/* Mockup */}
          <div className="mt-8 max-w-xl mx-auto">
            <img
              src={mockupHero}
              alt="Collection PsicoMotion Kids avec plus de 200 activités de motricité pour enfants"
              width={960}
              height={984}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />
          </div>

          {/* Sous-titre */}
          <p className="mt-8 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Une collection structurée par tranche d'âge et objectif pédagogique, avec des fiches guidées pas à pas pour stimuler{" "}
            <strong className="text-slate-900">la coordination, l'équilibre, la latéralité, le repérage spatio-temporel et l'attention</strong>{" "}
            — sans devoir concevoir chaque séance de zéro.
          </p>

          {/* CTA Principal */}
          <div className="mt-8">
            <CtaButton id="cta-hero-fr" className="w-full sm:w-auto">
              JE VEUX ACCÉDER À LA COLLECTION
            </CtaButton>
            <p className="mt-4 text-xs text-slate-500 max-w-md mx-auto leading-normal">
              Accès immédiat par e-mail après confirmation · Format PDF prêt à imprimer (A4) · Garantie de remboursement de 30 jours
            </p>
          </div>
        </div>
      </section>

      {/* 3. EXEMPLES DE FICHES (Marquee slider) */}
      <section className="bg-slate-50 py-10 sm:py-16 px-4 border-y border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
            Quelques exemples de fiches pratiques incluses dans la collection :
          </h2>
          <p className="text-sm text-slate-500 mb-8 max-w-xl mx-auto">
            Exemples extraits des ressources didactiques. Plus de 200 fiches prêtes à l'emploi.
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

      {/* 4. ANATOMIE D'UNE FICHE TYPE */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#166534] bg-[#d5f5d8] px-3 py-1 rounded-full">
              Structure Claire & Immédiate
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-3">
              Ce que vous trouverez dans chaque fiche pratique
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Conçue pour être consultée en 30 secondes avant le début de l'atelier ou de la séance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Target className="w-5 h-5 text-[#1fa84a]" />,
                title: "Objectif psychomoteur spécifique",
                desc: "Motricité globale ou fine, schéma corporel, coordination œil-main, équilibre statique/dynamique ou régulation attentionnelle.",
              },
              {
                icon: <Users className="w-5 h-5 text-[#3b82f6]" />,
                title: "Tranche d'âge recommandée",
                desc: "Indications de 2 à 10 ans avec variantes pour adapter ou intensifier la complexité de l'exercice.",
              },
              {
                icon: <Box className="w-5 h-5 text-[#f59e0b]" />,
                title: "Matériel nécessaire",
                desc: "Objets du quotidien facilement disponibles à l'école ou en cabinet (ruban de masquage, ballons, cerceaux, coussins).",
              },
              {
                icon: <FileText className="w-5 h-5 text-[#8b5cf6]" />,
                title: "Consignes étape par étape",
                desc: "Explications concrètes, directes et faciles à lire pour guider l'animation sans hésitation.",
              },
              {
                icon: <Layers className="w-5 h-5 text-[#ec4899]" />,
                title: "Gestion du contexte",
                desc: "Conseils pour adapter la situation motrice aux classes entières, petits groupes ou séances individuelles.",
              },
              {
                icon: <Sparkles className="w-5 h-5 text-[#1fa84a]" />,
                title: "Prête à l'emploi",
                desc: "Imprimez les fiches au format standard A4 ou consultez-les instantanément sur smartphone et tablette.",
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

      {/* 5. COMPARATIF : VOTRE GESTION DU TEMPS */}
      <section className="bg-[#faf6ee] py-12 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              De la recherche dispersée sur le web à une programmation structurée
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Découvrez comment votre quotidien pédagogique évolue :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Colonne 1 : Sans */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200 shadow-sm flex flex-col">
              <div className="flex items-center gap-2 mb-6 text-red-600 font-black text-base uppercase">
                <X className="w-6 h-6 p-1 rounded-full bg-red-100 text-red-600" />
                Quand vous préparez tout de zéro
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                {[
                  "Des soirées et week-ends entiers passés à chercher des idées désorganisées sur les réseaux et blogs.",
                  "La difficulté à varier les ateliers hebdomadaires, avec le risque de répéter les mêmes schémas.",
                  "Le stress d'adapter l'activité en urgence lorsque le groupe s'agite ou perd sa concentration.",
                  "L'absence d'outils concrets pour consigner l'évolution motrice des enfants.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-0.5">✕</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 2 : Avec PsicoMotion Kids */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#1fa84a] shadow-lg flex flex-col">
              <div className="flex items-center gap-2 mb-6 text-[#1fa84a] font-black text-base uppercase">
                <Check className="w-6 h-6 p-1 rounded-full bg-emerald-100 text-[#1fa84a]" />
                Avec PsicoMotion Kids
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                {[
                  "Un recueil complet et prêt à l'emploi, classé par tranche d'âge et objectif pédagogique.",
                  "Des fiches pratiques à imprimer ou à ouvrir sur tablette/smartphone en quelques secondes.",
                  "Des situations motrices pensées pour favoriser l'inclusion de tous les enfants, y compris avec des besoins particuliers.",
                  "Plus de temps libre pour vous et moins de charge mentale dans la préparation de vos séances.",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#1fa84a] font-bold mt-0.5">✓</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 max-w-xl mx-auto">
            <img
              src={antesDespues}
              alt="Comparaison de la routine pédagogique avant et après PsicoMotion Kids"
              width={1080}
              height={1080}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* 6. PUBLIC CONCERNÉ */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-4">
            Ce matériel est pensé pour vous si :
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-12">
            La polyvalence des fiches répond aux besoins concrets des professionnels qui travaillent quotidiennement auprès des enfants :
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {[
              {
                t: "Professeur(e) des écoles en maternelle ou en élémentaire",
                d: "Vous souhaitez réduire considérablement votre temps de préparation tout en enrichissant vos séances de motricité.",
              },
              {
                t: "Éducateur de jeunes enfants ou psychomotricien",
                d: "Vous recherchez des activités motrices structurées, prêtes à l'emploi pour vos ateliers collectifs ou individuels.",
              },
              {
                t: "Professionnel accompagnant des enfants avec des besoins spécifiques",
                d: "Vous accompagnez des enfants présentant des difficultés de coordination, d'orientation spatiale ou de canalisation de l'attention.",
              },
              {
                t: "Parent attentif au développement moteur",
                d: "Vous recherchez une ressource adaptable, à utiliser en salle d'évolution, en classe, en cabinet ou à conseiller aux familles.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1fa84a] shrink-0" />
                  {item.t}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-7">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TÉMOIGNAGES */}
      <section className="bg-slate-50 py-12 sm:py-20 px-4 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
              L'expérience de ceux qui utilisent déjà les fiches opérationnelles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Ce que disent les professionnels qui ont intégré nos fiches dans leur pratique quotidienne :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                n: "Sophie Laurent",
                role: "Professeure des écoles (Maternelle)",
                t: "Enfin une ressource véritablement pratique et prête à imprimer. J'ai économisé des heures de préparation pour mes parcours de motricité en maternelle.",
                img: testimonial1,
              },
              {
                n: "Camille Moreau",
                role: "Éducatrice de jeunes enfants",
                t: "Les enfants participent avec un enthousiasme remarquable. J'ai déjà noté des progrès tangibles dans leur équilibre et leur aisance motrice.",
                img: testimonial2,
              },
              {
                n: "Émilie Dubois",
                role: "Professionnelle du développement de l'enfant",
                t: "Je l'utilise aussi bien pour les ateliers collectifs qu'en prise en charge individuelle. Les fiches sont directes, lisibles et modulables.",
                img: testimonial3,
              },
              {
                n: "Claire Bernard",
                role: "Enseignante spécialisée",
                t: "Même les enfants qui rencontrent le plus de difficultés de régulation motrice ou d'attention s'engagent positivement dans les parcours.",
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
                  <p className="italic text-sm text-slate-700 leading-relaxed">« {r.t} »</p>
                  <p className="mt-2 text-xs font-bold text-slate-900">{r.n}</p>
                  <p className="text-[11px] text-slate-500">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            Note : Retours d'expérience traduits depuis la langue source. Les résultats présentés illustrent des démarches pédagogiques individuelles.
          </p>
        </div>
      </section>

      {/* 8. RESSOURCES COMPLÉMENTAIRES (BONUS) */}
      <section className="bg-white py-12 sm:py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2 flex items-center justify-center flex-wrap gap-2">
            3 Outils complémentaires offerts avec le
            <span className="inline-flex items-center gap-1.5 bg-[#e11d1d] text-white text-sm sm:text-base rounded-full px-3.5 py-1">
              <Flame className="w-4 h-4" /> Pack Complet
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              {
                n: "Bonus 1",
                t: "Trame de Programmation Annuelle des Activités Motrices",
                d: "Un guide structuré pour répartir et planifier vos séquences d'activités motrices tout au long de l'année scolaire, facilitant la progression pédagogique.",
                v: "19,00 €",
              },
              {
                n: "Bonus 2",
                t: "Guide des Étapes Clés du Développement Psychomoteur",
                d: "Un référentiel synthétique pour repérer facilement les acquisitions attendues selon les âges et calibrer vos ateliers sur les besoins réels du groupe.",
                v: "17,00 €",
              },
              {
                n: "Bonus 3",
                t: "Fiche d'Observation des Habiletés Motrices",
                d: "Une grille pratique pour noter vos constats sur le terrain, évaluer les progrès sans surcharge administrative et enrichir le dialogue avec les familles et l'équipe éducative.",
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
                  <span className="line-through text-[#e11d1d] font-bold">Valeur : {b.v}</span>{" "}
                  <span className="text-[#1fa84a] font-black ml-1">INCLUS GRATUITEMENT</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OFFRE DIRECTE — PACK COMPLET À 24 € */}
      <section id="offre" className="bg-slate-50 py-12 sm:py-20 px-4 border-t border-slate-200 scroll-mt-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-[#1fa84a] text-white text-xs sm:text-sm font-black uppercase px-4 py-1.5 rounded-full shadow-md mb-3">
              ✓ Offre Complète à Accès Illimité
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
              Accédez immédiatement à l'intégralité de la collection
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Plus de 200 activités de motricité détaillées + les 3 ressources bonus incluses gratuitement. Sans abonnement ni frais récurrents.
            </p>
          </div>

          {/* CARD OFFRE DIRECTE */}
          <div className="relative rounded-3xl border-2 border-[#f5b301] bg-white p-6 sm:p-10 flex flex-col shadow-2xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-[92%] max-w-sm text-center z-10 pointer-events-none">
              <span className="inline-block bg-[#1fa84a] text-white text-[10.5px] sm:text-xs font-black uppercase px-3.5 py-1.5 rounded-full shadow-md leading-tight tracking-wide border border-white/20">
                ✓ Choisi par 92 % des professionnels
              </span>
            </div>

            <div className="text-center mt-3 sm:mt-2">
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-slate-900">
                Pack Complet PsicoMotion Kids
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                La collection pédagogique intégrale pour toute l'année scolaire
              </p>
            </div>

            <div className="mt-4 sm:mt-6 flex justify-center -mx-2 sm:-mx-4">
              <img
                src={planoPremium}
                alt="Pack Complet avec plus de 200 activités de motricité et bonus"
                width={853}
                height={1280}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[460px] sm:max-w-[540px] mx-auto h-auto object-contain drop-shadow-2xl scale-105 sm:scale-110 transition-transform"
              />
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 text-center sm:text-left">
                Ce que comprend votre accès complet :
              </h4>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Plus de 200 activités motrices guidées étape par étape",
                  "Motricité globale, motricité fine et équilibre",
                  "Schéma corporel, repérage dans l'espace et latéralité",
                  "Coordination œil-main et régulation du tonus",
                  "Organisation complète par tranche d'âge (de 2 à 10 ans)",
                  "Format PDF haute résolution, prêt à imprimer (A4) ou lisible sur écran (smartphone, tablette, PC)",
                  "Téléchargement immédiat et accès à vie avec futures mises à jour incluses",
                  "Garantie commerciale satisfait ou remboursé de 30 jours",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#1fa84a] mt-0.5 shrink-0" />
                    <span className="font-medium text-slate-800">{t}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2.5 font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span className="text-lg leading-none">🎁</span>
                  <span>
                    Bonus 1 : Trame de Programmation Annuelle des Activités Motrices{" "}
                    <span className="text-[#1fa84a] text-xs font-black uppercase ml-1">(Valeur 19,00 € · Inclus)</span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 font-bold text-slate-900">
                  <span className="text-lg leading-none">🎁</span>
                  <span>
                    Bonus 2 : Guide des Étapes Clés du Développement Psychomoteur{" "}
                    <span className="text-[#1fa84a] text-xs font-black uppercase ml-1">(Valeur 17,00 € · Inclus)</span>
                  </span>
                </li>
                <li className="flex items-start gap-2.5 font-bold text-slate-900">
                  <span className="text-lg leading-none">🎁</span>
                  <span>
                    Bonus 3 : Fiche d'Observation des Habiletés Motrices{" "}
                    <span className="text-[#1fa84a] text-xs font-black uppercase ml-1">(Valeur 15,00 € · Inclus)</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 text-center border-t border-slate-100">
              <p className="text-sm line-through text-[#e11d1d] font-bold">Valeur totale : 67,00 € · Aujourd'hui seulement</p>
              <div className="block text-8xl sm:text-9xl font-black text-[#1fa84a] leading-none my-2 tracking-tighter">
                24 <span className="text-5xl sm:text-6xl align-top">€</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1fa84a] font-bold">
                Paiement unique · Vous économisez 43,00 € · Aucun abonnement futur
              </p>

              <a
                href={CHECKOUT_COMPLETO}
                id="cta-pack-complet-fr"
                className="gtm-link-click mt-6 block w-full rounded-md bg-[#1fa84a] hover:bg-[#178a3d] active:scale-[0.98] transition text-white font-black uppercase tracking-wide py-4 sm:py-5 text-base sm:text-lg touch-manipulation shadow-xl"
              >
                COMMANDER LE PACK COMPLET À 24 €
              </a>

              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-slate-500 flex-wrap">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Paiement 100 % sécurisé
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4 text-blue-600" /> Accès instantané par e-mail
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#1fa84a]" /> Garantie de 30 jours
                </span>
              </div>

              <p className="text-[11px] text-slate-500 mt-4 italic">
                Pour un coût minime, disposez d'un recueil permanent qui vous fera économiser plus de 40 heures de préparation de séances cette année.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GARANTIE SATISFAIT OU REMBOURSÉ */}
      <section className="bg-[#faf6ee] py-12 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img
              src={garantiaSello}
              alt="Garantie de remboursement 30 jours"
              width={320}
              height={320}
              loading="lazy"
              decoding="async"
              className="w-56 h-56 sm:w-72 sm:h-72 object-contain drop-shadow-2xl rounded-2xl"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Testez les activités en classe ou en cabinet pendant 30 jours
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Prenez un mois complet pour tester ces parcours et ateliers en situation réelle avec vos élèves ou vos jeunes patients. Si vous constatez que le matériel ne correspond pas à vos exigences pédagogiques, demandez un remboursement intégral dans les 30 jours suivant votre achat. Sans questions indiscrètes ni démarches compliquées.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {[
              {
                num: "1",
                icon: <CreditCard className="w-5 h-5 text-blue-600" />,
                title: "Choisissez votre pack",
                desc: "Finalisez votre achat sur notre page de paiement sécurisée.",
              },
              {
                num: "2",
                icon: <Mail className="w-5 h-5 text-red-600" />,
                title: "Téléchargez immédiatement",
                desc: "Dès la confirmation, vous recevez un lien direct par e-mail pour accéder à vos documents.",
              },
              {
                num: "3",
                icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
                title: "Animez votre séance",
                desc: "Ouvrez la fiche choisie sur écran ou imprimez-la pour lancer l'atelier en quelques minutes.",
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

      {/* 11. PRÉSENTATION DU PROJET / CRÉATRICE */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Un accompagnement de terrain pour le développement moteur des enfants
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm ring-1 ring-slate-200 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-10 items-center">
            <div className="mx-auto md:mx-0 flex justify-center">
              <img
                src={autoraFoto}
                alt="Dr Isabelle Lefèvre, spécialiste du développement psychomoteur de l'enfant"
                width={700}
                height={700}
                loading="lazy"
                decoding="async"
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover shadow-lg ring-1 ring-slate-200"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                PsicoMotion Kids s'appuie sur plus de 20 ans d'expérience du Dr Isabelle Lefèvre dans l'observation du développement moteur et la stimulation sensorielle de l'enfant.
              </p>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Ce projet a été développé pour apporter aux enseignants, éducateurs et praticiens des ressources concrètes, claires et immédiatement applicables, renforçant l'autonomie, l'aisance corporelle et la concentration de chaque enfant à travers le jeu dirigé.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-lg sm:text-xl font-black text-slate-900">Dr Isabelle Lefèvre</p>
                <p className="text-xs sm:text-sm font-semibold text-[#6d28d9] mt-1">
                  Spécialiste du Développement Psychomoteur de l'Enfant et Fondatrice de PsicoMotion Kids
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOIRE AUX QUESTIONS (FAQ) */}
      <section className="bg-slate-50 py-12 sm:py-20 px-4 border-t border-slate-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-slate-900 mb-8">
            Foire aux Questions (FAQ)
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Faut-il une formation médicale ou en psychomotricité pour utiliser ces fiches ?",
                a: "Non. Les fiches sont conçues avec des explications guidées étape par étape et un vocabulaire clair, idéal pour les enseignants, éducateurs, animateurs et thérapeutes souhaitant enrichir leurs séances.",
              },
              {
                q: "Les activités sont-elles adaptées à l'école maternelle ?",
                a: "Oui, tout à fait. Une grande partie des parcours et ateliers s'intègre directement aux temps d'apprentissage de l'activité physique en maternelle (Cycles 1 et 2).",
              },
              {
                q: "Vais-je recevoir un livre physique par courrier ?",
                a: "Non. Il s'agit d'un matériel 100 % numérique au format PDF haute résolution. Vous pouvez le télécharger instantanément, l'imprimer au format A4 selon vos besoins ou le consulter sur tablette, ordinateur et smartphone.",
              },
              {
                q: "Faut-il acheter du matériel spécialisé ou onéreux ?",
                a: "Non. La quasi-totalité des activités utilise du matériel courant déjà présent à l'école ou en structure éducative (ruban adhésif, coussins, cartons, cerceaux, balles).",
              },
              {
                q: "Le matériel convient-il aux enfants ayant des difficultés motrices ou attentionnelles ?",
                a: "Oui. Chaque fiche propose des pistes d'adaptation et des variantes pour ajuster le niveau de difficulté en fonction des réactions et du rythme de chaque enfant.",
              },
              {
                q: "S'agit-il d'un paiement unique ou d'un abonnement mensuel ?",
                a: "C'est un paiement unique. Il n'y a aucun prélèvement récurrent ni abonnement caché. Votre accès aux fichiers et à leurs futures mises à jour reste valable à vie.",
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

      {/* CTA FINAL */}
      <section className="bg-white py-12 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Moins de temps à chercher des idées. Plus d'espace pour le mouvement.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Avec le Pack Complet, accédez à plus de 200 activités structurées et à vos 3 ressources complémentaires pour préparer vos séances en toute sérénité.
          </p>
          <div className="mt-8">
            <CtaButton id="cta-finale-fr">COMMANDER LE PACK COMPLET (24,00 €)</CtaButton>
          </div>
          <p className="mt-4 text-xs text-slate-500 max-w-md mx-auto leading-normal">
            Paiement unique sécurisé · Format PDF haute définition · Garantie 30 jours
          </p>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center text-xs leading-relaxed">
        <div className="max-w-3xl mx-auto space-y-3">
          <p>
            Ce matériel a une vocation exclusivement éducative et pédagogique. Les activités motrices doivent être adaptées aux capacités individuelles des enfants et réalisées sous la supervision constante d'un adulte. Elles ne constituent en aucun cas un bilan diagnostique ou une prise en charge médicale individualisée.
          </p>
          <p>
            Toute reproduction ou diffusion non autorisée, même partielle, est strictement interdite.
          </p>
          <p className="text-slate-500 pt-4">
            © {new Date().getFullYear()} PsicoMotion Kids. Tous droits réservés.
          </p>
          <div className="pt-2 text-[11px] text-slate-500 flex justify-center gap-3 flex-wrap">
            <span>Contact</span> · 
            <span>Conditions Générales de Vente</span> · 
            <span>Politique de Confidentialité</span> · 
            <span>Gestion des Cookies</span> · 
            <span>Demande de Remboursement</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
