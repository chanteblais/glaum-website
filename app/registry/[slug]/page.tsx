import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGlaumerBySlug } from "@/lib/glaumers";
import {
  attunementLabel,
  formatRegNo,
  sigilLabel,
} from "@/lib/registry-options";
import { Sigil } from "@/components/Sigil";
import { CopyKeyLink } from "@/components/CopyKeyLink";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = await getGlaumerBySlug(slug);
  return {
    title: g ? `${g.name} — The Glåümer Registry` : "Record not found — Glåüm",
  };
}

const dateFormat = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function GlaumerPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ key?: string; welcome?: string; amended?: string }>;
}) {
  const { slug } = await params;
  const { key, welcome, amended } = await searchParams;

  const g = await getGlaumerBySlug(slug);
  if (!g || g.hidden) notFound();

  const isCustodian = key === g.editToken;

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        {/* Custodian notices */}
        {isCustodian && welcome && (
          <div className="mb-8 rounded-md border border-gold bg-parchment px-6 py-5 text-sm text-ink/85 leading-relaxed shadow-md">
            <p className="font-tokyo text-gold-deep text-lg mb-2">
              Welcome, Glåümer. Your record has been entered.
            </p>
            <p className="mb-3">
              The address of this very page contains your{" "}
              <strong>Amendment Key</strong> — the only means of amending your
              record. Save this link somewhere safe. Guard it as you would a
              small hand.
            </p>
            <CopyKeyLink />
          </div>
        )}
        {isCustodian && amended && (
          <div className="mb-8 rounded-md border border-gold bg-parchment px-6 py-5 text-sm text-ink/85 shadow-md">
            <p className="font-tokyo text-gold-deep text-lg mb-1">
              Your record has been amended.
            </p>
            <p>The Registry reflects your current self, insofar as any record can.</p>
          </div>
        )}

        {/* Certificate */}
        <div className="ornate-frame rounded-sm px-6 py-12 sm:px-12 sm:py-14 text-center">
          <p className="font-tokyo text-xs tracking-[0.3em] text-ink/50 mb-8">
            The Glåümer Registry · Record N<span className="align-super">o.</span>{" "}
            {formatRegNo(g.regNo)}
          </p>

          <div className="flex justify-center text-gold-deep mb-6">
            <Sigil sigil={g.sigil} className="w-20 h-20" />
          </div>
          <p className="text-xs tracking-widest text-ink/50 mb-8 uppercase">
            Registered under {sigilLabel(g.sigil)}
          </p>

          <h1 className="font-tokyo text-4xl sm:text-5xl text-gold-deep mb-3 text-balance">
            {g.name}
          </h1>
          {g.location && <p className="text-ink/60 mb-6">{g.location}</p>}

          <div className="flex justify-center my-8">
            <div className="gold-rule w-32" />
          </div>

          <dl className="space-y-6 text-ink/85">
            <div>
              <dt className="font-tokyo text-sm tracking-[0.2em] text-ink/50 mb-1">
                ATTUNEMENT LEVEL
              </dt>
              <dd className="text-xl italic">{attunementLabel(g.attunement)}</dd>
            </div>
            {g.glaumise && (
              <div>
                <dt className="font-tokyo text-sm tracking-[0.2em] text-ink/50 mb-1">
                  Awaiting Glåümise
                </dt>
                <dd className="text-lg">{g.glaumise}</dd>
              </div>
            )}
            {g.testimony && (
              <div>
                <dt className="font-tokyo text-sm tracking-[0.2em] text-ink/50 mb-3">
                  TESTIMONY
                </dt>
                <dd>
                  <blockquote className="text-lg leading-relaxed italic">
                    &ldquo;{g.testimony}&rdquo;
                  </blockquote>
                </dd>
              </div>
            )}
          </dl>

          <div className="flex justify-center my-8">
            <div className="gold-rule w-32" />
          </div>

          <p className="text-sm text-ink/60">
            Registered since {dateFormat.format(g.createdAt)}
          </p>
          <p className="text-xs text-ink/45 italic mt-4 leading-relaxed">
            This record confirms its holder&rsquo;s existence.
            <br />— Department of Records &amp; Resonance
          </p>
        </div>

        {/* Actions */}
        <div className="text-center mt-10 space-y-4">
          {isCustodian && (
            <div>
              <Link
                href={`/registry/${g.slug}/amend?key=${g.editToken}`}
                className="inline-block px-8 py-3 rounded-full font-tokyo tracking-widest text-sm bg-plum text-cream transition-colors hover:bg-plum-deep"
              >
                AMEND THIS RECORD
              </Link>
            </div>
          )}
          <div>
            <Link
              href="/registry"
              className="text-sm text-ink/60 underline decoration-gold underline-offset-4 hover:text-gold-deep"
            >
              ← Return to the Registry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
