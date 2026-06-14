import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";

export const metadata: Metadata = {
  title: "Tarieven — Nederland4K IPTV",
  description:
    "Bekijk onze IPTV abonnementspakketten. SD, HD, FHD en 4K kwaliteit. +30.000 kanalen en +100.000 VOD titels.",
};

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Hoe snel is mijn IPTV abonnement actief?",
    answer:
      "Na betaling is jouw abonnement binnen 5–7 minuten volledig actief. Je ontvangt de inloggegevens direct via WhatsApp of e-mail.",
  },
  {
    question: "Op welke apparaten werkt Nederland4K IPTV IPTV?",
    answer:
      "Onze service werkt op alle apparaten: Smart TV, Apple TV, iPhone, iPad, Android, Windows-pc en alle IPTV-apps zoals Smarters, TiviMate en XCIPTV.",
  },
  {
    question: "Wat houdt de 7 dagen geld-terug-garantie in?",
    answer:
      "Ben je niet tevreden binnen de eerste 7 dagen? Dan krijg je jouw geld volledig teruggestort, zonder vragen.",
  },
  {
    question: "Kan ik van pakket wisselen?",
    answer:
      "Ja, je kunt op elk moment upgraden naar een langer pakket. Neem contact op via WhatsApp voor een snelle overstap.",
  },
  {
    question: "Is er een ingebouwde VPN?",
    answer:
      "Ja, alle pakketten bevatten een ingebouwde VPN voor veilig en privé streamen, zonder extra kosten.",
  },
  {
    question: "Zijn alle premium kanalen beschikbaar?",
    answer:
      "Ja, inclusief ESPN, Ziggo Sport, Canal+, Bein Sports en meer dan 30.000 andere kanalen uit binnen- en buitenland.",
  },
];

export default function TarievenPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(130,244,19,0.12), transparent)" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-[#82F413]/30 bg-[#82F413]/10 text-[#82F413] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#82F413] animate-pulse" />
            IPTV Abonnementen
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Onze <span className="text-gradient">Tarieven</span>
          </h1>
          <p className="text-[#94a3b8] text-lg">
            Vier flexibele pakketten. Allemaal met dezelfde premium voordelen.
            Kies eenvoudig op basis van looptijd.
          </p>
        </div>
      </div>

      {/* Pakketkaarten */}
      <PricingCards />

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Veelgestelde <span className="text-gradient">vragen</span>
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#82F413]/20 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-[#82F413]">▸</span>
                  {item.question}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed pl-5">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
