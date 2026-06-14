"use client";

import React from "react";
import { useTranslations } from "@/lib/i18n";

// ─── Types ────────────────────────────────────────────────────────────────────

interface League {
  id: string;
  name: string;
  subtitle: string;
  src: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const row1: League[] = [
  { id: "premier-league",  name: "Premier League",  subtitle: "Engeland",  src: "/logos/premier-league.jpg"  },
  { id: "champions-league",name: "Champions League",subtitle: "UEFA",      src: "/logos/champions-league.jpg"},
  { id: "laliga",          name: "La Liga",          subtitle: "Spanje",    src: "/logos/laliga.jpg"          },
  { id: "serie-a",         name: "Serie A",          subtitle: "Italië",    src: "/logos/serie-a.jpg"         },
  { id: "formula1",        name: "Formule 1",        subtitle: "Motorsport",src: "/logos/formula1.webp"       },
];

const row2: League[] = [
  { id: "bundesliga",      name: "Bundesliga",       subtitle: "Duitsland", src: "/logos/bundesliga.jpg"      },
  { id: "ligue1",          name: "Ligue 1",           subtitle: "Frankrijk", src: "/logos/ligue1.jpg"          },
  { id: "world-cup",       name: "FIFA World Cup",   subtitle: "2026",      src: "/logos/world-cup.jpg"       },
  { id: "nba",             name: "NBA",               subtitle: "Basketball",src: "/logos/nba.webp"            },
  { id: "europa-league",   name: "Europa League",    subtitle: "UEFA",      src: "/logos/europa-league.jpg"   },
];

// ─── Single logo card ─────────────────────────────────────────────────────────

function LogoCard({ league }: { league: League }) {
  return (
    <div className="logo-card flex-shrink-0 w-44 rounded-2xl overflow-hidden bg-white shadow-lg">
      <div className="h-32 flex items-center justify-center p-4 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={league.src}
          alt={league.name}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="bg-[#0f0f1a] px-3 py-2.5 border-t border-white/10">
        <p className="text-white font-bold text-xs leading-tight truncate">{league.name}</p>
        <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">{league.subtitle}</p>
      </div>
    </div>
  );
}

// ─── Marquee row ──────────────────────────────────────────────────────────────

function ScrollRow({ leagues, reverse = false }: { leagues: League[]; reverse?: boolean }) {
  const doubled = [...leagues, ...leagues];
  return (
    <div className="scroll-container-sports overflow-hidden">
      <div className={`logo-scroll flex gap-5 w-max${reverse ? " logo-scroll-reverse" : ""}`}>
        {doubled.map((league, idx) => (
          <LogoCard key={`${league.id}-${idx}`} league={league} />
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function SportsAnimation() {
  const { t } = useTranslations();
  const s = t.sports;

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-[#82F413]/30 bg-[#82F413]/10 text-[#82F413] text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#82F413] animate-pulse" />
          {s.badge}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {s.title}{" "}
          <span className="text-gradient">{s.titleHighlight}</span>
        </h2>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">{s.subtitle}</p>
      </div>

      <ScrollRow leagues={row1} />
      <div className="mt-5">
        <ScrollRow leagues={row2} reverse />
      </div>

      <p className="text-center text-[#475569] text-sm mt-10">{s.footer}</p>
    </section>
  );
}
