import React, { useEffect, useState, useCallback, useMemo } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../constants/theme'
import { getHealthSummary, HealthDataSummary } from '../services/health'
import { useProtocolProgress, getCompletionHistory } from '../hooks'
import { PROTOCOLS, PROTOCOL_DURATION_DAYS } from '../protocols'
import { ProtocolMonth } from '../types'
import {
  HealthMetricsGrid,
  WeeklyCompletionChart,
  CategoryProgressCard,
  AchievementsPreview,
} from '../components/progress'

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

  // Calculate category progress based on completed tasks
  const protocol = PROTOCOLS[currentMonth as ProtocolMonth]
  const categoryProgress = useMemo(() => {
    return [
      { key: 'hydration', label: 'Hidratacao', progress: completionRate, color: colors.hydration },
      { key: 'movement', label: 'Movimento', progress: Math.max(0, completionRate - 10), color: colors.movement },
      { key: 'sleep', label: 'Sono', progress: Math.max(0, completionRate - 5), color: colors.sleep },
      { key: 'nutrition', label: 'Nutricao', progress: Math.max(0, completionRate - 15), color: colors.nutrition },
      { key: 'mindfulness', label: 'Mindfulness', progress: Math.max(0, completionRate - 20), color: colors.mindfulness },
      { key: 'supplements', label: 'Suplementos', progress: Math.max(0, completionRate - 10), color: colors.supplements },
    ]
  }, [completionRate])

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
        <HealthMetricsGrid loading={loading} healthSummary={healthSummary} />
      </View>

      {/* Weekly Chart */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conclusao Semanal</Text>
        <WeeklyCompletionChart weeklyCompletion={weeklyCompletion} />
      </View>

      {/* Category Progress */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progresso por Categoria</Text>
        <CategoryProgressCard categories={categoryProgress} />
      </View>

      {/* Achievements Preview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conquistas Recentes</Text>
        <AchievementsPreview streakDays={streakDays} currentDay={currentDay} />
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
    ...cardStyles.base,
    margin: spacing.md,
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
})
