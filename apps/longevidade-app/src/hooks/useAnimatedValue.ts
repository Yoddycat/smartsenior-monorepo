/**
 * useAnimatedValue Hook
 *
 * Simplifies creation and animation of Animated values.
 * Provides methods for timing, spring, and sequence animations.
 *
 * Usage:
 * ```tsx
 * const { value, animateTo, spring, reset } = useAnimatedValue(0)
 *
 * // Animate to value
 * animateTo(1, { duration: 300 })
 *
 * // Spring animation
 * spring(1, { friction: 5 })
 *
 * // Use in styles
 * <Animated.View style={{ opacity: value }} />
 * ```
 */

import { useRef, useCallback, useMemo } from 'react'
import { Animated, Easing, EasingFunction } from 'react-native'

interface TimingConfig {
  duration?: number
  delay?: number
  easing?: EasingFunction
  useNativeDriver?: boolean
}

interface SpringConfig {
  friction?: number
  tension?: number
  speed?: number
  bounciness?: number
  useNativeDriver?: boolean
}

interface InterpolateConfig {
  inputRange: number[]
  outputRange: number[] | string[]
  extrapolate?: 'extend' | 'clamp' | 'identity'
}

interface UseAnimatedValueReturn {
  value: Animated.Value
  animateTo: (toValue: number, config?: TimingConfig) => Animated.CompositeAnimation
  spring: (toValue: number, config?: SpringConfig) => Animated.CompositeAnimation
  reset: (toValue?: number) => void
  interpolate: (config: InterpolateConfig) => Animated.AnimatedInterpolation<number | string>
  setValue: (value: number) => void
  sequence: (...animations: Animated.CompositeAnimation[]) => Animated.CompositeAnimation
  parallel: (...animations: Animated.CompositeAnimation[]) => Animated.CompositeAnimation
}

export function useAnimatedValue(initialValue: number = 0): UseAnimatedValueReturn {
  const animatedValue = useRef(new Animated.Value(initialValue)).current

  const animateTo = useCallback(
    (toValue: number, config: TimingConfig = {}): Animated.CompositeAnimation => {
      const {
        duration = 300,
        delay = 0,
        easing = Easing.inOut(Easing.ease),
        useNativeDriver = true,
      } = config

      return Animated.timing(animatedValue, {
        toValue,
        duration,
        delay,
        easing,
        useNativeDriver,
      })
    },
    [animatedValue]
  )

  const spring = useCallback(
    (toValue: number, config: SpringConfig = {}): Animated.CompositeAnimation => {
      const {
        friction = 7,
        tension = 40,
        speed,
        bounciness,
        useNativeDriver = true,
      } = config

      return Animated.spring(animatedValue, {
        toValue,
        friction,
        tension,
        speed,
        bounciness,
        useNativeDriver,
      })
    },
    [animatedValue]
  )

  const reset = useCallback(
    (toValue: number = initialValue) => {
      animatedValue.setValue(toValue)
    },
    [animatedValue, initialValue]
  )

  const interpolate = useCallback(
    (config: InterpolateConfig) => {
      return animatedValue.interpolate(config)
    },
    [animatedValue]
  )

  const setValue = useCallback(
    (value: number) => {
      animatedValue.setValue(value)
    },
    [animatedValue]
  )

  const sequence = useCallback(
    (...animations: Animated.CompositeAnimation[]) => {
      return Animated.sequence(animations)
    },
    []
  )

  const parallel = useCallback(
    (...animations: Animated.CompositeAnimation[]) => {
      return Animated.parallel(animations)
    },
    []
  )

  return useMemo(
    () => ({
      value: animatedValue,
      animateTo,
      spring,
      reset,
      interpolate,
      setValue,
      sequence,
      parallel,
    }),
    [animatedValue, animateTo, spring, reset, interpolate, setValue, sequence, parallel]
  )
}

/**
 * useAnimatedLoop Hook
 *
 * Creates a looping animation (e.g., pulse, breathe effects).
 *
 * Usage:
 * ```tsx
 * const { value, start, stop } = useAnimatedLoop({
 *   from: 0.97,
 *   to: 1.03,
 *   duration: 1500,
 * })
 *
 * useEffect(() => {
 *   start()
 *   return () => stop()
 * }, [])
 *
 * <Animated.View style={{ transform: [{ scale: value }] }} />
 * ```
 */

interface UseAnimatedLoopConfig {
  from?: number
  to?: number
  duration?: number
  useNativeDriver?: boolean
  autoStart?: boolean
}

interface UseAnimatedLoopReturn {
  value: Animated.Value
  start: () => void
  stop: () => void
  isRunning: boolean
}

export function useAnimatedLoop(config: UseAnimatedLoopConfig = {}): UseAnimatedLoopReturn {
  const {
    from = 0,
    to = 1,
    duration = 1000,
    useNativeDriver = true,
    autoStart = false,
  } = config

  const animatedValue = useRef(new Animated.Value(from)).current
  const animationRef = useRef<Animated.CompositeAnimation | null>(null)
  const isRunningRef = useRef(false)

  const start = useCallback(() => {
    if (isRunningRef.current) return

    isRunningRef.current = true
    animationRef.current = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: to,
          duration: duration / 2,
          useNativeDriver,
        }),
        Animated.timing(animatedValue, {
          toValue: from,
          duration: duration / 2,
          useNativeDriver,
        }),
      ])
    )

    animationRef.current.start()
  }, [animatedValue, from, to, duration, useNativeDriver])

  const stop = useCallback(() => {
    if (animationRef.current) {
      animationRef.current.stop()
      animationRef.current = null
    }
    isRunningRef.current = false
    animatedValue.setValue(from)
  }, [animatedValue, from])

  // Auto-start if configured
  if (autoStart && !isRunningRef.current) {
    start()
  }

  return useMemo(
    () => ({
      value: animatedValue,
      start,
      stop,
      isRunning: isRunningRef.current,
    }),
    [animatedValue, start, stop]
  )
}

/**
 * useAnimatedSequence Hook
 *
 * Creates an animated value that runs through a sequence of values.
 *
 * Usage:
 * ```tsx
 * const { value, run } = useAnimatedSequence([
 *   { toValue: 0.8, duration: 100 },
 *   { toValue: 1.2, duration: 100 },
 *   { toValue: 1, duration: 150 },
 * ])
 *
 * // Trigger bounce effect
 * run()
 * ```
 */

interface SequenceStep {
  toValue: number
  duration?: number
  type?: 'timing' | 'spring'
  delay?: number
}

interface UseAnimatedSequenceReturn {
  value: Animated.Value
  run: () => void
  reset: () => void
}

export function useAnimatedSequence(
  steps: SequenceStep[],
  initialValue: number = steps[0]?.toValue ?? 0
): UseAnimatedSequenceReturn {
  const animatedValue = useRef(new Animated.Value(initialValue)).current

  const run = useCallback(() => {
    const animations = steps.map((step) => {
      if (step.type === 'spring') {
        return Animated.spring(animatedValue, {
          toValue: step.toValue,
          useNativeDriver: true,
        })
      }
      return Animated.timing(animatedValue, {
        toValue: step.toValue,
        duration: step.duration ?? 200,
        delay: step.delay ?? 0,
        useNativeDriver: true,
      })
    })

    Animated.sequence(animations).start()
  }, [animatedValue, steps])

  const reset = useCallback(() => {
    animatedValue.setValue(initialValue)
  }, [animatedValue, initialValue])

  return useMemo(
    () => ({
      value: animatedValue,
      run,
      reset,
    }),
    [animatedValue, run, reset]
  )
}

export default useAnimatedValue
