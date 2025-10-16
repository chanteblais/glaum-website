import { cn } from '@/lib/utils'

interface KickerProps {
  children: React.ReactNode
  className?: string
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <span className={cn(
      'inline-block text-sm font-medium text-glaum-plum uppercase tracking-wider mb-2',
      className
    )}>
      {children}
    </span>
  )
}
