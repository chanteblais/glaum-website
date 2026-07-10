import type { Metadata } from "next";
import { registerGlaumerAction } from "../actions";
import { RegistryFormFields, errorMessage } from "@/components/RegistryForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Form 7-G — Application for Voluntary Registration — Glåüm",
  description: "Take your rightful place among the ManyHands.",
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = errorMessage(error);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="ornate-frame rounded-sm px-6 py-10 sm:px-12 sm:py-14">
          {/* Form header */}
          <div className="text-center mb-10">
            <p className="font-tokyo text-xs tracking-[0.3em] text-ink/50 mb-4">
              Official Glåüm Paperwork · Form 7-G (Rev. 1971)
            </p>
            <h1 className="font-tokyo text-3xl sm:text-4xl text-gold-deep mb-4 text-balance">
              Application for Voluntary Registration
            </h1>
            <div className="flex justify-center mb-6">
              <div className="gold-rule w-36" />
            </div>
            <p className="text-ink/80 leading-relaxed">
              Completing this form enters you into the Glåümer Registry, the
              official record of the attuned. All questions are answered on the
              honour system, which has never failed us.
            </p>
          </div>

          {message && (
            <div className="mb-8 rounded-md border border-magenta/50 bg-magenta/10 px-5 py-4 text-sm text-ink/85">
              {message}
            </div>
          )}

          <form action={registerGlaumerAction}>
            <RegistryFormFields />

            <div className="mt-10 text-center">
              <button
                type="submit"
                className="px-10 py-3 rounded-full font-tokyo tracking-widest text-sm bg-magenta text-cream cursor-pointer transition-colors hover:bg-[#b820d4]"
              >
                SUBMIT FORM 7-G
              </button>
              <p className="text-xs text-ink/50 italic mt-5 leading-relaxed">
                By submitting, you consent to appearing in the public Registry.
                You may amend or quietly regret your record at any time using the
                Amendment Key issued upon registration.
              </p>
            </div>
          </form>
        </div>

        <p className="text-center text-xs text-ink/40 italic mt-8">
          Filing of this form confirms its existence.
        </p>
      </div>
    </div>
  );
}
