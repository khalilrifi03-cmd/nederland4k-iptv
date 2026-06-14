"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/i18n";

// ─── Types ────────────────────────────────────────────────────────────────────

interface PricingPlan {
  id: string;
  durationKey: "m1" | "m3" | "m6" | "y1" | "y2";
  price: number;
  savingsKey?: "s18" | "s39" | "mostChosen" | "bestDeal";
  popular?: boolean;
}

// ─── Plans (prices never change) ─────────────────────────────────────────────

const plans: PricingPlan[] = [
  { id: "maand",     durationKey: "m1", price: 8.99  },
  { id: "kwartaal",  durationKey: "m3", price: 21.99, savingsKey: "s18"        },
  { id: "half-jaar", durationKey: "m6", price: 32.99, savingsKey: "s39"        },
  { id: "jaar",      durationKey: "y1", price: 54.99, savingsKey: "mostChosen", popular: true },
  { id: "twee-jaar", durationKey: "y2", price: 99.99, savingsKey: "bestDeal"   },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg className={`w-4 h-4 flex-shrink-0 ${dark ? "text-black" : "text-[#82F413]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function TvIcon({ dark }: { dark?: boolean }) {
  return (
    <svg className={`w-5 h-5 ${dark ? "text-white" : "text-black"}`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
    </svg>
  );
}

const deviceIcons: { label: string; path: string }[] = [
  { label: "Apple",    path: "M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" },
  { label: "Android",  path: "M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.07-.51-2.27-.79-3.47-.79-1.2 0-2.4.28-3.47.79L7.65 5.67c-.19-.29-.54-.37-.83-.22-.3.16-.42.54-.26.85L8.4 9.48A10.78 10.78 0 002 18h20a10.78 10.78 0 00-4.4-8.52zM8.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" },
  { label: "Windows",  path: "M3 5.557L10.5 4.5v7H3V5.557zM11.5 4.357L21 3v8.5h-9.5V4.357zM3 12.5h7.5V19.5L3 18.443V12.5zM11.5 12.5H21V21l-9.5-1.357V12.5z" },
  { label: "Smart TV", path: "M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" },
];

function DeviceIcons({ dark }: { dark?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-white/10">
      {deviceIcons.map((d) => (
        <div key={d.label} className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 24 24" className={`w-5 h-5 ${dark ? "fill-black/70" : "fill-white/60"}`}>
            <path d={d.path} />
          </svg>
          <span className={`text-[9px] font-medium ${dark ? "text-black/60" : "text-white/40"}`}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PricingCards() {
  const { t } = useTranslations();
  const p = t.pricing;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-end">
          {plans.map((plan) => {
            const isPopular = plan.popular === true;
            const duration = p.durations[plan.durationKey];
            const savings = plan.savingsKey ? p.savings[plan.savingsKey] : undefined;

            return (
              <div
                key={plan.id}
                className={`
                  relative flex flex-col rounded-2xl p-6 transition-all duration-300
                  ${isPopular
                    ? "bg-[#82F413] border-0 shadow-[0_0_60px_rgba(130,244,19,0.35)] xl:-translate-y-4 scale-[1.02]"
                    : "bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#82F413]/30 hover:shadow-[0_0_30px_rgba(130,244,19,0.08)] hover:-translate-y-1"
                  }
                `}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-black text-[#82F413] text-xs font-bold border border-[#82F413]/30 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#82F413] animate-pulse" />
                    {p.popular}
                  </div>
                )}

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold uppercase tracking-widest ${isPopular ? "text-black/60" : "text-[#94a3b8]"}`}>
                      {duration}
                    </span>
                    {savings && !isPopular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#82F413]/15 text-[#82F413] border border-[#82F413]/25">
                        {savings}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-black tracking-tight ${isPopular ? "text-black" : "text-white"}`}>
                      €{plan.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <p className={`text-xs mt-1 ${isPopular ? "text-black/50" : "text-[#475569]"}`}>
                    {p.oneTime} — {duration.toLowerCase()}
                  </p>
                </div>

                <div className={`h-px mb-5 ${isPopular ? "bg-black/15" : "bg-[#1e1e1e]"}`} />

                <ul className="flex-1 space-y-2.5 mb-6">
                  {p.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckIcon dark={isPopular} />
                      <span className={`text-sm leading-snug ${isPopular ? "text-black" : "text-[#cbd5e1]"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/inloggen"
                  className={`
                    w-full inline-flex items-center justify-center gap-2.5
                    px-5 py-3.5 rounded-xl text-sm font-bold
                    transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]
                    ${isPopular
                      ? "bg-black text-white hover:bg-[#111111] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                      : "bg-[#82F413] text-black hover:bg-[#90ff1a] shadow-[0_0_20px_rgba(130,244,19,0.25)] hover:shadow-[0_0_30px_rgba(130,244,19,0.45)]"
                    }
                  `}
                >
                  <TvIcon dark={isPopular} />
                  {p.buyNow}
                </Link>

                <p className={`text-center text-xs mt-2.5 font-medium ${isPopular ? "text-black/60" : "text-[#475569]"}`}>
                  {p.ready}
                </p>

                <DeviceIcons dark={isPopular} />
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#475569] mb-3">{p.payWith}</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {["iDEAL", "Visa", "Mastercard", "PayPal", "Bancontact"].map((method) => (
              <span key={method} className="px-3 py-1.5 rounded-lg bg-[#0e0e0e] border border-[#1e1e1e] text-xs font-semibold text-[#94a3b8]">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
