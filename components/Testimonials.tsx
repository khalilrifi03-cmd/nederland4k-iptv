"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { useTranslations } from "@/lib/i18n";

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
  {
    text: "Eindelijk een IPTV-aanbieder die echt levert wat ze beloven. Binnen 5 minuten was alles actief op mijn Smart TV. Geen haperingen tijdens de Formule 1 en de Eredivisie-wedstrijden op ESPN. Top service!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Lars van der Meer",
    role: "Amsterdam",
  },
  {
    text: "Geweldige selectie aan zenders en VOD films! Wat ik vooral fijn vind, is de ingebouwde VPN. Hierdoor kijk ik altijd veilig en anoniem. De prijs-kwaliteitverhouding is onverslaanbaar.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Anouk de Jong",
    role: "Utrecht",
  },
  {
    text: "Ik twijfelde eerst, maar de 7 dagen geld-terug-garantie trok me over de streep. Nu wil ik niets anders meer. Ziggo Sport werkt perfect in 4K en de WhatsApp-ondersteuning reageert super snel.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Sven Bakker",
    role: "Rotterdam",
  },
  {
    text: "Ideaal systeem. Het werkt vlekkeloos op zowel mijn iPhone als de tablet van de kinderen. Installatie handleiding was heel duidelijk. Zeker een aanrader voor iedereen in Nederland.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Fleur Hendriks",
    role: "Eindhoven",
  },
  {
    text: "Ik gebruik het nu een half jaar op mijn Formuler box en het draait als een zonnetje. De zenders zappen ontzettend snel en de 4K-kwaliteit is haarscherp. Geen hapering gezien tijdens de Champions League.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Daan de Wit",
    role: "Groningen",
  },
  {
    text: "De klantenservice via WhatsApp is echt fantastisch. Ik wist niet goed hoe ik het moest instellen op mijn Apple TV, maar ik werd stap voor stap vriendelijk geholpen. Binnen no-time werkte alles!",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Lieke Vermaas",
    role: "Den Haag",
  },
  {
    text: "Met meer dan 30.000 zenders raak je nooit uitgekeken. Mijn vrouw kijkt graag buitenlandse kookprogramma's en voor mij zijn alle premium sportkanalen beschikbaar. Beste aankoop van het jaar.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Bram Schouten",
    role: "Tilburg",
  },
  {
    text: "Wat een gigantische bibliotheek aan VOD films en series! Wekelijks worden er nieuwe bioscoopfilms toegevoegd met Nederlandse ondertiteling. De verbinding is stabiel en buffert nooit.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    name: "Sanne van Dijk",
    role: "Almere",
  },
  {
    text: "Super tevreden met het 2-jarige pakket. Voor die prijs kun je het echt niet laten liggen. De app werkt intuïtief en de beeldkwaliteit in FHD en 4K op mijn LG TV is perfect.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Thomas de Graaf",
    role: "Breda",
  },
];

const firstColumn  = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn  = testimonials.slice(6, 9);

// ─── Main export ──────────────────────────────────────────────────────────────

export default function Testimonials() {
  const { t } = useTranslations();
  const tr = t.testimonials;

  return (
    <section className="py-20 relative overflow-hidden bg-surface/30">
      <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-[#82F413]/30 bg-[#82F413]/10 text-[#82F413] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#82F413] animate-pulse" />
            {tr.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {tr.title}{" "}
            <span className="text-gradient">{tr.titleHighlight}</span>
          </h2>
          <p className="text-[#94a3b8] text-lg">{tr.subtitle}</p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 mt-10 overflow-hidden max-h-[720px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={18}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={22}
            className="hidden md:block"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            duration={20}
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
