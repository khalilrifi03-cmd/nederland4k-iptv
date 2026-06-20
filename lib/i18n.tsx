"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// ─── Locale types ─────────────────────────────────────────────────────────────

export type Locale = "nl" | "en" | "fr" | "de";

export interface FeatureItem { icon: string; title: string; description: string }
export interface StatItem    { value: string; label: string }

export interface Translations {
  nav:  { home: string; pricing: string; install: string; support: string; login: string };
  hero: { badge: string; title: string; titleAccent: string; titleEnd: string; subtitle: string; cta1: string; cta2: string; cta2Message: string; stats: StatItem[]; trust: string };
  features: { badge: string; title: string; titleHighlight: string; subtitle: string; items: FeatureItem[] };
  sports: { badge: string; title: string; titleHighlight: string; subtitle: string; footer: string };
  streaming: { badge: string; title: string; titleHighlight: string; subtitle: string; footer: string };
  pricing: { buyNow: string; ready: string; payWith: string; popular: string; oneTime: string; features: string[]; savings: { s18: string; s39: string; mostChosen: string; bestDeal: string }; durations: { m1: string; m3: string; m6: string; y1: string; y2: string } };
  testimonials: { badge: string; title: string; titleHighlight: string; subtitle: string };
  cta: { title: string; subtitle: string; button: string };
  tariffPage: { badge: string; title: string; titleAccent: string; subtitle: string; faqTitle: string; faqAccent: string; faq: { q: string; a: string }[] };
  supportPage: { badge: string; title: string; subtitle: string; waTitle: string; waDesc: string; waCta: string; mailTitle: string; mailDesc: string; mailCta: string; note: string };
  installPage: { badge: string; title: string; titleAccent: string; subtitle: string; receiveTitle: string; receiveText: string; guides: { name: string; platforms: string[]; steps: string[] }[]; downloadTitle: string; helpTitle: string; helpText: string; helpCta: string; packagesCta: string; helpMessage: string };
  footer: { tagline: string; platform: string; help: string; legal: string; home: string; pricing: string; dashboard: string; support: string; faq: string; contact: string; privacy: string; terms: string; cookies: string; rights: string; status: string };
}

// ─── Dutch ────────────────────────────────────────────────────────────────────

