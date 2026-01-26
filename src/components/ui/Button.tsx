import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center font-semibold rounded-soft
      transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
    `

    const variants = {
      primary: `
        bg-weenie-red text-white shadow-cozy
        hover:bg-weenie-red/90 hover:shadow-cozy-lg hover:-translate-y-0.5
        focus:ring-weenie-red/50
      `,
      secondary: `
        bg-weenie-teal text-white shadow-cozy
        hover:bg-weenie-teal/90 hover:shadow-cozy-lg hover:-translate-y-0.5
        focus:ring-weenie-teal/50
      `,
      outline: `
        bg-transparent border-2 border-weenie-red text-weenie-red
        hover:bg-weenie-red hover:text-white hover:-translate-y-0.5
        focus:ring-weenie-red/50
      `,
      ghost: `
        bg-transparent text-foreground
        hover:bg-weenie-teal/10 hover:text-weenie-teal
        focus:ring-weenie-teal/50
      `,
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, type ButtonProps }
