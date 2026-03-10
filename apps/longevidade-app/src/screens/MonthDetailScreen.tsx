import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../constants/theme'
import { pillarIcons, categoryColors, categoryLabels } from '../constants/icons'
import { PROTOCOLS } from '../protocols'
import { ProtocolMonth, ProtocolWeek } from '../types'
import { useTaskCompletion } from '../hooks'

import type { RouteProp } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  ProtocolList: undefined
  MonthDetail: { month: number }
}

interface Props {
  route: RouteProp<RootStackParamList, 'MonthDetail'>
  navigation: NativeStackNavigationProp<RootStackParamList>
}

type TabType = 'tasks' | 'goals' | 'milestones'

export function MonthDetailScreen({ route }: Props) {
  const { month } = route.params
  const protocol = PROTOCOLS[month as ProtocolMonth]
  const [activeTab, setActiveTab] = useState<TabType>('tasks')
  const [selectedWeek, setSelectedWeek] = useState<ProtocolWeek>(1)

  // Use persistent task completion hook
  const totalTasks = protocol.dailyTasks.length
  const {
    completedTasks,
    toggleTask,
    completedCount,
    isLoading: isLoadingTasks,
  } = useTaskCompletion(month as ProtocolMonth)

  // Calculate completion percentage
  const completionPercentage = totalTasks > 0
    ? Math.round((completedCount / totalTasks) * 100)
    : 0

  // Filter weekly goals by selected week
  const weekGoals = protocol.weeklyGoals.filter(
    (goal) => goal.week === selectedWeek
  )

  const renderTabs = () => (
    <View style={styles.tabContainer}>
      {[
        { key: 'tasks' as TabType, label: 'Tarefas', count: protocol.dailyTasks.length },
        { key: 'goals' as TabType, label: 'Metas', count: protocol.weeklyGoals.length },
        { key: 'milestones' as TabType, label: 'Conquistas', count: protocol.milestones.length },
      ].map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[styles.tab, activeTab === tab.key && styles.tabActive]}
          onPress={() => setActiveTab(tab.key)}
        >
          <Text style={[styles.tabText, activeTab === tab.key && styles.tabTextActive]}>
            {tab.label}
          </Text>
          <View style={[styles.tabBadge, activeTab === tab.key && styles.tabBadgeActive]}>
            <Text style={[styles.tabBadgeText, activeTab === tab.key && styles.tabBadgeTextActive]}>
              {tab.count}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )

  const renderTasks = () => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>Tarefas Diarias</Text>
          <Text style={styles.sectionSubtitle}>
            Toque para marcar como concluida
          </Text>
        </View>
        <View style={styles.progressBadge}>
          <Text style={styles.progressBadgeText}>
            {completedCount}/{totalTasks}
          </Text>
        </View>
      </View>

      {/* Progress bar */}
      <View style={styles.taskProgressContainer}>
        <View style={styles.taskProgressBar}>
          <View
            style={[
              styles.taskProgressFill,
              { width: `${completionPercentage}%` },
            ]}
          />
        </View>
        <Text style={styles.taskProgressText}>{completionPercentage}% concluido</Text>
      </View>

      {isLoadingTasks ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      ) : null}

      {protocol.dailyTasks.map((task, index) => {
        const isCompleted = completedTasks.has(index)

        return (
          <TouchableOpacity
            key={index}
            style={[styles.taskCard, isCompleted && styles.taskCardCompleted]}
            onPress={() => toggleTask(index)}
            activeOpacity={0.7}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: isCompleted }}
            accessibilityLabel={`${task.title}. ${task.description}. ${isCompleted ? 'Concluida' : 'Pendente'}`}
            accessibilityHint="Toque duas vezes para alternar conclusao"
          >
            <View
              style={[
                styles.taskIconContainer,
                { backgroundColor: `${categoryColors[task.category]}15` },
                isCompleted && styles.taskIconContainerCompleted,
              ]}
            >
              {isCompleted ? (
                <View style={styles.checkmarkContainer}>
                  <Text style={styles.checkmark}>✓</Text>
                </View>
              ) : (
                <Image
                  source={pillarIcons[task.category]}
                  style={styles.taskIcon}
                />
              )}
            </View>

            <View style={styles.taskContent}>
              <View style={styles.taskHeader}>
                <Text
                  style={[
                    styles.taskTitle,
                    isCompleted && styles.taskTitleCompleted,
                  ]}
                >
                  {task.title}
                </Text>
                {task.targetTime && (
                  <Text
                    style={[
                      styles.taskTime,
                      isCompleted && styles.taskTimeCompleted,
                    ]}
                  >
                    {task.targetTime}
                  </Text>
                )}
              </View>
              <Text
                style={[
                  styles.taskDescription,
                  isCompleted && styles.taskDescriptionCompleted,
                ]}
              >
                {task.description}
              </Text>
              <View style={styles.taskMeta}>
                <View
                  style={[
                    styles.categoryBadge,
                    { backgroundColor: `${categoryColors[task.category]}20` },
                    isCompleted && styles.categoryBadgeCompleted,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryBadgeText,
                      { color: categoryColors[task.category] },
                      isCompleted && styles.categoryBadgeTextCompleted,
                    ]}
                  >
                    {categoryLabels[task.category]}
                  </Text>
                </View>
                {task.duration && (
                  <Text style={styles.taskDuration}>{task.duration} min</Text>
                )}
              </View>
            </View>

            {/* Completion indicator */}
            <View
              style={[
                styles.taskCheckbox,
                isCompleted && styles.taskCheckboxCompleted,
              ]}
            >
              {isCompleted && <Text style={styles.taskCheckboxIcon}>✓</Text>}
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )

  const renderGoals = () => (
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
            onPress={() => setSelectedWeek(week)}
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

  const renderMilestones = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Conquistas do Mes</Text>
      <Text style={styles.sectionSubtitle}>
        Complete os desafios para desbloquear estas conquistas
      </Text>

      {protocol.milestones.map((milestone, index) => (
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

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.monthBadge}>
          <Text style={styles.monthBadgeText}>{month}</Text>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Mes {month}: {protocol.title}</Text>
          <Text style={styles.headerSubtitle}>{protocol.subtitle}</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionCard}>
        <Text style={styles.descriptionText}>
          {protocol.description.trim()}
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{completedCount}/{totalTasks}</Text>
          <Text style={styles.statLabel}>Tarefas Hoje</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{completionPercentage}%</Text>
          <Text style={styles.statLabel}>Concluido</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{protocol.milestones.length}</Text>
          <Text style={styles.statLabel}>Conquistas</Text>
        </View>
      </View>

      {/* Tabs */}
      {renderTabs()}

      {/* Content */}
      {activeTab === 'tasks' && renderTasks()}
      {activeTab === 'goals' && renderGoals()}
      {activeTab === 'milestones' && renderMilestones()}

      <View style={{ height: 100 }} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    paddingTop: spacing['2xl'],
    backgroundColor: colors.secondary,
  },
  monthBadge: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthBadgeText: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.white,
  },
  headerContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: 'bold',
    color: colors.white,
  },
  headerSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray300,
    marginTop: spacing.xs,
  },
  descriptionCard: {
    ...cardStyles.base,
    margin: spacing.md,
  },
  descriptionText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
    lineHeight: 22,
  },
  statsRow: {
    ...cardStyles.base,
    flexDirection: 'row',
    marginHorizontal: spacing.md,
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
  statDivider: {
    width: 1,
    backgroundColor: colors.gray200,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.xs,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
  },
  tabActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.gray600,
  },
  tabTextActive: {
    color: colors.white,
  },
  tabBadge: {
    marginLeft: spacing.xs,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: borderRadius.full,
    backgroundColor: colors.gray200,
  },
  tabBadgeActive: {
    backgroundColor: colors.primaryDark,
  },
  tabBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: 'bold',
    color: colors.gray600,
  },
  tabBadgeTextActive: {
    color: colors.white,
  },
  section: {
    paddingHorizontal: spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
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
  },
  progressBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  progressBadgeText: {
    fontSize: typography.fontSize.sm,
    fontWeight: 'bold',
    color: colors.white,
  },
  taskProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  taskProgressBar: {
    flex: 1,
    height: 8,
    backgroundColor: colors.gray200,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    marginRight: spacing.sm,
  },
  taskProgressFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: borderRadius.full,
  },
  taskProgressText: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    fontWeight: '600',
    minWidth: 80,
  },
  taskCard: {
    ...cardStyles.compact,
    flexDirection: 'row',
    marginBottom: spacing.sm,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  taskCardCompleted: {
    backgroundColor: `${colors.success}08`,
    borderColor: colors.success,
  },
  taskIconContainer: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskIconContainerCompleted: {
    backgroundColor: colors.success,
  },
  checkmarkContainer: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
  },
  taskIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  taskContent: {
    flex: 1,
    marginLeft: spacing.md,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray900,
    flex: 1,
  },
  taskTitleCompleted: {
    color: colors.gray500,
    textDecorationLine: 'line-through',
  },
  taskTime: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: '600',
  },
  taskTimeCompleted: {
    color: colors.gray400,
  },
  taskDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: spacing.xs,
  },
  taskDescriptionCompleted: {
    color: colors.gray400,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  categoryBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  categoryBadgeCompleted: {
    backgroundColor: colors.gray100,
  },
  categoryBadgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: '600',
  },
  categoryBadgeTextCompleted: {
    color: colors.gray400,
  },
  taskDuration: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginLeft: spacing.sm,
  },
  taskCheckbox: {
    width: 28,
    height: 28,
    borderRadius: borderRadius.full,
    borderWidth: 2,
    borderColor: colors.gray300,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: spacing.sm,
    alignSelf: 'center',
  },
  taskCheckboxCompleted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  taskCheckboxIcon: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
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
  loadingContainer: {
    padding: spacing.lg,
    alignItems: 'center',
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
