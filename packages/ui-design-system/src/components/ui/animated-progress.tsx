import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// Easing functions
const easingFunctions = {
  linear: (t: number) => t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeInOut: (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  spring: (t: number) => {
    const c4 = (2 * Math.PI) / 3
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
  },
}

export interface AnimatedProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress value (0-100) */
  value: number
  /** Maximum value */
  max?: number
  /** Animation duration in milliseconds */
  duration?: number
  /** Delay before animation starts */
  delay?: number
  /** Easing function */
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'spring'
  /** Color variant */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'gradient'
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Show percentage label */
  showLabel?: boolean
  /** Label position */
  labelPosition?: 'top' | 'right' | 'inside'
  /** Custom label text */
  label?: string
  /** Show animated counter for percentage */
  animateLabel?: boolean
  /** Stripe pattern */
  striped?: boolean
  /** Animate stripes */
  stripedAnimated?: boolean
  /** Rounded corners */
  rounded?: boolean
  /** Glow effect */
  glow?: boolean
  /** Custom gradient colors [start, end] */
  gradientColors?: [string, string]
  /** Called when animation completes */
  onAnimationComplete?: () => void
}

/**
 * AnimatedProgress component following SmartSenior Design System
 *
 * Progress bar with smooth JavaScript-based animation.
 * More control than CSS transitions for complex animations.
 *
 * @example
 * ```tsx
 * // Basic
 * <AnimatedProgress value={75} />
 *
 * // With label and glow
 * <AnimatedProgress
 *   value={85}
 *   showLabel
 *   glow
 *   variant="success"
 * />
 *
 * // Striped animated
 * <AnimatedProgress
 *   value={60}
 *   striped
 *   stripedAnimated
 *   duration={1500}
 * />
 * ```
 */
const AnimatedProgress = React.forwardRef<HTMLDivElement, AnimatedProgressProps>(
  (
    {
      value,
      max = 100,
      duration = 800,
      delay = 0,
      easing = 'easeOut',
      variant = 'default',
      size = 'md',
      showLabel = false,
      labelPosition = 'top',
      label,
      animateLabel = true,
      striped = false,
      stripedAnimated = false,
      rounded = true,
      glow = false,
      gradientColors,
      onAnimationComplete,
      className,
      ...props
    },
    ref
  ) => {
    const [displayValue, setDisplayValue] = React.useState(0)
    const previousValueRef = React.useRef(0)
    const animationRef = React.useRef<number | null>(null)
    const startTimeRef = React.useRef<number | null>(null)

    const targetPercentage = Math.min(Math.max((value / max) * 100, 0), 100)

    React.useEffect(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      const startValue = previousValueRef.current
      const endValue = targetPercentage
      const easingFn = easingFunctions[easing]

      const timeoutId = setTimeout(() => {
        startTimeRef.current = null

        const animate = (timestamp: number) => {
          if (startTimeRef.current === null) {
            startTimeRef.current = timestamp
          }

          const elapsed = timestamp - startTimeRef.current
          const progress = Math.min(elapsed / duration, 1)
          const easedProgress = easingFn(progress)

          const currentValue = startValue + (endValue - startValue) * easedProgress
          setDisplayValue(currentValue)

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate)
          } else {
            setDisplayValue(endValue)
            previousValueRef.current = endValue
            onAnimationComplete?.()
          }
        }

        animationRef.current = requestAnimationFrame(animate)
      }, delay)

      return () => {
        clearTimeout(timeoutId)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }, [targetPercentage, duration, delay, easing, onAnimationComplete])

    const sizeClasses = {
      xs: 'h-1',
      sm: 'h-1.5',
      md: 'h-2.5',
      lg: 'h-4',
      xl: 'h-6',
    }

    const variantClasses = {
      default: 'bg-[var(--primary)]',
      success: 'bg-[var(--success)]',
      warning: 'bg-[var(--warning)]',
      error: 'bg-[var(--error)]',
      info: 'bg-[var(--info)]',
      gradient: '',
    }

    const glowColors = {
      default: 'var(--primary)',
      success: 'var(--success)',
      warning: 'var(--warning)',
      error: 'var(--error)',
      info: 'var(--info)',
      gradient: gradientColors?.[1] || 'var(--primary)',
    }

    const getGradientStyle = () => {
      if (variant === 'gradient' && gradientColors) {
        return {
          background: `linear-gradient(90deg, ${gradientColors[0]}, ${gradientColors[1]})`,
        }
      }
      return {}
    }

    const renderLabel = () => {
      const labelText = label || `${animateLabel ? Math.round(displayValue) : Math.round(targetPercentage)}%`

      if (labelPosition === 'inside' && size !== 'xs' && size !== 'sm') {
        return null // Rendered inside the bar
      }

      return (
        <span
          className={cn(
            "text-sm font-medium tabular-nums",
            labelPosition === 'right' && "ml-3 text-[var(--foreground)]",
            labelPosition === 'top' && "text-[var(--foreground-muted)]"
          )}
        >
          {labelText}
        </span>
      )
    }

    return (
      <div
        ref={ref}
        className={cn("w-full", className)}
        {...props}
      >
        {/* Top label row */}
        {showLabel && labelPosition === 'top' && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <span className="text-sm font-medium text-[var(--foreground)]">
                {label}
              </span>
            )}
            <span className="text-sm font-medium text-[var(--foreground-muted)] tabular-nums">
              {animateLabel ? Math.round(displayValue) : Math.round(targetPercentage)}%
            </span>
          </div>
        )}

        <div className={cn(
          "flex items-center",
          labelPosition === 'right' && "gap-3"
        )}>
          {/* Progress container */}
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-label={label || `${Math.round(targetPercentage)}% completo`}
            className={cn(
              "flex-1 overflow-hidden",
              "bg-[var(--background-muted)]",
              sizeClasses[size],
              rounded && "rounded-full"
            )}
          >
            <div
              className={cn(
                "h-full relative",
                rounded && "rounded-full",
                variantClasses[variant],
                striped && "bg-stripes",
                stripedAnimated && "animate-stripes"
              )}
              style={{
                width: `${displayValue}%`,
                ...getGradientStyle(),
                ...(glow && {
                  boxShadow: `0 0 10px ${glowColors[variant]}, 0 0 20px ${glowColors[variant]}40`,
                }),
              }}
            >
              {/* Inside label */}
              {showLabel && labelPosition === 'inside' && size !== 'xs' && size !== 'sm' && displayValue > 10 && (
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white tabular-nums">
                  {animateLabel ? Math.round(displayValue) : Math.round(targetPercentage)}%
                </span>
              )}
            </div>
          </div>

          {/* Right label */}
          {showLabel && labelPosition === 'right' && renderLabel()}
        </div>
      </div>
    )
  }
)
AnimatedProgress.displayName = "AnimatedProgress"

