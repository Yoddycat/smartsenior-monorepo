import React, { ReactNode } from 'react'
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'

export interface StatItem {
  value: string | number
  label: string
  valueColor?: string
  renderValue?: () => ReactNode
}

type StatRowVariant = 'card' | 'inline' | 'bordered'

interface StatRowProps {
  stats: StatItem[]
  variant?: StatRowVariant
  style?: ViewStyle
  valueStyle?: TextStyle
}

export function StatRow({ stats, variant = 'inline', style, valueStyle }: StatRowProps) {
  const containerStyle = [
    styles.container,
    variant === 'card' && styles.containerCard,
    variant === 'bordered' && styles.containerBordered,
    style,
  ]

  return (
    <View style={containerStyle}>
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <View style={styles.statItem}>
            {stat.renderValue ? (
              stat.renderValue()
            ) : (
              <Text
                style={[
                  styles.statValue,
                  stat.valueColor && { color: stat.valueColor },
                  valueStyle,
                ]}
              >
                {stat.value}
              </Text>
            )}
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
          {index < stats.length - 1 && <View style={styles.divider} />}
        </React.Fragment>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerCard: {
    ...cardStyles.base,
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  containerBordered: {
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.gray100,
    marginBottom: spacing.md,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: spacing.xs,
  },
  divider: {
    width: 1,
    backgroundColor: colors.gray200,
  },
})
