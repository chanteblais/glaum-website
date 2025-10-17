import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { BadgeButton } from '@/components/BadgeButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card'
import { Kicker } from '@/components/Kicker'
import { Reveal } from '@/components/Reveal'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
        <Container>
          <div className="text-center w-full">
            {/* Hero Image */}
            <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
              {/* Mobile Image */}
              <Image
                src="/images/hero-family-mobile.webp"
                alt="Glåüm community family"
                width={800}
                height={600}
                className="w-full h-auto block md:hidden"
                priority
              />
              {/* Desktop Image */}
              <Image
                src="/images/hero-family-desktop.webp"
                alt="Glåüm community family"
                width={1200}
                height={600}
                className="w-full h-auto hidden md:block"
                priority
              />
            </div>
            
            {/* Hero Text */}
            <div className="max-w-3xl mx-auto mb-32" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
              <p className="text-lg lg:text-xl text-glaum-ink/80 leading-relaxed text-center">
                That's right. It's finally time.
              </p>
              <p className="text-base lg:text-lg text-glaum-ink/70 leading-relaxed text-center mt-6">
                We understand this moment can bring up a lot of feelings—excitement, curiosity, even disbelief.
              </p>
              <p className="text-base lg:text-lg text-glaum-ink/70 leading-relaxed text-center mt-4">
                This is completely normal.
              </p>
              <p className="text-base lg:text-lg text-glaum-ink/70 leading-relaxed text-center mt-4">
                Just sit back, take a breath, and let the feeling rise. It's safe, even if it feels too good to trust.
              </p>
              <p className="text-base lg:text-lg text-glaum-ink/80 leading-relaxed text-center mt-4 font-medium">
                Trust is the first step toward attunement — and attunement feels exactly right.
              </p>
            </div>
            
            {/* Testimonials Image */}
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl max-w-3xl mx-auto" style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.35))' }}>
              {/* Mobile Testimonials Image */}
              <Image
                src="/images/testimonials-mobile.webp"
                alt="Glåüm testimonials"
                width={800}
                height={600}
                className="w-full h-auto block md:hidden"
                priority
              />
              {/* Desktop Testimonials Image */}
              <Image
                src="/images/testimonials-desktop.webp"
                alt="Glåüm testimonials"
                width={1200}
                height={600}
                className="w-full h-auto hidden md:block"
                priority
              />
            </div>
            
            {/* Divider */}
            <div className="flex justify-center pt-16 pb-8">
              <div className="w-32 h-0.5 rounded-full" style={{ backgroundColor: '#634D0B' }}></div>
            </div>
            
            {/* What is Glåüm Header */}
            <div className="text-center pt-16 mb-16">
              <h2 className="font-tokyo text-5xl lg:text-7xl font-bold mb-8" style={{ color: '#634D0B' }}>
                What is Glåüm? <br/> °••▲••°
              </h2>
              
              {/* Glåüm Description */}
              <div className="max-w-4xl mx-auto px-4" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Glåüm is the frequency of perfect attunement between self and all.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  It is the highest reality: the form reality takes when all its parts move in perfect coherence.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Perfect harmony. The absence of dissonance.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 leading-relaxed mb-8">
                  This is the frequency of Glåüm.
                </p>
                
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  When we imagine reality, we don't just define it — we create it. When belief unifies, reality conforms.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  With each new attunement, the resonance of Glåüm solidifies, drawing it closer to our lived reality.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  With enough alignment, reality will fully sustain the Glåüm frequency.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 leading-relaxed font-medium">
                  This is world Glåümination.
                </p>
              </div>
            </div>
            
            {/* Attuned Image */}
            <div className="relative mb-16 shimmer max-w-2xl mx-auto">
              {/* Mobile Attuned Image */}
              <Image
                src="/images/attuned-mobile.webp"
                alt="Attuned"
                width={800}
                height={600}
                className="w-full h-auto block md:hidden"
                priority
              />
              {/* Desktop Attuned Image */}
              <Image
                src="/images/attuned-desktop.webp"
                alt="Attuned"
                width={1200}
                height={600}
                className="w-full h-auto hidden md:block"
                priority
              />
            </div>
            
            {/* GLÅÜMESES Header */}
            <div className="text-center pt-40 mb-16">
              <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2" style={{ color: '#634D0B' }}>
                Glåümises
              </h2>
              <div className="flex justify-center mb-12">
                <div className="w-48 h-0.5 rounded-full" style={{ backgroundColor: '#634D0B' }}></div>
              </div>
              
              {/* Glåümeses Description */}
              <div className="max-w-2xl mx-auto px-4" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Reality isn't the only thing that improves when you join Glåüm — you do, too!
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 leading-relaxed mb-0">
                  Here are just a few of the benefits guaranteed to come to you on your path to Glåüm!
                </p>
                
                {/* Glåümises Image */}
                <div className="relative mt-8 mb-16 rounded-2xl overflow-hidden shadow-2xl" style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.35))' }}>
                {/* Mobile Glåümises Image */}
                <Image
                  src="/images/glaumises-mobile.webp"
                  alt="Glåümises"
                  width={800}
                  height={600}
                  className="w-full h-auto block md:hidden"
                  priority
                />
                {/* Desktop Glåümises Image */}
                <Image
                  src="/images/glaumises-desktop.webp"
                  alt="Glåümises"
                  width={1200}
                  height={600}
                  className="w-full h-auto hidden md:block"
                  priority
                />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Is this a joke Section */}
      <Section className="pt-16 pb-16">
        <Container>
          <div className="text-center">
            {/* Is this a joke Header */}
            <div className="mb-12">
              <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2" style={{ color: '#634D0B' }}>
                ... Is this a joke?
              </h2>
              <div className="flex justify-center mb-12">
                <div className="w-[30rem] h-0.5 rounded-full" style={{ backgroundColor: '#634D0B' }}></div>
              </div>
              
              {/* Core Values Text */}
              <div className="max-w-2xl mx-auto px-4" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
                <p className="text-lg lg:text-xl text-glaum-ink/80 leading-relaxed">
                  Glåüm operates on three core values:
                </p>
              </div>
              
              {/* Value Frame Image */}
              <div className="relative mt-8 mb-16">
                {/* Mobile Value Frame Image */}
                <Image
                  src="/images/values-frame-mobile.png"
                  alt="Values Frame"
                  width={800}
                  height={600}
                  className="w-1/2 h-auto block md:hidden mx-auto"
                  priority
                />
                {/* Desktop Value Frame Image */}
                <Image
                  src="/images/values-frame-desktop.png"
                  alt="Values Frame"
                  width={1200}
                  height={600}
                  className="w-1/2 h-auto hidden md:block mx-auto"
                  priority
                />
                
                {/* Values Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-tokyo text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl" style={{ color: '#634D0B', lineHeight: '1.2' }}>
                      <div className="mb-2 sm:mb-4 md:mb-6">• Compassion •</div>
                      <div className="mb-2 sm:mb-4 md:mb-6">• Community •</div>
                      <div>• Playfulness •</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Core Values Explanation Text */}
              <div className="max-w-4xl mx-auto px-4 mt-16 text-left" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Of these values, compassion is foundational. We strive to promote connection through community and joyful play — but this is only possible when we prioritize the comfort and wellbeing of everyone in our community.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Undoubtedly, jokes are funnier when they're subtle — but they're only funny when everyone is in on the joke.
                </p>
                
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-0 text-center" style={{ lineHeight: '2.5' }}>
                  So yes, Glåüm is a joke...
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-12 text-center" style={{ lineHeight: '2.5' }}>
                  But the punchline is it's real.
                </p>
                
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  While the community of Glåüm uses satire, we do so with intention.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Our goal isn't to mock belief, but to make it accessible again — especially for those who've felt shut out by dogma.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  By approaching the sacred through absurdity, we bypass defenses because... it's all a joke — right? And in that lies the magic, and the paradox.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  By consciously exaggerating the language of dogma, we transform it into play.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Through this play, barriers dissolve, allowing curiosity, safety, and sincerity to re-enter the conversation.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  We recognize that satire is a powerful tool — capable of both diminishing and amplifying.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Our intention is always to diminish exclusion, and to amplify our shared capacity to connect through ceremony, curiosity, care, and playfulness.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  This is the intention, and when it doesn't land? We drop it. We remain sensitive to the fact that cult trauma exists, and that not everyone will find this kind of humour disarming or inviting.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  For those who find the bit uncomfortable, we let it go.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80" style={{ lineHeight: '2.5' }}>
                  Our use of satire is always secondary to our priority: to create a space where people feel safe, heard, and respected.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* A note on cults Section */}
      <Section className="pt-16 pb-16">
        <Container>
          <div className="text-center">
            {/* A note on cults Header */}
            <div className="mb-12">
              <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2" style={{ color: '#634D0B' }}>
                A note on cults
              </h2>
              <div className="flex justify-center mb-12">
                <div className="w-48 h-0.5 rounded-full" style={{ backgroundColor: '#634D0B' }}></div>
              </div>
              
              {/* A note on cults Text */}
              <div className="max-w-4xl mx-auto px-4 text-left" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  "Cult" is a fascinating word — heavily stigmatized, yet loosely defined.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  The term often conjures images of abuse of power, brainwashing, authoritarian control.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  But none of that is inherent to the definition.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Cults are not, by nature, bad.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  There are harmful cults, yes — but the same could be said of most institutions.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Cults are powerful because they meet deep human needs: belonging, meaning, transformation, reverence, structure, play.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  The problem isn't that they exist — it's that they so often collapse under unchecked power and unexamined shadow.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  The word itself comes from the Latin cultus — "to cultivate."
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  It's the root of culture.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Cults are how humans gather around what they hold sacred.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  The problem isn't the gathering.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  It's what happens when there are no strong guiding principles for how we treat one another within it.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  Glåüm takes seriously the patterns of corruption seen in even the most well-intentioned communities, and strives to promote the kind of harmony that can only emerge through the co-creation of all its members.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  The culture of Glåüm is intentional, compassionate, and inclusive — shaped collectively by those who participate in it.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80" style={{ lineHeight: '1.5' }}>
                  Together, we define the tenets and policies that guide our community.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tenets of Glåüm Section */}
      <Section className="pt-16 pb-16">
        <Container>
          <div className="text-center">
            {/* Tenets of Glåüm Header */}
            <div className="mb-12">
              <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2" style={{ color: '#634D0B' }}>
                Tenets of Glåüm
              </h2>
              <div className="flex justify-center mb-12">
                <div className="w-48 h-0.5 rounded-full" style={{ backgroundColor: '#634D0B' }}></div>
              </div>
              
              {/* Tenets Introduction Text */}
              <div className="max-w-4xl mx-auto px-4 text-left" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  The Tenets of Glåüm are a living, evolving set of shared values; open to discussion, amendment, and new ideas.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  They are the guiding principles of the Glåüm Community—also known as The Many Hands of Glåüm. They are a shared philosophy, held together by the playful spirit of Glåüm and the goodwill of its community. If you feel a Tenet could use improvement, we encourage you to share your insights.
                </p>
              </div>
              
              {/* Tenet Frame Image */}
              <div className="relative mt-16 flex justify-center">
                {/* Mobile Tenent Frame Image */}
                <div className="relative w-full max-w-md md:hidden">
                  <Image
                    src="/images/tenent-frame-mobile.png"
                    alt="Tenent Frame"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Mobile Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-10 py-16 w-full h-full flex flex-col justify-center">
                        <div className="font-tokyo font-normal mb-2 text-black text-xl" style={{ lineHeight: '1.0' }}>
                        Unconditional Positive Regard <br/> •••
                      </div>
                      <div className="font-normal text-xs sm:text-sm leading-tight" style={{ 
                        color: '#634D0B', 
                        fontFamily: 'var(--font-libre-baskerville), serif'
                      }}>
                        The Many Hands of Glåüm recognize the inherent goodness in all beings. Actions that seem out of alignment with that goodness are seen as the byproduct of fear, pain, or misunderstanding. In these moments, Glåüm calls upon us to extend compassion, seek understanding, and respond constructively. It is not always easy, but through this practice, we strengthen the connective fabric of the community.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop Tenent Frame Image */}
                <div className="relative w-[600px] hidden md:block">
                  <Image
                    src="/images/tenent-frame-desktop.png"
                    alt="Tenent Frame"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                  {/* Desktop Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-16 py-20 w-full h-full flex flex-col justify-center">
                        <div className="font-tokyo font-normal mb-3 text-[#634D0B] text-4xl" style={{ lineHeight: '1.0' }}>
                        Unconditional Positive Regard <br/> •••
                      </div>
                      <div className="font-light text-lg leading-relaxed" style={{ 
                        color: '#634D0B', 
                        fontFamily: 'var(--font-libre-baskerville), serif'
                      }}>
                        The Many Hands of Glåüm recognize the inherent goodness in all beings. Actions that seem out of alignment with that goodness are seen as the byproduct of fear, pain, or misunderstanding. In these moments, Glåüm calls upon us to extend compassion, seek understanding, and respond constructively. It is not always easy, but through this practice, we strengthen the connective fabric of the community.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Respect and Dignity Frame Image */}
          <div className="relative mt-24 mb-16 flex justify-center">
            {/* Mobile Respect and Dignity Frame Image */}
            <div className="relative w-full max-w-md md:hidden">
              <Image
                src="/images/tenent-frame-mobile.png"
                alt="Respect and Dignity Frame"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Mobile Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-10 py-16 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-2 text-black text-xl" style={{ lineHeight: '1.0' }}>
                    Respect and Dignity for All <br/> •••
                  </div>
                  <div className="font-normal text-xs sm:text-sm leading-tight" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    The Many Hands of Glåüm recognize that every person, no matter their background, status, or story, deserves to be treated with dignity and respect. In Glåüm, we value each individual's unique essence and seek to honor it by listening, empathizing, and offering kindness in every interaction. While we may disagree, we strive to do so with a sense of mutual respect, while understanding that everyone is on their own path and is worthy of love and consideration.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Respect and Dignity Frame Image */}
            <div className="relative w-[600px] hidden md:block">
              <Image
                src="/images/tenent-frame-desktop.png"
                alt="Respect and Dignity Frame"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Desktop Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-16 py-20 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-3 text-[#634D0B] text-4xl" style={{ lineHeight: '1.0' }}>
                    Respect and Dignity for All <br/> •••
                  </div>
                  <div className="font-light text-lg leading-relaxed" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    The Many Hands of Glåüm recognize that every person, no matter their background, status, or story, deserves to be treated with dignity and respect. In Glåüm, we value each individual's unique essence and seek to honor it by listening, empathizing, and offering kindness in every interaction. While we may disagree, we strive to do so with a sense of mutual respect, while understanding that everyone is on their own path and is worthy of love and consideration.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Individual Glåüm Ascension Frame Image */}
          <div className="relative mt-24 mb-16 flex justify-center">
            {/* Mobile Individual Glåüm Ascension Frame Image */}
            <div className="relative w-full max-w-md md:hidden">
              <Image
                src="/images/tenent-frame-mobile.png"
                alt="Individual Glåüm Ascension Frame"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Mobile Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-10 py-16 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-2 text-black text-xl" style={{ lineHeight: '1.0' }}>
                    Individual Glåüm Ascension <br/> •••
                  </div>
                  <div className="font-normal text-xs sm:text-sm leading-tight" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    Every person's journey to Glåüm is as unique and mysterious as Glåüm itself. Though the inevitability of Glåüm is a certainty, each person will arrive in their own time and in their own way. Glåüm is never imposed nor rushed. A person becomes part of Glåüm the moment they feel it resonate in their heart.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Individual Glåüm Ascension Frame Image */}
            <div className="relative w-[600px] hidden md:block">
              <Image
                src="/images/tenent-frame-desktop.png"
                alt="Individual Glåüm Ascension Frame"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Desktop Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-16 py-20 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-3 text-[#634D0B] text-4xl" style={{ lineHeight: '1.0' }}>
                    Individual Glåüm Ascension <br/> •••
                  </div>
                  <div className="font-light text-lg leading-relaxed" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    Every person's journey to Glåüm is as unique and mysterious as Glåüm itself. Though the inevitability of Glåüm is a certainty, each person will arrive in their own time and in their own way. Glåüm is never imposed nor rushed. A person becomes part of Glåüm the moment they feel it resonate in their heart.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Inclusivity of Members Frame Image */}
          <div className="relative mt-24 mb-16 flex justify-center">
            {/* Mobile Inclusivity of Members Frame Image */}
            <div className="relative w-full max-w-md md:hidden">
              <Image
                src="/images/tenent-frame-mobile.png"
                alt="Inclusivity of Members Frame"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Mobile Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-10 py-16 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-2 text-black text-xl" style={{ lineHeight: '1.0' }}>
                    Inclusivity of Members <br/> •••
                  </div>
                  <div className="font-normal text-xs sm:text-sm leading-tight" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    Glåüm is open to everyone regardless of background, beliefs, or ideology. The Many Hands of Glåüm is non-exclusive and strengthened by diversity. Members from all other communities, faiths, or ideologies are welcomed. The only requirement is a willingness to hold love in your heart, and to engage with the Tenants of Glåüm in good faith.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Inclusivity of Members Frame Image */}
            <div className="relative w-[600px] hidden md:block">
              <Image
                src="/images/tenent-frame-desktop.png"
                alt="Inclusivity of Members Frame"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Desktop Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-16 py-20 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-3 text-[#634D0B] text-4xl" style={{ lineHeight: '1.0' }}>
                    Inclusivity of Members <br/> •••
                  </div>
                  <div className="font-light text-lg leading-relaxed" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    Glåüm is open to everyone regardless of background, beliefs, or ideology. The Many Hands of Glåüm is non-exclusive and strengthened by diversity. Members from all other communities, faiths, or ideologies are welcomed. The only requirement is a willingness to hold love in your heart, and to engage with the Tenants of Glåüm in good faith.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Satire with Intention Frame Image */}
          <div className="relative mt-24 mb-16 flex justify-center">
            {/* Mobile Satire with Intention Frame Image */}
            <div className="relative w-full max-w-md h-[650px] md:hidden">
              <Image
                src="/images/tenent-frame-mobile.png"
                alt="Satire with Intention Frame"
                width={800}
                height={600}
                className="w-full h-full object-fill"
                priority
              />
              {/* Mobile Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-10 py-32 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-2 text-black text-xl" style={{ lineHeight: '1.0' }}>
                    Satire with Intention <br/> •••
                  </div>
                  <div className="font-normal text-xs sm:text-sm leading-tight" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    The ManyHands of Glåüm recognize satire as a sacred instrument—capable of softening or sharpening, diminishing or amplifying. Because it shifts the palette of meaning, we approach it with clear intention.

                    When we playfully mirror rituals or aesthetics—such as baptism—we do so not to mock the sacred, but to release the dogma that may bind it. In this release, blessing becomes possible again.

                    <br/><br/>

                    When we exaggerate the forms of manipulation or control, we do so not to trivialize harm, but to highlight its absurdity and invite laughter as a shield. That wink—"yes, we know how this looks"—becomes an opening through which sincerity may flow.

                    <br/><br/>

                    We remember always: satire bypasses defenses. This makes it powerful, but also tender. The cargo we carry matters. We stay attuned not only to what we are creating, but also to how it is received. We ask: who is in the room? What wounds might this touch? What healing might it allow?

                    Thus, we hold satire as both funny and serious. It is play, yes—but play with responsibility. And that balance, that doubleness, is the Glåüm of it.
                  </div>
                </div>
              </div>
            </div>
            
            {/* Desktop Satire with Intention Frame Image */}
            <div className="relative w-[600px] h-[1100px] hidden md:block">
              <Image
                src="/images/tenent-frame-desktop.png"
                alt="Satire with Intention Frame"
                width={1200}
                height={600}
                className="w-full h-full object-fill"
                priority
              />
              {/* Desktop Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-16 py-40 w-full h-full flex flex-col justify-center">
                  <div className="font-tokyo font-normal mb-3 text-[#634D0B] text-4xl" style={{ lineHeight: '1.0' }}>
                    Satire with Intention <br/> •••
                  </div>
                  <div className="font-light text-lg leading-relaxed" style={{ 
                    color: '#634D0B', 
                    fontFamily: 'var(--font-libre-baskerville), serif'
                  }}>
                    The ManyHands of Glåüm recognize satire as a sacred instrument—capable of softening or sharpening, diminishing or amplifying. Because it shifts the palette of meaning, we approach it with clear intention.

                    When we playfully mirror rituals or aesthetics—such as baptism—we do so not to mock the sacred, but to release the dogma that may bind it. In this release, blessing becomes possible again.

                    <br/><br/>

                    When we exaggerate the forms of manipulation or control, we do so not to trivialize harm, but to highlight its absurdity and invite laughter as a shield. That wink—"yes, we know how this looks"—becomes an opening through which sincerity may flow.

                    <br/><br/>

                    We remember always: satire bypasses defenses. This makes it powerful, but also tender. The cargo we carry matters. We stay attuned not only to what we are creating, but also to how it is received. We ask: who is in the room? What wounds might this touch? What healing might it allow?

                    Thus, we hold satire as both funny and serious. It is play, yes—but play with responsibility. And that balance, that doubleness, is the Glåüm of it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Policies of the ManyHands Section */}
      <Section>
        <Container>
          <div className="text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-tokyo text-5xl lg:text-7xl mb-2 pb-2" style={{ color: '#634D0B' }}>
                Policies of the ManyHands
              </h2>
              <div className="flex justify-center">
                <div className="w-48 h-0.5 rounded-full" style={{ backgroundColor: '#634D0B' }}></div>
              </div>
              <div className="mb-12"></div>
              
              <div className="max-w-4xl mx-auto px-4 text-left">
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  We the ManyHands strive to uphold these policies for community guidelines. Our policies are decided upon together, and always up for review, amendment, and addition. We strive to uphold personal, communal, and environmental cohesion and regard within our reasonable limits.
                </p>
                <p className="text-lg lg:text-xl text-glaum-ink/80 mb-6" style={{ lineHeight: '1.7' }}>
                  These policies are communally decided by the ManyHands of Glåüm. At any time may a principle be brought up for discussion of review.
                </p>
              </div>
              
              {/* Policies Frame Image */}
              <div className="relative mt-24 mb-4 flex justify-center">
                {/* Mobile Policies Frame Image */}
                <div className="relative w-full max-w-md h-[450px] md:hidden">
                  <Image
                    src="/images/policies-frame.webp"
                    alt="All feelings are Welcome. All Behaviours are Not Frame"
                    width={800}
                    height={600}
                    className="w-full h-full object-fill"
                    priority
                  />
                  {/* Mobile Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-10 py-16 w-full h-full flex flex-col justify-center">
                      <div className="font-tokyo font-normal mb-2 text-black text-xl" style={{ lineHeight: '1.0' }}>
                        All feelings are Welcome. All Behaviours are Not <br/> •••
                      </div>
                      <div className="font-normal text-xs sm:text-sm leading-tight" style={{ 
                        color: '#634D0B', 
                        fontFamily: 'var(--font-libre-baskerville), serif'
                      }}>
                        In Glåüm, anger, sadness, confusion, joy, fear, and shame are all part of the music. We do not turn away from these inner movements.

                        <br/><br/>

                        But not every way of moving belongs on the dance floor. If a dancer's steps begin to harm the collective rhythm, they may be kindly invited to pause, step back, and rest at the edge of the floor—until they are ready to return in attunement.
                        Boundaries, lovingly held, are what make the dance safe enough to continue.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop Policies Frame Image */}
                <div className="relative w-[600px] h-[600px] hidden md:block">
                  <Image
                    src="/images/policies-frame.webp"
                    alt="All feelings are Welcome. All Behaviours are Not Frame"
                    width={1200}
                    height={600}
                    className="w-full h-full object-fill"
                    priority
                  />
                  {/* Desktop Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-16 py-20 w-full h-full flex flex-col justify-center">
                      <div className="font-tokyo font-normal mb-3 text-[#634D0B] text-4xl" style={{ lineHeight: '1.0' }}>
                        All feelings are Welcome. All Behaviours are Not <br/> •••
                      </div>
                      <div className="font-light text-lg leading-relaxed" style={{ 
                        color: '#634D0B', 
                        fontFamily: 'var(--font-libre-baskerville), serif'
                      }}>
                        In Glåüm, anger, sadness, confusion, joy, fear, and shame are all part of the music. We do not turn away from these inner movements.

                        <br/><br/>

                        But not every way of moving belongs on the dance floor. If a dancer's steps begin to harm the collective rhythm, they may be kindly invited to pause, step back, and rest at the edge of the floor—until they are ready to return in attunement.
                        Boundaries, lovingly held, are what make the dance safe enough to continue.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* The Use of AI: Amplification, not Replacement Section */}
      <Section>
        <Container>
          <div className="text-center">
            <div className="max-w-4xl mx-auto px-4">
              
              {/* AI Policies Frame Image */}
              <div className="relative mt-1 mb-16 flex justify-center">
                {/* Mobile AI Policies Frame Image */}
                <div className="relative w-full max-w-md h-[850px] md:hidden">
                  <Image
                    src="/images/policies-frame.webp"
                    alt="The Use of AI: Amplification, not Replacement Frame"
                    width={800}
                    height={600}
                    className="w-full h-full object-fill"
                    priority
                  />
                  {/* Mobile Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-10 py-16 w-full h-full flex flex-col justify-center">
                      <div className="font-tokyo font-normal mb-2 text-black text-xl" style={{ lineHeight: '1.0' }}>
                        The Use of AI: Amplification, not Replacement <br/> •••
                      </div>
                      <div className="font-normal text-xs sm:text-sm leading-tight" style={{ 
                        color: '#634D0B', 
                        fontFamily: 'var(--font-libre-baskerville), serif'
                      }}>
                        The ManyHands of Glåüm recognize AI as a potent instrument for collective creativity. When used with care, it expands participation—offering voices, images, and visions from members who may not have had access to these channels before. In this way, AI can accelerate brainstorming, amplify inspiration, and bring Glåümular projects to completion with greater ease.

                        <br/><br/>

                        Yet we hold a clear boundary: AI is here to enhance, not replace. When used as a crutch, it can dull the spark it was meant to ignite, robbing the artist of the generative joy that comes from birthing an idea. AI must never silence the human creative pulse—it is only invited to harmonize with it.

                        <br/><br/>

                        We also acknowledge the ethical tensions: AI is trained upon the work of others, often without consent or attribution. We remain mindful of this lineage of appropriation, seeking whenever possible to honour the sources, to credit the ancestors of art, and to avoid passing off mimicry as originality.

                        <br/><br/>

                        Finally, we remain aware of the environmental and economic costs. Like driving a gas-powered vehicle, AI carries an imperfection: a dissonance in the field. We hold this dissonance honestly, weighing its costs against its gifts. Our commitment is to use AI sparingly, responsibly, and only in service of the greater attunement of Glåüm.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Desktop AI Policies Frame Image */}
                <div className="relative w-[600px] h-[1300px] hidden md:block">
                  <Image
                    src="/images/policies-frame.webp"
                    alt="The Use of AI: Amplification, not Replacement Frame"
                    width={1200}
                    height={600}
                    className="w-full h-full object-fill"
                    priority
                  />
                  {/* Desktop Text Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-16 py-20 w-full h-full flex flex-col justify-center">
                      <div className="font-tokyo font-normal mb-3 text-[#634D0B] text-4xl" style={{ lineHeight: '1.0' }}>
                        The Use of AI: Amplification, not Replacement <br/> •••
                      </div>
                      <div className="font-light text-lg leading-relaxed" style={{ 
                        color: '#634D0B', 
                        fontFamily: 'var(--font-libre-baskerville), serif'
                      }}>
                        The ManyHands of Glåüm recognize AI as a potent instrument for collective creativity. When used with care, it expands participation—offering voices, images, and visions from members who may not have had access to these channels before. In this way, AI can accelerate brainstorming, amplify inspiration, and bring Glåümular projects to completion with greater ease.

                        <br/><br/>

                        Yet we hold a clear boundary: AI is here to enhance, not replace. When used as a crutch, it can dull the spark it was meant to ignite, robbing the artist of the generative joy that comes from birthing an idea. AI must never silence the human creative pulse—it is only invited to harmonize with it.

                        <br/><br/>

                        We also acknowledge the ethical tensions: AI is trained upon the work of others, often without consent or attribution. We remain mindful of this lineage of appropriation, seeking whenever possible to honour the sources, to credit the ancestors of art, and to avoid passing off mimicry as originality.

                        <br/><br/>

                        Finally, we remain aware of the environmental and economic costs. Like driving a gas-powered vehicle, AI carries an imperfection: a dissonance in the field. We hold this dissonance honestly, weighing its costs against its gifts. Our commitment is to use AI sparingly, responsibly, and only in service of the greater attunement of Glåüm.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
