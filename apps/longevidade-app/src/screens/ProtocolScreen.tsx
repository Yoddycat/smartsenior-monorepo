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
import { PROTOCOLS } from '../protocols'
import { ProtocolMonth } from '../types'

// Import pillar icons
const pillarIcons: Record<string, ImageSourcePropType> = {
  hydration: require('../../assets/images/icons/hidratacao.png'),
  nutrition: require('../../assets/images/icons/nutricao.png'),
  movement: require('../../assets/images/icons/movimento.png'),
  sleep: require('../../assets/images/icons/sono.png'),
  supplements: require('../../assets/images/icons/suplementos.png'),
  mindfulness: require('../../assets/images/icons/mindfulness.png'),
  social: require('../../assets/images/icons/social.png'),
  cognitive: require('../../assets/images/icons/cognitivo.png'),
}

import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  MonthDetail: { month: number }
}

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export function ProtocolScreen({ navigation }: Props) {
  const currentMonth: ProtocolMonth = 1

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Protocolo de 3 Meses</Text>
        <Text style={styles.subtitle}>Sua jornada para a longevidade</Text>
      </View>

      {([1, 2, 3] as ProtocolMonth[]).map((month) => {
        const protocol = PROTOCOLS[month]
        const isActive = month === currentMonth
        const isCompleted = month < currentMonth
        const isLocked = month > currentMonth

        return (
          <TouchableOpacity
            key={month}
            style={[
              styles.monthCard,
              isActive && styles.monthCardActive,
              isLocked && styles.monthCardLocked,
            ]}
            disabled={isLocked}
            onPress={() => navigation.navigate('MonthDetail', { month })}
          >
            <View style={styles.monthHeader}>
              <View
                style={[
                  styles.monthBadge,
                  isActive && styles.monthBadgeActive,
                  isCompleted && styles.monthBadgeCompleted,
                  isLocked && styles.monthBadgeLocked,
                ]}
              >
                <Text
                  style={[
                    styles.monthBadgeText,
                    (isActive || isCompleted) && styles.monthBadgeTextActive,
                  ]}
                >
                  {isCompleted ? '✓' : month}
                </Text>
              </View>

              <View style={styles.monthInfo}>
                <Text
                  style={[
                    styles.monthTitle,
                    isLocked && styles.monthTitleLocked,
                  ]}
                >
                  Mês {month}: {protocol.title}
                </Text>
                <Text
                  style={[
                    styles.monthSubtitle,
                    isLocked && styles.monthSubtitleLocked,
                  ]}
                >
                  {protocol.subtitle}
                </Text>
              </View>

              {isActive && (
                <View style={styles.activeIndicator}>
                  <Text style={styles.activeIndicatorText}>ATIVO</Text>
                </View>
              )}

              {isLocked && (
                <Text style={styles.lockIcon}>🔒</Text>
              )}
            </View>

            {!isLocked && (
              <View style={styles.monthContent}>
                <Text style={styles.monthDescription} numberOfLines={2}>
                  {protocol.description.trim()}
                </Text>

                <View style={styles.monthStats}>
                  <View style={styles.monthStat}>
                    <Text style={styles.monthStatValue}>
                      {protocol.dailyTasks.length}
                    </Text>
                    <Text style={styles.monthStatLabel}>Tarefas diárias</Text>
                  </View>
                  <View style={styles.monthStat}>
                    <Text style={styles.monthStatValue}>
                      {protocol.weeklyGoals.length}
                    </Text>
                    <Text style={styles.monthStatLabel}>Metas semanais</Text>
                  </View>
                  <View style={styles.monthStat}>
                    <Text style={styles.monthStatValue}>
                      {protocol.milestones.length}
                    </Text>
                    <Text style={styles.monthStatLabel}>Conquistas</Text>
                  </View>
                </View>
              </View>
            )}
          </TouchableOpacity>
        )
      })}

      {/* Protocol Overview */}
      <View style={styles.overviewSection}>
        <Text style={styles.overviewTitle}>Visão Geral do Protocolo</Text>

        <View style={styles.overviewCard}>
          <View style={styles.overviewRow}>
            <Text style={styles.overviewLabel}>Duração total</Text>
            <Text style={styles.overviewValue}>12 semanas (84 dias)</Text>
          </View>
          <View style={styles.overviewRow}>
            <Text style={styles.overviewLabel}>Categorias</Text>
            <Text style={styles.overviewValue}>8 pilares de saúde</Text>
          </View>
          <View style={styles.overviewRow}>
            <Text style={styles.overviewLabel}>Conquistas possíveis</Text>
            <Text style={styles.overviewValue}>13 marcos</Text>
          </View>
        </View>

        <View style={styles.pillarsGrid}>
          {[
            { key: 'hydration', label: 'Hidratação', color: colors.hydration },
            { key: 'nutrition', label: 'Nutrição', color: colors.nutrition },
            { key: 'movement', label: 'Movimento', color: colors.movement },
            { key: 'sleep', label: 'Sono', color: colors.sleep },
            { key: 'supplements', label: 'Suplementos', color: colors.supplements },
            { key: 'mindfulness', label: 'Mindfulness', color: colors.mindfulness },
            { key: 'social', label: 'Social', color: colors.social },
            { key: 'cognitive', label: 'Cognitivo', color: colors.cognitive },
          ].map((pillar, index) => (
            <View key={index} style={styles.pillarItem}>
              <View style={styles.pillarIconContainer}>
                <Image
                  source={pillarIcons[pillar.key]}
                  style={styles.pillarImage}
                />
              </View>
              <Text style={styles.pillarLabel}>{pillar.label}</Text>
            </View>
          ))}
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
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray300,
    marginTop: spacing.xs,
  },
  monthCard: {
    backgroundColor: colors.white,
    margin: spacing.md,
    marginBottom: 0,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  monthCardActive: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  monthCardLocked: {
    opacity: 0.6,
  },
  monthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthBadge: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthBadgeActive: {
    backgroundColor: colors.primary,
  },
  monthBadgeCompleted: {
    backgroundColor: colors.success,
  },
  monthBadgeLocked: {
    backgroundColor: colors.gray300,
  },
  monthBadgeText: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray600,
  },
  monthBadgeTextActive: {
    color: colors.white,
  },
  monthInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  monthTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  monthTitleLocked: {
    color: colors.gray500,
  },
  monthSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: 2,
  },
  monthSubtitleLocked: {
    color: colors.gray400,
  },
  activeIndicator: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  activeIndicatorText: {
    fontSize: typography.fontSize.xs,
    fontWeight: 'bold',
    color: colors.white,
  },
  lockIcon: {
    fontSize: 20,
  },
  monthContent: {
    marginTop: spacing.md,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.gray100,
  },
  monthDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
    lineHeight: 20,
  },
  monthStats: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  monthStat: {
    flex: 1,
    alignItems: 'center',
  },
  monthStatValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: 'bold',
    color: colors.primary,
  },
  monthStatLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray500,
    marginTop: 2,
  },
  overviewSection: {
    padding: spacing.lg,
  },
  overviewTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
    marginBottom: spacing.md,
  },
  overviewCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  overviewLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.gray600,
  },
  overviewValue: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.gray900,
  },
  pillarsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.sm,
  },
  pillarItem: {
    width: '25%',
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  pillarIconContainer: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
    backgroundColor: colors.gray50,
  },
  pillarImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  pillarLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.gray600,
  },
})
