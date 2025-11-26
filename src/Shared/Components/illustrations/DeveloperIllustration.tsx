import type { FC } from "react";

interface DeveloperIllustrationProps {
  className?: string;
}

export const DeveloperIllustration: FC<DeveloperIllustrationProps> = ({
  className,
}) => (
  <svg
    className={className}
    viewBox="0 0 200 200"
    role="img"
    aria-label="Desarrollador programando"
  >
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1f8a4d" />
        <stop offset="100%" stopColor="#0f5132" />
      </linearGradient>
    </defs>

    <rect x="0" y="0" width="200" height="200" rx="24" fill="url(#bg)" />

    {/* Pantalla */}
    <rect
      x="30"
      y="40"
      width="140"
      height="80"
      rx="10"
      fill="#0b2329"
      stroke="#7cf2b4"
      strokeWidth="2"
    />

    {/* Líneas de código */}
    <rect x="44" y="56" width="60" height="6" rx="3" fill="#7cf2b4" />
    <rect x="44" y="72" width="40" height="6" rx="3" fill="#41c788" />
    <rect x="44" y="88" width="50" height="6" rx="3" fill="#7cf2b4" />
    <rect x="44" y="104" width="30" height="6" rx="3" fill="#41c788" />

    <rect x="110" y="56" width="40" height="6" rx="3" fill="#41c788" />
    <rect x="110" y="72" width="28" height="6" rx="3" fill="#7cf2b4" />
    <rect x="110" y="88" width="36" height="6" rx="3" fill="#41c788" />

    {/* Cabeza */}
    <circle cx="100" cy="130" r="16" fill="#f4d3b3" />
    <path
      d="M84 132c2-14 9-21 16-21s14 7 16 21"
      fill="#141414"
      stroke="#141414"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Cuerpo */}
    <path d="M70 176c4-18 14-30 30-30s26 12 30 30" fill="#1b6b3a" />

    {/* Notebook */}
    <rect
      x="70"
      y="150"
      width="60"
      height="26"
      rx="4"
      fill="#0c2a33"
      stroke="#7cf2b4"
      strokeWidth="1.5"
    />
    <rect x="78" y="158" width="28" height="4" rx="2" fill="#7cf2b4" />
    <rect x="78" y="166" width="18" height="4" rx="2" fill="#41c788" />

    {/* Base */}
    <rect x="60" y="176" width="80" height="6" rx="3" fill="#061215" />
  </svg>
);