/**
 * AnimatedCircularProgress - Circular version with animation
 */
export interface AnimatedCircularProgressProps extends React.SVGAttributes<SVGElement> {
  /** Progress value (0-100) */
  value: number
  /** Maximum value */
  max?: number
  /** Circle size in pixels */
  size?: number
  /** Stroke width */
  strokeWidth?: number
  /** Animation duration */
  duration?: number
  /** Animation delay */
  delay?: number
  /** Easing function */
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'spring'
  /** Color variant */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  /** Show percentage label */
  showLabel?: boolean
  /** Animate the label */
  animateLabel?: boolean
  /** Glow effect */
  glow?: boolean
  /** Called when animation completes */
  onAnimationComplete?: () => void
}

const AnimatedCircularProgress = React.forwardRef<SVGSVGElement, AnimatedCircularProgressProps>(
  (
    {
      value,
      max = 100,
      size = 80,
      strokeWidth = 8,
      duration = 800,
      delay = 0,
      easing = 'easeOut',
      variant = 'default',
      showLabel = true,
      animateLabel = true,
      glow = false,
      onAnimationComplete,
      className,
      ...props
    },
    ref
  ) => {
    const [displayValue, setDisplayValue] = React.useState(0)
    const previousValueRef = React.useRef(0)
    const animationRef = React.useRef<number | null>(null)
    const startTimeRef = React.useRef<number | null>(null)

    const targetPercentage = Math.min(Math.max((value / max) * 100, 0), 100)
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const offset = circumference - (displayValue / 100) * circumference

    React.useEffect(() => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      const startValue = previousValueRef.current
      const endValue = targetPercentage
      const easingFn = easingFunctions[easing]

      const timeoutId = setTimeout(() => {
        startTimeRef.current = null

        const animate = (timestamp: number) => {
          if (startTimeRef.current === null) {
            startTimeRef.current = timestamp
          }

          const elapsed = timestamp - startTimeRef.current
          const progress = Math.min(elapsed / duration, 1)
          const easedProgress = easingFn(progress)

          const currentValue = startValue + (endValue - startValue) * easedProgress
          setDisplayValue(currentValue)

          if (progress < 1) {
            animationRef.current = requestAnimationFrame(animate)
          } else {
            setDisplayValue(endValue)
            previousValueRef.current = endValue
            onAnimationComplete?.()
          }
        }

        animationRef.current = requestAnimationFrame(animate)
      }, delay)

      return () => {
        clearTimeout(timeoutId)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }, [targetPercentage, duration, delay, easing, onAnimationComplete])

    const variantColors = {
      default: 'var(--primary)',
      success: 'var(--success)',
      warning: 'var(--warning)',
      error: 'var(--error)',
      info: 'var(--info)',
    }

    const strokeColor = variantColors[variant]

    return (
      <div className={cn("relative inline-flex items-center justify-center", className)}>
        <svg
          ref={ref}
          width={size}
          height={size}
          className="transform -rotate-90"
          {...props}
        >
          {/* Glow filter */}
          {glow && (
            <defs>
              <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
          )}

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
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            filter={glow ? `url(#glow-${variant})` : undefined}
          />
        </svg>

        {showLabel && (
          <span className="absolute text-base font-semibold text-[var(--foreground)] tabular-nums">
            {animateLabel ? Math.round(displayValue) : Math.round(targetPercentage)}%
          </span>
        )}
      </div>
    )
  }
)
AnimatedCircularProgress.displayName = "AnimatedCircularProgress"

export { AnimatedProgress, AnimatedCircularProgress }
