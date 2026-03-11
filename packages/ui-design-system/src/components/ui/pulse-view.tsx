import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface PulseViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable or disable the pulse animation */
  active?: boolean
  /** Pulse animation type */
  variant?: 'scale' | 'glow' | 'ring' | 'opacity' | 'bounce'
  /** Animation duration in milliseconds */
  duration?: number
  /** Number of times to pulse (0 = infinite) */
  count?: number
  /** Intensity of the effect (0.1 to 1) */
  intensity?: number
  /** Color for glow/ring variants */
  color?: string
  /** Delay before starting animation */
  delay?: number
  /** Called when animation iteration completes */
  onPulse?: () => void
  /** Called when all pulse iterations complete (if count > 0) */
  onComplete?: () => void
}

/**
 * PulseView component following SmartSenior Design System
 *
 * Wrapper component that adds attention-grabbing pulse animations.
 * Useful for notifications, alerts, or highlighting important elements.
 *
 * @example
 * ```tsx
 * // Basic pulse
 * <PulseView>
 *   <Badge>New</Badge>
 * </PulseView>
 *
 * // Glow effect for notifications
 * <PulseView variant="glow" color="var(--error)">
 *   <NotificationIcon />
 * </PulseView>
 *
 * // Limited pulse count
 * <PulseView count={3} onComplete={() => console.log('Done!')}>
 *   <Button>Click me!</Button>
 * </PulseView>
 * ```
 */
