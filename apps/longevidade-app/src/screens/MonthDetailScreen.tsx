import React, { useState, useMemo } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../constants/theme'
import { PROTOCOLS } from '../protocols'
import { ProtocolMonth, ProtocolWeek } from '../types'
import { useTaskCompletion } from '../hooks'
import {
  TabBar,
  TabType,
  TasksSection,
  GoalsSection,
  MilestonesSection,
} from '../components/month-detail'
import { StatRow } from '../components/common'

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

  // Tab data
  const tabs = [
    { key: 'tasks' as TabType, label: 'Tarefas', count: protocol.dailyTasks.length },
    { key: 'goals' as TabType, label: 'Metas', count: protocol.weeklyGoals.length },
    { key: 'milestones' as TabType, label: 'Conquistas', count: protocol.milestones.length },
  ]

  // Stats data
  const stats = useMemo(() => [
    { value: `${completedCount}/${totalTasks}`, label: 'Tarefas Hoje' },
    { value: `${completionPercentage}%`, label: 'Concluido' },
    { value: protocol.milestones.length, label: 'Conquistas' },
  ], [completedCount, totalTasks, completionPercentage, protocol.milestones.length])

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
      <StatRow stats={stats} variant="card" />

      {/* Tabs */}
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      {activeTab === 'tasks' && (
        <TasksSection
          tasks={protocol.dailyTasks}
          completedTasks={completedTasks}
          completedCount={completedCount}
          totalTasks={totalTasks}
          completionPercentage={completionPercentage}
          isLoading={isLoadingTasks}
          onToggleTask={toggleTask}
        />
      )}
      {activeTab === 'goals' && (
        <GoalsSection
          weekGoals={weekGoals}
          selectedWeek={selectedWeek}
          onWeekChange={setSelectedWeek}
        />
      )}
      {activeTab === 'milestones' && (
        <MilestonesSection milestones={protocol.milestones} />
      )}

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
})
