/**
 * PulseView - Pulsing animation for attention-grabbing elements
 */

import React, { useEffect, useRef } from 'react'
import { Animated, ViewStyle } from 'react-native'

interface PulseViewProps {
  children: React.ReactNode
  active?: boolean
  minScale?: number
  maxScale?: number
  duration?: number
  style?: ViewStyle
}

export function PulseView({
  children,
  active = true,
  minScale = 0.97,
  maxScale = 1.03,
  duration = 1500,
  style,
}: PulseViewProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (!active) {
      scaleAnim.setValue(1)
      return
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: maxScale,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: minScale,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ])
    )

    animation.start()

    return () => {
      animation.stop()
    }
  }, [active, scaleAnim, minScale, maxScale, duration])

  return (
    <Animated.View style={[style, { transform: [{ scale: scaleAnim }] }]}>
      {children}
    </Animated.View>
  )
}
