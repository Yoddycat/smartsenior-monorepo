import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'
import { pillarIcons, categoryColors } from '../../constants/icons'
import { TaskCategory, ProtocolWeek } from '../../types'

interface WeeklyGoalItem {
  month: number
  week: number
  category: TaskCategory
  title: string
  description: string
  target: number
  unit: string
}

interface GoalsSectionProps {
  weekGoals: WeeklyGoalItem[]
  selectedWeek: ProtocolWeek
  onWeekChange: (week: ProtocolWeek) => void
}

export function GoalsSection({ weekGoals, selectedWeek, onWeekChange }: GoalsSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Metas Semanais</Text>

      {/* Week Selector */}
      <View style={styles.weekSelector}>
        {([1, 2, 3, 4] as ProtocolWeek[]).map((week) => (
          <TouchableOpacity
            key={week}
            style={[
              styles.weekButton,
              selectedWeek === week && styles.weekButtonActive,
            ]}
            onPress={() => onWeekChange(week)}
          >
            <Text
              style={[
                styles.weekButtonText,
                selectedWeek === week && styles.weekButtonTextActive,
              ]}
            >
              Semana {week}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {weekGoals.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyStateText}>
            Nenhuma meta para esta semana
          </Text>
        </View>
      ) : (
        weekGoals.map((goal, index) => (
          <View key={index} style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <View
                style={[
                  styles.goalIconContainer,
                  { backgroundColor: `${categoryColors[goal.category]}15` },
                ]}
              >
                <Image
                  source={pillarIcons[goal.category]}
                  style={styles.goalIcon}
                />
              </View>
              <View style={styles.goalInfo}>
                <Text style={styles.goalTitle}>{goal.title}</Text>
                <Text style={styles.goalDescription}>{goal.description}</Text>
              </View>
            </View>

            <View style={styles.goalProgress}>
              <View style={styles.goalProgressHeader}>
                <Text style={styles.goalProgressLabel}>Progresso</Text>
                <Text style={styles.goalProgressValue}>
                  0/{goal.target} {goal.unit}
                </Text>
              </View>
              <View style={styles.goalProgressBar}>
                <View style={[styles.goalProgressFill, { width: '0%' }]} />
              </View>
            </View>
          </View>
        ))
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
    marginBottom: spacing.xs,
  },
  weekSelector: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  weekButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    backgroundColor: colors.white,
    marginRight: spacing.xs,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  weekButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  weekButtonText: {
    fontSize: typography.fontSize.xs,
    fontWeight: '600',
    color: colors.gray600,
  },
  weekButtonTextActive: {
    color: colors.white,
  },
  emptyState: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray400,
  },
  goalCard: {
    ...cardStyles.compact,
    marginBottom: spacing.sm,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  goalIconContainer: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  goalInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  goalTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray900,
  },
  goalDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: spacing.xs,
  },
  goalProgress: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.gray100,
  },
  goalProgressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  goalProgressLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
  },
  goalProgressValue: {
    fontSize: typography.fontSize.xs,
    fontWeight: '600',
    color: colors.primary,
  },
  goalProgressBar: {
    height: 6,
    backgroundColor: colors.gray200,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  goalProgressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
})
