import React, { useEffect, useState, useCallback } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from 'react-native'
import { colors, spacing, borderRadius, typography, shadowStyles } from '../constants/theme'
import { pillarIcons } from '../constants/icons'
import { getHealthSummary, HealthDataSummary } from '../services/health'
import { useProtocolProgress, getCompletionHistory } from '../hooks'
import { PROTOCOLS, PROTOCOL_DURATION_DAYS } from '../protocols'
import { ProtocolMonth } from '../types'

const WEEKDAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']

// Get current weekday index (0 = Monday, 6 = Sunday)
const getCurrentWeekdayIndex = (): number => {
  const day = new Date().getDay()
  return day === 0 ? 6 : day - 1
}

export function ProgressScreen() {
  const [healthSummary, setHealthSummary] = useState<HealthDataSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [weeklyCompletion, setWeeklyCompletion] = useState<number[]>([0, 0, 0, 0, 0, 0, 0])

  const {
    currentDay,
    currentWeek,
    currentMonth,
    streakDays,
    completionRate,
    isLoading: progressLoading,
  } = useProtocolProgress()

  const loadWeeklyCompletion = useCallback(async () => {
    try {
      const history = await getCompletionHistory(currentMonth as ProtocolMonth, 7)
      const protocol = PROTOCOLS[currentMonth as ProtocolMonth]
      const totalTasks = protocol.dailyTasks.length

      // Convert to percentages and align to current week
      const completionPercentages = history.map((day) =>
        totalTasks > 0 ? Math.round((day.completed / totalTasks) * 100) : 0
      )

      // Align to weekdays (history is last 7 days, need to map to Mon-Sun)
      const aligned = Array(7).fill(0)
      const today = new Date()
      const todayIndex = getCurrentWeekdayIndex()

      history.forEach((day, i) => {
        const dayDate = new Date(day.date)
        const dayIndex = dayDate.getDay() === 0 ? 6 : dayDate.getDay() - 1
        // Only include if within current week
        const daysAgo = Math.floor((today.getTime() - dayDate.getTime()) / (1000 * 60 * 60 * 24))
        if (daysAgo <= todayIndex) {
          aligned[dayIndex] = completionPercentages[i]
        }
      })

      setWeeklyCompletion(aligned)
    } catch (error) {
      console.error('Error loading weekly completion:', error)
    }
  }, [currentMonth])

  useEffect(() => {
    const loadHealthData = async () => {
      try {
        const summary = await getHealthSummary()
        setHealthSummary(summary)
      } catch (error) {
        console.error('Error loading health data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadHealthData()
    loadWeeklyCompletion()
  }, [currentMonth, loadWeeklyCompletion])

  const progressPercentage = Math.round((currentDay / PROTOCOL_DURATION_DAYS) * 100)

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

  // Calculate category progress based on completed tasks
  const protocol = PROTOCOLS[currentMonth as ProtocolMonth]
  const categoryProgress = React.useMemo(() => {
    const categories: Record<string, { completed: number; total: number }> = {}

    protocol.dailyTasks.forEach((task) => {
      const category = task.category
      if (!categories[category]) {
        categories[category] = { completed: 0, total: 0 }
      }
      categories[category].total++
    })

    // For now, estimate based on overall completion rate
    return [
      { key: 'hydration', label: 'Hidratacao', progress: completionRate, color: colors.hydration },
      { key: 'movement', label: 'Movimento', progress: Math.max(0, completionRate - 10), color: colors.movement },
      { key: 'sleep', label: 'Sono', progress: Math.max(0, completionRate - 5), color: colors.sleep },
      { key: 'nutrition', label: 'Nutricao', progress: Math.max(0, completionRate - 15), color: colors.nutrition },
      { key: 'mindfulness', label: 'Mindfulness', progress: Math.max(0, completionRate - 20), color: colors.mindfulness },
      { key: 'supplements', label: 'Suplementos', progress: Math.max(0, completionRate - 10), color: colors.supplements },
    ]
  }, [completionRate, protocol.dailyTasks])

  if (progressLoading) {
    return (
      <View style={styles.loadingFullContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Seu Progresso</Text>
        <Text style={styles.headerSubtitle}>
          Dia {currentDay} de {PROTOCOL_DURATION_DAYS}
        </Text>
      </View>

      {/* Protocol Progress Card */}
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <View>
            <Text style={styles.progressTitle}>Protocolo de 3 Meses</Text>
            <Text style={styles.progressSubtitle}>
              Mes {currentMonth} • Semana {currentWeek}
            </Text>
          </View>
          <View style={styles.streakBadge}>
            <Text style={styles.streakIcon}>🔥</Text>
            <Text style={styles.streakText}>{streakDays}</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
        </View>

        <View style={styles.progressStats}>
          <View style={styles.progressStat}>
            <Text style={styles.progressStatValue}>{progressPercentage}%</Text>
            <Text style={styles.progressStatLabel}>Completo</Text>
          </View>
          <View style={styles.progressStatDivider} />
          <View style={styles.progressStat}>
            <Text style={styles.progressStatValue}>{streakDays}</Text>
            <Text style={styles.progressStatLabel}>Dias seguidos</Text>
          </View>
          <View style={styles.progressStatDivider} />
          <View style={styles.progressStat}>
            <Text style={styles.progressStatValue}>{completionRate}%</Text>
            <Text style={styles.progressStatLabel}>Tarefas hoje</Text>
          </View>
        </View>
      </View>

      {/* Health Metrics */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados de Saude</Text>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.loadingText}>Carregando dados...</Text>
          </View>
        ) : healthSummary ? (
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
        ) : (
          <View style={styles.noDataContainer}>
            <Text style={styles.noDataIcon}>📱</Text>
            <Text style={styles.noDataText}>
              Conecte um dispositivo de saude para ver seus dados
            </Text>
          </View>
        )}
      </View>

      {/* Weekly Chart */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conclusao Semanal</Text>

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
                    index === getCurrentWeekdayIndex() && styles.chartLabelActive,
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
      </View>

      {/* Category Progress */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progresso por Categoria</Text>

        <View style={styles.categoryCard}>
          {categoryProgress.map((category, index) => (
            <View key={index} style={styles.categoryItem}>
              <View style={styles.categoryHeader}>
                <View style={styles.categoryIconContainer}>
                  <Image
                    source={pillarIcons[category.key]}
                    style={styles.categoryIcon}
                  />
                </View>
                <Text style={styles.categoryLabel}>{category.label}</Text>
                <Text style={styles.categoryValue}>{category.progress}%</Text>
              </View>
              <View style={styles.categoryProgressBar}>
                <View
                  style={[
                    styles.categoryProgressFill,
                    {
                      width: `${category.progress}%`,
                      backgroundColor: category.color,
                    },
                  ]}
                />
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Achievements Preview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conquistas Recentes</Text>

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
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  loadingFullContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray50,
  },
  header: {
    padding: spacing.lg,
    paddingTop: spacing['2xl'],
    backgroundColor: colors.secondary,
  },
  headerTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.white,
  },
  headerSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray300,
    marginTop: spacing.xs,
  },
  progressCard: {
    backgroundColor: colors.white,
    margin: spacing.md,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadowStyles.md,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  progressTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  progressSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: spacing.xs,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.primary}15`,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  streakIcon: {
    fontSize: 16,
  },
  streakText: {
    fontSize: typography.fontSize.sm,
    fontWeight: 'bold',
    color: colors.primary,
    marginLeft: spacing.xs,
  },
  progressBarContainer: {
    height: 12,
    backgroundColor: colors.gray200,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
  progressStats: {
    flexDirection: 'row',
  },
  progressStat: {
    flex: 1,
    alignItems: 'center',
  },
  progressStatValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: 'bold',
    color: colors.primary,
  },
  progressStatLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: 2,
  },
  progressStatDivider: {
    width: 1,
    backgroundColor: colors.gray200,
  },
  section: {
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
    marginBottom: spacing.md,
  },
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
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    ...shadowStyles.sm,
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
  chartCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadowStyles.sm,
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
  categoryCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    ...shadowStyles.sm,
  },
  categoryItem: {
    marginBottom: spacing.md,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  categoryIconContainer: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.md,
    backgroundColor: colors.gray50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  categoryLabel: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.gray700,
    marginLeft: spacing.sm,
  },
  categoryValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  categoryProgressBar: {
    height: 6,
    backgroundColor: colors.gray200,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    marginLeft: 40,
  },
  categoryProgressFill: {
    height: '100%',
    borderRadius: borderRadius.full,
  },
  achievementsCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    ...shadowStyles.sm,
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
