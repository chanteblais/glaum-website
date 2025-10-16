import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glaum-pink focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-glaum-pink text-white hover:bg-glaum-pink/90 shadow-lg hover:shadow-xl',
        secondary: 'bg-glaum-lavender text-glaum-ink hover:bg-glaum-lavender/90 shadow-md hover:shadow-lg',
        ghost: 'text-glaum-ink hover:bg-glaum-cream/50 hover:text-glaum-plum',
        outline: 'border border-glaum-pink text-glaum-pink hover:bg-glaum-pink hover:text-white',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        default: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 text-base',
        xl: 'h-12 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface BadgeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function BadgeButton({ 
  className, 
  variant, 
  size, 
  asChild = false, 
  ...props 
}: BadgeButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
