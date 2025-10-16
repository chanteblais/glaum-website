import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  subtitle?: string
  id?: string
}

export function Section({ 
  children, 
  className, 
  title, 
  subtitle, 
  id 
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 lg:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12 lg:mb-16">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-glaum-ink mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-glaum-ink/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
