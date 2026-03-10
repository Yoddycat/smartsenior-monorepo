import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface AnimatedCounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Target value to animate to */
  value: number
  /** Animation duration in milliseconds */
  duration?: number
  /** Delay before animation starts in milliseconds */
  delay?: number
  /** Text to display after the number */
  suffix?: string
  /** Text to display before the number */
  prefix?: string
  /** Custom format function for the displayed value */
  formatValue?: (value: number) => string
  /** Number of decimal places to show */
  decimals?: number
  /** Easing function */
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'spring'
  /** Whether to animate on value change (not just mount) */
  animateOnChange?: boolean
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

/**
 * AnimatedCounter component following SmartSenior Design System
 *
 * Displays a number with smooth counting animation.
 * Useful for statistics, metrics, and dynamic values.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <AnimatedCounter value={1234} />
 *
 * // With formatting
 * <AnimatedCounter
 *   value={99.5}
 *   decimals={1}
 *   suffix="%"
 *   duration={1500}
 * />
 *
 * // Currency
 * <AnimatedCounter
 *   value={1234.56}
 *   prefix="R$ "
 *   decimals={2}
 *   formatValue={(v) => v.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
 * />
 * ```
 */
const AnimatedCounter = React.forwardRef<HTMLSpanElement, AnimatedCounterProps>(
  (
    {
      value,
      duration = 1000,
      delay = 0,
      suffix = '',
      prefix = '',
      formatValue,
      decimals = 0,
      easing = 'easeOut',
      animateOnChange = true,
      className,
      ...props
    },
    ref
  ) => {
    const [displayValue, setDisplayValue] = React.useState(0)
    const previousValueRef = React.useRef(0)
    const animationRef = React.useRef<number | null>(null)
    const startTimeRef = React.useRef<number | null>(null)
    const hasAnimatedRef = React.useRef(false)

    React.useEffect(() => {
      // Cancel any running animation
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }

      const startValue = animateOnChange || !hasAnimatedRef.current
        ? previousValueRef.current
        : value
      const endValue = value
      const easingFn = easingFunctions[easing]

      // Handle delay
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
            hasAnimatedRef.current = true
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
    }, [value, duration, delay, easing, animateOnChange])

    // Format the display value
    const formattedValue = React.useMemo(() => {
      if (formatValue) {
        return formatValue(displayValue)
      }
      return decimals > 0
        ? displayValue.toFixed(decimals)
        : Math.round(displayValue).toString()
    }, [displayValue, formatValue, decimals])

    return (
      <span
        ref={ref}
        className={cn(
          "tabular-nums",
          className
        )}
        {...props}
      >
        {prefix}
        {formattedValue}
        {suffix}
      </span>
    )
  }
)
AnimatedCounter.displayName = "AnimatedCounter"

/**
 * AnimatedPercentage - Convenience wrapper for percentage values
 */
const AnimatedPercentage = React.forwardRef<
  HTMLSpanElement,
  Omit<AnimatedCounterProps, 'suffix' | 'decimals'> & { decimals?: number }
>(({ decimals = 0, ...props }, ref) => (
  <AnimatedCounter ref={ref} suffix="%" decimals={decimals} {...props} />
))
AnimatedPercentage.displayName = "AnimatedPercentage"

/**
 * AnimatedCurrency - Convenience wrapper for currency values
 */
const AnimatedCurrency = React.forwardRef<
  HTMLSpanElement,
  Omit<AnimatedCounterProps, 'prefix' | 'decimals' | 'formatValue'> & {
    currency?: string
    locale?: string
  }
>(({ currency = 'BRL', locale = 'pt-BR', ...props }, ref) => (
  <AnimatedCounter
    ref={ref}
    decimals={2}
    formatValue={(v) =>
      v.toLocaleString(locale, {
        style: 'currency',
        currency,
      })
    }
    {...props}
  />
))
AnimatedCurrency.displayName = "AnimatedCurrency"

export { AnimatedCounter, AnimatedPercentage, AnimatedCurrency }
