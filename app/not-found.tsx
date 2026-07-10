import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-40 pb-32 px-4 text-center">
      <p className="font-tokyo text-xs tracking-[0.3em] text-ink/50 mb-6">
        DEPARTMENT OF RECORDS &amp; RESONANCE
      </p>
      <h1 className="font-tokyo text-4xl sm:text-5xl text-gold-deep mb-6">
        This page is not yet attuned.
      </h1>
      <p className="max-w-md mx-auto text-ink/75 leading-relaxed mb-10">
        The record you seek does not exist, has never existed, or exists so
        completely that it cannot be displayed.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 rounded-full font-tokyo tracking-widest text-sm bg-plum text-cream transition-colors hover:bg-plum-deep"
      >
        RETURN TO GLÅÜM
      </Link>
    </div>
  );
}