const PulseView = React.forwardRef<HTMLDivElement, PulseViewProps>(
  (
    {
      children,
      active = true,
      variant = 'scale',
      duration = 1500,
      count = 0,
      intensity = 0.5,
      color = 'var(--primary)',
      delay = 0,
      onPulse,
      onComplete,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [currentCount, setCurrentCount] = React.useState(0)
    const [isAnimating, setIsAnimating] = React.useState(false)
    const animationRef = React.useRef<number | null>(null)
    const startTimeRef = React.useRef<number | null>(null)

    // Check for reduced motion preference
    const prefersReducedMotion = React.useMemo(() => {
      if (typeof window === 'undefined') return false
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }, [])

    const shouldAnimate = active && !prefersReducedMotion

    // Handle animation iterations
    React.useEffect(() => {
      if (!shouldAnimate) return

      const startAnimation = () => {
        setIsAnimating(true)
        startTimeRef.current = Date.now()

        const checkIteration = () => {
          if (!startTimeRef.current) return

          const elapsed = Date.now() - startTimeRef.current
          const iterations = Math.floor(elapsed / duration)

          if (iterations > currentCount) {
            setCurrentCount(iterations)
            onPulse?.()

            if (count > 0 && iterations >= count) {
              setIsAnimating(false)
              onComplete?.()
              return
            }
          }

          if (count === 0 || iterations < count) {
            animationRef.current = requestAnimationFrame(checkIteration)
          }
        }

        animationRef.current = requestAnimationFrame(checkIteration)
      }

      const timeoutId = setTimeout(startAnimation, delay)

      return () => {
        clearTimeout(timeoutId)
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }, [shouldAnimate, duration, count, delay, currentCount, onPulse, onComplete])

    // Reset count when active changes
    React.useEffect(() => {
      if (!active) {
        setCurrentCount(0)
        setIsAnimating(false)
      }
    }, [active])

    // Calculate animation values based on intensity
    const scaleAmount = 1 + (intensity * 0.15) // 1.0 to 1.15
    const opacityMin = 1 - (intensity * 0.5) // 1.0 to 0.5
    const glowSize = intensity * 20 // 0 to 20px

    // Get animation class and styles based on variant
    const getAnimationStyles = (): React.CSSProperties => {
      if (!isAnimating) return {}

      const baseAnimation = {
        animationDuration: `${duration}ms`,
        animationIterationCount: count > 0 ? count : 'infinite',
        animationTimingFunction: 'ease-in-out',
        animationDelay: `${delay}ms`,
      }

      switch (variant) {
        case 'scale':
          return {
            ...baseAnimation,
            animationName: 'pulse-scale',
            '--pulse-scale': scaleAmount,
          } as React.CSSProperties

        case 'opacity':
          return {
            ...baseAnimation,
            animationName: 'pulse-opacity',
            '--pulse-opacity-min': opacityMin,
          } as React.CSSProperties

        case 'glow':
          return {
            ...baseAnimation,
            animationName: 'pulse-glow',
            '--pulse-glow-color': color,
            '--pulse-glow-size': `${glowSize}px`,
          } as React.CSSProperties

        case 'ring':
          return {
            ...baseAnimation,
            position: 'relative',
          } as React.CSSProperties

        case 'bounce':
          return {
            ...baseAnimation,
            animationName: 'pulse-bounce',
            '--pulse-bounce-height': `${intensity * 10}px`,
          } as React.CSSProperties

        default:
          return baseAnimation
      }
    }

    // Ring variant needs a pseudo-element, so we wrap differently
    if (variant === 'ring' && isAnimating) {
      return (
        <div
          ref={ref}
          className={cn("relative inline-flex", className)}
          style={style}
          {...props}
        >
          {children}
          <span
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{
              '--pulse-ring-color': color,
              animationDuration: `${duration}ms`,
              animationIterationCount: count > 0 ? count : 'infinite',
            } as React.CSSProperties}
          />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex",
          isAnimating && variant === 'scale' && 'animate-pulse-scale',
          isAnimating && variant === 'opacity' && 'animate-pulse-opacity',
          isAnimating && variant === 'glow' && 'animate-pulse-glow',
          isAnimating && variant === 'bounce' && 'animate-pulse-bounce',
          className
        )}
        style={{
          ...getAnimationStyles(),
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
PulseView.displayName = "PulseView"

/**
 * BreathingView - Gentle breathing animation for calm UI elements
 */
export interface BreathingViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable animation */
  active?: boolean
  /** Breathing cycle duration */
  duration?: number
  /** Scale amount (1.0 to 1.1 recommended) */
  scale?: number
}

const BreathingView = React.forwardRef<HTMLDivElement, BreathingViewProps>(
  (
    {
      children,
      active = true,
      duration = 4000,
      scale = 1.03,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const prefersReducedMotion = React.useMemo(() => {
      if (typeof window === 'undefined') return false
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }, [])

    const shouldAnimate = active && !prefersReducedMotion

    return (
      <div
        ref={ref}
        className={cn(shouldAnimate && "animate-breathing", className)}
        style={{
          '--breathing-scale': scale,
          '--breathing-duration': `${duration}ms`,
          ...style,
        } as React.CSSProperties}
        {...props}
      >
        {children}
      </div>
    )
  }
)
BreathingView.displayName = "BreathingView"

/**
 * AttentionView - Strong attention-grabbing animation
 */
export interface AttentionViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable animation */
  active?: boolean
  /** Animation type */
  type?: 'shake' | 'wobble' | 'flash' | 'heartbeat'
  /** Animation duration */
  duration?: number
  /** Number of iterations */
  count?: number
}

const AttentionView = React.forwardRef<HTMLDivElement, AttentionViewProps>(
  (
    {
      children,
      active = true,
      type = 'shake',
      duration = 500,
      count = 1,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isAnimating, setIsAnimating] = React.useState(false)

    const prefersReducedMotion = React.useMemo(() => {
      if (typeof window === 'undefined') return false
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }, [])

    React.useEffect(() => {
      if (active && !prefersReducedMotion) {
        setIsAnimating(true)
        const timer = setTimeout(() => {
          setIsAnimating(false)
        }, duration * count)
        return () => clearTimeout(timer)
      }
    }, [active, duration, count, prefersReducedMotion])

    return (
      <div
        ref={ref}
        className={cn(
          isAnimating && `animate-attention-${type}`,
          className
        )}
        style={{
          animationDuration: `${duration}ms`,
          animationIterationCount: count,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AttentionView.displayName = "AttentionView"

export { PulseView, BreathingView, AttentionView }
