import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'info'
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-weenie-teal/10 text-weenie-teal',
    success: 'bg-weenie-green/10 text-weenie-green',
    warning: 'bg-weenie-orange/10 text-weenie-orange',
    info: 'bg-weenie-navy/10 text-weenie-navy',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
