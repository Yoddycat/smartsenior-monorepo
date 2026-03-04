import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'primary' | 'secondary'
}

/**
 * Spinner component following SmartSenior Design System
 *
 * Loading indicator with accessible announcement
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size = 'md', variant = 'default', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-4 h-4 border-2',
      md: 'w-6 h-6 border-2',
      lg: 'w-8 h-8 border-3',
      xl: 'w-12 h-12 border-4',
    }

    const variantClasses = {
      default: 'border-[var(--foreground-muted)] border-t-[var(--foreground)]',
      primary: 'border-[var(--primary)]/30 border-t-[var(--primary)]',
      secondary: 'border-[var(--background-muted)] border-t-[var(--foreground-muted)]',
    }

    return (
      <div
        ref={ref}
        role="status"
        aria-label="Carregando"
        className={cn(
          "inline-block rounded-full animate-spin",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        <span className="sr-only">Carregando...</span>
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  overlay?: boolean
  fullscreen?: boolean
}

/**
 * Loading component with text label
 */
const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = 'md', text = 'Carregando...', overlay, fullscreen, ...props }, ref) => {
    const content = (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center gap-3",
          className
        )}
        {...props}
      >
        <Spinner size={size === 'sm' ? 'md' : size === 'md' ? 'lg' : 'xl'} variant="primary" />
        {text && (
          <p className={cn(
            "text-[var(--foreground-muted)]",
            size === 'sm' && "text-sm",
            size === 'md' && "text-base",
            size === 'lg' && "text-lg"
          )}>
            {text}
          </p>
        )}
      </div>
    )

    if (overlay || fullscreen) {
      return (
        <div
          className={cn(
            "flex items-center justify-center",
            "bg-[var(--background)]/80 backdrop-blur-sm",
            fullscreen ? "fixed inset-0 z-50" : "absolute inset-0 z-10"
          )}
        >
          {content}
        </div>
      )
    }

    return content
  }
)
Loading.displayName = "Loading"

// Dots loading animation
const LoadingDots: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn("flex items-center gap-1", className)}>
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-2 h-2 rounded-full bg-[var(--primary)] animate-bounce"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    ))}
  </div>
)
LoadingDots.displayName = "LoadingDots"

export { Spinner, Loading, LoadingDots }
