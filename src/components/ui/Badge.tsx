import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'outline' | 'muted'
  className?: string
}

const variants = {
  gold: 'bg-gold text-jet font-bold',
  outline: 'border border-gold/50 text-gold',
  muted: 'bg-jet-300 text-white/60',
}

export default function Badge({ children, variant = 'outline', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
