import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGlaumerBySlug } from "@/lib/glaumers";
import { formatRegNo } from "@/lib/registry-options";
import { amendGlaumerAction } from "../../actions";
import { RegistryFormFields, errorMessage } from "@/components/RegistryForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Form 7-G(a) — Amendment of Record — Glåüm",
};

export default async function AmendPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ key?: string; error?: string }>;
}) {
  const { slug } = await params;
  const { key, error } = await searchParams;

  const g = await getGlaumerBySlug(slug);
  if (!g || g.hidden) notFound();

  const isCustodian = key === g.editToken;

  if (!isCustodian) {
    return (
      <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <div className="ornate-frame rounded-sm px-8 py-12 text-center">
            <p className="font-tokyo text-xs tracking-[0.3em] text-ink/50 mb-6">
              DEPARTMENT OF RECORDS &amp; RESONANCE
            </p>
            <h1 className="font-tokyo text-3xl text-gold-deep mb-6">
              Custody Not Established
            </h1>
            <p className="text-ink/80 leading-relaxed mb-4">
              The Department cannot verify your custody of this record. Records
              may only be amended by way of the Amendment Key issued at
              registration.
            </p>
            <p className="text-ink/60 text-sm italic mb-8">
              If you have misplaced your Key, the Department extends its
              sympathy, which is boundless, and its assistance, which is not.
            </p>
            <Link
              href={`/registry/${slug}`}
              className="text-sm text-ink/60 underline decoration-gold underline-offset-4 hover:text-gold-deep"
            >
              ← Return to the record
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const message = errorMessage(error);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="ornate-frame rounded-sm px-6 py-10 sm:px-12 sm:py-14">
          <div className="text-center mb-10">
            <p className="font-tokyo text-xs tracking-[0.3em] text-ink/50 mb-4">
              Official Glåüm Paperwork · Form 7-G(a) · Record N
              <span className="align-super">o.</span> {formatRegNo(g.regNo)}
            </p>
            <h1 className="font-tokyo text-3xl sm:text-4xl text-gold-deep mb-4">
              Amendment of Record
            </h1>
            <div className="flex justify-center mb-6">
              <div className="gold-rule w-36" />
            </div>
            <p className="text-ink/80 leading-relaxed">
              People change. Records, mercifully, can be amended. Adjust any
              field below and resubmit.
            </p>
          </div>

          {message && (
            <div className="mb-8 rounded-md border border-magenta/50 bg-magenta/10 px-5 py-4 text-sm text-ink/85">
              {message}
            </div>
          )}

          <form action={amendGlaumerAction}>
            <input type="hidden" name="slug" value={g.slug} />
            <input type="hidden" name="key" value={key} />
            <RegistryFormFields
              defaults={{
                name: g.name,
                location: g.location,
                sigil: g.sigil,
                attunement: g.attunement,
                glaumise: g.glaumise,
                testimony: g.testimony,
              }}
            />

            <div className="mt-10 text-center">
              <button
                type="submit"
                className="px-10 py-3 rounded-full font-tokyo tracking-widest text-sm bg-magenta text-cream cursor-pointer transition-colors hover:bg-[#b820d4]"
              >
                SUBMIT AMENDMENT
              </button>
              <p className="text-xs text-ink/50 italic mt-5">
                Your previous self will be released with gratitude.
              </p>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <Link
            href={`/registry/${g.slug}?key=${key}`}
            className="text-sm text-ink/60 underline decoration-gold underline-offset-4 hover:text-gold-deep"
          >
            ← Return to the record without amending
          </Link>
        </div>
      </div>
    </div>
  );
}
