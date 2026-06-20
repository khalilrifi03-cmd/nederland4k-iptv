"use client";

import { useTranslations } from "@/lib/i18n";
import { whatsappLink } from "@/lib/contact";

export default function SupportPage() {
  const { t } = useTranslations();
  const s = t.supportPage;

  const whatsappUrl = whatsappLink();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-[#82F413]/30 bg-[#82F413]/10 text-[#82F413] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#82F413] animate-pulse" />
            {s.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {s.title}
          </h1>
          <p className="text-text-secondary text-lg max-w-md mx-auto leading-relaxed">
            {s.subtitle}
          </p>
        </div>

        {/* Contact cards */}
        <div className="max-w-md mx-auto">

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-5 p-8 rounded-2xl border border-[#1e1e3a] bg-[#0f0f1a] hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(37,211,102,0.15)]"
          >
            {/* WhatsApp icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#25D366]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold text-white mb-1">{s.waTitle}</p>
              <p className="text-sm text-text-secondary mb-3">
                {s.waDesc}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[#25D366] text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                {s.waCta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-text-muted mt-8">
          {s.note}
        </p>
      </div>
    </main>
  );
}
