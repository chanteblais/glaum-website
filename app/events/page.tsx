import type { Metadata } from "next";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// LUMA CONFIGURATION
// Once you've created your event on lu.ma, replace the two values below:
//   LUMA_EVENT_SLUG  → the slug from your event URL (e.g. "bitf-2025")
//   LUMA_EVENT_ID    → the ID from the Luma embed code (e.g. "evt-xxxxxxxx")
// ─────────────────────────────────────────────────────────────────────────────
const LUMA_EVENT_SLUG = "5osqdv9i";
const LUMA_EVENT_ID = "evt-aABotdj6O65Vt1K";

const LUMA_EVENT_URL = `https://lu.ma/${LUMA_EVENT_SLUG}`;
const LUMA_EMBED_URL = `https://lu.ma/embed/event/${LUMA_EVENT_ID}/simple`;

export const metadata: Metadata = {
  title: "Events — Glåüm",
  description:
    "Join us at our upcoming events and attune your Glåümules in community.",
};

export default function EventsPage() {
  return (
    <>
      {/* Banner */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/40">
            <Image
              src="/images/glaum-events.png"
              alt="Glåüm gathering"
              width={1577}
              height={887}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Descriptor + heading */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg lg:text-xl text-ink/85 leading-[1.7] mb-4">
            The resonance of Glåüm does not exist in theory alone — it is felt in
            person, at the fire, among the ManyHands.
          </p>
          <p className="text-lg lg:text-xl text-ink/85 leading-[1.7] mb-20">
            Join us at our upcoming events and attune your Glåümules in community.
          </p>
          <h1 className="font-tokyo text-4xl lg:text-5xl mb-4 text-gold-deep">
            Upcoming Events
          </h1>
          <div className="flex justify-center">
            <div className="gold-rule w-48" />
          </div>
        </div>
      </div>

      {/* Event card + Luma embed */}
      <div className="px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl overflow-hidden border-2 border-gold shadow-2xl bg-parchment/70 backdrop-blur-sm">
            {/* Event header */}
            <div className="text-center px-8 py-8 bg-plum border-b-2 border-gold">
              <p className="font-tokyo text-base tracking-widest mb-2 text-gold">
                ° A Glåüm Gathering °
              </p>
              <h2 className="font-tokyo text-4xl lg:text-5xl mb-3 text-gold">
                ManyHands Appreciation Gathering
              </h2>
              <p className="font-tokyo text-lg text-cream/70">
                Sponsored by Shrimp™
              </p>
            </div>

            <div className="p-8 lg:p-10">
              {/* Divider */}
              <div className="flex justify-center mb-8">
                <div className="gold-rule w-24 opacity-60" />
              </div>

              {/* Event description */}
              <div className="mb-8 text-center space-y-4 text-lg text-ink/85 leading-[1.7]">
                <p>
                  An appreciation gathering for all the Many Hands who helped bring
                  Glåüm Prawm into being.
                </p>
                <p>
                  To those who built, carried, decorated, organized, cooked,
                  cleaned, lifted, supported, held space, and helped the strange
                  little vision become real: this gathering is for you.
                </p>
                <p>
                  Come reconnect, decompress, share food and stories, and celebrate
                  the communal effort that made the Prawm possible.
                </p>
                <p className="font-medium">
                  Many hands make light work. Tiny hands make lighter work.
                </p>
              </div>

              {/* Luma embed */}
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src={LUMA_EMBED_URL}
                  width="100%"
                  height="520"
                  frameBorder="0"
                  className="block bg-white"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                  title="ManyHands Appreciation Gathering — ticket registration"
                />
              </div>

              {/* Fallback direct link */}
              <div className="text-center mt-4">
                <p className="text-sm text-ink/60">
                  Having trouble with the embed?{" "}
                  <a
                    href={LUMA_EVENT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-gold-deep decoration-gold underline-offset-4"
                  >
                    Open on Luma →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
