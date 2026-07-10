"use client";

import { useState } from "react";

const BREVO_ACTION =
  "https://f357a39c.sibforms.com/serve/MUIFAMkmIORGaJR1Y3rLiRqR-Tn2YmHNYxuaUMklSUEs5UDOQG2WY0XYiYJyGHz9GKGh7qr1hDgMnvMwyO8NxjIfaUZakgYszoxI_pQVfDTSV3i2Z6rgWSEhbumQDyYxRHm-7J6s-JZfqXg_mHQgx1jAfatv4No6ya5jVmcjhn5diUV5crUSAe-dz1eyey2B8mmUCAT3vN46oHi0";

const inputClasses =
  "flex-1 px-5 py-3 rounded-full text-base bg-cream/10 border border-cream/30 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/70 focus:bg-cream/20 transition-colors";

export function NewsletterSignup() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // The form posts into the hidden iframe; we just swap the UI shortly after.
    setTimeout(() => setSubmitted(true), 800);
  };

  return (
    <section className="py-24 px-6 bg-plum-deep">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-tokyo text-4xl lg:text-5xl mb-5 text-cream">Stay Attuned</h2>

        <p className="text-lg mb-10 text-cream/75 leading-relaxed">
          Periodic transmissions from the Institute. Occasional breakthroughs in
          Glåümule science.
        </p>

        {submitted ? (
          <p className="text-xl italic text-cream leading-relaxed">
            Attunement initiated. You will hear from us when the time is right.
          </p>
        ) : (
          <div>
            <form action={BREVO_ACTION} method="post" target="brevo-frame" onSubmit={handleSubmit}>
              <input type="hidden" name="email_address_check" value="" />
              <input type="hidden" name="locale" value="en" />
              <input type="hidden" name="html_type" value="simple" />

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-3">
                <input
                  type="text"
                  name="FIRSTNAME"
                  placeholder="First name"
                  required
                  className={inputClasses}
                />
                <input
                  type="text"
                  name="LASTNAME"
                  placeholder="Last name"
                  required
                  className={inputClasses}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="your@email.com"
                  required
                  className={inputClasses}
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-tokyo tracking-widest text-sm whitespace-nowrap bg-magenta text-cream cursor-pointer transition-colors hover:bg-[#b820d4]"
                >
                  ATTUNE ME
                </button>
              </div>
            </form>

            {/* Hidden iframe catches the Brevo response, prevents page navigation */}
            <iframe name="brevo-frame" title="brevo" className="hidden" />

            <p className="text-sm text-cream/45">
              Glåüm will contact you only when it has something worth saying.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
