/**
 * HealthPermissionsCard Component
 *
 * Card that displays health permissions status and allows requesting permissions.
 */

import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native'
import { colors, spacing, borderRadius, typography, shadowStyles } from '../constants/theme'
import { useHealth } from '../hooks/useHealth'

const healthIcon = require('../../assets/images/icons/suplementos.png')

interface PermissionItemProps {
  label: string
  granted: boolean
}

function PermissionItem({ label, granted }: PermissionItemProps) {
  return (
    <View style={styles.permissionItem}>
      <View style={[styles.permissionStatus, granted && styles.permissionGranted]}>
        <Text style={styles.permissionStatusText}>{granted ? '✓' : '○'}</Text>
      </View>
      <Text style={[styles.permissionLabel, granted && styles.permissionLabelGranted]}>
        {label}
      </Text>
    </View>
  )
}

export function HealthPermissionsCard() {
  const {
    isAvailable,
    isLoading,
    permissions,
    requestPermissions,
    hasAllPermissions,
    error,
  } = useHealth()

  if (!isAvailable) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={healthIcon} style={styles.icon} />
          <Text style={styles.title}>Dados de Saúde</Text>
        </View>
        <Text style={styles.unavailableText}>
          Os serviços de saúde não estão disponíveis neste dispositivo.
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={healthIcon} style={styles.icon} />
        <View style={styles.headerText}>
          <Text style={styles.title}>Dados de Saúde</Text>
          <Text style={styles.subtitle}>
            {hasAllPermissions
              ? 'Todas as permissões concedidas'
              : 'Conecte seus dados de saúde'}
          </Text>
        </View>
      </View>

      <View style={styles.permissionsList}>
        <PermissionItem label="Passos" granted={permissions.steps} />
        <PermissionItem label="Frequência Cardíaca" granted={permissions.heartRate} />
        <PermissionItem label="Variabilidade (HRV)" granted={permissions.hrv} />
        <PermissionItem label="Horas de Sono" granted={permissions.sleep} />
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {!hasAllPermissions && (
        <TouchableOpacity
          style={styles.button}
          onPress={requestPermissions}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color={colors.white} size="small" />
          ) : (
            <Text style={styles.buttonText}>Conectar Dados de Saúde</Text>
          )}
        </TouchableOpacity>
      )}

      {hasAllPermissions && (
        <View style={styles.connectedBadge}>
          <Text style={styles.connectedText}>✓ Conectado</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    margin: spacing.md,
    ...shadowStyles.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: spacing.md,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    marginTop: 2,
  },
  unavailableText: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    textAlign: 'center',
    paddingVertical: spacing.md,
  },
  permissionsList: {
    marginBottom: spacing.md,
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  permissionStatus: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.gray300,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  permissionGranted: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  permissionStatusText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
  permissionLabel: {
    fontSize: typography.fontSize.base,
    color: colors.gray600,
  },
  permissionLabelGranted: {
    color: colors.gray900,
  },
  errorText: {
    fontSize: typography.fontSize.sm,
    color: colors.error,
    marginBottom: spacing.sm,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonText: {
    color: colors.white,
    fontSize: typography.fontSize.base,
    fontWeight: '600',
  },
  connectedBadge: {
    backgroundColor: colors.success + '20',
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  connectedText: {
    color: colors.success,
    fontSize: typography.fontSize.base,
    fontWeight: '600',
  },
})

export default HealthPermissionsCard
