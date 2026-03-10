/**
 * RecoveryCard Component
 *
 * Displays recovery status based on HRV analysis.
 * Shows suggestions for activity based on current recovery level.
 */

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { colors, spacing, borderRadius, typography, shadowStyles } from '../constants/theme'
import { useRecovery } from '../hooks/useRecovery'
import type { RecoveryStatus } from '../types/recovery'

const STATUS_COLORS: Record<RecoveryStatus, string> = {
  recovery: colors.danger,
  moderate: colors.warning,
  good: colors.success,
  optimal: colors.info,
}

const STATUS_LABELS: Record<RecoveryStatus, string> = {
  recovery: 'Recuperação',
  moderate: 'Moderado',
  good: 'Bom',
  optimal: 'Ótimo',
}

export function RecoveryCard() {
  const { analysis, isLoading, error, isRecoveryMode } = useRecovery()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colors.primary} />
        <Text style={styles.loadingText}>Analisando recuperação...</Text>
      </View>
    )
  }

  if (error || !analysis) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          {error || 'Dados de HRV não disponíveis'}
        </Text>
      </View>
    )
  }

  const statusColor = STATUS_COLORS[analysis.status]
  const statusLabel = STATUS_LABELS[analysis.status]

  return (
    <View style={[styles.container, isRecoveryMode && styles.containerAlert]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Text style={styles.icon}>{analysis.suggestion?.icon}</Text>
          <Text style={styles.title}>{analysis.suggestion?.title}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: statusColor + '20' }]}>
          <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
          <Text style={[styles.statusText, { color: statusColor }]}>
            {statusLabel}
          </Text>
        </View>
      </View>

      {/* HRV Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{analysis.todayHRV}</Text>
          <Text style={styles.statLabel}>HRV Hoje</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{analysis.weekAverageHRV}</Text>
          <Text style={styles.statLabel}>Média 7 dias</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={[
            styles.statValue,
            { color: analysis.percentageChange < 0 ? colors.danger : colors.success }
          ]}>
            {analysis.percentageChange > 0 ? '+' : ''}{analysis.percentageChange}%
          </Text>
          <Text style={styles.statLabel}>Variação</Text>
        </View>
      </View>

      {/* Suggestion */}
      {analysis.suggestion && (
        <View style={[styles.suggestionBox, { borderLeftColor: statusColor }]}>
          <Text style={styles.suggestionText}>
            {analysis.suggestion.description}
          </Text>
          {analysis.suggestion.duration && (
            <Text style={styles.durationText}>
              Duração sugerida: {analysis.suggestion.duration}
            </Text>
          )}
        </View>
      )}

      {/* Recovery Alert */}
      {isRecoveryMode && (
        <View style={styles.alertBox}>
          <Text style={styles.alertIcon}>⚠️</Text>
          <Text style={styles.alertText}>
            Seu HRV está 20% abaixo da média. Priorize o descanso hoje.
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    margin: spacing.md,
    ...shadowStyles.md,
  },
  containerAlert: {
    borderWidth: 2,
    borderColor: colors.danger + '40',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  statusText: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.gray100,
    marginBottom: spacing.md,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    backgroundColor: colors.gray200,
  },
  suggestionBox: {
    backgroundColor: colors.gray50,
    borderLeftWidth: 4,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  suggestionText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray700,
    lineHeight: 20,
  },
  durationText: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: spacing.xs,
    fontWeight: '600',
  },
  alertBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.danger + '10',
    borderRadius: borderRadius.md,
    padding: spacing.sm,
  },
  alertIcon: {
    fontSize: 16,
    marginRight: spacing.xs,
  },
  alertText: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.danger,
    fontWeight: '500',
  },
  loadingText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
  errorText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    textAlign: 'center',
  },
})

export default RecoveryCard
