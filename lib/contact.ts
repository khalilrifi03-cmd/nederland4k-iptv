// ─── Contactgegevens (centraal beheerd) ──────────────────────────────────────
// Vervang WHATSAPP_NUMBER door jouw echte nummer — landcode zonder + of spaties.
// Voorbeeld NL: "31612345678"  (= +31 6 12345678)

export const WHATSAPP_NUMBER = "31612345678";

/** Bouwt een wa.me-link met optioneel een vooraf ingevuld bericht. */
export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
