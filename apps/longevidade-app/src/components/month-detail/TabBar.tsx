import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, spacing, borderRadius, typography } from '../../constants/theme'

export type TabType = 'tasks' | 'goals' | 'milestones'

interface Tab {
  key: TabType
  label: string
  count: number
}

interface TabBarProps {
  tabs: Tab[]
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.key}
          style={[styles.tab, activeTab === tab.key && styles.tabActive]}
          onPress={() => onTabChange(tab.key)}
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
}

const styles = StyleSheet.create({
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
})
