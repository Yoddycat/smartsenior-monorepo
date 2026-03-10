/**
 * BaseModal Component
 * Reusable modal wrapper with consistent styling and behavior
 */

import React, { ReactNode } from 'react'
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
} from 'react-native'
import { colors, spacing, borderRadius, typography, shadowStyles } from '../../constants/theme'

export interface ModalAction {
  label: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}

interface BaseModalProps {
  visible: boolean
  onClose: () => void
  title: string
  subtitle?: string
  children: ReactNode
  actions?: ModalAction[]
  showCloseButton?: boolean
  containerStyle?: ViewStyle
  testID?: string
}

export function BaseModal({
  visible,
  onClose,
  title,
  subtitle,
  children,
  actions,
  showCloseButton = false,
  containerStyle,
  testID,
}: BaseModalProps) {
  const getButtonStyle = (variant: ModalAction['variant'] = 'primary') => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton
      case 'danger':
        return styles.dangerButton
      default:
        return styles.primaryButton
    }
  }

  const getButtonTextStyle = (variant: ModalAction['variant'] = 'primary') => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButtonText
      case 'danger':
        return styles.dangerButtonText
      default:
        return styles.primaryButtonText
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      testID={testID}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <View style={[styles.container, containerStyle]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            {showCloseButton && (
              <TouchableOpacity
                style={styles.closeButton}
                onPress={onClose}
                accessibilityRole="button"
                accessibilityLabel="Fechar"
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            )}
          </View>

          {/* Content */}
          <View style={styles.content}>{children}</View>

          {/* Actions */}
          {actions && actions.length > 0 && (
            <View style={styles.actionsRow}>
              {actions.map((action, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.actionButton,
                    getButtonStyle(action.variant),
                    action.disabled && styles.disabledButton,
                  ]}
                  onPress={action.onPress}
                  disabled={action.disabled}
                  accessibilityRole="button"
                  accessibilityLabel={action.label}
                >
                  <Text
                    style={[
                      styles.actionButtonText,
                      getButtonTextStyle(action.variant),
                      action.disabled && styles.disabledButtonText,
                    ]}
                  >
                    {action.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    width: '100%',
    maxWidth: 320,
    ...shadowStyles.lg,
  },
  header: {
    position: 'relative',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  closeButton: {
    position: 'absolute',
    top: -spacing.sm,
    right: -spacing.sm,
    padding: spacing.sm,
  },
  closeButtonText: {
    fontSize: typography.fontSize.lg,
    color: colors.gray400,
  },
  content: {
    marginBottom: spacing.md,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  actionButton: {
    flex: 1,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  primaryButtonText: {
    color: colors.white,
  },
  secondaryButton: {
    backgroundColor: colors.gray100,
  },
  secondaryButtonText: {
    color: colors.gray600,
  },
  dangerButton: {
    backgroundColor: colors.danger,
  },
  dangerButtonText: {
    color: colors.white,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledButtonText: {
    color: colors.gray400,
  },
})
