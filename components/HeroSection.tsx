"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

export default function HeroSection() {
  const { t } = useTranslations();
  const h = t.hero;

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
          <Link
            href="/inloggen"
            className="
              inline-flex items-center gap-2 px-8 py-3.5 rounded-xl
              bg-surface-2 border border-border
              text-text-primary text-base font-semibold
              hover:border-neon-purple/50 hover:bg-surface
              transition-all duration-200
            "
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            {h.cta2}
          </Link>
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
