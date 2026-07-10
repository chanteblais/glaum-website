import Image from "next/image";
import { TenetIcon } from "./TenetIcon";

function MiniSeal() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M16 7 L26.5 25 H5.5 Z" />
      <circle cx="16" cy="19.5" r="2.2" />
      <circle cx="16" cy="19.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M16 2.5 v2.5 M6.5 5.5 l1.8 1.8 M25.5 5.5 l-1.8 1.8 M2.5 16 h2.5 M27 16 h2.5" />
    </svg>
  );
}

// A 14-point sticker starburst, like the ones shouting from the magazine cover.
function starburstPath(points: number, outer: number, inner: number): string {
  const steps: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / points - Math.PI / 2;
    steps.push(
      `${i === 0 ? "M" : "L"}${(60 + r * Math.cos(a)).toFixed(2)} ${(60 + r * Math.sin(a)).toFixed(2)}`
    );
  }
  return steps.join(" ") + " Z";
}

const BURST_PATH = starburstPath(14, 58, 46);

function ArticleBurst({ label, numeral }: { label: string; numeral: string }) {
  return (
    <div
      aria-hidden
      className="absolute -top-7 -left-5 sm:-top-8 sm:-left-8 w-24 h-24 sm:w-28 sm:h-28 -rotate-12 drop-shadow-[0_4px_10px_rgba(36,20,48,0.35)] z-10"
    >
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <path d={BURST_PATH} fill="#f6d54e" />
        <path
          d={starburstPath(14, 52, 41)}
          fill="none"
          stroke="#b03fd6"
          strokeWidth="1"
          opacity="0.55"
        />
        <text
          x="60"
          y="54"
          textAnchor="middle"
          className="font-tokyo"
          fontSize={label.length > 7 ? "15" : "17"}
          fill="#7b2da0"
        >
          {label}
        </text>
        <text
          x="60"
          y="86"
          textAnchor="middle"
          className="font-tokyo"
          fontSize="30"
          fill="#7b2da0"
        >
          {numeral}
        </text>
      </svg>
    </div>
  );
}

const cornerBase =
  "absolute text-gold text-[0.6rem] leading-none bg-parchment px-1 select-none";

export function DecreeCard({
  series,
  label,
  numeral,
  title,
  icon,
  footer,
  tilt,
  children,
}: {
  series: string;
  label: string;
  numeral: string;
  title: string;
  icon: string;
  footer: string;
  tilt: "l" | "r";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`decree-frame relative rounded-sm max-w-2xl mx-auto px-7 py-10 sm:px-12 sm:py-12 ${
        tilt === "l" ? "-rotate-[0.7deg]" : "rotate-[0.6deg]"
      }`}
    >
      {/* Sticker of officialdom */}
      <ArticleBurst label={label} numeral={numeral} />

      {/* Corner ornaments */}
      <span aria-hidden className={`${cornerBase} -top-2 -right-1.5`}>◆</span>
      <span aria-hidden className={`${cornerBase} -bottom-2 -left-1.5`}>◆</span>

      {/* Kicker */}
      <p className="text-center text-[0.65rem] tracking-[0.3em] uppercase text-ink/50 mb-7">
        {series}
      </p>

      {/* Emblem medallion, flanked by sparkles */}
      <div className="flex justify-center items-center gap-4 mb-6 text-gold">
        <span aria-hidden className="text-lg">✦</span>
        <span aria-hidden className="text-xs -mt-6">✧</span>
        <div className="w-[4.5rem] h-[4.5rem] rounded-full border border-gold/70 outline outline-1 outline-gold/30 outline-offset-3 flex items-center justify-center text-gold-deep bg-cream/40">
          <TenetIcon icon={icon} className="w-10 h-10" />
        </div>
        <span aria-hidden className="text-xs -mt-6">✧</span>
        <span aria-hidden className="text-lg">✦</span>
      </div>

      {/* Title */}
      <h3 className="font-tokyo text-2xl sm:text-3xl text-gold-deep text-center mb-5 text-balance">
        {title}
      </h3>
      <div className="flex justify-center mb-7">
        <div className="gold-rule w-28" />
      </div>

      {/* Body */}
      <div className="text-base sm:text-lg leading-relaxed text-ink/85 space-y-4 text-left">
        {children}
      </div>

      {/* Ratification */}
      <div className="mt-9 flex flex-col items-center gap-2 text-gold-deep">
        <MiniSeal />
        <p className="text-xs italic text-ink/50">{footer}</p>
      </div>

      {/* Rubber-stamped in a back office of the Department */}
      <Image
        src="/images/glaum-certified.png"
        alt="100% Glåüm Certified"
        width={612}
        height={432}
        className="absolute -bottom-8 -right-4 sm:-right-10 w-28 sm:w-36 h-auto rotate-[9deg] pointer-events-none select-none drop-shadow-[0_4px_8px_rgba(36,20,48,0.3)]"
      />
    </div>
  );
}
