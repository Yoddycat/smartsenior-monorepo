import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'

interface MilestoneItem {
  month: number
  title: string
  description: string
}

interface MilestonesSectionProps {
  milestones: MilestoneItem[]
}

export function MilestonesSection({ milestones }: MilestonesSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Conquistas do Mes</Text>
      <Text style={styles.sectionSubtitle}>
        Complete os desafios para desbloquear estas conquistas
      </Text>

      {milestones.map((milestone, index) => (
        <View key={index} style={styles.milestoneCard}>
          <View style={styles.milestoneIconContainer}>
            <Text style={styles.milestoneIcon}>🏆</Text>
          </View>

          <View style={styles.milestoneContent}>
            <Text style={styles.milestoneTitle}>{milestone.title}</Text>
            <Text style={styles.milestoneDescription}>
              {milestone.description}
            </Text>
          </View>

          <View style={styles.milestoneLock}>
            <Text style={styles.milestoneLockIcon}>🔒</Text>
          </View>
        </View>
      ))}
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
  sectionSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginBottom: spacing.md,
  },
  milestoneCard: {
    ...cardStyles.compact,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  milestoneIconContainer: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.full,
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  milestoneIcon: {
    fontSize: 24,
    opacity: 0.5,
  },
  milestoneContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  milestoneTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray600,
  },
  milestoneDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray400,
    marginTop: spacing.xs,
  },
  milestoneLock: {
    padding: spacing.sm,
  },
  milestoneLockIcon: {
    fontSize: 20,
  },
})
