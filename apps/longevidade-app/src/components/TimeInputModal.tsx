/**
 * TimeInputModal Component
 * Cross-platform modal for time input (replaces iOS-only Alert.prompt)
 */

import React, { useState, useEffect, useMemo } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'
import { colors, spacing, borderRadius, typography } from '../constants/theme'
import { BaseModal, ModalAction } from './common'

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

  const actions: ModalAction[] = useMemo(() => [
    { label: 'Cancelar', onPress: onCancel, variant: 'secondary' },
    { label: 'Salvar', onPress: handleSave, variant: 'primary' },
  ], [onCancel, handleSave])

  return (
    <BaseModal
      visible={visible}
      onClose={onCancel}
      title={title}
      subtitle="Digite o horário no formato HH:MM"
      actions={actions}
    >
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
    </BaseModal>
  )
}

const styles = StyleSheet.create({
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
})
