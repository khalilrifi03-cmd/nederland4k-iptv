import Link from "next/link";

interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}

const footerSections: FooterSection[] = [
  {
    title: "Platform",
    links: [
      { label: "Home", href: "/" },
      { label: "Tarieven", href: "/tarieven" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Hulp",
    links: [
      { label: "Support", href: "/support" },
      { label: "Veelgestelde vragen", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Juridisch",
    links: [
      { label: "Privacybeleid", href: "/privacy" },
      { label: "Algemene voorwaarden", href: "/voorwaarden" },
      { label: "Cookiebeleid", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              Het beste Nederlandse streamingplatform voor films, series en meer. In HD en 4K kwaliteit.
            </p>
            <div className="flex gap-3 mt-5">
              {/* Social icons */}
              {["twitter", "instagram", "facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-lg bg-surface-2 border border-border flex items-center justify-center text-text-muted hover:text-neon-purple hover:border-neon-purple/50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" />
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
            &copy; {currentYear} Nederland4K IPTV. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-xs text-text-muted">Alle systemen operationeel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
