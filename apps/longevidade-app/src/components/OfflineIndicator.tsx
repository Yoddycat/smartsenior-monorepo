/**
 * OfflineIndicator Component
 * Small indicator showing connection status
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing, typography, borderRadius } from '../constants/theme'
import { useOffline } from '../hooks/useOffline'

interface OfflineIndicatorProps {
  showWhenOnline?: boolean
  compact?: boolean
}

export function OfflineIndicator({
  showWhenOnline = false,
  compact = false,
}: OfflineIndicatorProps) {
  const { isOnline, pendingActions, isSyncing } = useOffline()

  // Don't show anything if online and no pending actions (unless showWhenOnline)
  if (isOnline && pendingActions === 0 && !showWhenOnline) {
    return null
  }

  const getStatusColor = () => {
    if (!isOnline) return colors.gray500
    if (isSyncing) return colors.primary
    if (pendingActions > 0) return colors.warning
    return colors.success
  }

  const getStatusText = () => {
    if (!isOnline) return 'Offline'
    if (isSyncing) return 'Sincronizando'
    if (pendingActions > 0) return `${pendingActions} pendente${pendingActions > 1 ? 's' : ''}`
    return 'Online'
  }

  if (compact) {
    return (
      <View style={[styles.compactContainer, { backgroundColor: getStatusColor() }]}>
        <View style={styles.compactDot} />
      </View>
    )
  }

  return (
    <View style={[styles.container, { borderColor: getStatusColor() }]}>
      <View style={[styles.dot, { backgroundColor: getStatusColor() }]} />
      <Text style={[styles.text, { color: getStatusColor() }]}>{getStatusText()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  text: {
    fontSize: typography.fontSize.xs,
    fontWeight: '500',
  },
  compactContainer: {
    width: 12,
    height: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
})
