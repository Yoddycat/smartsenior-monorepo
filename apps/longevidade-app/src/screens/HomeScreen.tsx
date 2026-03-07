import React from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native'
import { colors, spacing, borderRadius, typography } from '../constants/theme'

// Import task icons
const taskIcons: Record<string, ImageSourcePropType> = {
  hydration: require('../../assets/images/icons/hidratacao.png'),
  movement: require('../../assets/images/icons/movimento.png'),
  sleep: require('../../assets/images/icons/sono.png'),
}

interface Props {
  navigation: any
}

export function HomeScreen({ navigation }: Props) {
  // Mock data - will be replaced with actual state
  const currentMonth = 1
  const currentWeek = 1
  const currentDay = 3
  const completionRate = 67
  const streakDays = 3

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Bom dia! 👋</Text>
        <Text style={styles.date}>Dia {currentDay} • Semana {currentWeek} • Mês {currentMonth}</Text>
      </View>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Mês 1: Fundação</Text>
          <Text style={styles.progressSubtitle}>Construindo os Alicerces</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{completionRate}%</Text>
            <Text style={styles.statLabel}>Hoje</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{streakDays}</Text>
            <Text style={styles.statLabel}>Dias seguidos</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>4/6</Text>
            <Text style={styles.statLabel}>Tarefas</Text>
          </View>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${completionRate}%` }]} />
        </View>
      </View>

      {/* Today's Tasks */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>

        <TouchableOpacity style={styles.taskCard}>
          <View style={styles.taskIconContainer}>
            <Image source={taskIcons.hydration} style={styles.taskImage} />
          </View>
          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>Água ao acordar</Text>
            <Text style={styles.taskDescription}>500ml nos primeiros 30 min</Text>
          </View>
          <View style={[styles.taskStatus, styles.taskCompleted]}>
            <Text style={styles.taskStatusText}>✓</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.taskCard}>
          <View style={styles.taskIconContainer}>
            <Image source={taskIcons.movement} style={styles.taskImage} />
          </View>
          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>Caminhada matinal</Text>
            <Text style={styles.taskDescription}>15 minutos ao ar livre</Text>
          </View>
          <View style={[styles.taskStatus, styles.taskCompleted]}>
            <Text style={styles.taskStatusText}>✓</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.taskCard}>
          <View style={styles.taskIconContainer}>
            <Image source={taskIcons.sleep} style={styles.taskImage} />
          </View>
          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>Rotina de desconexão</Text>
            <Text style={styles.taskDescription}>Desligar telas às 21h</Text>
          </View>
          <View style={[styles.taskStatus, styles.taskPending]}>
            <Text style={styles.taskStatusTextPending}>○</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.taskCard}>
          <View style={styles.taskIconContainer}>
            <Image source={taskIcons.hydration} style={styles.taskImage} />
          </View>
          <View style={styles.taskContent}>
            <Text style={styles.taskTitle}>Meta de hidratação</Text>
            <Text style={styles.taskDescription}>2 litros de água</Text>
          </View>
          <View style={[styles.taskStatus, styles.taskPending]}>
            <Text style={styles.taskStatusTextPending}>○</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Weekly Goal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meta da Semana</Text>

        <View style={styles.goalCard}>
          <View style={styles.goalHeader}>
            <Text style={styles.goalTitle}>Estabelecer rotina de hidratação</Text>
            <Text style={styles.goalProgress}>3/5 dias</Text>
          </View>
          <View style={styles.goalProgressBarContainer}>
            <View style={[styles.goalProgressBar, { width: '60%' }]} />
          </View>
          <Text style={styles.goalDescription}>
            Beber água ao acordar por 5 dias consecutivos
          </Text>
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
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.gray200,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
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
  taskDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: 2,
  },
  taskStatus: {
    width: 28,
    height: 28,
    borderRadius: borderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskCompleted: {
    backgroundColor: colors.success,
  },
  taskPending: {
    borderWidth: 2,
    borderColor: colors.gray300,
  },
  taskStatusText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  taskStatusTextPending: {
    color: colors.gray400,
    fontSize: 18,
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
  goalProgressBarContainer: {
    height: 6,
    backgroundColor: colors.gray200,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    marginBottom: spacing.sm,
  },
  goalProgressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
  },
  goalDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
  },
})
