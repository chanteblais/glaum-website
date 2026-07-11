import { Sigil } from "./Sigil";

// Section break in the house language: °•• ▲ ••°
export function SectionDivider({ glyph = "triangle" }: { glyph?: string }) {
  return (
    <div
      aria-hidden
      className="flex items-center justify-center gap-4 text-gold-deep/70 select-none"
    >
      <span className="text-xs tracking-[0.45em] translate-x-1">°••</span>
      <Sigil sigil={glyph} className="w-6 h-6" />
      <span className="text-xs tracking-[0.45em] -translate-x-1">••°</span>
    </div>
  );
}
