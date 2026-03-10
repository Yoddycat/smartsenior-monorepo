import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface FadeInViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Animation duration in milliseconds */
  duration?: number
  /** Delay before animation starts */
  delay?: number
  /** Direction to animate from */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  /** Distance to travel in pixels */
  distance?: number
  /** Easing function */
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'spring'
  /** Whether to animate on mount or when visible in viewport */
  trigger?: 'mount' | 'viewport'
  /** Viewport threshold (0-1) for intersection observer */
  threshold?: number
  /** Whether to animate only once */
  once?: boolean
  /** Called when animation completes */
  onAnimationComplete?: () => void
  /** Disable animation (useful for reduced motion preference) */
  disabled?: boolean
}

// Easing functions as CSS timing
const easingCSS = {
  linear: 'linear',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
}

/**
 * FadeInView component following SmartSenior Design System
 *
 * Wrapper component that animates children with fade and slide effects.
 * Supports viewport-triggered animations for scroll-based reveals.
 *
 * @example
 * ```tsx
 * // Basic fade in
 * <FadeInView>
 *   <Card>Content</Card>
 * </FadeInView>
 *
 * // Slide up with delay
 * <FadeInView direction="up" delay={200}>
 *   <Text>Hello</Text>
 * </FadeInView>
 *
 * // Viewport triggered
 * <FadeInView trigger="viewport" once>
 *   <Section>Reveals on scroll</Section>
 * </FadeInView>
 * ```
 */
const FadeInView = React.forwardRef<HTMLDivElement, FadeInViewProps>(
  (
    {
      children,
      duration = 400,
      delay = 0,
      direction = 'up',
      distance = 20,
      easing = 'easeOut',
      trigger = 'mount',
      threshold = 0.1,
      once = true,
      onAnimationComplete,
      disabled = false,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(trigger === 'mount')
    const [hasAnimated, setHasAnimated] = React.useState(false)
    const elementRef = React.useRef<HTMLDivElement>(null)
    const combinedRef = useCombinedRefs(ref, elementRef)

    // Check for reduced motion preference
    const prefersReducedMotion = React.useMemo(() => {
      if (typeof window === 'undefined') return false
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }, [])

    const shouldAnimate = !disabled && !prefersReducedMotion

    // Calculate initial transform based on direction
    const getInitialTransform = () => {
      if (!shouldAnimate) return 'none'
      switch (direction) {
        case 'up':
          return `translateY(${distance}px)`
        case 'down':
          return `translateY(-${distance}px)`
        case 'left':
          return `translateX(${distance}px)`
        case 'right':
          return `translateX(-${distance}px)`
        case 'none':
        default:
          return 'none'
      }
    }

    // Intersection Observer for viewport trigger
    React.useEffect(() => {
      if (trigger !== 'viewport' || !elementRef.current) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!hasAnimated || !once) {
                setIsVisible(true)
                setHasAnimated(true)
              }
            } else if (!once) {
              setIsVisible(false)
            }
          })
        },
        { threshold }
      )

      observer.observe(elementRef.current)

      return () => observer.disconnect()
    }, [trigger, threshold, once, hasAnimated])

    // Handle mount trigger with delay
    React.useEffect(() => {
      if (trigger !== 'mount') return

      const timer = setTimeout(() => {
        setIsVisible(true)
      }, delay)

      return () => clearTimeout(timer)
    }, [trigger, delay])

    // Animation complete callback
    React.useEffect(() => {
      if (!isVisible || !shouldAnimate) return

      const timer = setTimeout(() => {
        onAnimationComplete?.()
      }, duration + (trigger === 'mount' ? delay : 0))

      return () => clearTimeout(timer)
    }, [isVisible, duration, delay, trigger, shouldAnimate, onAnimationComplete])

    const animationStyle: React.CSSProperties = shouldAnimate
      ? {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'none' : getInitialTransform(),
          transition: `opacity ${duration}ms ${easingCSS[easing]}, transform ${duration}ms ${easingCSS[easing]}`,
          transitionDelay: trigger === 'mount' ? `${delay}ms` : '0ms',
        }
      : {}

    return (
      <div
        ref={combinedRef}
        className={cn(className)}
        style={{
          ...animationStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
FadeInView.displayName = "FadeInView"

/**
 * FadeInStagger - Staggers multiple FadeInView children
 */
export interface FadeInStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Delay between each child animation */
  staggerDelay?: number
  /** Base delay before first child animates */
  initialDelay?: number
  /** Animation duration for each child */
  duration?: number
  /** Direction for all children */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  /** Distance for all children */
  distance?: number
  /** Easing for all children */
  easing?: 'linear' | 'easeOut' | 'easeInOut' | 'spring'
  /** Trigger mode */
  trigger?: 'mount' | 'viewport'
}

const FadeInStagger = React.forwardRef<HTMLDivElement, FadeInStaggerProps>(
  (
    {
      children,
      staggerDelay = 100,
      initialDelay = 0,
      duration = 400,
      direction = 'up',
      distance = 20,
      easing = 'easeOut',
      trigger = 'mount',
      className,
      ...props
    },
    ref
  ) => {
    const childArray = React.Children.toArray(children)

    return (
      <div ref={ref} className={cn(className)} {...props}>
        {childArray.map((child, index) => (
          <FadeInView
            key={index}
            delay={initialDelay + index * staggerDelay}
            duration={duration}
            direction={direction}
            distance={distance}
            easing={easing}
            trigger={trigger}
          >
            {child}
          </FadeInView>
        ))}
      </div>
    )
  }
)
FadeInStagger.displayName = "FadeInStagger"

/**
 * Utility hook to combine refs
 */
function useCombinedRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return React.useCallback((element: T) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') {
        ref(element)
      } else {
        (ref as React.MutableRefObject<T>).current = element
      }
    })
  }, refs)
}

export { FadeInView, FadeInStagger }
