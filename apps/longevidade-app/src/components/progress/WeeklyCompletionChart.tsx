import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'

const WEEKDAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

const getCurrentWeekdayIndex = (): number => {
  const day = new Date().getDay()
  return day === 0 ? 6 : day - 1
}

interface WeeklyCompletionChartProps {
  weeklyCompletion: number[]
}

export function WeeklyCompletionChart({ weeklyCompletion }: WeeklyCompletionChartProps) {
  const currentDayIndex = getCurrentWeekdayIndex()

  return (
    <View style={styles.chartCard}>
      <View style={styles.chartContainer}>
        {weeklyCompletion.map((value, index) => (
          <View key={index} style={styles.chartBarContainer}>
            <View style={styles.chartBarWrapper}>
              <View
                style={[
                  styles.chartBar,
                  {
                    height: `${Math.max(value, 4)}%`,
                    backgroundColor: value > 0 ? colors.primary : colors.gray200,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.chartLabel,
                index === currentDayIndex && styles.chartLabelActive,
              ]}
            >
              {WEEKDAYS[index]}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.chartLegend}>
        <View style={styles.chartLegendItem}>
          <View style={[styles.chartLegendDot, { backgroundColor: colors.primary }]} />
          <Text style={styles.chartLegendText}>Tarefas concluidas</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chartCard: {
    ...cardStyles.base,
  },
  chartContainer: {
    flexDirection: 'row',
    height: 150,
    alignItems: 'flex-end',
  },
  chartBarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  chartBarWrapper: {
    flex: 1,
    width: '60%',
    justifyContent: 'flex-end',
  },
  chartBar: {
    width: '100%',
    borderRadius: borderRadius.sm,
    minHeight: 4,
  },
  chartLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: spacing.sm,
  },
  chartLabelActive: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.gray100,
  },
  chartLegendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartLegendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  chartLegendText: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
  },
})
