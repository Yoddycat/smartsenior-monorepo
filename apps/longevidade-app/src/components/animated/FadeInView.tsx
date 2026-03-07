/**
 * FadeInView - Animated container with fade and slide entrance
 */

import React, { useEffect, useRef } from 'react'
import { Animated, ViewStyle } from 'react-native'

interface FadeInViewProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  style?: ViewStyle
}

export function FadeInView({
  children,
  delay = 0,
  duration = 400,
  direction = 'up',
  distance = 20,
  style,
}: FadeInViewProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const translateAnim = useRef(new Animated.Value(getInitialTranslate())).current

  function getInitialTranslate(): number {
    switch (direction) {
      case 'up':
        return distance
      case 'down':
        return -distance
      case 'left':
        return distance
      case 'right':
        return -distance
      default:
        return 0
    }
  }

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration,
        delay,
        useNativeDriver: true,
      }),
    ]).start()
  }, [fadeAnim, translateAnim, delay, duration])

  const translateStyle =
    direction === 'left' || direction === 'right'
      ? { translateX: translateAnim }
      : { translateY: translateAnim }

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: fadeAnim,
          transform: [translateStyle],
        },
      ]}
    >
      {children}
    </Animated.View>
  )
}
