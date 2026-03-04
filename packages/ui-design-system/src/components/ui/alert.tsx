import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error'
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
}

const defaultIcons = {
  default: null,
  info: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
}

/**
 * Alert component following SmartSenior Design System
 *
 * Inline notification with semantic variants
 */
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'default', dismissible, onDismiss, icon, children, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true)

    if (!isVisible) return null

    const variantClasses = {
      default: "bg-[var(--background-muted)] text-[var(--foreground)] border-[var(--border)]",
      info: "bg-[var(--info)]/10 text-[var(--info)] border-[var(--info)]/30",
      success: "bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/30",
      warning: "bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/30",
      error: "bg-[var(--error)]/10 text-[var(--error)] border-[var(--error)]/30",
    }

    const handleDismiss = () => {
      setIsVisible(false)
      onDismiss?.()
    }

    const displayIcon = icon !== undefined ? icon : defaultIcons[variant]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative flex items-start gap-3 p-4",
          "border rounded-lg",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {displayIcon && <div className="shrink-0 mt-0.5">{displayIcon}</div>}
        <div className="flex-1 min-w-0">{children}</div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={cn(
              "shrink-0 p-1 rounded-md",
              "hover:bg-black/10 dark:hover:bg-white/10",
              "focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]",
              "transition-colors"
            )}
            aria-label="Fechar"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("font-semibold text-base mb-1", className)}
      {...props}
    />
  )
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base opacity-90", className)}
      {...props}
    />
  )
)
AlertDescription.displayName = "AlertDescription"

// Banner variant - full width
export interface BannerProps extends AlertProps {
  position?: 'top' | 'bottom'
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className, position = 'top', ...props }, ref) => (
    <Alert
      ref={ref}
      className={cn(
        "rounded-none border-x-0",
        position === 'top' && "border-t-0",
        position === 'bottom' && "border-b-0",
        className
      )}
      {...props}
    />
  )
)
Banner.displayName = "Banner"

export { Alert, AlertTitle, AlertDescription, Banner }
