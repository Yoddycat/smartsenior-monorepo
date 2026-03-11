import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface SuccessAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the animation in pixels */
  size?: number
  /** Animation duration in milliseconds */
  duration?: number
  /** Delay before animation starts */
  delay?: number
  /** Color variant */
  variant?: 'success' | 'primary' | 'info' | 'warning'
  /** Show animation on mount */
  autoPlay?: boolean
  /** Show confetti effect */
  confetti?: boolean
  /** Called when animation completes */
  onComplete?: () => void
}

/**
 * SuccessAnimation component following SmartSenior Design System
 *
 * Animated checkmark for success feedback.
 * Uses SVG path animation for smooth checkmark drawing.
 *
 * @example
 * ```tsx
 * // Basic
 * <SuccessAnimation />
 *
 * // With confetti
 * <SuccessAnimation confetti onComplete={() => navigate('/next')} />
 *
 * // Custom size and color
 * <SuccessAnimation size={120} variant="primary" />
 * ```
 */
const SuccessAnimation = React.forwardRef<HTMLDivElement, SuccessAnimationProps>(
  (
    {
      size = 80,
      duration = 600,
      delay = 0,
      variant = 'success',
      autoPlay = true,
      confetti = false,
      onComplete,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isAnimating, setIsAnimating] = React.useState(false)
    const [showConfetti, setShowConfetti] = React.useState(false)

    const variantColors = {
      success: 'var(--success)',
      primary: 'var(--primary)',
      info: 'var(--info)',
      warning: 'var(--warning)',
    }

    const color = variantColors[variant]
    const strokeWidth = size * 0.08
    const checkmarkPath = "M14 27 L22 35 L38 16"
    const pathLength = 40

    React.useEffect(() => {
      if (!autoPlay) return

      const startTimer = setTimeout(() => {
        setIsAnimating(true)

        if (confetti) {
          setTimeout(() => setShowConfetti(true), duration * 0.6)
        }

        setTimeout(() => {
          onComplete?.()
        }, duration + 200)
      }, delay)

      return () => clearTimeout(startTimer)
    }, [autoPlay, delay, duration, confetti, onComplete])

    const play = React.useCallback(() => {
      setIsAnimating(false)
      setShowConfetti(false)

      requestAnimationFrame(() => {
        setIsAnimating(true)

        if (confetti) {
          setTimeout(() => setShowConfetti(true), duration * 0.6)
        }

        setTimeout(() => {
          onComplete?.()
        }, duration + 200)
      })
    }, [confetti, duration, onComplete])

    // Expose play method via ref
    React.useImperativeHandle(ref as React.Ref<{ play: () => void }>, () => ({
      play,
    }), [play])

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn("relative inline-flex items-center justify-center", className)}
        style={{ width: size, height: size, ...style }}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 52 52"
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth / (size / 52)}
            opacity={0.2}
          />

          {/* Animated circle */}
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth / (size / 52)}
            strokeLinecap="round"
            style={{
              strokeDasharray: 150,
              strokeDashoffset: isAnimating ? 0 : 150,
              transition: `stroke-dashoffset ${duration * 0.6}ms ease-out`,
            }}
          />
        </svg>

        {/* Checkmark */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 52 52"
          className="absolute"
        >
          <path
            d={checkmarkPath}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth / (size / 52)}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: pathLength,
              strokeDashoffset: isAnimating ? 0 : pathLength,
              transition: `stroke-dashoffset ${duration * 0.4}ms ease-out ${duration * 0.5}ms`,
            }}
          />
        </svg>

        {/* Scale effect */}
        {isAnimating && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: color,
              opacity: 0,
              transform: 'scale(0.8)',
              animation: `success-pop ${duration * 0.3}ms ease-out ${duration * 0.7}ms forwards`,
            }}
          />
        )}

        {/* Confetti */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][i % 6],
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `confetti-burst ${600}ms ease-out forwards`,
                  animationDelay: `${i * 30}ms`,
                  '--confetti-angle': `${i * 30}deg`,
                  '--confetti-distance': `${40 + Math.random() * 30}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
)
SuccessAnimation.displayName = "SuccessAnimation"

/**
 * ErrorAnimation - Animated X mark for error feedback
 */
export interface ErrorAnimationProps extends Omit<SuccessAnimationProps, 'variant' | 'confetti'> {
  /** Shake effect */
  shake?: boolean
}

const ErrorAnimation = React.forwardRef<HTMLDivElement, ErrorAnimationProps>(
  (
    {
      size = 80,
      duration = 600,
      delay = 0,
      autoPlay = true,
      shake = true,
      onComplete,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isAnimating, setIsAnimating] = React.useState(false)

    const color = 'var(--error)'
    const strokeWidth = size * 0.08

    React.useEffect(() => {
      if (!autoPlay) return

      const timer = setTimeout(() => {
        setIsAnimating(true)
        setTimeout(() => onComplete?.(), duration + 200)
      }, delay)

      return () => clearTimeout(timer)
    }, [autoPlay, delay, duration, onComplete])

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center",
          isAnimating && shake && "animate-attention-shake",
          className
        )}
        style={{ width: size, height: size, ...style }}
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 52 52"
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth / (size / 52)}
            opacity={0.2}
          />

          {/* Animated circle */}
          <circle
            cx="26"
            cy="26"
            r="24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth / (size / 52)}
            strokeLinecap="round"
            style={{
              strokeDasharray: 150,
              strokeDashoffset: isAnimating ? 0 : 150,
              transition: `stroke-dashoffset ${duration * 0.6}ms ease-out`,
            }}
          />
        </svg>

        {/* X mark */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 52 52"
          className="absolute"
        >
          <path
            d="M16 16 L36 36"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth / (size / 52)}
            strokeLinecap="round"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: isAnimating ? 0 : 30,
              transition: `stroke-dashoffset ${duration * 0.3}ms ease-out ${duration * 0.5}ms`,
            }}
          />
          <path
            d="M36 16 L16 36"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth / (size / 52)}
            strokeLinecap="round"
            style={{
              strokeDasharray: 30,
              strokeDashoffset: isAnimating ? 0 : 30,
              transition: `stroke-dashoffset ${duration * 0.3}ms ease-out ${duration * 0.65}ms`,
            }}
          />
        </svg>
      </div>
    )
  }
)
ErrorAnimation.displayName = "ErrorAnimation"

/**
 * LoadingToSuccess - Loading spinner that transforms to success
 */
export interface LoadingToSuccessProps extends Omit<SuccessAnimationProps, 'autoPlay'> {
  /** Current state */
  state: 'loading' | 'success' | 'error'
}

const LoadingToSuccess = React.forwardRef<HTMLDivElement, LoadingToSuccessProps>(
  (
    {
      size = 80,
      duration = 600,
      state,
      variant = 'success',
      confetti = false,
      onComplete,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const variantColors = {
      success: 'var(--success)',
      primary: 'var(--primary)',
      info: 'var(--info)',
      warning: 'var(--warning)',
    }

    const color = state === 'error' ? 'var(--error)' : variantColors[variant]
    const strokeWidth = size * 0.08

    React.useEffect(() => {
      if (state === 'success' || state === 'error') {
        const timer = setTimeout(() => onComplete?.(), duration + 200)
        return () => clearTimeout(timer)
      }
    }, [state, duration, onComplete])

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex items-center justify-center", className)}
        style={{ width: size, height: size, ...style }}
        {...props}
      >
        {state === 'loading' && (
          <svg
            width={size}
            height={size}
            viewBox="0 0 52 52"
            className="animate-spin"
          >
            <circle
              cx="26"
              cy="26"
              r="24"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth / (size / 52)}
              opacity={0.2}
            />
            <circle
              cx="26"
              cy="26"
              r="24"
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth / (size / 52)}
              strokeLinecap="round"
              strokeDasharray="60 90"
            />
          </svg>
        )}

        {state === 'success' && (
          <SuccessAnimation
            size={size}
            duration={duration}
            variant={variant}
            confetti={confetti}
            autoPlay
          />
        )}

        {state === 'error' && (
          <ErrorAnimation
            size={size}
            duration={duration}
            autoPlay
          />
        )}
      </div>
    )
  }
)
LoadingToSuccess.displayName = "LoadingToSuccess"

export { SuccessAnimation, ErrorAnimation, LoadingToSuccess }
