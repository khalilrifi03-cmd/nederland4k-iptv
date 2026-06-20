"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Home, Tag, BookOpen, LifeBuoy, Sun, Moon, ChevronDown } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useTranslations, type Locale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

// ─── Language config ──────────────────────────────────────────────────────────

const LANGUAGES: { code: Locale; label: string; img: string }[] = [
  { code: "nl", label: "Nederlands", img: "https://flagcdn.com/w40/nl.png" },
  { code: "en", label: "English",    img: "https://flagcdn.com/w40/gb.png" },
  { code: "fr", label: "Français",   img: "https://flagcdn.com/w40/fr.png" },
  { code: "de", label: "Deutsch",    img: "https://flagcdn.com/w40/de.png" },
];

// ─── Theme toggle ─────────────────────────────────────────────────────────────

function ThemeToggle() {
  const { isDark, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#1e1e3a] bg-[#0f0f1a]/60 hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-200 text-text-secondary hover:text-neon-purple"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}

// ─── Language selector ────────────────────────────────────────────────────────

function LanguageSelector() {
  const { locale, setLocale } = useTranslations();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 h-9 rounded-lg border border-[#1e1e3a] bg-[#0f0f1a]/60 hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-200 text-sm font-medium text-text-secondary hover:text-white"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={current.img} alt={current.label} className="w-6 h-4 rounded-sm object-cover flex-shrink-0" />
        <span className="hidden sm:inline uppercase tracking-wide text-xs">{current.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border border-[#1e1e3a] bg-[#0f0f1a] shadow-2xl shadow-black/60 overflow-hidden z-50">
          {LANGUAGES.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => { setLocale(lang.code); setOpen(false); }}
              className={`
                w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150
                ${locale === lang.code
                  ? "bg-neon-purple/15 text-white font-semibold"
                  : "text-text-secondary hover:bg-white/5 hover:text-white"
                }
              `}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lang.img} alt={lang.label} className="w-6 h-4 rounded-sm object-cover flex-shrink-0" />
              {lang.label}
              {locale === lang.code && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-neon-purple" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const { t, locale } = useTranslations();

  const navItems = [
    { name: t.nav.home,    url: "/",            icon: Home     },
    { name: t.nav.pricing, url: "/tarieven",    icon: Tag      },
    { name: t.nav.install, url: "/installatie", icon: BookOpen },
    { name: t.nav.support, url: "/support",     icon: LifeBuoy },
  ];

  return (
    <>
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 h-16 bg-[#07070f]/80 backdrop-blur-xl border-b border-[#1e1e3a] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            {/* N4K icon mark */}
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden shadow-[0_0_16px_rgba(249,115,22,0.4)]"
              style={{ background: "linear-gradient(135deg, #f97316 0%, #e11d48 50%, #3b4ce8 100%)" }}
            >
              <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
                {/* TV monitor outline */}
                <rect x="3" y="5" width="30" height="22" rx="3" stroke="white" strokeWidth="2" fill="none" />
                <line x1="13" y1="27" x2="13" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="23" y1="27" x2="23" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="9" y1="31" x2="27" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
                {/* N4K text */}
                <text x="7" y="21" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="12" fill="white" letterSpacing="-0.5">N4K</text>
              </svg>
            </div>
            <span className="text-base font-extrabold bg-gradient-to-r from-[#f97316] via-[#e11d48] to-[#3b4ce8] bg-clip-text text-transparent leading-tight">
              Nederland<span className="text-white">4K</span> IPTV
            </span>
          </Link>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </header>

      {/* Tubelight floating pill */}
      <NavBar key={locale} items={navItems} />
    </>
  );
}
