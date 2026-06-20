import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard — Nederland4K IPTV",
  description: "Beheer jouw Nederland4K IPTV abonnement en bekijk jouw watchlist.",
};

interface QuickStatItem {
  label: string;
  value: string;
  icon: string;
  color: string;
}

const quickStats: QuickStatItem[] = [
  { label: "Actief pakket", value: "Kwartaal", icon: "📦", color: "text-neon-cyan" },
  { label: "Verloopt op", value: "14 sep 2026", icon: "📅", color: "text-neon-purple" },
  { label: "Apparaten", value: "2 / 4", icon: "📱", color: "text-neon-pink" },
  { label: "Watchlist", value: "12 titels", icon: "🎬", color: "text-green-400" },
];

const recentContent = [
  { title: "De Amsterdamse Nacht", type: "Serie", progress: 65, episode: "S2 E4" },
  { title: "Thuisfront", type: "Film", progress: 0, episode: null },
  { title: "Rotterdam Central", type: "Documentaire", progress: 30, episode: null },
  { title: "Zeeland Avonturen", type: "Serie", progress: 100, episode: "Voltooid" },
];

export default function DashboardPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welkomsttekst */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Goedemiddag, <span className="text-gradient">Gebruiker</span> 👋
            </h1>
            <p className="text-text-secondary text-sm mt-1">
              Welkom terug op jouw Nederland4K IPTV dashboard
            </p>
          </div>
          <Link
            href="/tarieven"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neon-purple/15 border border-neon-purple/30 text-neon-purple text-sm font-semibold hover:bg-neon-purple/25 transition-colors"
          >
            Upgrade pakket
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
            </svg>
          </Link>
        </div>

        {/* Statistieken */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-surface border border-border">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recente content */}
          <div className="lg:col-span-2 bg-surface border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-text-primary">Verder kijken</h2>
              <Link href="#" className="text-xs text-neon-purple hover:underline">Alles bekijken</Link>
            </div>
            <div className="space-y-4">
              {recentContent.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-2 transition-colors cursor-pointer group">
                  <div className="w-14 h-20 rounded-lg bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 group-hover:border-neon-purple/30 transition-colors">
                    <svg className="w-6 h-6 text-text-muted" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-text-primary truncate">{item.title}</h3>
                    <p className="text-xs text-text-muted mt-0.5">
                      {item.type}{item.episode ? ` · ${item.episode}` : ""}
                    </p>
                    {item.progress > 0 && item.progress < 100 && (
                      <div className="mt-2 h-1 bg-surface-2 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                  {item.progress === 100 && (
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Abonnement info */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h2 className="text-base font-semibold text-text-primary mb-5">Abonnement</h2>
            <div className="p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 mb-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-xs font-semibold text-neon-cyan">Actief</span>
              </div>
              <div className="text-lg font-bold text-text-primary">Kwartaal pakket</div>
              <div className="text-sm text-text-secondary mt-0.5">€24,99 / 3 maanden</div>
            </div>
            <ul className="space-y-2.5 mb-6">
              {["4K Ultra HD", "4 schermen", "24/7 Support", "Onbeperkt streamen"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-text-secondary">
                  <svg className="w-4 h-4 text-neon-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/tarieven"
              className="block w-full text-center py-2.5 rounded-xl bg-surface-2 border border-border text-sm font-medium text-text-secondary hover:border-neon-purple/30 hover:text-text-primary transition-colors"
            >
              Pakket beheren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
