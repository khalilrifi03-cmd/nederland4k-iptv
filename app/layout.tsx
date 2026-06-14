import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Nederland4K IPTV — Jouw Premium IPTV Platform",
  description: "Stream jouw favoriete content in de hoogste kwaliteit. HD en 4K beschikbaar. Kies een pakket dat bij jou past.",
  keywords: ["IPTV", "streaming", "abonnement", "films", "series", "4K", "HD", "Nederland"],
  authors: [{ name: "Nederland4K IPTV" }],
  openGraph: {
    title: "Nederland4K IPTV — Jouw Premium IPTV Platform",
    description: "Stream jouw favoriete content in de hoogste kwaliteit. HD en 4K beschikbaar.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      {/* Inline script prevents flash of light theme on dark-preference users */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-text-primary antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
