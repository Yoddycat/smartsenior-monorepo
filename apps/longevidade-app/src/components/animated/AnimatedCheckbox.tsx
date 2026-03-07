/**
 * AnimatedCheckbox - Checkbox with bounce animation
 */

import React, { useEffect, useRef } from 'react'
import { Animated, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native'
import { colors } from '../../constants/theme'

interface AnimatedCheckboxProps {
  checked: boolean
  onPress: () => void
  size?: number
  checkedColor?: string
  uncheckedColor?: string
  style?: ViewStyle
  disabled?: boolean
  accessibilityLabel?: string
}

export function AnimatedCheckbox({
  checked,
  onPress,
  size = 28,
  checkedColor = colors.success,
  uncheckedColor = colors.gray300,
  style,
  disabled = false,
  accessibilityLabel,
}: AnimatedCheckboxProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current
  const backgroundAnim = useRef(new Animated.Value(checked ? 1 : 0)).current
  const checkmarkAnim = useRef(new Animated.Value(checked ? 1 : 0)).current

  useEffect(() => {
    if (checked) {
      // Bounce animation when checked
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 200,
          useNativeDriver: true,
        }),
      ]).start()

      Animated.parallel([
        Animated.timing(backgroundAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(checkmarkAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(backgroundAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }),
        Animated.timing(checkmarkAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [checked, scaleAnim, backgroundAnim, checkmarkAnim])

  const backgroundColor = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['transparent', checkedColor],
  })

  const borderColor = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [uncheckedColor, checkedColor],
  })

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{ checked, disabled }}
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.7}
    >
      <Animated.View
        style={[
          styles.container,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            borderColor,
            transform: [{ scale: scaleAnim }],
          },
          style,
        ]}
      >
        <Animated.Text
          style={[
            styles.checkmark,
            {
              fontSize: size * 0.5,
              opacity: checkmarkAnim,
              transform: [
                {
                  scale: checkmarkAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.5, 1],
                  }),
                },
              ],
            },
          ]}
        >
          ✓
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  checkmark: {
    color: colors.white,
    fontWeight: 'bold',
  },
})