const nl: Translations = {
  nav: { home: "Home", pricing: "Tarieven", install: "Installatie", support: "Support", login: "Inloggen" },
  hero: {
    badge: "Nu beschikbaar in Nederland",
    title: "Stream jouw favoriete", titleAccent: "content", titleEnd: "in de beste kwaliteit",
    subtitle: "Geniet van onbeperkte toegang tot duizenden films, series en exclusieve content. Altijd en overal, in verbluffende HD en 4K Ultra HD kwaliteit.",
    cta1: "Bekijk Pakketten", cta2: "Gratis 24u proberen", cta2Message: "Hallo! Ik wil graag de gratis 24-uurs proefperiode van Nederland4K IPTV activeren.",
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
  tariffPage: {
    badge: "IPTV Abonnementen", title: "Onze", titleAccent: "Tarieven",
    subtitle: "Vier flexibele pakketten. Allemaal met dezelfde premium voordelen. Kies eenvoudig op basis van looptijd.",
    faqTitle: "Veelgestelde", faqAccent: "vragen",
    faq: [
      { q: "Hoe snel is mijn IPTV abonnement actief?", a: "Na betaling is jouw abonnement binnen 5–7 minuten volledig actief. Je ontvangt de inloggegevens direct via WhatsApp of e-mail." },
      { q: "Op welke apparaten werkt Nederland4K IPTV?", a: "Onze service werkt op alle apparaten: Smart TV, Apple TV, iPhone, iPad, Android, Windows-pc en alle IPTV-apps zoals Smarters, TiviMate en XCIPTV." },
      { q: "Wat houdt de 7 dagen geld-terug-garantie in?", a: "Ben je niet tevreden binnen de eerste 7 dagen? Dan krijg je jouw geld volledig teruggestort, zonder vragen." },
      { q: "Kan ik van pakket wisselen?", a: "Ja, je kunt op elk moment upgraden naar een langer pakket. Neem contact op via WhatsApp voor een snelle overstap." },
      { q: "Is er een ingebouwde VPN?", a: "Ja, alle pakketten bevatten een ingebouwde VPN voor veilig en privé streamen, zonder extra kosten." },
      { q: "Zijn alle premium kanalen beschikbaar?", a: "Ja, inclusief ESPN, Ziggo Sport, Canal+, Bein Sports en meer dan 30.000 andere kanalen uit binnen- en buitenland." },
    ],
  },
  supportPage: {
    badge: "Support", title: "Support", subtitle: "Na jouw betaling sturen wij jouw toegangsgegevens direct via WhatsApp. Heb je een vraag? Neem gerust contact op.",
    waTitle: "WhatsApp", waDesc: "Stuur ons een bericht — wij reageren binnen enkele minuten.", waCta: "Chat starten",
    mailTitle: "E-mail", mailDesc: "Stuur ons een e-mail en wij antwoorden zo snel mogelijk.", mailCta: "Mail sturen",
    note: "Na betaling ontvang je jouw gegevens automatisch via WhatsApp — geen account aanmaken nodig.",
  },
  installPage: {
    badge: "Installatiegids", title: "In enkele minuten", titleAccent: "klaar",
    subtitle: "Volg de stappen voor jouw apparaat. Werkt op elke Smart TV, telefoon, tablet, Firestick of computer — met dezelfde inloggegevens.",
    receiveTitle: "Wat je na je betaling ontvangt",
    receiveText: "Binnen 5–7 minuten sturen wij je via WhatsApp of e-mail je persoonlijke inloggegevens: een Gebruikersnaam, een Wachtwoord en een URL. Die vul je in de app van jouw keuze in — meer is niet nodig.",
    guides: [
      { name: "IPTV Smarters Pro", platforms: ["Android", "iOS", "Smart TV", "Firestick"], steps: ["Download IPTV Smarters Pro uit de App Store, Google Play of de Amazon Appstore.", "Open de app en kies “Login with Xtream Codes API”.", "Vul een willekeurige naam in en plak je Gebruikersnaam, Wachtwoord en URL.", "Tik op “Add User” — al je kanalen en films laden automatisch in."] },
      { name: "TiviMate", platforms: ["Android TV", "Firestick", "Google TV"], steps: ["Installeer TiviMate via Google Play of de Downloader-app op je Firestick.", "Open TiviMate en kies “Add playlist” → “Xtream Codes”.", "Vul je URL, Gebruikersnaam en Wachtwoord in en bevestig.", "Wacht enkele seconden tot de zenderlijst is geladen — klaar om te kijken."] },
      { name: "Apple (iPhone, iPad & Apple TV)", platforms: ["iOS", "iPadOS", "tvOS"], steps: ["Download “Smarters Player Lite” of “IPTV Smarters Pro” uit de App Store.", "Open de app en kies “Login with Xtream Codes API”.", "Voer je Gebruikersnaam, Wachtwoord en URL in.", "Bevestig en geniet direct van al je kanalen in SD, HD, FHD en 4K."] },
      { name: "Smart TV (Samsung & LG)", platforms: ["Tizen", "webOS"], steps: ["Installeer de app “IBO Player”, “Smarters Player Lite” of “Set IPTV” via de TV-appstore.", "Noteer het MAC-adres / Device Key dat de app toont.", "Stuur ons dit MAC-adres via WhatsApp, dan activeren wij je profiel.", "Herstart de app — je zenderlijst verschijnt automatisch."] },
    ],
    downloadTitle: "Download de apps",
    helpTitle: "Hulp nodig bij de installatie?", helpText: "Ons team helpt je stap voor stap via WhatsApp — meestal binnen enkele minuten.",
    helpCta: "Hulp via WhatsApp", packagesCta: "Bekijk de pakketten →",
    helpMessage: "Hallo! Ik heb hulp nodig bij de installatie van Nederland4K IPTV.",
  },
  footer: {
    tagline: "Het beste Nederlandse streamingplatform voor films, series en meer. In HD en 4K kwaliteit.",
    platform: "Platform", help: "Hulp", legal: "Juridisch",
    home: "Home", pricing: "Tarieven", dashboard: "Dashboard", support: "Support", faq: "Veelgestelde vragen", contact: "Contact",
    privacy: "Privacybeleid", terms: "Algemene voorwaarden", cookies: "Cookiebeleid",
    rights: "Alle rechten voorbehouden.", status: "Alle systemen operationeel",
  },
};

// ─── English ──────────────────────────────────────────────────────────────────

const en: Translations = {
  nav: { home: "Home", pricing: "Pricing", install: "Setup", support: "Support", login: "Login" },
  hero: {
    badge: "Now available in the Netherlands",
    title: "Stream your favorite", titleAccent: "content", titleEnd: "in the best quality",
    subtitle: "Enjoy unlimited access to thousands of movies, series and exclusive content. Anytime, anywhere, in stunning HD and 4K Ultra HD quality.",
    cta1: "View Packages", cta2: "Free 24h trial", cta2Message: "Hello! I'd like to activate the free 24-hour trial of Nederland4K IPTV.",
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
  tariffPage: {
    badge: "IPTV Subscriptions", title: "Our", titleAccent: "Pricing",
    subtitle: "Four flexible packages. All with the same premium benefits. Simply choose based on duration.",
    faqTitle: "Frequently asked", faqAccent: "questions",
    faq: [
      { q: "How quickly is my IPTV subscription active?", a: "After payment your subscription is fully active within 5–7 minutes. You receive your login details directly via WhatsApp or email." },
      { q: "On which devices does Nederland4K IPTV work?", a: "Our service works on all devices: Smart TV, Apple TV, iPhone, iPad, Android, Windows PC and all IPTV apps such as Smarters, TiviMate and XCIPTV." },
      { q: "What does the 7-day money-back guarantee include?", a: "Not satisfied within the first 7 days? Then you get a full refund, no questions asked." },
      { q: "Can I switch packages?", a: "Yes, you can upgrade to a longer package at any time. Contact us via WhatsApp for a quick switch." },
      { q: "Is there a built-in VPN?", a: "Yes, all packages include a built-in VPN for safe and private streaming, at no extra cost." },
      { q: "Are all premium channels available?", a: "Yes, including ESPN, Ziggo Sport, Canal+, Bein Sports and more than 30,000 other channels from home and abroad." },
    ],
  },
  supportPage: {
    badge: "Support", title: "Support", subtitle: "After your payment we send your access details directly via WhatsApp. Have a question? Feel free to get in touch.",
    waTitle: "WhatsApp", waDesc: "Send us a message — we reply within minutes.", waCta: "Start chat",
    mailTitle: "Email", mailDesc: "Send us an email and we'll reply as soon as possible.", mailCta: "Send mail",
    note: "After payment you automatically receive your details via WhatsApp — no account needed.",
  },
  installPage: {
    badge: "Setup Guide", title: "Ready in", titleAccent: "minutes",
    subtitle: "Follow the steps for your device. Works on any Smart TV, phone, tablet, Firestick or computer — with the same login details.",
    receiveTitle: "What you receive after payment",
    receiveText: "Within 5–7 minutes we send you your personal login details via WhatsApp or email: a Username, a Password and a URL. You enter these in the app of your choice — nothing more needed.",
    guides: [
      { name: "IPTV Smarters Pro", platforms: ["Android", "iOS", "Smart TV", "Firestick"], steps: ["Download IPTV Smarters Pro from the App Store, Google Play or the Amazon Appstore.", "Open the app and choose “Login with Xtream Codes API”.", "Enter any name and paste your Username, Password and URL.", "Tap “Add User” — all your channels and movies load automatically."] },
      { name: "TiviMate", platforms: ["Android TV", "Firestick", "Google TV"], steps: ["Install TiviMate via Google Play or the Downloader app on your Firestick.", "Open TiviMate and choose “Add playlist” → “Xtream Codes”.", "Enter your URL, Username and Password and confirm.", "Wait a few seconds for the channel list to load — ready to watch."] },
      { name: "Apple (iPhone, iPad & Apple TV)", platforms: ["iOS", "iPadOS", "tvOS"], steps: ["Download “Smarters Player Lite” or “IPTV Smarters Pro” from the App Store.", "Open the app and choose “Login with Xtream Codes API”.", "Enter your Username, Password and URL.", "Confirm and enjoy all your channels in SD, HD, FHD and 4K."] },
      { name: "Smart TV (Samsung & LG)", platforms: ["Tizen", "webOS"], steps: ["Install the app “IBO Player”, “Smarters Player Lite” or “Set IPTV” via the TV app store.", "Note the MAC address / Device Key the app shows.", "Send us this MAC address via WhatsApp, then we activate your profile.", "Restart the app — your channel list appears automatically."] },
    ],
    downloadTitle: "Download the apps",
    helpTitle: "Need help with the setup?", helpText: "Our team helps you step by step via WhatsApp — usually within minutes.",
    helpCta: "Help via WhatsApp", packagesCta: "View the packages →",
    helpMessage: "Hello! I need help setting up Nederland4K IPTV.",
  },
  footer: {
    tagline: "The best Dutch streaming platform for movies, series and more. In HD and 4K quality.",
    platform: "Platform", help: "Help", legal: "Legal",
    home: "Home", pricing: "Pricing", dashboard: "Dashboard", support: "Support", faq: "FAQ", contact: "Contact",
    privacy: "Privacy policy", terms: "Terms & conditions", cookies: "Cookie policy",
    rights: "All rights reserved.", status: "All systems operational",
  },
};

// ─── French ───────────────────────────────────────────────────────────────────

const fr: Translations = {
  nav: { home: "Accueil", pricing: "Tarifs", install: "Installation", support: "Support", login: "Connexion" },
  hero: {
    badge: "Maintenant disponible aux Pays-Bas",
    title: "Streamez votre", titleAccent: "contenu préféré", titleEnd: "dans la meilleure qualité",
    subtitle: "Profitez d'un accès illimité à des milliers de films, séries et contenus exclusifs. Où que vous soyez, en HD et 4K Ultra HD éblouissant.",
    cta1: "Voir les forfaits", cta2: "Essai gratuit 24h", cta2Message: "Bonjour ! Je souhaite activer l'essai gratuit de 24h de Nederland4K IPTV.",
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
  tariffPage: {
    badge: "Abonnements IPTV", title: "Nos", titleAccent: "Tarifs",
    subtitle: "Quatre forfaits flexibles. Tous avec les mêmes avantages premium. Choisissez simplement selon la durée.",
    faqTitle: "Questions", faqAccent: "fréquentes",
    faq: [
      { q: "En combien de temps mon abonnement IPTV est-il actif ?", a: "Après le paiement, votre abonnement est entièrement actif en 5–7 minutes. Vous recevez vos identifiants directement via WhatsApp ou e-mail." },
      { q: "Sur quels appareils fonctionne Nederland4K IPTV ?", a: "Notre service fonctionne sur tous les appareils : Smart TV, Apple TV, iPhone, iPad, Android, PC Windows et toutes les applis IPTV comme Smarters, TiviMate et XCIPTV." },
      { q: "Que comprend la garantie satisfait ou remboursé de 7 jours ?", a: "Pas satisfait durant les 7 premiers jours ? Vous êtes intégralement remboursé, sans aucune question." },
      { q: "Puis-je changer de forfait ?", a: "Oui, vous pouvez passer à un forfait plus long à tout moment. Contactez-nous via WhatsApp pour un changement rapide." },
      { q: "Y a-t-il un VPN intégré ?", a: "Oui, tous les forfaits incluent un VPN intégré pour un streaming sûr et privé, sans frais supplémentaires." },
      { q: "Toutes les chaînes premium sont-elles disponibles ?", a: "Oui, y compris ESPN, Ziggo Sport, Canal+, Bein Sports et plus de 30 000 autres chaînes nationales et internationales." },
    ],
  },
  supportPage: {
    badge: "Support", title: "Support", subtitle: "Après votre paiement, nous envoyons vos accès directement via WhatsApp. Une question ? N'hésitez pas à nous contacter.",
    waTitle: "WhatsApp", waDesc: "Envoyez-nous un message — nous répondons en quelques minutes.", waCta: "Démarrer le chat",
    mailTitle: "E-mail", mailDesc: "Envoyez-nous un e-mail et nous répondons au plus vite.", mailCta: "Envoyer un mail",
    note: "Après le paiement, vous recevez automatiquement vos accès via WhatsApp — aucun compte à créer.",
  },
  installPage: {
    badge: "Guide d'installation", title: "Prêt en quelques", titleAccent: "minutes",
    subtitle: "Suivez les étapes pour votre appareil. Fonctionne sur toute Smart TV, téléphone, tablette, Firestick ou ordinateur — avec les mêmes identifiants.",
    receiveTitle: "Ce que vous recevez après le paiement",
    receiveText: "En 5–7 minutes, nous vous envoyons vos identifiants personnels via WhatsApp ou e-mail : un Nom d'utilisateur, un Mot de passe et une URL. Vous les saisissez dans l'appli de votre choix — rien de plus.",
    guides: [
      { name: "IPTV Smarters Pro", platforms: ["Android", "iOS", "Smart TV", "Firestick"], steps: ["Téléchargez IPTV Smarters Pro depuis l'App Store, Google Play ou l'Amazon Appstore.", "Ouvrez l'appli et choisissez « Login with Xtream Codes API ».", "Saisissez un nom au choix et collez votre Nom d'utilisateur, Mot de passe et URL.", "Appuyez sur « Add User » — toutes vos chaînes et films se chargent automatiquement."] },
      { name: "TiviMate", platforms: ["Android TV", "Firestick", "Google TV"], steps: ["Installez TiviMate via Google Play ou l'appli Downloader sur votre Firestick.", "Ouvrez TiviMate et choisissez « Add playlist » → « Xtream Codes ».", "Saisissez votre URL, Nom d'utilisateur et Mot de passe puis confirmez.", "Patientez quelques secondes que la liste des chaînes se charge — c'est prêt."] },
      { name: "Apple (iPhone, iPad & Apple TV)", platforms: ["iOS", "iPadOS", "tvOS"], steps: ["Téléchargez « Smarters Player Lite » ou « IPTV Smarters Pro » depuis l'App Store.", "Ouvrez l'appli et choisissez « Login with Xtream Codes API ».", "Saisissez votre Nom d'utilisateur, Mot de passe et URL.", "Confirmez et profitez de toutes vos chaînes en SD, HD, FHD et 4K."] },
      { name: "Smart TV (Samsung & LG)", platforms: ["Tizen", "webOS"], steps: ["Installez l'appli « IBO Player », « Smarters Player Lite » ou « Set IPTV » via le store de la TV.", "Notez l'adresse MAC / Device Key affichée par l'appli.", "Envoyez-nous cette adresse MAC via WhatsApp, puis nous activons votre profil.", "Redémarrez l'appli — votre liste de chaînes apparaît automatiquement."] },
    ],
    downloadTitle: "Téléchargez les applis",
    helpTitle: "Besoin d'aide pour l'installation ?", helpText: "Notre équipe vous accompagne pas à pas via WhatsApp — généralement en quelques minutes.",
    helpCta: "Aide via WhatsApp", packagesCta: "Voir les forfaits →",
    helpMessage: "Bonjour ! J'ai besoin d'aide pour installer Nederland4K IPTV.",
  },
  footer: {
    tagline: "La meilleure plateforme de streaming néerlandaise pour films, séries et plus. En qualité HD et 4K.",
    platform: "Plateforme", help: "Aide", legal: "Légal",
    home: "Accueil", pricing: "Tarifs", dashboard: "Tableau de bord", support: "Support", faq: "Questions fréquentes", contact: "Contact",
    privacy: "Politique de confidentialité", terms: "Conditions générales", cookies: "Politique de cookies",
    rights: "Tous droits réservés.", status: "Tous les systèmes opérationnels",
  },
};

// ─── German ───────────────────────────────────────────────────────────────────

const de: Translations = {
  nav: { home: "Startseite", pricing: "Preise", install: "Installation", support: "Support", login: "Anmelden" },
  hero: {
    badge: "Jetzt in den Niederlanden verfügbar",
    title: "Streame deinen lieblings", titleAccent: "Content", titleEnd: "in bester Qualität",
    subtitle: "Genieße unbegrenzten Zugang zu Tausenden von Filmen, Serien und exklusiven Inhalten. Jederzeit und überall, in atemberaubender HD- und 4K Ultra HD-Qualität.",
    cta1: "Pakete ansehen", cta2: "24h kostenlos testen", cta2Message: "Hallo! Ich möchte die kostenlose 24-Stunden-Testversion von Nederland4K IPTV aktivieren.",
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
  tariffPage: {
    badge: "IPTV-Abonnements", title: "Unsere", titleAccent: "Preise",
    subtitle: "Vier flexible Pakete. Alle mit denselben Premium-Vorteilen. Wähle einfach nach Laufzeit.",
    faqTitle: "Häufig gestellte", faqAccent: "Fragen",
    faq: [
      { q: "Wie schnell ist mein IPTV-Abo aktiv?", a: "Nach der Zahlung ist dein Abo innerhalb von 5–7 Minuten vollständig aktiv. Du erhältst deine Zugangsdaten direkt per WhatsApp oder E-Mail." },
      { q: "Auf welchen Geräten funktioniert Nederland4K IPTV?", a: "Unser Dienst funktioniert auf allen Geräten: Smart TV, Apple TV, iPhone, iPad, Android, Windows-PC und allen IPTV-Apps wie Smarters, TiviMate und XCIPTV." },
      { q: "Was beinhaltet die 7-Tage-Geld-zurück-Garantie?", a: "Nicht zufrieden in den ersten 7 Tagen? Dann erhältst du dein Geld vollständig zurück, ohne Fragen." },
      { q: "Kann ich das Paket wechseln?", a: "Ja, du kannst jederzeit auf ein längeres Paket upgraden. Kontaktiere uns per WhatsApp für einen schnellen Wechsel." },
      { q: "Gibt es ein integriertes VPN?", a: "Ja, alle Pakete enthalten ein integriertes VPN für sicheres und privates Streaming, ohne Mehrkosten." },
      { q: "Sind alle Premium-Kanäle verfügbar?", a: "Ja, inklusive ESPN, Ziggo Sport, Canal+, Bein Sports und mehr als 30.000 weiteren Kanälen aus dem In- und Ausland." },
    ],
  },
  supportPage: {
    badge: "Support", title: "Support", subtitle: "Nach deiner Zahlung senden wir deine Zugangsdaten direkt per WhatsApp. Hast du eine Frage? Kontaktiere uns gerne.",
    waTitle: "WhatsApp", waDesc: "Schreib uns eine Nachricht — wir antworten innerhalb von Minuten.", waCta: "Chat starten",
    mailTitle: "E-Mail", mailDesc: "Schreib uns eine E-Mail und wir antworten so schnell wie möglich.", mailCta: "Mail senden",
    note: "Nach der Zahlung erhältst du deine Daten automatisch per WhatsApp — kein Konto nötig.",
  },
  installPage: {
    badge: "Installationsanleitung", title: "In wenigen", titleAccent: "Minuten bereit",
    subtitle: "Folge den Schritten für dein Gerät. Funktioniert auf jedem Smart TV, Handy, Tablet, Firestick oder Computer — mit denselben Zugangsdaten.",
    receiveTitle: "Was du nach der Zahlung erhältst",
    receiveText: "Innerhalb von 5–7 Minuten senden wir dir deine persönlichen Zugangsdaten per WhatsApp oder E-Mail: einen Benutzernamen, ein Passwort und eine URL. Diese gibst du in der App deiner Wahl ein — mehr ist nicht nötig.",
    guides: [
      { name: "IPTV Smarters Pro", platforms: ["Android", "iOS", "Smart TV", "Firestick"], steps: ["Lade IPTV Smarters Pro aus dem App Store, Google Play oder dem Amazon Appstore.", "Öffne die App und wähle „Login with Xtream Codes API“.", "Gib einen beliebigen Namen ein und füge deinen Benutzernamen, dein Passwort und deine URL ein.", "Tippe auf „Add User“ — alle Kanäle und Filme laden automatisch."] },
      { name: "TiviMate", platforms: ["Android TV", "Firestick", "Google TV"], steps: ["Installiere TiviMate über Google Play oder die Downloader-App auf deinem Firestick.", "Öffne TiviMate und wähle „Add playlist“ → „Xtream Codes“.", "Gib deine URL, deinen Benutzernamen und dein Passwort ein und bestätige.", "Warte einige Sekunden, bis die Kanalliste geladen ist — bereit zum Schauen."] },
      { name: "Apple (iPhone, iPad & Apple TV)", platforms: ["iOS", "iPadOS", "tvOS"], steps: ["Lade „Smarters Player Lite“ oder „IPTV Smarters Pro“ aus dem App Store.", "Öffne die App und wähle „Login with Xtream Codes API“.", "Gib deinen Benutzernamen, dein Passwort und deine URL ein.", "Bestätige und genieße alle Kanäle in SD, HD, FHD und 4K."] },
      { name: "Smart TV (Samsung & LG)", platforms: ["Tizen", "webOS"], steps: ["Installiere die App „IBO Player“, „Smarters Player Lite“ oder „Set IPTV“ über den TV-App-Store.", "Notiere die MAC-Adresse / den Device Key, den die App anzeigt.", "Sende uns diese MAC-Adresse per WhatsApp, dann aktivieren wir dein Profil.", "Starte die App neu — deine Kanalliste erscheint automatisch."] },
    ],
    downloadTitle: "Lade die Apps herunter",
    helpTitle: "Hilfe bei der Installation?", helpText: "Unser Team hilft dir Schritt für Schritt per WhatsApp — meist innerhalb von Minuten.",
    helpCta: "Hilfe per WhatsApp", packagesCta: "Pakete ansehen →",
    helpMessage: "Hallo! Ich brauche Hilfe bei der Installation von Nederland4K IPTV.",
  },
  footer: {
    tagline: "Die beste niederländische Streaming-Plattform für Filme, Serien und mehr. In HD- und 4K-Qualität.",
    platform: "Plattform", help: "Hilfe", legal: "Rechtliches",
    home: "Startseite", pricing: "Preise", dashboard: "Dashboard", support: "Support", faq: "Häufige Fragen", contact: "Kontakt",
    privacy: "Datenschutz", terms: "AGB", cookies: "Cookie-Richtlinie",
    rights: "Alle Rechte vorbehalten.", status: "Alle Systeme betriebsbereit",
  },
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
