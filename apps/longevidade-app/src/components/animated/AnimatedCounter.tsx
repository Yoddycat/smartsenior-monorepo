/**
 * AnimatedCounter - Number counter with smooth animation
 */

import React, { useEffect, useRef, useState } from 'react'
import { Animated, Text, TextStyle } from 'react-native'

interface AnimatedCounterProps {
  value: number
  duration?: number
  delay?: number
  suffix?: string
  prefix?: string
  style?: TextStyle
  formatValue?: (value: number) => string
}

export function AnimatedCounter({
  value,
  duration = 1000,
  delay = 0,
  suffix = '',
  prefix = '',
  style,
  formatValue,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const animatedValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Add listener to update displayed value
    const listenerId = animatedValue.addListener(({ value: v }) => {
      setDisplayValue(Math.round(v))
    })

    // Animate to new value
    Animated.timing(animatedValue, {
      toValue: value,
      duration,
      delay,
      useNativeDriver: false, // Text updates require false
    }).start()

    return () => {
      animatedValue.removeListener(listenerId)
    }
  }, [value, animatedValue, duration, delay])

  const formattedValue = formatValue ? formatValue(displayValue) : displayValue.toString()

  return (
    <Text style={style}>
      {prefix}
      {formattedValue}
      {suffix}
    </Text>
  )
}
