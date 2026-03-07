/**
 * SuccessAnimation - Celebration animation when task is completed
 */

import React, { useEffect, useRef } from 'react'
import { Animated, View, StyleSheet, Text } from 'react-native'

interface SuccessAnimationProps {
  visible: boolean
  onComplete?: () => void
  emoji?: string
  message?: string
}

export function SuccessAnimation({
  visible,
  onComplete,
  emoji = '🎉',
  message = 'Parabéns!',
}: SuccessAnimationProps) {
  const scaleAnim = useRef(new Animated.Value(0)).current
  const opacityAnim = useRef(new Animated.Value(0)).current
  const rotateAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (visible) {
      // Reset animations
      scaleAnim.setValue(0)
      opacityAnim.setValue(0)
      rotateAnim.setValue(0)

      // Play entrance animation
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 4,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Auto-hide after delay
        setTimeout(() => {
          Animated.parallel([
            Animated.timing(scaleAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
          ]).start(() => {
            onComplete?.()
          })
        }, 1200)
      })
    }
  }, [visible, scaleAnim, opacityAnim, rotateAnim, onComplete])

  if (!visible) return null

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['-10deg', '10deg', '0deg'],
  })

  return (
    <View style={styles.overlay} pointerEvents="none">
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacityAnim,
            transform: [{ scale: scaleAnim }, { rotate: rotation }],
          },
        ]}
      >
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.message}>{message}</Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 32,
    paddingVertical: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 8,
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A365D',
  },
})
