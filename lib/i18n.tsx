"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// ─── Locale types ─────────────────────────────────────────────────────────────

export type Locale = "nl" | "en" | "fr" | "de";

export interface FeatureItem { icon: string; title: string; description: string }
export interface StatItem    { value: string; label: string }

export interface Translations {
  nav:  { home: string; pricing: string; support: string; login: string };
  hero: { badge: string; title: string; titleAccent: string; titleEnd: string; subtitle: string; cta1: string; cta2: string; stats: StatItem[]; trust: string };
  features: { badge: string; title: string; titleHighlight: string; subtitle: string; items: FeatureItem[] };
  sports: { badge: string; title: string; titleHighlight: string; subtitle: string; footer: string };
  streaming: { badge: string; title: string; titleHighlight: string; subtitle: string; footer: string };
  pricing: { buyNow: string; ready: string; payWith: string; popular: string; oneTime: string; features: string[]; savings: { s18: string; s39: string; mostChosen: string; bestDeal: string }; durations: { m1: string; m3: string; m6: string; y1: string; y2: string } };
  testimonials: { badge: string; title: string; titleHighlight: string; subtitle: string };
  cta: { title: string; subtitle: string; button: string };
}

// ─── Dutch ────────────────────────────────────────────────────────────────────

const nl: Translations = {
  nav: { home: "Home", pricing: "Tarieven", support: "Support", login: "Inloggen" },
  hero: {
    badge: "Nu beschikbaar in Nederland",
    title: "Stream jouw favoriete", titleAccent: "content", titleEnd: "in de beste kwaliteit",
    subtitle: "Geniet van onbeperkte toegang tot duizenden films, series en exclusieve content. Altijd en overal, in verbluffende HD en 4K Ultra HD kwaliteit.",
    cta1: "Bekijk Pakketten", cta2: "Gratis uitproberen",
    stats: [{ value: "10.000+", label: "Titels beschikbaar" }, { value: "4K Ultra HD", label: "Maximale kwaliteit" }, { value: "24/7", label: "Klantenservice" }],
    trust: "Geen verplichtingen • Altijd opzegbaar • Veilig betalen via iDEAL, Visa & Mastercard",
  },
  features: {
    badge: "Functies", title: "Waarom kiezen voor", titleHighlight: "Nederland4K IPTV",
    subtitle: "Wij bieden meer dan alleen streaming. Een complete beleving, gebouwd voor jou.",
    items: [
      { icon: "⚡", title: "Razendsnel laden", description: "Onze geoptimaliseerde servers zorgen voor vrijwel geen laadtijd, zodat jij direct kunt genieten." },
      { icon: "🎬", title: "HD & 4K Kwaliteit", description: "Stream in kristalheldere 1080p HD of verbluffende 4K Ultra HD, afhankelijk van jouw pakket." },
      { icon: "🛡️", title: "24/7 Support", description: "Ons supportteam staat dag en nacht voor je klaar via chat, e-mail of telefoon." },
      { icon: "📱", title: "Op elk apparaat", description: "Stream op jouw smartphone, tablet, laptop of smart-tv. Naadloos wisselen tussen apparaten." },
      { icon: "🔒", title: "Veilig & betrouwbaar", description: "End-to-end versleuteling en veilige betalingen. Jouw gegevens zijn altijd beschermd." },
      { icon: "🎵", title: "Meerdere profielen", description: "Maak aparte profielen aan voor elk gezinslid, elk met eigen aanbevelingen en watchlist." },
    ],
  },
  sports: { badge: "Live & On Demand", title: "Alle sporten.", titleHighlight: "Één platform.", subtitle: "Van de Premier League tot Formule 1 — stream live en on demand in de allerbeste kwaliteit.", footer: "+30.000 kanalen • Live sports • Herhaling & highlights" },
  streaming: { badge: "20+ Streamingdiensten", title: "Al jouw favorieten.", titleHighlight: "Één abonnement.", subtitle: "Netflix, HBO, Disney+ en nog veel meer — allemaal toegankelijk via ons platform, zonder extra kosten.", footer: "+20 streamingdiensten • Films & series • Altijd up-to-date" },
  pricing: {
    buyNow: "Koop nu", ready: "Klaar in 5–7 minuten", payWith: "Veilig betalen via", popular: "Meest Populair", oneTime: "eenmalig",
    features: ["SD / HD / FHD / 4K IPTV", "+30.000 kanalen", "+100.000 VOD", "Kanalen bekijken", "7 dagen geld-terug-garantie", "WhatsApp-ondersteuning", "Alle premium tv-kanalen (ESPN, Ziggo Sport)", "Ingebouwde VPN", "Werkt op alle apparaten & apps"],
    savings: { s18: "Bespaar 18%", s39: "Bespaar 39%", mostChosen: "Meest gekozen", bestDeal: "Beste deal" },
    durations: { m1: "1 Maand", m3: "3 Maanden", m6: "6 Maanden", y1: "1 Jaar", y2: "2 Jaar" },
  },
  testimonials: { badge: "Klantbeoordelingen", title: "Wat onze", titleHighlight: "klanten zeggen", subtitle: "Sluit je aan bij duizenden tevreden kijkers in Nederland." },
  cta: { title: "Klaar om te beginnen?", subtitle: "Maak vandaag nog een account aan en geniet direct van al onze content. Geen creditcard vereist voor de gratis proefperiode.", button: "Start nu gratis" },
};

