"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/i18n";
import { whatsappLink } from "@/lib/contact";

export default function HeroSection() {
  const { t } = useTranslations();
  const h = t.hero;
  const trialWhatsapp = whatsappLink(h.cta2Message);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Sports background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/sports-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none" />
      {/* Gradient vignette edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />
      {/* Purple accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-48 rounded-full bg-neon-purple/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-pulse" />
          {h.badge}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          {h.title}{" "}
          <span className="text-gradient">{h.titleAccent}</span>
          <br />
          {h.titleEnd}
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10">
          {h.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/tarieven"
            className="
              inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
              bg-gradient-to-r from-neon-purple to-purple-600
              text-white text-base font-semibold
              shadow-neon hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
              hover:scale-105 transition-all duration-200
            "
          >
            {h.cta1}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={trialWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
              bg-surface-2 border border-border
              text-text-primary text-base font-semibold
              hover:border-neon-purple/50 hover:bg-surface
              transition-all duration-200
            "
          >
            {/* WhatsApp icon */}
            <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            {h.cta2}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
          {h.stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-xl sm:text-2xl font-bold text-gradient">{stat.value}</span>
              <span className="text-xs sm:text-sm text-text-muted text-center">{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-text-muted">{h.trust}</p>
      </div>
    </section>
  );
}
