import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/Card'
import { Reveal } from '@/components/Reveal'

export default function PoliciesPage() {
  const policies = [
    {
      id: 1,
      title: 'Code of Conduct',
      category: 'Community Guidelines',
      description: 'Our shared commitment to creating a welcoming and respectful environment for all members.',
    },
    {
      id: 2,
      title: 'Privacy Policy',
      category: 'Data Protection',
      description: 'How we collect, use, and protect your personal information and data.',
    },
    {
      id: 3,
      title: 'Participation Guidelines',
      category: 'Community Engagement',
      description: 'Guidelines for meaningful participation and contribution to our community initiatives.',
    },
    {
      id: 4,
      title: 'Conflict Resolution',
      category: 'Community Management',
      description: 'Our approach to addressing conflicts and maintaining harmony within the community.',
    },
    {
      id: 5,
      title: 'Resource Sharing',
      category: 'Community Resources',
      description: 'Policies governing the sharing and use of community resources and materials.',
    },
    {
      id: 6,
      title: 'Event Guidelines',
      category: 'Community Events',
      description: 'Standards and expectations for community events and gatherings.',
    },
  ]

  return (
    <Section className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <Reveal>
            <h1 className="text-4xl lg:text-5xl font-bold text-glaum-ink mb-6">
              Our Policies
            </h1>
            <p className="text-xl text-glaum-ink/70 max-w-3xl mx-auto">
              {/* TODO: Replace with policies introduction */}
              Clear guidelines and commitments that help us build a strong, inclusive, and thriving community together.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <Reveal key={policy.id} delay={index * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-glaum-plum bg-glaum-cream/50 px-3 py-1 rounded-2xl">
                      {/* TODO: Replace with actual policy categories */}
                      {policy.category}
                    </span>
                  </div>
                  <CardTitle>
                    {/* TODO: Replace with actual policy titles */}
                    {policy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* TODO: Replace with actual policy descriptions */}
                  {policy.description}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Reveal delay={0.6}>
            <div className="bg-glaum-cream/30 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-glaum-ink mb-4">
                Questions About Our Policies?
              </h3>
              <p className="text-glaum-ink/70 mb-6">
                {/* TODO: Replace with contact information */}
                We're here to help clarify any questions you might have about our community guidelines and policies.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-glaum-pink text-white rounded-2xl hover:bg-glaum-pink/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
