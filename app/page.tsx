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
          <div className="text-center max-w-4xl mx-auto">
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
            <div className="max-w-3xl mx-auto mb-12" style={{ fontFamily: 'var(--font-libre-baskerville), serif' }}>
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
            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl" style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.35))' }}>
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
            
            <Reveal>
              {/* Logo placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-glaum-pink to-glaum-lavender rounded-2xl mx-auto mb-8 flex items-center justify-center">
                <span className="text-white font-bold text-3xl">G</span>
              </div>
              
              <Kicker>Welcome to</Kicker>
              <h1 className="text-4xl lg:text-6xl font-bold text-glaum-ink mb-6">
                {/* TODO: Replace with Glåüm tagline */}
                Building Community Together
              </h1>
              <p className="text-xl text-glaum-ink/70 mb-8 max-w-2xl mx-auto">
                {/* TODO: Replace with Glåüm description */}
                A place where values meet action, and community grows through shared purpose.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BadgeButton variant="primary" size="lg">
                  Learn More
                </BadgeButton>
                <BadgeButton variant="outline" size="lg">
                  Join Us
                </BadgeButton>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What is Glåüm Section */}
      <Section id="what-is-glaum" title="What is Glåüm?" subtitle="Understanding our mission and vision">
        <Container>
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-glaum-ink/70 leading-relaxed">
                {/* TODO: Replace with Glåüm content */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* The ManyHands Section */}
      <Section id="manyhands" title="The ManyHands" subtitle="Our collaborative approach">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h3 className="text-2xl font-bold text-glaum-ink mb-4">
                  {/* TODO: Replace with ManyHands content */}
                  Working Together for Change
                </h3>
                <p className="text-glaum-ink/70 mb-6">
                  {/* TODO: Replace with ManyHands description */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <BadgeButton variant="secondary">
                  Learn About ManyHands
                </BadgeButton>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="aspect-[16/9] bg-glaum-cream/40 rounded-2xl flex items-center justify-center">
                <span className="text-glaum-ink/40 text-lg">
                  {/* TODO: Replace with ManyHands image */}
                  ManyHands Image Placeholder
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Tenets Carousel Placeholder */}
      <Section title="Our Tenets" subtitle="The principles that guide us">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {/* TODO: Replace with tenet titles */}
                      Tenet {i}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* TODO: Replace with tenet descriptions */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Ministries */}
      <Section title="Featured Ministries" subtitle="Current initiatives and programs">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Card>
                  <div className="aspect-[16/9] bg-glaum-cream/40 rounded-2xl mb-4 flex items-center justify-center">
                    <span className="text-glaum-ink/40">
                      {/* TODO: Replace with ministry images */}
                      Ministry {i} Image
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle>
                      {/* TODO: Replace with ministry names */}
                      Ministry {i}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* TODO: Replace with ministry descriptions */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Policies Teaser */}
      <Section title="Our Policies" subtitle="Guidelines and commitments">
        <Container>
          <Reveal>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-4 text-glaum-ink/70">
                {/* TODO: Replace with policy list */}
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-glaum-pink rounded-full mt-2 flex-shrink-0"></div>
                  <span>Policy item 1 - Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-glaum-pink rounded-full mt-2 flex-shrink-0"></div>
                  <span>Policy item 2 - Consectetur adipiscing elit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-glaum-pink rounded-full mt-2 flex-shrink-0"></div>
                  <span>Policy item 3 - Sed do eiusmod tempor</span>
                </li>
              </ul>
              <div className="text-center mt-8">
                <BadgeButton variant="outline">
                  View All Policies
                </BadgeButton>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section title="What People Say" subtitle="Community voices">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Card>
                  <CardContent>
                    <p className="text-glaum-ink/70 mb-4 italic">
                      {/* TODO: Replace with testimonials */}
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
                    </p>
                    <div className="text-sm text-glaum-ink/60">
                      {/* TODO: Replace with testimonial authors */}
                      — Person {i}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Events Grid */}
      <Section title="Upcoming Events" subtitle="Join us for community gatherings">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Card>
                  <div className="aspect-[16/9] bg-glaum-cream/40 rounded-2xl mb-4 flex items-center justify-center">
                    <span className="text-glaum-ink/40">
                      {/* TODO: Replace with event images */}
                      Event {i} Image
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle>
                      {/* TODO: Replace with event titles */}
                      Event {i}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-glaum-ink/60 mb-2">
                      {/* TODO: Replace with event dates */}
                      Date: TBD
                    </p>
                    {/* TODO: Replace with event descriptions */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Shrimp Sponsor Ribbon */}
      <Section className="py-8">
        <Container>
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-glaum-cream/50 rounded-2xl px-4 py-2">
                <span className="text-sm text-glaum-ink/60">
                  {/* TODO: Replace with sponsor content */}
                  Sponsored by Shrimp
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
