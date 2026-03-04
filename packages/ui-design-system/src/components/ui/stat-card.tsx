import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  description?: string
  icon?: React.ReactNode
  trend?: {
    value: number
    label?: string
    direction: 'up' | 'down' | 'neutral'
  }
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error'
}

/**
 * StatCard component following SmartSenior Design System
 *
 * Dashboard statistic display card
 */
const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, title, value, description, icon, trend, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: "bg-[var(--background)]",
      primary: "bg-[var(--primary)]/10",
      success: "bg-[var(--success)]/10",
      warning: "bg-[var(--warning)]/10",
      error: "bg-[var(--error)]/10",
    }

    const iconColors = {
      default: "text-[var(--foreground-muted)]",
      primary: "text-[var(--primary)]",
      success: "text-[var(--success)]",
      warning: "text-[var(--warning)]",
      error: "text-[var(--error)]",
    }

    const trendColors = {
      up: "text-[var(--success)]",
      down: "text-[var(--error)]",
      neutral: "text-[var(--foreground-muted)]",
    }

    const trendIcons = {
      up: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      ),
      down: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      ),
      neutral: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      ),
    }

    return (
      <div
        ref={ref}
        className={cn(
          "p-6 rounded-lg border border-[var(--border)]",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-[var(--foreground-muted)] mb-1">
              {title}
            </p>
            <p className="text-3xl font-bold text-[var(--foreground)]">
              {value}
            </p>
            {description && (
              <p className="text-sm text-[var(--foreground-muted)] mt-1">
                {description}
              </p>
            )}
            {trend && (
              <div className={cn("flex items-center gap-1 mt-2", trendColors[trend.direction])}>
                {trendIcons[trend.direction]}
                <span className="text-sm font-medium">
                  {trend.value > 0 ? '+' : ''}{trend.value}%
                </span>
                {trend.label && (
                  <span className="text-sm text-[var(--foreground-muted)]">
                    {trend.label}
                  </span>
                )}
              </div>
            )}
          </div>
          {icon && (
            <div className={cn("shrink-0", iconColors[variant])}>
              {icon}
            </div>
          )}
        </div>
      </div>
    )
  }
)
StatCard.displayName = "StatCard"

// Mini stat for compact displays
export interface MiniStatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  icon?: React.ReactNode
}

const MiniStat = React.forwardRef<HTMLDivElement, MiniStatProps>(
  ({ className, label, value, icon, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-3 p-3 rounded-md bg-[var(--background-muted)]", className)}
      {...props}
    >
      {icon && <div className="text-[var(--foreground-muted)]">{icon}</div>}
      <div>
        <p className="text-xs text-[var(--foreground-muted)]">{label}</p>
        <p className="text-lg font-semibold text-[var(--foreground)]">{value}</p>
      </div>
    </div>
  )
)
MiniStat.displayName = "MiniStat"

export { StatCard, MiniStat }
