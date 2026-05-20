import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-jet font-bold hover:bg-gold-light active:bg-gold-dark shadow-gold-sm hover:shadow-gold-md transition-all duration-200 animate-pulse-gold',
  secondary:
    'border-2 border-gold text-gold hover:bg-gold hover:text-jet transition-all duration-200',
  ghost:
    'text-white/70 hover:text-white hover:bg-jet-300 transition-all duration-200',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-card',
  lg: 'px-8 py-4 text-lg rounded-card',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-body font-semibold tracking-wide cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