// ─── English ──────────────────────────────────────────────────────────────────

const en: Translations = {
  nav: { home: "Home", pricing: "Pricing", support: "Support", login: "Login" },
  hero: {
    badge: "Now available in the Netherlands",
    title: "Stream your favorite", titleAccent: "content", titleEnd: "in the best quality",
    subtitle: "Enjoy unlimited access to thousands of movies, series and exclusive content. Anytime, anywhere, in stunning HD and 4K Ultra HD quality.",
    cta1: "View Packages", cta2: "Try for free",
    stats: [{ value: "10,000+", label: "Titles available" }, { value: "4K Ultra HD", label: "Maximum quality" }, { value: "24/7", label: "Customer service" }],
    trust: "No obligations • Cancel anytime • Secure payment via iDEAL, Visa & Mastercard",
  },
  features: {
    badge: "Features", title: "Why choose", titleHighlight: "Nederland4K IPTV",
    subtitle: "We offer more than just streaming. A complete experience, built for you.",
    items: [
      { icon: "⚡", title: "Lightning fast", description: "Our optimized servers ensure virtually no loading time, so you can enjoy content immediately." },
      { icon: "🎬", title: "HD & 4K Quality", description: "Stream in crystal-clear 1080p HD or stunning 4K Ultra HD, depending on your package." },
      { icon: "🛡️", title: "24/7 Support", description: "Our support team is available day and night via chat, email or phone." },
      { icon: "📱", title: "Any device", description: "Stream on your smartphone, tablet, laptop or smart TV. Switch seamlessly between devices." },
      { icon: "🔒", title: "Safe & reliable", description: "End-to-end encryption and secure payments. Your data is always protected." },
      { icon: "🎵", title: "Multiple profiles", description: "Create separate profiles for each family member, each with own recommendations and watchlist." },
    ],
  },
  sports: { badge: "Live & On Demand", title: "All sports.", titleHighlight: "One platform.", subtitle: "From the Premier League to Formula 1 — stream live and on demand in the very best quality.", footer: "+30,000 channels • Live sports • Replays & highlights" },
  streaming: { badge: "20+ Streaming Services", title: "All your favorites.", titleHighlight: "One subscription.", subtitle: "Netflix, HBO, Disney+ and much more — all accessible through our platform, at no extra cost.", footer: "+20 streaming services • Movies & series • Always up-to-date" },
  pricing: {
    buyNow: "Buy now", ready: "Ready in 5–7 minutes", payWith: "Pay securely via", popular: "Most Popular", oneTime: "one-time",
    features: ["SD / HD / FHD / 4K IPTV", "+30,000 channels", "+100,000 VOD", "Watch channels", "7-day money-back guarantee", "WhatsApp support", "All premium TV channels (ESPN, Ziggo Sport)", "Built-in VPN", "Works on all devices & apps"],
    savings: { s18: "Save 18%", s39: "Save 39%", mostChosen: "Most chosen", bestDeal: "Best deal" },
    durations: { m1: "1 Month", m3: "3 Months", m6: "6 Months", y1: "1 Year", y2: "2 Years" },
  },
  testimonials: { badge: "Customer Reviews", title: "What our", titleHighlight: "customers say", subtitle: "Join thousands of satisfied viewers in the Netherlands." },
  cta: { title: "Ready to get started?", subtitle: "Create an account today and enjoy all our content immediately. No credit card required for the free trial.", button: "Start free now" },
};

