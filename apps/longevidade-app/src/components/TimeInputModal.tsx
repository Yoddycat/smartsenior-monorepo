/**
 * TimeInputModal Component
 * Cross-platform modal for time input (replaces iOS-only Alert.prompt)
 */

import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { colors, spacing, borderRadius, typography, shadowStyles } from '../constants/theme'

interface TimeInputModalProps {
  visible: boolean
  title: string
  initialValue: string
  onCancel: () => void
  onSave: (value: string) => void
}

export function TimeInputModal({
  visible,
  title,
  initialValue,
  onCancel,
  onSave,
}: TimeInputModalProps) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<string | null>(null)

  // Reset value when modal opens
  useEffect(() => {
    if (visible) {
      setValue(initialValue)
      setError(null)
    }
  }, [visible, initialValue])

  const validateTime = (time: string): boolean => {
    return /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
  }

  const handleSave = () => {
    if (validateTime(value)) {
      onSave(value)
    } else {
      setError('Use o formato HH:MM (ex: 08:00)')
    }
  }

  const handleChangeText = (text: string) => {
    // Auto-format: add colon after 2 digits
    let formatted = text.replace(/[^0-9:]/g, '')

    if (formatted.length === 2 && !formatted.includes(':') && value.length < 3) {
      formatted = formatted + ':'
    }

    // Limit to 5 characters (HH:MM)
    if (formatted.length <= 5) {
      setValue(formatted)
      setError(null)
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.overlay}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Digite o horário no formato HH:MM</Text>

          <TextInput
            style={[styles.input, error && styles.inputError]}
            value={value}
            onChangeText={handleChangeText}
            placeholder="08:00"
            placeholderTextColor={colors.gray400}
            keyboardType="numeric"
            maxLength={5}
            autoFocus
            selectTextOnFocus
            accessibilityLabel="Campo de horário"
            accessibilityHint="Digite o horário no formato horas dois pontos minutos"
          />

          {error && <Text style={styles.errorText}>{error}</Text>}

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
              accessibilityRole="button"
              accessibilityLabel="Cancelar"
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}
              accessibilityRole="button"
              accessibilityLabel="Salvar horário"
            >
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
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
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: 'bold',
    color: colors.gray900,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.gray500,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  input: {
    backgroundColor: colors.gray50,
    borderWidth: 2,
    borderColor: colors.gray200,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.gray900,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    fontSize: typography.fontSize.sm,
    color: colors.error,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  button: {
    flex: 1,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: colors.gray100,
  },
  cancelButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.gray600,
  },
  saveButton: {
    backgroundColor: colors.primary,
  },
  saveButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.white,
  },
})
