import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { colors, spacing, borderRadius, typography, cardStyles } from '../../constants/theme'
import { pillarIcons } from '../../constants/icons'

interface CategoryProgress {
  key: string
  label: string
  progress: number
  color: string
}

interface CategoryProgressCardProps {
  categories: CategoryProgress[]
}

export function CategoryProgressCard({ categories }: CategoryProgressCardProps) {
  return (
    <View style={styles.categoryCard}>
      {categories.map((category, index) => (
        <View key={index} style={styles.categoryItem}>
          <View style={styles.categoryHeader}>
            <View style={styles.categoryIconContainer}>
              <Image
                source={pillarIcons[category.key as keyof typeof pillarIcons]}
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
  )
}

const styles = StyleSheet.create({
  categoryCard: {
    ...cardStyles.base,
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
})
