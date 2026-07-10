// Engraved emblems for the Tenets and Policies, one per decree.
// Same thin-stroke language as the Registry sigils.

const paths: Record<string, React.ReactNode> = {
  // Unconditional Positive Regard — a heart, radiant
  regard: (
    <>
      <path d="M24 40 C15 33, 8 26.5, 8 19.5 a8 8 0 0 1 16 -1.5 a8 8 0 0 1 16 1.5 c0 7 -7 13.5 -16 20.5 Z" />
      <path d="M24 6 v4 M10 9 l2.5 2.5 M38 9 l-2.5 2.5" />
    </>
  ),
  // Individual Glåüm Ascension — steps of light rising to a star
  ascension: (
    <>
      <circle cx="11" cy="39" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="18" cy="31" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="25" cy="23" r="1.6" fill="currentColor" stroke="none" />
      <path d="M34 5.5 L35.9 10.3 L41 10.7 L37.1 14 L38.3 19 L34 16.3 L29.7 19 L30.9 14 L27 10.7 L32.1 10.3 Z" />
      <path d="M8 44 c10 -2 20 -8 28 -20" opacity="0.55" />
    </>
  ),
  // Inclusivity of Members — a circle of beings around one centre
  inclusivity: (
    <>
      <circle cx="24" cy="24" r="3" />
      <circle cx="24" cy="9" r="2.6" />
      <circle cx="37" cy="16.5" r="2.6" />
      <circle cx="37" cy="31.5" r="2.6" />
      <circle cx="24" cy="39" r="2.6" />
      <circle cx="11" cy="31.5" r="2.6" />
      <circle cx="11" cy="16.5" r="2.6" />
      <path d="M24 13 v8 M34.5 18 l-7.5 4.5 M34.5 30 l-7.5 -4.5 M24 35 v-8 M13.5 30 l7.5 -4.5 M13.5 18 l7.5 4.5" opacity="0.45" />
    </>
  ),
  // Satire with Intention — the knowing wink
  satire: (
    <>
      <path d="M4 24 C11 15, 24 15, 30 24 C24 33, 11 33, 4 24 Z" />
      <circle cx="17" cy="24" r="4" />
      <circle cx="17" cy="24" r="1.4" fill="currentColor" stroke="none" />
      <path d="M32 24 c3.5 3.5, 9 3.5, 12 0" />
      <path d="M38 15 l1.2 3 3.2 .3 -2.4 2.1 .7 3.1 -2.7 -1.7" opacity="0.7" />
    </>
  ),
  // All Feelings are Welcome — the music of inner movement
  feelings: (
    <>
      <path d="M7 17 c4 -5, 9 5, 13 0 s9 5, 13 0 s6 3, 8 0" />
      <path d="M7 25 c4 -5, 9 5, 13 0 s9 5, 13 0 s6 3, 8 0" opacity="0.7" />
      <path d="M7 33 c4 -5, 9 5, 13 0 s9 5, 13 0 s6 3, 8 0" opacity="0.4" />
    </>
  ),
  // AI: Amplification, not Replacement — the tuning fork, sounded
  amplification: (
    <>
      <path d="M19 8 v10 a5 5 0 0 0 10 0 V8" />
      <path d="M24 23 v13" />
      <path d="M17 40 h14" />
      <path d="M12 10 c-2 4 -2 8 0 12 M36 10 c2 4 2 8 0 12" opacity="0.6" />
      <path d="M7 8 c-3 6 -3 12 0 18 M41 8 c3 6 3 12 0 18" opacity="0.3" />
    </>
  ),
};

export function TenetIcon({
  icon,
  className = "w-10 h-10",
}: {
  icon: string;
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
      {paths[icon] ?? paths.regard}
    </svg>
  );
}
