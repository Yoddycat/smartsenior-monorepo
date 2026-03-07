/**
 * AnimatedProgressBar - Smooth animated progress bar
 */

import React, { useEffect, useRef } from 'react'
import { Animated, View, StyleSheet, ViewStyle } from 'react-native'
import { colors } from '../../constants/theme'

interface AnimatedProgressBarProps {
  progress: number // 0-100
  height?: number
  backgroundColor?: string
  progressColor?: string
  duration?: number
  delay?: number
  style?: ViewStyle
}

export function AnimatedProgressBar({
  progress,
  height = 8,
  backgroundColor = colors.gray200,
  progressColor = colors.primary,
  duration = 800,
  delay = 0,
  style,
}: AnimatedProgressBarProps) {
  const animatedWidth = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progress,
      duration,
      delay,
      useNativeDriver: false, // width animation requires false
    }).start()
  }, [progress, animatedWidth, duration, delay])

  const widthInterpolation = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  })

  return (
    <View
      style={[
        styles.container,
        { height, backgroundColor, borderRadius: height / 2 },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.progress,
          {
            width: widthInterpolation,
            height,
            backgroundColor: progressColor,
            borderRadius: height / 2,
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  progress: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
})
