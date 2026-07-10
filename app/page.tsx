import Image from "next/image";
import Link from "next/link";
import { EntryScreen } from "@/components/EntryScreen";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { SectionHeading } from "@/components/SectionHeading";
import { OrnateFrame } from "@/components/OrnateFrame";

function ResponsiveImage({
  base,
  alt,
  className = "",
}: {
  base: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Image
        src={`/images/${base}-mobile.webp`}
        alt={alt}
        width={800}
        height={600}
        className="w-full h-auto block md:hidden"
      />
      <Image
        src={`/images/${base}-desktop.webp`}
        alt={alt}
        width={1200}
        height={600}
        className="w-full h-auto hidden md:block"
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <EntryScreen />

      {/* ── Hero ── */}
      <section id="hero" className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative mb-10 rounded-2xl overflow-hidden shadow-2xl border border-gold/40">
            <Image
              src="/images/hero-family-mobile.webp"
              alt="Glåüm community family"
              width={800}
              height={600}
              className="w-full h-auto block md:hidden"
              priority
            />
            <Image
              src="/images/hero-family-desktop.webp"
              alt="Glåüm community family"
              width={1200}
              height={600}
              className="w-full h-auto hidden md:block"
              priority
            />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-lg lg:text-xl text-ink/85 leading-relaxed">
              That&rsquo;s right. It&rsquo;s finally time.
            </p>
            <p className="text-base lg:text-lg text-ink/75 leading-relaxed">
              We understand this moment can bring up a lot of feelings—excitement,
              curiosity, even disbelief.
            </p>
            <p className="text-base lg:text-lg text-ink/75 leading-relaxed">
              This is completely normal.
            </p>
            <p className="text-base lg:text-lg text-ink/75 leading-relaxed">
              Just sit back, take a breath, and let the feeling rise. It&rsquo;s safe,
              even if it feels too good to trust.
            </p>
            <p className="text-base lg:text-lg text-ink/85 leading-relaxed font-medium">
              Trust is the first step toward attunement — and attunement feels
              exactly right.
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="testimonials">Testimonials</SectionHeading>
          <ResponsiveImage
            base="testimonials"
            alt="Glåüm testimonials"
            className="rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto border border-gold/40"
          />
          <p className="text-center mt-8 text-ink/70 italic">
            Real accounts from real Glåümers.{" "}
            <Link
              href="/registry"
              className="underline decoration-gold underline-offset-4 hover:text-gold-deep"
            >
              Add yours to the Registry.
            </Link>
          </p>
        </div>
      </section>

      {/* ── What is Glåüm ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>
            What is Glåüm? <br /> °••▲••°
          </SectionHeading>
          <div className="max-w-3xl mx-auto text-center space-y-6 text-lg lg:text-xl text-ink/85 leading-[1.7]">
            <p>Glåüm is the state of perfect attunement between self and all.</p>
            <p>
              It is the highest reality: the form reality takes when all its parts
              move in perfect coherence.
            </p>
            <p>Perfect harmony. The absence of dissonance.</p>
            <p className="font-medium">This is the frequency of Glåüm.</p>
            <p>
              When we imagine reality, we don&rsquo;t just define it — we create it.
              When belief unifies, reality conforms.
            </p>
            <p>
              With each new attunement, the resonance of Glåüm solidifies, drawing
              it closer to our lived reality.
            </p>
            <p>
              With enough alignment, reality will fully sustain the Glåüm
              frequency.
            </p>
            <p className="font-medium">This is world Glåümination.</p>
          </div>

          <div className="shimmer max-w-2xl mx-auto mt-14 rounded-2xl overflow-hidden">
            <ResponsiveImage base="attuned" alt="Attuned" />
          </div>
        </div>
      </section>

      {/* ── Glåümises ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading id="values">Glåümises</SectionHeading>
          <div className="max-w-2xl mx-auto text-center space-y-6 text-lg lg:text-xl text-ink/85 leading-[1.7]">
            <p>
              Reality isn&rsquo;t the only thing that improves when you join Glåüm —
              you do, too!
            </p>
            <p>
              Here are just a few of the benefits guaranteed to come to you on your
              path to Glåüm!
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-2xl border border-gold/40">
            <Image
              src="/images/glaumises-desktop.webp"
              alt="Glåümises"
              width={1200}
              height={600}
              className="w-full h-auto"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* ── Is this a joke? ── */}
      <section id="attunement" className="py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>... Is this a joke?</SectionHeading>

          <p className="text-center text-lg lg:text-xl text-ink/85 mb-10">
            Glåüm operates on three core values:
          </p>

          <div className="ornate-frame rounded-sm max-w-xl mx-auto px-7 py-10 sm:px-12">
            <div className="font-tokyo text-2xl sm:text-4xl text-gold-deep text-center leading-snug space-y-3">
              <div>• Compassion •</div>
              <div>• Community •</div>
              <div>• Playfulness •</div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-14 space-y-6 text-lg lg:text-xl text-ink/85 leading-[1.7]">
            <p>
              Of these values, compassion is foundational. We strive to promote
              connection through community and joyful play — but this is only
              possible when we prioritize the comfort and wellbeing of everyone in
              our community.
            </p>
            <p>
              Undoubtedly, jokes are funnier when they&rsquo;re subtle — but
              they&rsquo;re only funny when everyone is in on the joke.
            </p>

            <p className="text-center pt-4" style={{ lineHeight: "2.2" }}>
              So yes, Glåüm is a joke...
            </p>
            <p className="text-center pb-4" style={{ lineHeight: "2.2" }}>
              But the punchline is it&rsquo;s real.
            </p>

            <p>While the community of Glåüm uses satire, we do so with intention.</p>
            <p>
              Our goal isn&rsquo;t to mock belief, but to make it accessible again —
              especially for those who&rsquo;ve felt shut out by dogma.
            </p>
            <p>
              By approaching the sacred through absurdity, we bypass defenses
              because... it&rsquo;s all a joke — right? And in that lies the magic,
              and the paradox.
            </p>
            <p>
              By consciously exaggerating the language of dogma, we transform it
              into play.
            </p>
            <p>
              Through this play, barriers dissolve, allowing curiosity, safety, and
              sincerity to re-enter the conversation.
            </p>
            <p>
              We recognize that satire is a powerful tool — capable of both
              diminishing and amplifying.
            </p>
            <p>
              Our intention is always to diminish exclusion, and to amplify our
              shared capacity to connect through ceremony, curiosity, care, and
              playfulness.
            </p>
            <p>
              This is the intention, and when it doesn&rsquo;t land? We drop it. We
              remain sensitive to the fact that cult trauma exists, and that not
              everyone will find this kind of humour disarming or inviting.
            </p>
            <p>For those who find the bit uncomfortable, we let it go.</p>
            <p>
              Our use of satire is always secondary to our priority: to create a
              space where people feel safe, heard, and respected.
            </p>
          </div>
        </div>
      </section>

      {/* ── A note on cults ── */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>A note on cults</SectionHeading>
          <div className="max-w-3xl mx-auto space-y-6 text-lg lg:text-xl text-ink/85 leading-[1.7]">
            <p>
              &ldquo;Cult&rdquo; is a fascinating word — heavily stigmatized, yet
              loosely defined.
            </p>
            <p>
              The term often conjures images of abuse of power, brainwashing,
              authoritarian control.
            </p>
            <p>But none of that is inherent to the definition.</p>
            <p>Cults are not, by nature, bad.</p>
            <p>
              There are harmful cults, yes — but the same could be said of most
              institutions.
            </p>
            <p>
              Cults are powerful because they meet deep human needs: belonging,
              meaning, transformation, reverence, structure, play.
            </p>
            <p>
              The problem isn&rsquo;t that they exist — it&rsquo;s that they so often
              collapse under unchecked power and unexamined shadow.
            </p>
            <p>
              The word itself comes from the Latin cultus — &ldquo;to
              cultivate.&rdquo;
            </p>
            <p>It&rsquo;s the root of culture.</p>
            <p>Cults are how humans gather around what they hold sacred.</p>
            <p>The problem isn&rsquo;t the gathering.</p>
            <p>
              It&rsquo;s what happens when there are no strong guiding principles for
              how we treat one another within it.
            </p>
            <p>
              Glåüm takes seriously the patterns of corruption seen in even the most
              well-intentioned communities, and strives to promote the kind of
              harmony that can only emerge through the co-creation of all its
              members.
            </p>
            <p>
              The culture of Glåüm is intentional, compassionate, and inclusive —
              shaped collectively by those who participate in it.
            </p>
            <p>
              Together, we define the tenets and policies that guide our community.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tenets of Glåüm ── */}
      <section id="tenets" className="py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>Tenets of Glåüm</SectionHeading>
          <div className="max-w-3xl mx-auto space-y-6 text-lg lg:text-xl text-ink/85 leading-[1.7] mb-14">
            <p>
              The Tenets of Glåüm are a living, evolving set of shared values; open
              to discussion, amendment, and new ideas.
            </p>
            <p>
              They are the guiding principles of the Glåüm Community—also known as
              The Many Hands of Glåüm. They are a shared philosophy, held together
              by the playful spirit of Glåüm and the goodwill of its community. If
              you feel a Tenet could use improvement, we encourage you to share
              your insights.
            </p>
          </div>

          <div className="space-y-14">
            <OrnateFrame title="Unconditional Positive Regard">
              <p>
                The Many Hands of Glåüm recognize the inherent goodness in all
                beings. Actions that seem out of alignment with that goodness are
                seen as the byproduct of fear, pain, or misunderstanding. In these
                moments, Glåüm calls upon us to extend compassion, seek
                understanding, and respond constructively. It is not always easy,
                but through this practice, we strengthen the connective fabric of
                the community.
              </p>
            </OrnateFrame>

            <OrnateFrame title="Individual Glåüm Ascension">
              <p>
                Every person&rsquo;s journey to Glåüm is as unique and mysterious as
                Glåüm itself. Though the inevitability of Glåüm is a certainty, each
                person will arrive in their own time and in their own way. Glåüm is
                never imposed nor rushed. A person becomes part of Glåüm the moment
                they feel it resonate in their heart.
              </p>
            </OrnateFrame>

            <OrnateFrame title="Inclusivity of Members">
              <p>
                Glåüm is open to everyone regardless of background, beliefs, or
                ideology. The Many Hands of Glåüm is non-exclusive and strengthened
                by diversity. Members from all other communities, faiths, or
                ideologies are welcomed. The only requirement is a willingness to
                hold love in your heart, and to engage with the Tenants of Glåüm in
                good faith.
              </p>
            </OrnateFrame>

            <OrnateFrame title="Satire with Intention">
              <p>
                The ManyHands of Glåüm recognize satire as a sacred
                instrument—capable of softening or sharpening, diminishing or
                amplifying. Because it shifts the palette of meaning, we approach it
                with clear intention.
              </p>
              <p>
                When we playfully mirror rituals or aesthetics—such as baptism—we do
                so not to mock the sacred, but to release the dogma that may bind
                it. In this release, blessing becomes possible again.
              </p>
              <p>
                When we exaggerate the forms of manipulation or control, we do so
                not to trivialize harm, but to highlight its absurdity and invite
                laughter as a shield. That wink—&ldquo;yes, we know how this
                looks&rdquo;—becomes an opening through which sincerity may flow.
              </p>
              <p>
                We remember always: satire bypasses defenses. This makes it
                powerful, but also tender. The cargo we carry matters. We stay
                attuned not only to what we are creating, but also to how it is
                received. We ask: who is in the room? What wounds might this touch?
                What healing might it allow?
              </p>
              <p>
                Thus, we hold satire as both funny and serious. It is play, yes—but
                play with responsibility. And that balance, that doubleness, is the
                Glåüm of it.
              </p>
            </OrnateFrame>
          </div>
        </div>
      </section>

      {/* ── Policies of the ManyHands ── */}
      <section id="policies" className="py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading>Policies of the ManyHands</SectionHeading>
          <div className="max-w-3xl mx-auto space-y-6 text-lg lg:text-xl text-ink/85 leading-[1.7] mb-14">
            <p>
              We the ManyHands strive to uphold these policies for community
              guidelines. Our policies are decided upon together, and always up for
              review, amendment, and addition. We strive to uphold personal,
              communal, and environmental cohesion and regard within our reasonable
              limits.
            </p>
            <p>
              These policies are communally decided by the ManyHands of Glåüm. At
              any time may a principle be brought up for discussion of review.
            </p>
          </div>

          <div className="space-y-14">
            <OrnateFrame title="All feelings are Welcome. All Behaviours are Not">
              <p>
                In Glåüm, anger, sadness, confusion, joy, fear, and shame are all
                part of the music. We do not turn away from these inner movements.
              </p>
              <p>
                But not every way of moving belongs on the dance floor. If a
                dancer&rsquo;s steps begin to harm the collective rhythm, they may
                be kindly invited to pause, step back, and rest at the edge of the
                floor—until they are ready to return in attunement. Boundaries,
                lovingly held, are what make the dance safe enough to continue.
              </p>
            </OrnateFrame>

            <OrnateFrame title="The Use of AI: Amplification, not Replacement">
              <p>
                The ManyHands of Glåüm recognize AI as a potent instrument for
                collective creativity. When used with care, it expands
                participation—offering voices, images, and visions from members who
                may not have had access to these channels before. In this way, AI
                can accelerate brainstorming, amplify inspiration, and bring
                Glåümular projects to completion with greater ease.
              </p>
              <p>
                Yet we hold a clear boundary: AI is here to enhance, not replace.
                When used as a crutch, it can dull the spark it was meant to
                ignite, robbing the artist of the generative joy that comes from
                birthing an idea. AI must never silence the human creative
                pulse—it is only invited to harmonize with it.
              </p>
              <p>
                We also acknowledge the ethical tensions: AI is trained upon the
                work of others, often without consent or attribution. We remain
                mindful of this lineage of appropriation, seeking whenever possible
                to honour the sources, to credit the ancestors of art, and to avoid
                passing off mimicry as originality.
              </p>
              <p>
                Finally, we remain aware of the environmental and economic costs.
                Like driving a gas-powered vehicle, AI carries an imperfection: a
                dissonance in the field. We hold this dissonance honestly, weighing
                its costs against its gifts. Our commitment is to use AI sparingly,
                responsibly, and only in service of the greater attunement of
                Glåüm.
              </p>
            </OrnateFrame>
          </div>
        </div>
      </section>

      {/* ── Registry invitation ── */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading>The Glåümer Registry</SectionHeading>
          <div className="max-w-2xl mx-auto space-y-6 text-lg lg:text-xl text-ink/85 leading-[1.7]">
            <p>Attunement is felt in the heart. It is recorded in the Registry.</p>
            <p>
              Browse the official record of registered Glåümers, or complete Form
              7-G to take your rightful place among the ManyHands.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/registry"
              className="px-8 py-3 rounded-full font-tokyo tracking-widest text-sm bg-plum text-cream transition-colors hover:bg-plum-deep"
            >
              BROWSE THE REGISTRY
            </Link>
            <Link
              href="/registry/register"
              className="px-8 py-3 rounded-full font-tokyo tracking-widest text-sm bg-magenta text-cream transition-colors hover:bg-[#b820d4]"
            >
              REGISTER YOUR ATTUNEMENT
            </Link>
          </div>
          <p className="text-sm text-ink/50 mt-6 italic">
            Registration is voluntary. Attunement is not.
          </p>
        </div>
      </section>

      <NewsletterSignup />
    </>
  );
}
