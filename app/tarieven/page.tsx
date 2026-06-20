"use client";

import PricingCards from "@/components/PricingCards";
import { useTranslations } from "@/lib/i18n";

export default function TarievenPage() {
  const { t } = useTranslations();
  const tp = t.tariffPage;

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(130,244,19,0.12), transparent)" }}
        />
        <div className="relative max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-[#82F413]/30 bg-[#82F413]/10 text-[#82F413] text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#82F413] animate-pulse" />
            {tp.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {tp.title} <span className="text-gradient">{tp.titleAccent}</span>
          </h1>
          <p className="text-[#94a3b8] text-lg">
            {tp.subtitle}
          </p>
        </div>
      </div>

      {/* Pakketkaarten */}
      <PricingCards />

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            {tp.faqTitle} <span className="text-gradient">{tp.faqAccent}</span>
          </h2>
          <div className="space-y-4">
            {tp.faq.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#82F413]/20 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <span className="text-[#82F413]">▸</span>
                  {item.q}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed pl-5">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