// ─── French ───────────────────────────────────────────────────────────────────

const fr: Translations = {
  nav: { home: "Accueil", pricing: "Tarifs", support: "Support", login: "Connexion" },
  hero: {
    badge: "Maintenant disponible aux Pays-Bas",
    title: "Streamez votre", titleAccent: "contenu préféré", titleEnd: "dans la meilleure qualité",
    subtitle: "Profitez d'un accès illimité à des milliers de films, séries et contenus exclusifs. Où que vous soyez, en HD et 4K Ultra HD éblouissant.",
    cta1: "Voir les forfaits", cta2: "Essai gratuit",
    stats: [{ value: "10 000+", label: "Titres disponibles" }, { value: "4K Ultra HD", label: "Qualité maximale" }, { value: "24/7", label: "Service client" }],
    trust: "Sans engagement • Résiliable à tout moment • Paiement sécurisé via iDEAL, Visa & Mastercard",
  },
  features: {
    badge: "Fonctionnalités", title: "Pourquoi choisir", titleHighlight: "Nederland4K IPTV",
    subtitle: "Nous offrons plus que du streaming. Une expérience complète, conçue pour vous.",
    items: [
      { icon: "⚡", title: "Chargement ultra-rapide", description: "Nos serveurs optimisés garantissent un temps de chargement quasi nul pour profiter immédiatement du contenu." },
      { icon: "🎬", title: "Qualité HD & 4K", description: "Streamez en 1080p HD cristallin ou en 4K Ultra HD époustouflant, selon votre forfait." },
      { icon: "🛡️", title: "Support 24/7", description: "Notre équipe d'assistance est disponible jour et nuit via chat, e-mail ou téléphone." },
      { icon: "📱", title: "Tous les appareils", description: "Streamez sur votre smartphone, tablette, ordinateur ou smart TV. Passez d'un appareil à l'autre sans accroc." },
      { icon: "🔒", title: "Sûr & fiable", description: "Chiffrement de bout en bout et paiements sécurisés. Vos données sont toujours protégées." },
      { icon: "🎵", title: "Profils multiples", description: "Créez des profils distincts pour chaque membre de la famille, chacun avec ses recommandations et liste de lecture." },
    ],
  },
  sports: { badge: "En direct & À la demande", title: "Tous les sports.", titleHighlight: "Une plateforme.", subtitle: "De la Premier League à la Formule 1 — streamez en direct et à la demande dans la meilleure qualité.", footer: "+30 000 chaînes • Sports en direct • Rediffusions & highlights" },
  streaming: { badge: "20+ Services de streaming", title: "Tous vos favoris.", titleHighlight: "Un seul abonnement.", subtitle: "Netflix, HBO, Disney+ et bien plus — tous accessibles via notre plateforme, sans frais supplémentaires.", footer: "+20 services de streaming • Films & séries • Toujours à jour" },
  pricing: {
    buyNow: "Acheter", ready: "Prêt en 5–7 minutes", payWith: "Paiement sécurisé via", popular: "Le plus populaire", oneTime: "unique",
    features: ["SD / HD / FHD / 4K IPTV", "+30 000 chaînes", "+100 000 VOD", "Regarder les chaînes", "Garantie remboursement 7 jours", "Support WhatsApp", "Toutes les chaînes premium (ESPN, Ziggo Sport)", "VPN intégré", "Fonctionne sur tous les appareils & apps"],
    savings: { s18: "Économisez 18%", s39: "Économisez 39%", mostChosen: "Le plus choisi", bestDeal: "Meilleure offre" },
    durations: { m1: "1 Mois", m3: "3 Mois", m6: "6 Mois", y1: "1 An", y2: "2 Ans" },
  },
  testimonials: { badge: "Avis clients", title: "Ce que disent nos", titleHighlight: "clients", subtitle: "Rejoignez des milliers de spectateurs satisfaits aux Pays-Bas." },
  cta: { title: "Prêt à commencer ?", subtitle: "Créez un compte aujourd'hui et profitez immédiatement de tout notre contenu. Pas de carte de crédit requise pour l'essai gratuit.", button: "Commencer gratuitement" },
};

// ─── German ───────────────────────────────────────────────────────────────────

