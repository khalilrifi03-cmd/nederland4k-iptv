import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inloggen — Nederland4K IPTV",
  description: "Log in op jouw Nederland4K IPTV account en begin direct met streamen.",
};

export default function InloggenPage() {
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center px-4 py-12">
      {/* Achtergrond gloed */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-neon">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gradient">Nederland4K IPTV</span>
          </Link>
          <h1 className="text-2xl font-bold text-text-primary mb-2">Welkom terug</h1>
          <p className="text-text-secondary text-sm">
            Vul jouw gegevens in om in te loggen
          </p>
        </div>

        {/* Formulier */}
        <div className="bg-surface border border-border rounded-2xl p-8 shadow-card">
          <form className="space-y-5" noValidate>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                E-mailadres
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="jouw@email.nl"
                className="
                  w-full px-4 py-3 rounded-xl text-sm
                  bg-surface-2 border border-border
                  text-text-primary placeholder:text-text-muted
                  focus:outline-none focus:border-neon-purple/60 focus:ring-2 focus:ring-neon-purple/20
                  transition-colors duration-200
                "
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="wachtwoord" className="block text-sm font-medium text-text-primary">
                  Wachtwoord
                </label>
                <Link href="/wachtwoord-vergeten" className="text-xs text-neon-purple hover:underline">
                  Vergeten?
                </Link>
              </div>
              <input
                id="wachtwoord"
                name="wachtwoord"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="
                  w-full px-4 py-3 rounded-xl text-sm
                  bg-surface-2 border border-border
                  text-text-primary placeholder:text-text-muted
                  focus:outline-none focus:border-neon-purple/60 focus:ring-2 focus:ring-neon-purple/20
                  transition-colors duration-200
                "
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                id="onthouden"
                name="onthouden"
                type="checkbox"
                className="w-4 h-4 rounded border-border bg-surface-2 accent-neon-purple"
              />
              <label htmlFor="onthouden" className="text-sm text-text-secondary">
                Onthoud mij
              </label>
            </div>

            <button
              type="submit"
              className="
                w-full py-3.5 rounded-xl text-sm font-semibold text-white
                bg-gradient-to-r from-neon-purple to-purple-600
                shadow-neon hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
                hover:scale-[1.02] transition-all duration-200
              "
            >
              Inloggen
            </button>
          </form>

          {/* Scheidingslijn */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-text-muted">of ga verder met</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Sociale inlog */}
          <div className="grid grid-cols-2 gap-3">
            {["Google", "Apple"].map((provider) => (
              <button
                key={provider}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-surface-2 border border-border text-sm font-medium text-text-secondary hover:border-border hover:text-text-primary hover:bg-surface transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" opacity="0.3" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
                {provider}
              </button>
            ))}
          </div>
        </div>

        {/* Registratie link */}
        <p className="text-center text-sm text-text-secondary mt-6">
          Nog geen account?{" "}
          <Link href="/tarieven" className="text-neon-purple font-medium hover:underline">
            Maak er gratis één aan
          </Link>
        </p>
      </div>
    </div>
  );
}
