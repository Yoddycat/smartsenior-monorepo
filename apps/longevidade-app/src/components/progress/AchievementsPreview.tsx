import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'
import { PROTOCOL_DURATION_DAYS } from '../../protocols'

interface AchievementsPreviewProps {
  streakDays: number
  currentDay: number
}

export function AchievementsPreview({ streakDays, currentDay }: AchievementsPreviewProps) {
  return (
    <View style={styles.achievementsCard}>
      {streakDays >= 7 && (
        <View style={styles.achievementItem}>
          <View style={[styles.achievementIcon, { backgroundColor: `${colors.success}20` }]}>
            <Text style={styles.achievementEmoji}>💧</Text>
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Primeira Semana Completa</Text>
            <Text style={styles.achievementDate}>Conquistado</Text>
          </View>
        </View>
      )}

      {streakDays >= 3 && (
        <View style={styles.achievementItem}>
          <View style={[styles.achievementIcon, { backgroundColor: `${colors.primary}20` }]}>
            <Text style={styles.achievementEmoji}>🔥</Text>
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>{streakDays} Dias Seguidos</Text>
            <Text style={styles.achievementDate}>Ativo</Text>
          </View>
        </View>
      )}

      {streakDays < 3 && (
        <View style={styles.achievementItem}>
          <View style={[styles.achievementIcon, { backgroundColor: `${colors.primary}20` }]}>
            <Text style={styles.achievementEmoji}>🌟</Text>
          </View>
          <View style={styles.achievementContent}>
            <Text style={styles.achievementTitle}>Iniciante</Text>
            <Text style={styles.achievementDate}>Dia {currentDay} do protocolo</Text>
          </View>
        </View>
      )}

      <View style={styles.achievementItemLocked}>
        <View style={[styles.achievementIcon, { backgroundColor: colors.gray100 }]}>
          <Text style={[styles.achievementEmoji, { opacity: 0.5 }]}>🏆</Text>
        </View>
        <View style={styles.achievementContent}>
          <Text style={styles.achievementTitleLocked}>Mestre do Protocolo</Text>
          <Text style={styles.achievementDate}>{PROTOCOL_DURATION_DAYS - currentDay} dias restantes</Text>
        </View>
        <Text style={styles.lockIcon}>🔒</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  achievementsCard: {
    ...cardStyles.compact,
    borderRadius: borderRadius.xl,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  achievementItemLocked: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    opacity: 0.6,
  },
  achievementIcon: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementEmoji: {
    fontSize: 22,
  },
  achievementContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  achievementTitle: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.gray900,
  },
  achievementTitleLocked: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.gray500,
  },
  achievementDate: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: 2,
  },
  lockIcon: {
    fontSize: 16,
  },
})