const de: Translations = {
  nav: { home: "Startseite", pricing: "Preise", support: "Support", login: "Anmelden" },
  hero: {
    badge: "Jetzt in den Niederlanden verfügbar",
    title: "Streame deinen lieblings", titleAccent: "Content", titleEnd: "in bester Qualität",
    subtitle: "Genieße unbegrenzten Zugang zu Tausenden von Filmen, Serien und exklusiven Inhalten. Jederzeit und überall, in atemberaubender HD- und 4K Ultra HD-Qualität.",
    cta1: "Pakete ansehen", cta2: "Kostenlos testen",
    stats: [{ value: "10.000+", label: "Verfügbare Titel" }, { value: "4K Ultra HD", label: "Maximale Qualität" }, { value: "24/7", label: "Kundendienst" }],
    trust: "Keine Verpflichtungen • Jederzeit kündbar • Sichere Zahlung via iDEAL, Visa & Mastercard",
  },
  features: {
    badge: "Funktionen", title: "Warum", titleHighlight: "Nederland4K IPTV wählen",
    subtitle: "Wir bieten mehr als nur Streaming. Ein komplettes Erlebnis, gebaut für dich.",
    items: [
      { icon: "⚡", title: "Blitzschnell", description: "Unsere optimierten Server sorgen für nahezu keine Ladezeit, damit du sofort loslegen kannst." },
      { icon: "🎬", title: "HD & 4K Qualität", description: "Streame in kristallklarem 1080p HD oder atemberaubendem 4K Ultra HD, je nach deinem Paket." },
      { icon: "🛡️", title: "24/7 Support", description: "Unser Support-Team steht dir rund um die Uhr per Chat, E-Mail oder Telefon zur Verfügung." },
      { icon: "📱", title: "Jedes Gerät", description: "Streame auf deinem Smartphone, Tablet, Laptop oder Smart-TV. Wechsle nahtlos zwischen Geräten." },
      { icon: "🔒", title: "Sicher & zuverlässig", description: "Ende-zu-Ende-Verschlüsselung und sichere Zahlungen. Deine Daten sind immer geschützt." },
      { icon: "🎵", title: "Mehrere Profile", description: "Erstelle separate Profile für jedes Familienmitglied, jedes mit eigenen Empfehlungen und Watchlist." },
    ],
  },
  sports: { badge: "Live & On Demand", title: "Alle Sportarten.", titleHighlight: "Eine Plattform.", subtitle: "Von der Premier League bis zur Formel 1 — streame live und on demand in bester Qualität.", footer: "+30.000 Kanäle • Live-Sport • Wiederholungen & Highlights" },
  streaming: { badge: "20+ Streaming-Dienste", title: "Alle deine Favoriten.", titleHighlight: "Ein Abonnement.", subtitle: "Netflix, HBO, Disney+ und vieles mehr — alles über unsere Plattform zugänglich, ohne Mehrkosten.", footer: "+20 Streaming-Dienste • Filme & Serien • Immer aktuell" },
  pricing: {
    buyNow: "Jetzt kaufen", ready: "Bereit in 5–7 Minuten", payWith: "Sicher bezahlen via", popular: "Am beliebtesten", oneTime: "einmalig",
    features: ["SD / HD / FHD / 4K IPTV", "+30.000 Kanäle", "+100.000 VOD", "Kanäle ansehen", "7 Tage Geld-zurück-Garantie", "WhatsApp-Support", "Alle Premium-TV-Kanäle (ESPN, Ziggo Sport)", "Eingebautes VPN", "Funktioniert auf allen Geräten & Apps"],
    savings: { s18: "Spare 18%", s39: "Spare 39%", mostChosen: "Meist gewählt", bestDeal: "Bestes Angebot" },
    durations: { m1: "1 Monat", m3: "3 Monate", m6: "6 Monate", y1: "1 Jahr", y2: "2 Jahre" },
  },
  testimonials: { badge: "Kundenbewertungen", title: "Was unsere", titleHighlight: "Kunden sagen", subtitle: "Schließe dich Tausenden zufriedener Zuschauer in den Niederlanden an." },
  cta: { title: "Bereit loszulegen?", subtitle: "Erstelle noch heute ein Konto und genieße sofort alle unsere Inhalte. Keine Kreditkarte für die Testphase erforderlich.", button: "Jetzt kostenlos starten" },
};

// ─── All translations ─────────────────────────────────────────────────────────

export const translations: Record<Locale, Translations> = { nl, en, fr, de };

// ─── Context ──────────────────────────────────────────────────────────────────

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "nl",
  setLocale: () => {},
  t: nl,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("nl");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && saved in translations) setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslations() {
  return useContext(I18nContext);
}
