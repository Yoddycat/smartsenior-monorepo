import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import { colors, spacing, borderRadius, typography } from '../constants/theme'
import { pillarIcons } from '../constants/icons'
import {
  RecoveryCard,
  FadeInView,
  AnimatedProgressBar,
  AnimatedCheckbox,
  AnimatedCounter,
  SuccessAnimation,
} from '../components'
import { useProtocolProgress, getGreeting, useTaskCompletion } from '../hooks'
import { PROTOCOLS } from '../protocols'
import { ProtocolMonth } from '../types'

export function HomeScreen() {
  const {
    currentMonth,
    currentWeek,
    currentDay,
    completionRate,
    streakDays,
    completedToday,
    totalTasksToday,
    protocolTitle,
    protocolSubtitle,
    isLoading,
  } = useProtocolProgress()

  const protocol = PROTOCOLS[currentMonth as ProtocolMonth]
  const { completedTasks, toggleTask } = useTaskCompletion(currentMonth as ProtocolMonth, totalTasksToday)

  // Success animation state
  const [showSuccess, setShowSuccess] = useState(false)
  const [lastCompletedCount, setLastCompletedCount] = useState(0)

  // Handle task toggle with celebration
  const handleToggleTask = useCallback((index: number) => {
    const wasCompleted = completedTasks.has(index)
    toggleTask(index)

    // Show celebration when completing all tasks
    if (!wasCompleted) {
      const newCount = completedTasks.size + 1
      if (newCount === totalTasksToday && newCount > lastCompletedCount) {
        setShowSuccess(true)
        setLastCompletedCount(newCount)
      }
    }
  }, [completedTasks, toggleTask, totalTasksToday, lastCompletedCount])

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      {/* Success Animation */}
      <SuccessAnimation
        visible={showSuccess}
        onComplete={() => setShowSuccess(false)}
        emoji="🎉"
        message="Todas as tarefas concluídas!"
      />

      {/* Header */}
      <FadeInView delay={0} direction="down">
        <View style={styles.header}>
          <Text style={styles.greeting}>{getGreeting()} 👋</Text>
          <Text style={styles.date}>Dia {currentDay} • Semana {currentWeek} • Mês {currentMonth}</Text>
        </View>
      </FadeInView>

      {/* Progress Card */}
      <FadeInView delay={100} direction="up">
        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Mês {currentMonth}: {protocolTitle}</Text>
            <Text style={styles.progressSubtitle}>{protocolSubtitle}</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <AnimatedCounter
                value={completionRate}
                suffix="%"
                style={styles.statValue}
                duration={800}
                delay={200}
              />
              <Text style={styles.statLabel}>Hoje</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <AnimatedCounter
                value={streakDays}
                style={styles.statValue}
                duration={800}
                delay={300}
              />
              <Text style={styles.statLabel}>Dias seguidos</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{completedToday}/{totalTasksToday}</Text>
              <Text style={styles.statLabel}>Tarefas</Text>
            </View>
          </View>

          <AnimatedProgressBar
            progress={completionRate}
            height={8}
            duration={1000}
            delay={400}
          />
        </View>
      </FadeInView>

      {/* Recovery Status */}
      <FadeInView delay={200} direction="up">
        <RecoveryCard />
      </FadeInView>

      {/* Today's Tasks */}
      <View style={styles.section}>
        <FadeInView delay={300} direction="up">
          <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>
        </FadeInView>

        {protocol.dailyTasks.map((task, index) => {
          const isCompleted = completedTasks.has(index)
          const iconKey = task.category as keyof typeof pillarIcons

          return (
            <FadeInView key={index} delay={400 + index * 80} direction="up">
              <TouchableOpacity
                style={styles.taskCard}
                onPress={() => handleToggleTask(index)}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: isCompleted }}
                accessibilityLabel={`${task.title}, ${isCompleted ? 'concluída' : 'pendente'}`}
              >
                <View style={styles.taskIconContainer}>
                  <Image
                    source={pillarIcons[iconKey] || pillarIcons.hydration}
                    style={styles.taskImage}
                  />
                </View>
                <View style={styles.taskContent}>
                  <Text style={[styles.taskTitle, isCompleted && styles.taskTitleCompleted]}>
                    {task.title}
                  </Text>
                  <Text style={styles.taskDescription}>{task.description}</Text>
                </View>
                <AnimatedCheckbox
                  checked={isCompleted}
                  onPress={() => handleToggleTask(index)}
                  size={28}
                  accessibilityLabel={`Marcar ${task.title} como ${isCompleted ? 'pendente' : 'concluída'}`}
                />
              </TouchableOpacity>
            </FadeInView>
          )
        })}
      </View>

      {/* Weekly Goal */}
      <FadeInView delay={600} direction="up">
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meta da Semana</Text>

          {protocol.weeklyGoals.length > 0 && (
            <View style={styles.goalCard}>
              <View style={styles.goalHeader}>
                <Text style={styles.goalTitle}>{protocol.weeklyGoals[0].title}</Text>
                <Text style={styles.goalProgress}>{streakDays}/7 dias</Text>
              </View>
              <AnimatedProgressBar
                progress={Math.min((streakDays / 7) * 100, 100)}
                height={6}
                duration={1000}
                delay={700}
                style={styles.goalProgressBar}
              />
              <Text style={styles.goalDescription}>
                {protocol.weeklyGoals[0].description}
              </Text>
            </View>
          )}
        </View>
      </FadeInView>

      <View style={{ height: 100 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  loadingContainer: {
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
  greeting: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.white,
  },
  date: {
    fontSize: typography.fontSize.sm,
    color: colors.gray300,
    marginTop: spacing.xs,
  },
  progressCard: {
    backgroundColor: colors.white,
    margin: spacing.md,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  progressHeader: {
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.md,
  },
  statItem: {
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
  statDivider: {
    width: 1,
    backgroundColor: colors.gray200,
  },
  section: {
    padding: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
    marginBottom: spacing.md,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  taskIconContainer: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.gray50,
  },
  taskImage: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  taskContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  taskTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray900,
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: colors.gray500,
  },
  taskDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: 2,
  },
  goalCard: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: borderRadius.xl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  goalTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray900,
    flex: 1,
  },
  goalProgress: {
    fontSize: typography.fontSize.sm,
    fontWeight: 'bold',
    color: colors.primary,
  },
  goalProgressBar: {
    marginBottom: spacing.sm,
  },
  goalDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
  },
})
