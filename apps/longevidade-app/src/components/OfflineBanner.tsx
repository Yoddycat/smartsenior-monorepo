/**
 * OfflineBanner Component
 * Shows a banner when the app is offline or has pending sync actions
 */

import React, { useEffect, useRef } from 'react'
import { Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, spacing, typography } from '../constants/theme'
import { useOffline } from '../hooks/useOffline'

interface OfflineBannerProps {
  showPendingCount?: boolean
}

export function OfflineBanner({ showPendingCount = true }: OfflineBannerProps) {
  const { isOnline, pendingActions, isSyncing, forceSync } = useOffline()
  const insets = useSafeAreaInsets()
  const slideAnim = useRef(new Animated.Value(-60)).current
  const opacityAnim = useRef(new Animated.Value(0)).current

  const shouldShow = !isOnline || (pendingActions > 0 && showPendingCount)

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: shouldShow ? 0 : -60,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: shouldShow ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start()
  }, [shouldShow, slideAnim, opacityAnim])

  const handlePress = async () => {
    if (isOnline && pendingActions > 0) {
      await forceSync()
    }
  }

  const getBannerStyle = () => {
    if (!isOnline) {
      return styles.bannerOffline
    }
    if (isSyncing) {
      return styles.bannerSyncing
    }
    if (pendingActions > 0) {
      return styles.bannerPending
    }
    return styles.bannerOnline
  }

  const getMessage = () => {
    if (!isOnline) {
      return 'Sem conexão - Modo offline'
    }
    if (isSyncing) {
      return 'Sincronizando...'
    }
    if (pendingActions > 0) {
      return `${pendingActions} ${pendingActions === 1 ? 'ação pendente' : 'ações pendentes'}`
    }
    return 'Conectado'
  }

  const getIcon = () => {
    if (!isOnline) return '📡'
    if (isSyncing) return '🔄'
    if (pendingActions > 0) return '⏳'
    return '✓'
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY: slideAnim }],
          opacity: opacityAnim,
        },
      ]}
      pointerEvents={shouldShow ? 'auto' : 'none'}
    >
      <TouchableOpacity
        style={[styles.banner, getBannerStyle(), { paddingTop: spacing.sm + insets.top }]}
        onPress={handlePress}
        disabled={!isOnline || pendingActions === 0}
        activeOpacity={0.8}
      >
        <Text style={styles.icon}>{getIcon()}</Text>
        <Text style={styles.message}>{getMessage()}</Text>
        {isOnline && pendingActions > 0 && !isSyncing && (
          <Text style={styles.syncHint}>Toque para sincronizar</Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  bannerOffline: {
    backgroundColor: colors.gray700,
  },
  bannerSyncing: {
    backgroundColor: colors.primary,
  },
  bannerPending: {
    backgroundColor: colors.warning,
  },
  bannerOnline: {
    backgroundColor: colors.success,
  },
  icon: {
    fontSize: 16,
    marginRight: spacing.sm,
  },
  message: {
    fontSize: typography.fontSize.sm,
    fontWeight: '600',
    color: colors.white,
  },
  syncHint: {
    fontSize: typography.fontSize.xs,
    color: colors.white,
    opacity: 0.8,
    marginLeft: spacing.sm,
  },
})
