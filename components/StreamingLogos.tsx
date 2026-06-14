"use client";

import React from "react";
import { useTranslations } from "@/lib/i18n";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  name: string;
  src: string;
  bg: string;
  padded?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const row1: Service[] = [
  { id: "netflix",    name: "Netflix",         src: "/logos/streaming/netflix.svg",    bg: "#E50914"                              },
  { id: "hbomax",     name: "HBO Max",          src: "/logos/streaming/hbomax.svg",     bg: "linear-gradient(135deg,#2d0077,#7b2fbe)" },
  { id: "disney",     name: "Disney+",          src: "/logos/streaming/disney.svg",     bg: "#0A2463"                              },
  { id: "prime",      name: "Prime Video",      src: "/logos/streaming/prime.svg",      bg: "#232F3E"                              },
  { id: "appletv",    name: "Apple TV+",        src: "/logos/streaming/appletv.svg",    bg: "#1c1c1e", padded: true              },
  { id: "hulu",       name: "Hulu",             src: "/logos/streaming/hulu.svg",       bg: "#1CE783"                              },
  { id: "youtube",    name: "YouTube",          src: "/logos/streaming/youtube.svg",    bg: "#FF0000", padded: true              },
  { id: "paramount",  name: "Paramount+",       src: "/logos/streaming/paramount.svg",  bg: "#0064FF", padded: true              },
  { id: "peacock",    name: "Peacock",          src: "/logos/streaming/peacock.svg",    bg: "#000000"                              },
  { id: "discovery",  name: "Discovery+",       src: "/logos/streaming/discovery.svg",  bg: "#052978"                              },
];

const row2: Service[] = [
  { id: "dazn",       name: "DAZN",             src: "/logos/streaming/dazn.svg",       bg: "#000000", padded: true              },
  { id: "espn",       name: "ESPN",             src: "/logos/streaming/espn.svg",       bg: "#1a1a2e"                              },
  { id: "canal",      name: "Canal+",           src: "/logos/streaming/canal.svg",      bg: "#000000"                              },
  { id: "eurosport",  name: "Eurosport",        src: "/logos/streaming/eurosport.svg",  bg: "#003087"                              },
  { id: "ziggo",      name: "Ziggo Sport",      src: "/logos/streaming/ziggo.svg",      bg: "#FF6200", padded: true              },
  { id: "videoland",  name: "Videoland",        src: "/logos/streaming/videoland.svg",  bg: "#1a001a"                              },
  { id: "viaplay",    name: "Viaplay",          src: "/logos/streaming/viaplay.svg",    bg: "#0a0a0a", padded: true              },
  { id: "rtl",        name: "RTL+",             src: "/logos/streaming/rtl.svg",        bg: "#FF3C00", padded: true              },
  { id: "bein",       name: "beIN Sports",      src: "/logos/streaming/bein.svg",       bg: "#0d0d0d"                              },
  { id: "fox",        name: "FOX Sports",       src: "/logos/streaming/fox.svg",        bg: "#003087", padded: true              },
];

// ─── Single service card ──────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="stream-logo-card flex-shrink-0 w-40 h-24 rounded-2xl flex flex-col items-center justify-center overflow-hidden"
      style={{ "--service-bg": service.bg } as React.CSSProperties}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={service.src}
        alt={service.name}
        className={`w-full h-full object-contain${service.padded ? " p-3" : " p-2"}`}
        loading="lazy"
      />
    </div>
  );
}

// ─── Marquee row ──────────────────────────────────────────────────────────────

function ScrollRow({ services, reverse = false }: { services: Service[]; reverse?: boolean }) {
  const doubled = [...services, ...services];
  return (
    <div className="scroll-container-stream overflow-hidden">
      <div className={`stream-scroll flex gap-4 w-max${reverse ? " stream-scroll-reverse" : ""}`}>
        {doubled.map((service, idx) => (
          <ServiceCard key={`${service.id}-${idx}`} service={service} />
        ))}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function StreamingLogos() {
  const { t } = useTranslations();
  const s = t.streaming;

  return (
    <section className="py-20 overflow-hidden bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
          {s.badge}
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          {s.title}{" "}
          <span className="text-gradient">{s.titleHighlight}</span>
        </h2>
        <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">{s.subtitle}</p>
      </div>

      <ScrollRow services={row1} />
      <div className="mt-4">
        <ScrollRow services={row2} reverse />
      </div>

      <p className="text-center text-[#475569] text-sm mt-10">{s.footer}</p>
    </section>
  );
}
