"use client";

import Link from "next/link";
import { whatsappLink } from "@/lib/contact";
import { useTranslations } from "@/lib/i18n";

const downloads: { name: string; href: string }[] = [
  { name: "IPTV Smarters Pro", href: "https://www.iptvsmarters.com/" },
  { name: "TiviMate (Google Play)", href: "https://play.google.com/store/apps/details?id=ar.tvplayer.tv" },
  { name: "Smarters Player Lite (App Store)", href: "https://apps.apple.com/app/smarters-player-lite/id1628995509" },
];

export default function InstallatiePage() {
  const { t } = useTranslations();
  const ip = t.installPage;
  const helpUrl = whatsappLink(ip.helpMessage);

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(130,244,19,0.12), transparent)" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-[#82F413]/30 bg-[#82F413]/10 text-[#82F413] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#82F413] animate-pulse" />
            {ip.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {ip.title} <span className="text-gradient">{ip.titleAccent}</span>
          </h1>
          <p className="text-[#94a3b8] text-lg">
            {ip.subtitle}
          </p>
        </div>
      </div>

      {/* Wat je ontvangt */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-4 mb-12">
        <div className="max-w-3xl mx-auto p-6 rounded-2xl border border-[#82F413]/20 bg-[#82F413]/5">
          <h2 className="font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-[#82F413]">●</span> {ip.receiveTitle}
          </h2>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            {ip.receiveText}
          </p>
        </div>
      </section>

      {/* App-gidsen */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-5">
          {ip.guides.map((guide, gi) => (
            <div
              key={guide.name}
              className="p-6 rounded-2xl bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#82F413]/25 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#82F413] text-black text-sm font-black">
                    {gi + 1}
                  </span>
                  {guide.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {guide.platforms.map((pf) => (
                    <span
                      key={pf}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-[#94a3b8]"
                    >
                      {pf}
                    </span>
                  ))}
                </div>
              </div>

              <ol className="space-y-3">
                {guide.steps.map((step, si) => (
                  <li key={si} className="flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#82F413]/15 text-[#82F413] text-xs font-bold border border-[#82F413]/25">
                      {si + 1}
                    </span>
                    <span className="text-sm text-[#cbd5e1] leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-[#94a3b8] mb-3 text-center">{ip.downloadTitle}</h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {downloads.map((dl) => (
              <a
                key={dl.name}
                href={dl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e] text-sm font-semibold text-[#cbd5e1] hover:border-[#82F413]/40 hover:text-white transition-colors"
              >
                {dl.name} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hulp nodig CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl border border-[#1e1e3a] bg-[#0f0f1a]">
          <h2 className="text-xl font-bold text-white mb-2">{ip.helpTitle}</h2>
          <p className="text-[#94a3b8] text-sm mb-6">
            {ip.helpText}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={helpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20bd5a] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              {ip.helpCta}
            </a>
            <Link
              href="/tarieven"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#82F413] text-black text-sm font-bold hover:bg-[#90ff1a] transition-colors"
            >
              {ip.packagesCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
