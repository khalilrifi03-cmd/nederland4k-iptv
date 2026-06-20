// ─── Betaalmethode-logo's (echte merklogo's, inline SVG) ──────────────────────
// Elk logo zit op een witte afgeronde kaart, zoals op echte checkout-pagina's.

type IconProps = { className?: string };

const cardClass = "h-8 w-12 rounded-md bg-white shadow-sm ring-1 ring-black/5";

export function VisaIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={`${cardClass} ${className}`} role="img" aria-label="Visa">
      <text
        x="24" y="21" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontStyle="italic"
        fontSize="13" letterSpacing="0.5" fill="#1A1F71"
      >
        VISA
      </text>
    </svg>
  );
}

export function MastercardIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={`${cardClass} ${className}`} role="img" aria-label="Mastercard">
      <circle cx="20" cy="16" r="8.5" fill="#EB001B" />
      <circle cx="28" cy="16" r="8.5" fill="#F79E1B" />
      <path d="M24 9.6a8.5 8.5 0 0 1 0 12.8 8.5 8.5 0 0 1 0-12.8Z" fill="#FF5F00" />
    </svg>
  );
}

export function PayPalIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={`${cardClass} ${className}`} role="img" aria-label="PayPal">
      <text
        x="24" y="20" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontStyle="italic" fontSize="11"
      >
        <tspan fill="#003087">Pay</tspan><tspan fill="#009CDE">Pal</tspan>
      </text>
    </svg>
  );
}

export function IdealIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={`${cardClass} ${className}`} role="img" aria-label="iDEAL">
      <text
        x="24" y="21" textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontStyle="italic" fontSize="13"
      >
        <tspan fill="#0a0a0a">i</tspan><tspan fill="#CC0066">DEAL</tspan>
      </text>
    </svg>
  );
}

export function BancontactIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 32" className={`${cardClass} ${className}`} role="img" aria-label="Bancontact">
      {/* Twee overlappende afgeronde vormen — blauw + geel */}
      <rect x="9"  y="10" width="16" height="12" rx="2.5" fill="#1E3791" />
      <rect x="23" y="10" width="16" height="12" rx="2.5" fill="#FFD800" />
      <rect x="23" y="10" width="2"  height="12"           fill="#0E9C6B" opacity="0.85" />
    </svg>
  );
}

export const paymentIcons = [
  { name: "iDEAL",      Icon: IdealIcon },
  { name: "Visa",       Icon: VisaIcon },
  { name: "Mastercard", Icon: MastercardIcon },
  { name: "PayPal",     Icon: PayPalIcon },
  { name: "Bancontact", Icon: BancontactIcon },
];
