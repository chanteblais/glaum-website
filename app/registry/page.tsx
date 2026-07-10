import type { Metadata } from "next";
import Link from "next/link";
import { listGlaumers } from "@/lib/glaumers";
import { attunementLabel, formatRegNo } from "@/lib/registry-options";
import { Sigil } from "@/components/Sigil";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Glåümer Registry — Glåüm",
  description: "An official and ever-growing record of the attuned.",
};

export default async function RegistryPage() {
  const rows = await listGlaumers();

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-4">
          <p className="font-tokyo text-sm tracking-[0.3em] text-gold-deep/80 mb-3">
            DEPARTMENT OF RECORDS &amp; RESONANCE
          </p>
          <h1 className="font-tokyo text-4xl sm:text-5xl lg:text-6xl text-gold-deep mb-4">
            The Glåümer Registry
          </h1>
          <div className="flex justify-center mb-8">
            <div className="gold-rule w-48" />
          </div>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-ink/85 leading-[1.7]">
            An official and ever-growing record of the attuned. Each entry below
            corresponds to one (1) Glåümer, verified by their own account, which
            is the only verification Glåüm requires.
          </p>
        </div>

        {/* Register CTA */}
        <div className="text-center mt-10 mb-14">
          <Link
            href="/registry/register"
            className="inline-block px-8 py-3 rounded-full font-tokyo tracking-widest text-sm bg-magenta text-cream transition-colors hover:bg-[#b820d4]"
          >
            REGISTER YOUR ATTUNEMENT
          </Link>
          <p className="text-sm text-ink/50 mt-4 italic">
            Registration takes one to four minutes, depending on your knees.
          </p>
        </div>

        {/* Records */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((g) => (
            <Link
              key={g.id}
              href={`/registry/${g.slug}`}
              className="ornate-frame rounded-sm px-6 py-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              <div className="text-gold-deep mb-4">
                <Sigil sigil={g.sigil} className="w-12 h-12" />
              </div>
              <p className="font-tokyo text-[0.65rem] tracking-[0.25em] text-ink/50 mb-2">
                RECORD N<span className="align-super">o.</span> {formatRegNo(g.regNo)}
              </p>
              <h2 className="font-tokyo text-2xl text-gold-deep mb-1 text-balance">
                {g.name}
              </h2>
              {g.location && (
                <p className="text-sm text-ink/60 mb-2">{g.location}</p>
              )}
              <p className="text-sm italic text-ink/75 mb-4">
                {attunementLabel(g.attunement)}
              </p>
              {g.testimony && (
                <p className="text-sm text-ink/70 leading-relaxed line-clamp-4">
                  &ldquo;{g.testimony}&rdquo;
                </p>
              )}
            </Link>
          ))}
        </div>

        <p className="text-center text-sm text-ink/45 italic mt-14">
          The Registry is maintained in perpetuity. Errors are part of the record.
        </p>
      </div>
    </div>
  );
}
