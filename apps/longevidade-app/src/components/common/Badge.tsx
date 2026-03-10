/**
 * Badge Component
 *
 * Versatile badge component supporting multiple variants:
 * - status: With dot indicator (e.g., "Recuperação" with colored dot)
 * - circle: Circular badge with number/icon
 * - text: Simple text label with background
 * - count: Small count indicator
 *
 * Usage:
 * ```tsx
 * <Badge variant="status" color={colors.success} label="Ativo" />
 * <Badge variant="circle" color={colors.primary}>1</Badge>
 * <Badge variant="text" color={colors.warning} label="PENDENTE" />
 * <Badge variant="count" count={5} />
 * ```
 */

import React, { ReactNode } from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { colors, spacing, borderRadius, typography } from '../../constants/theme'

type BadgeVariant = 'status' | 'circle' | 'text' | 'count'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
  variant?: BadgeVariant
  color?: string
  label?: string
  count?: number
  children?: ReactNode
  size?: BadgeSize
  style?: ViewStyle
  textStyle?: TextStyle
  showDot?: boolean
}

export function Badge({
  variant = 'text',
  color = colors.primary,
  label,
  count,
  children,
  size = 'md',
  style,
  textStyle,
  showDot = true,
}: BadgeProps) {
  const sizeStyles = getSizeStyles(size, variant)

  if (variant === 'status') {
    return (
      <View
        style={[
          styles.statusBadge,
          { backgroundColor: color + '20' },
          sizeStyles.container,
          style,
        ]}
      >
        {showDot && (
          <View style={[styles.statusDot, { backgroundColor: color }, sizeStyles.dot]} />
        )}
        <Text style={[styles.statusText, { color }, sizeStyles.text, textStyle]}>
          {label || children}
        </Text>
      </View>
    )
  }

  if (variant === 'circle') {
    return (
      <View
        style={[
          styles.circleBadge,
          { backgroundColor: color },
          sizeStyles.container,
          style,
        ]}
      >
        <Text style={[styles.circleBadgeText, sizeStyles.text, textStyle]}>
          {children || label || count}
        </Text>
      </View>
    )
  }

  if (variant === 'count') {
    return (
      <View
        style={[
          styles.countBadge,
          { backgroundColor: color },
          sizeStyles.container,
          style,
        ]}
      >
        <Text style={[styles.countBadgeText, sizeStyles.text, textStyle]}>
          {count ?? children}
        </Text>
      </View>
    )
  }

  // Default: text variant
  return (
    <View
      style={[
        styles.textBadge,
        { backgroundColor: color + '20' },
        sizeStyles.container,
        style,
      ]}
    >
      <Text style={[styles.textBadgeText, { color }, sizeStyles.text, textStyle]}>
        {label || children}
      </Text>
    </View>
  )
}

function getSizeStyles(size: BadgeSize, variant: BadgeVariant) {
  const sizes = {
    sm: {
      container: variant === 'circle'
        ? { width: 24, height: 24 }
        : { paddingHorizontal: spacing.xs, paddingVertical: 2 },
      text: { fontSize: typography.fontSize.xs },
      dot: { width: 6, height: 6 },
    },
    md: {
      container: variant === 'circle'
        ? { width: 40, height: 40 }
        : { paddingHorizontal: spacing.sm, paddingVertical: spacing.xs },
      text: { fontSize: typography.fontSize.sm },
      dot: { width: 8, height: 8 },
    },
    lg: {
      container: variant === 'circle'
        ? { width: 56, height: 56 }
        : { paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
      text: { fontSize: typography.fontSize.base },
      dot: { width: 10, height: 10 },
    },
  }
  return sizes[size]
}

// Preset color badges for common use cases
export const StatusBadge = {
  Success: (props: Omit<BadgeProps, 'variant' | 'color'>) => (
    <Badge variant="status" color={colors.success} {...props} />
  ),
  Warning: (props: Omit<BadgeProps, 'variant' | 'color'>) => (
    <Badge variant="status" color={colors.warning} {...props} />
  ),
  Danger: (props: Omit<BadgeProps, 'variant' | 'color'>) => (
    <Badge variant="status" color={colors.danger} {...props} />
  ),
  Info: (props: Omit<BadgeProps, 'variant' | 'color'>) => (
    <Badge variant="status" color={colors.info} {...props} />
  ),
}

export const CategoryBadge = ({ category, color }: { category: string; color: string }) => (
  <Badge variant="text" color={color} label={category} size="sm" />
)

const styles = StyleSheet.create({
  // Status badge (with dot)
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: borderRadius.full,
  },
  statusDot: {
    borderRadius: borderRadius.full,
    marginRight: spacing.xs,
  },
  statusText: {
    fontWeight: '600',
  },

  // Circle badge
  circleBadge: {
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBadgeText: {
    fontWeight: 'bold',
    color: colors.white,
  },

  // Count badge
  countBadge: {
    minWidth: 20,
    height: 20,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xs,
  },
  countBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: 'bold',
    color: colors.white,
  },

  // Text badge
  textBadge: {
    borderRadius: borderRadius.sm,
  },
  textBadgeText: {
    fontWeight: '600',
  },
})
