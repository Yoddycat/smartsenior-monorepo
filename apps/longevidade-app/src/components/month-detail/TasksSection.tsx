import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'
import { pillarIcons, categoryColors, categoryLabels } from '../../constants/icons'
import { TaskCategory } from '../../types'

interface DailyTaskItem {
  category: TaskCategory
  title: string
  description: string
  duration?: number
  frequency: string
  targetTime?: string
}

interface TasksSectionProps {
  tasks: DailyTaskItem[]
  completedTasks: Set<number>
  completedCount: number
  totalTasks: number
  completionPercentage: number
  isLoading: boolean
  onToggleTask: (index: number) => void
}

export function TasksSection({
  tasks,
  completedTasks,
  completedCount,
  totalTasks,
  completionPercentage,
  isLoading,
  onToggleTask,
}: TasksSectionProps) {
  return (
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

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      ) : null}

      {tasks.map((task, index) => {
        const isCompleted = completedTasks.has(index)

        return (
          <TouchableOpacity
            key={index}
            style={[styles.taskCard, isCompleted && styles.taskCardCompleted]}
            onPress={() => onToggleTask(index)}
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
}

const styles = StyleSheet.create({
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
  loadingContainer: {
    padding: spacing.lg,
    alignItems: 'center',
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
})
