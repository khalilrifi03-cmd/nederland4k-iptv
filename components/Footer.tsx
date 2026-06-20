"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

// ─── Sociale media (vervang de URL's door jouw eigen profielen) ───────────────

interface Social {
  name: string;
  href: string;
  hoverClass: string;
  path: string;
}

const socials: Social[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    hoverClass: "hover:text-[#E1306C] hover:border-[#E1306C]/50",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/",
    hoverClass: "hover:text-[#1877F2] hover:border-[#1877F2]/50",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.247.42-.357.96-.357 1.634v1.408h3.917l-.193 1.832-.32 1.835h-3.404v7.98H9.101z",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    hoverClass: "hover:text-white hover:border-white/60",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

export default function Footer() {
  const { t } = useTranslations();
  const f = t.footer;
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: f.platform,
      links: [
        { label: f.home, href: "/" },
        { label: f.pricing, href: "/tarieven" },
        { label: f.dashboard, href: "/dashboard" },
      ],
    },
    {
      title: f.help,
      links: [
        { label: f.support, href: "/support" },
        { label: f.faq, href: "/faq" },
        { label: f.contact, href: "/contact" },
      ],
    },
    {
      title: f.legal,
      links: [
        { label: f.privacy, href: "/privacy" },
        { label: f.terms, href: "/voorwaarden" },
        { label: f.cookies, href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Merk */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex-shrink-0 overflow-hidden shadow-[0_0_16px_rgba(249,115,22,0.4)]"
                style={{ background: "linear-gradient(135deg, #f97316 0%, #e11d48 50%, #3b4ce8 100%)" }}
              >
                <svg viewBox="0 0 36 36" className="w-full h-full" fill="none">
                  <rect x="3" y="5" width="30" height="22" rx="3" stroke="white" strokeWidth="2" fill="none" />
                  <line x1="13" y1="27" x2="13" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="23" y1="27" x2="23" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <line x1="9" y1="31" x2="27" y2="31" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <text x="7" y="21" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="12" fill="white" letterSpacing="-0.5">N4K</text>
                </svg>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-[#f97316] via-[#e11d48] to-[#3b4ce8] bg-clip-text text-transparent">Nederland4K IPTV</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              {f.tagline}
            </p>
            <div className="flex gap-3 mt-5">
              {/* Social icons */}
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-text-muted transition-colors ${social.hoverClass}`}
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-neon-purple transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Onderkant */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Nederland4K IPTV. {f.rights}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-xs text-text-muted">{f.status}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
