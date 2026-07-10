// Thin-stroke "engraved" sigils, drawn to match the Glåüm ornament language.
// All paths use currentColor so they take on the surrounding text colour.

const paths: Record<string, React.ReactNode> = {
  eye: (
    <>
      <path d="M4 24 C14 12, 34 12, 44 24 C34 36, 14 36, 4 24 Z" />
      <circle cx="24" cy="24" r="6.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
      <path d="M24 8 v4 M24 36 v4 M9 12 l3 3 M39 12 l-3 3" />
    </>
  ),
  triangle: (
    <>
      <path d="M24 8 L42 38 L6 38 Z" />
      <circle cx="24" cy="28" r="4.5" />
      <circle cx="24" cy="28" r="1.5" fill="currentColor" stroke="none" />
      <path d="M24 2 v3 M10 6 l2 2.5 M38 6 l-2 2.5 M2 30 l3 1 M46 30 l-3 1" />
    </>
  ),
  hand: (
    <>
      <path d="M17 42 V20 a2.4 2.4 0 0 1 4.8 0 V16 a2.4 2.4 0 0 1 4.8 0 v2 a2.4 2.4 0 0 1 4.8 0 v4 a2.4 2.4 0 0 1 4.8 0 v10 c0 6 -4 10 -9.6 10 h-4 c-3 0 -5.6 -1.6 -5.6 -4 Z" />
      <path d="M17 30 c-3 -1 -5 -4 -4 -8" />
      <circle cx="27" cy="30" r="3" />
    </>
  ),
  shrimp: (
    <>
      <path d="M34 12 c8 2 10 12 4 18 c-5 5 -14 6 -20 2" />
      <path d="M18 32 c-4 -2 -6 -7 -4 -11 c2 -5 8 -7 13 -5" />
      <path d="M27 16 c3 1 5 4 4 8" />
      <circle cx="35" cy="15" r="1.2" fill="currentColor" stroke="none" />
      <path d="M38 10 c2 -3 6 -4 8 -3 M36 9 c0 -3 2 -6 5 -7" />
      <path d="M16 34 l-4 6 M20 35 l-1 7 M13 30 l-7 3" />
    </>
  ),
  teacup: (
    <>
      <path d="M10 22 h24 v6 a12 10 0 0 1 -24 0 Z" />
      <path d="M34 24 c5 0 7 3 5 6 c-1.5 2.2 -4 2.6 -6 2" />
      <path d="M8 44 h28" />
      <path d="M18 10 c-1.5 3 1.5 4 0 7 M26 8 c-1.5 3 1.5 4 0 7" />
    </>
  ),
  star: (
    <>
      <path d="M24 6 L27.5 19 L41 20.5 L30.5 28.5 L34 42 L24 34.5 L14 42 L17.5 28.5 L7 20.5 L20.5 19 Z" />
      <circle cx="24" cy="24" r="2" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Sigil({
  sigil,
  className = "w-10 h-10",
}: {
  sigil: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[sigil] ?? paths.eye}
    </svg>
  );
}
