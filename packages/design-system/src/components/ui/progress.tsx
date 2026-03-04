import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  label?: string
}

/**
 * Progress component following SmartSenior Design System
 *
 * Accessible progress bar with visual indicators
 */
const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({
    className,
    value = 0,
    max = 100,
    variant = 'default',
    size = 'md',
    showLabel = false,
    label,
    ...props
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    const sizeClasses = {
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
    }

    const variantClasses = {
      default: 'bg-[var(--primary)]',
      success: 'bg-[var(--success)]',
      warning: 'bg-[var(--warning)]',
      error: 'bg-[var(--error)]',
      info: 'bg-[var(--info)]',
    }

    return (
      <div className={cn("w-full", className)}>
        {(showLabel || label) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <span className="text-sm font-medium text-[var(--foreground)]">
                {label}
              </span>
            )}
            {showLabel && (
              <span className="text-sm font-medium text-[var(--foreground-muted)]">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        )}
        <div
          ref={ref}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-label={label || `${Math.round(percentage)}% completo`}
          className={cn(
            "w-full overflow-hidden rounded-full",
            "bg-[var(--background-muted)]",
            sizeClasses[size]
          )}
          {...props}
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-300 ease-out",
              variantClasses[variant]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
Progress.displayName = "Progress"

export interface CircularProgressProps extends React.SVGAttributes<SVGElement> {
  value?: number
  max?: number
  size?: number
  strokeWidth?: number
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  showLabel?: boolean
}

const CircularProgress = React.forwardRef<SVGSVGElement, CircularProgressProps>(
  ({
    className,
    value = 0,
    max = 100,
    size = 80,
    strokeWidth = 8,
    variant = 'default',
    showLabel = true,
    ...props
  }, ref) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (percentage / 100) * circumference

    const variantColors = {
      default: 'var(--primary)',
      success: 'var(--success)',
      warning: 'var(--warning)',
      error: 'var(--error)',
      info: 'var(--info)',
    }

    return (
      <div className={cn("relative inline-flex items-center justify-center", className)}>
        <svg
          ref={ref}
          width={size}
          height={size}
          className="transform -rotate-90"
          {...props}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--background-muted)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={variantColors[variant]}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-300 ease-out"
          />
        </svg>
        {showLabel && (
          <span className="absolute text-base font-semibold text-[var(--foreground)]">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    )
  }
)
CircularProgress.displayName = "CircularProgress"

export { Progress, CircularProgress }
