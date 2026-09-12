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

export function DecreeCard({
  kicker,
  title,
  icon,
  footer,
  plainTitle = false,
  children,
}: {
  kicker: string;
  title: string;
  icon: string;
  footer: string;
  /* Tokyo Dreams Plain — for titles where the ornate face gets too busy */
  plainTitle?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="decree-frame relative rounded-sm max-w-2xl mx-auto px-8 py-11 sm:px-14 sm:py-14">
      {/* Certificate corners */}
      <span aria-hidden className="decree-corner decree-corner-tl" />
      <span aria-hidden className="decree-corner decree-corner-tr" />
      <span aria-hidden className="decree-corner decree-corner-bl" />
      <span aria-hidden className="decree-corner decree-corner-br" />

      {/* Kicker */}
      <p className="text-center text-[0.65rem] tracking-[0.3em] uppercase text-ink/50 mb-7">
        {kicker}
      </p>

      {/* Emblem medallion */}
      <div className="flex justify-center mb-6">
        <div className="w-[4.5rem] h-[4.5rem] rounded-full border border-gold/70 outline outline-1 outline-gold/30 outline-offset-3 flex items-center justify-center text-gold-deep bg-cream/40">
          <TenetIcon icon={icon} className="w-10 h-10" />
        </div>
      </div>

      {/* Title */}
      <h3
        className={`${plainTitle ? "font-tokyo-plain" : "font-tokyo"} text-2xl sm:text-3xl text-gold-deep text-center mb-5 text-balance`}
      >
        {title}
      </h3>
      <div className="flex justify-center mb-8">
        <div className="gold-rule w-28" />
      </div>

      {/* Body */}
      <div className="decree-body text-base sm:text-lg leading-relaxed text-ink/85 space-y-4 text-left">
        {children}
      </div>

      {/* Ratification */}
      <div className="mt-10 flex flex-col items-center gap-2 text-gold-deep">
        <MiniSeal />
        <p className="text-xs italic text-ink/50">{footer}</p>
      </div>
    </div>
  );
}
