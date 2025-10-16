import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card'
import { Reveal } from '@/components/Reveal'

export default function TenetsPage() {
  const tenets = [
    {
      id: 1,
      title: 'Community First',
      description: 'We prioritize the well-being and growth of our community above all else.',
    },
    {
      id: 2,
      title: 'Inclusive Action',
      description: 'Every voice matters and every action contributes to our collective purpose.',
    },
    {
      id: 3,
      title: 'Sustainable Growth',
      description: 'We build for the long term, ensuring our impact endures and evolves.',
    },
    {
      id: 4,
      title: 'Transparent Communication',
      description: 'Open dialogue and honest feedback create stronger connections.',
    },
    {
      id: 5,
      title: 'Shared Responsibility',
      description: 'We all contribute to and benefit from our collective success.',
    },
    {
      id: 6,
      title: 'Continuous Learning',
      description: 'Growth comes from embracing new ideas and learning from experience.',
    },
  ]

  return (
    <Section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <Reveal>
            <h1 className="text-4xl lg:text-5xl font-bold text-glaum-ink mb-6">
              Our Tenets
            </h1>
            <p className="text-xl text-glaum-ink/70 max-w-3xl mx-auto">
              {/* TODO: Replace with tenets introduction */}
              The principles that guide our community and shape our collective journey toward meaningful change.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenets.map((tenet, index) => (
            <Reveal key={tenet.id} delay={index * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-glaum-pink to-glaum-lavender rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">
                      {tenet.id}
                    </span>
                  </div>
                  <CardTitle>
                    {/* TODO: Replace with actual tenet titles */}
                    {tenet.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* TODO: Replace with actual tenet descriptions */}
                  {tenet.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Reveal delay={0.6}>
            <p className="text-glaum-ink/60 mb-6">
              {/* TODO: Replace with call-to-action text */}
              Want to learn more about how we put these tenets into practice?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-6 py-3 bg-glaum-pink text-white rounded-2xl hover:bg-glaum-pink/90 transition-colors"
            >
              Get in Touch
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
