import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'
import { HealthDataSummary } from '../../services/health'

interface HealthMetricsGridProps {
  loading: boolean
  healthSummary: HealthDataSummary | null
}

const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
  switch (trend) {
    case 'up': return '↑'
    case 'down': return '↓'
    default: return '→'
  }
}

const getTrendColor = (trend: 'up' | 'down' | 'stable', isPositiveGood = true) => {
  if (trend === 'stable') return colors.gray500
  const isPositive = trend === 'up'
  return (isPositive === isPositiveGood) ? colors.success : colors.danger
}

export function HealthMetricsGrid({ loading, healthSummary }: HealthMetricsGridProps) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Carregando dados...</Text>
      </View>
    )
  }

  if (!healthSummary) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataIcon}>📱</Text>
        <Text style={styles.noDataText}>
          Conecte um dispositivo de saude para ver seus dados
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.metricsGrid}>
      {/* Steps */}
      <View style={styles.metricCard}>
        <View style={styles.metricCardInner}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricIcon}>👟</Text>
            <Text
              style={[
                styles.metricTrend,
                { color: getTrendColor(healthSummary.steps.trend) },
              ]}
            >
              {getTrendIcon(healthSummary.steps.trend)}
            </Text>
          </View>
          <Text style={styles.metricValue}>
            {healthSummary.steps.today.toLocaleString()}
          </Text>
          <Text style={styles.metricLabel}>Passos hoje</Text>
          <Text style={styles.metricSubtext}>
            Media: {healthSummary.steps.weekAverage.toLocaleString()}
          </Text>
        </View>
      </View>

      {/* Heart Rate */}
      <View style={styles.metricCard}>
        <View style={styles.metricCardInner}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricIcon}>❤️</Text>
            <Text
              style={[
                styles.metricTrend,
                { color: getTrendColor(healthSummary.heartRate.trend, false) },
              ]}
            >
              {getTrendIcon(healthSummary.heartRate.trend)}
            </Text>
          </View>
          <Text style={styles.metricValue}>
            {healthSummary.heartRate.latest}
          </Text>
          <Text style={styles.metricLabel}>BPM atual</Text>
          <Text style={styles.metricSubtext}>
            Repouso: {healthSummary.heartRate.restingAverage} bpm
          </Text>
        </View>
      </View>

      {/* HRV */}
      <View style={styles.metricCard}>
        <View style={styles.metricCardInner}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricIcon}>💓</Text>
            <Text
              style={[
                styles.metricTrend,
                { color: getTrendColor(healthSummary.hrv.trend) },
              ]}
            >
              {getTrendIcon(healthSummary.hrv.trend)}
            </Text>
          </View>
          <Text style={styles.metricValue}>
            {healthSummary.hrv.latest}
          </Text>
          <Text style={styles.metricLabel}>HRV (ms)</Text>
          <Text style={styles.metricSubtext}>
            Media: {healthSummary.hrv.weekAverage} ms
          </Text>
        </View>
      </View>

      {/* Sleep */}
      <View style={styles.metricCard}>
        <View style={styles.metricCardInner}>
          <View style={styles.metricHeader}>
            <Text style={styles.metricIcon}>😴</Text>
            <Text
              style={[
                styles.metricTrend,
                { color: getTrendColor(healthSummary.sleep.trend) },
              ]}
            >
              {getTrendIcon(healthSummary.sleep.trend)}
            </Text>
          </View>
          <Text style={styles.metricValue}>
            {healthSummary.sleep.lastNightHours}h
          </Text>
          <Text style={styles.metricLabel}>Sono ontem</Text>
          <Text style={styles.metricSubtext}>
            Media: {healthSummary.sleep.weekAverage}h
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: spacing.md,
  },
  noDataContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    alignItems: 'center',
  },
  noDataIcon: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
  noDataText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    textAlign: 'center',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.xs,
  },
  metricCard: {
    width: '50%',
    padding: spacing.xs,
  },
  metricCardInner: {
    ...cardStyles.compact,
  },
  metricHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  metricIcon: {
    fontSize: 24,
  },
  metricTrend: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
  },
  metricValue: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.gray900,
  },
  metricLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: 2,
  },
  metricSubtext: {
    fontSize: typography.fontSize.xs,
    color: colors.gray400,
    marginTop: spacing.xs,
  },
})
