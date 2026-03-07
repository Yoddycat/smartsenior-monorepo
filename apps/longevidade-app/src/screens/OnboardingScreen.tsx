import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { colors, spacing, borderRadius, typography } from '../constants/theme'

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const PROFILE_STORAGE_KEY = '@longevidade:user_profile'
const ONBOARDING_COMPLETE_KEY = '@longevidade:onboarding_complete'

interface OnboardingScreenProps {
  onComplete: () => void
}

interface UserData {
  name: string
  birthYear: string
}

const SLIDES = [
  {
    id: 'welcome',
    emoji: '🌟',
    title: 'Bem-vindo ao Longevidade',
    description: 'Seu guia pessoal para uma vida mais longa e saudável. Vamos começar sua jornada de 84 dias.',
  },
  {
    id: 'protocol',
    emoji: '📋',
    title: 'Protocolo de 3 Meses',
    description: 'Um programa científico com tarefas diárias focadas em 8 pilares da saúde: hidratação, nutrição, movimento, sono e mais.',
  },
  {
    id: 'tracking',
    emoji: '📊',
    title: 'Acompanhe seu Progresso',
    description: 'Marque suas tarefas diárias, acompanhe seu streak e veja sua evolução ao longo do tempo.',
  },
]

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [userData, setUserData] = useState<UserData>({ name: '', birthYear: '' })
  const [errors, setErrors] = useState<{ name?: string; birthYear?: string }>({})
  const scrollViewRef = useRef<ScrollView>(null)

  const isFormSlide = currentSlide === SLIDES.length

  const validateForm = (): boolean => {
    const newErrors: { name?: string; birthYear?: string } = {}

    if (!userData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome'
    }

    const year = parseInt(userData.birthYear, 10)
    const currentYear = new Date().getFullYear()
    if (!userData.birthYear) {
      newErrors.birthYear = 'Por favor, informe seu ano de nascimento'
    } else if (isNaN(year) || year < 1900 || year > currentYear - 18) {
      newErrors.birthYear = 'Ano de nascimento inválido'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (currentSlide < SLIDES.length) {
      const nextSlide = currentSlide + 1
      setCurrentSlide(nextSlide)
      scrollViewRef.current?.scrollTo({ x: nextSlide * SCREEN_WIDTH, animated: true })
    }
  }

  const handleBack = () => {
    if (currentSlide > 0) {
      const prevSlide = currentSlide - 1
      setCurrentSlide(prevSlide)
      scrollViewRef.current?.scrollTo({ x: prevSlide * SCREEN_WIDTH, animated: true })
    }
  }

  const handleComplete = async () => {
    if (!validateForm()) return

    try {
      const profile = {
        name: userData.name.trim(),
        birthYear: parseInt(userData.birthYear, 10),
        protocolStartDate: new Date().toISOString().split('T')[0],
        healthConnected: false,
      }

      await AsyncStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile))
      await AsyncStorage.setItem(ONBOARDING_COMPLETE_KEY, 'true')
      onComplete()
    } catch (error) {
      console.error('Error saving profile:', error)
    }
  }

  const renderSlide = (slide: typeof SLIDES[0]) => (
    <View key={slide.id} style={styles.slide}>
      <View style={styles.slideContent}>
        <Text style={styles.slideEmoji}>{slide.emoji}</Text>
        <Text style={styles.slideTitle}>{slide.title}</Text>
        <Text style={styles.slideDescription}>{slide.description}</Text>
      </View>
    </View>
  )

  const renderFormSlide = () => (
    <View style={styles.slide}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.formContainer}
      >
        <Text style={styles.formEmoji}>👤</Text>
        <Text style={styles.formTitle}>Vamos nos conhecer</Text>
        <Text style={styles.formDescription}>
          Informe seus dados para personalizar sua experiência
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Como podemos te chamar?</Text>
          <TextInput
            style={[styles.input, errors.name && styles.inputError]}
            placeholder="Seu nome"
            placeholderTextColor={colors.gray400}
            value={userData.name}
            onChangeText={(text) => {
              setUserData({ ...userData, name: text })
              if (errors.name) setErrors({ ...errors, name: undefined })
            }}
            autoCapitalize="words"
            accessibilityLabel="Nome"
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Qual seu ano de nascimento?</Text>
          <TextInput
            style={[styles.input, errors.birthYear && styles.inputError]}
            placeholder="Ex: 1960"
            placeholderTextColor={colors.gray400}
            value={userData.birthYear}
            onChangeText={(text) => {
              const numericText = text.replace(/[^0-9]/g, '')
              setUserData({ ...userData, birthYear: numericText })
              if (errors.birthYear) setErrors({ ...errors, birthYear: undefined })
            }}
            keyboardType="number-pad"
            maxLength={4}
            accessibilityLabel="Ano de nascimento"
          />
          {errors.birthYear && <Text style={styles.errorText}>{errors.birthYear}</Text>}
        </View>
      </KeyboardAvoidingView>
    </View>
  )

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={styles.scrollView}
      >
        {SLIDES.map(renderSlide)}
        {renderFormSlide()}
      </ScrollView>

      {/* Progress Dots */}
      <View style={styles.dotsContainer}>
        {[...SLIDES, { id: 'form' }].map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentSlide && styles.dotActive,
            ]}
          />
        ))}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonsContainer}>
        {currentSlide > 0 && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBack}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            styles.nextButton,
            currentSlide === 0 && styles.nextButtonFull,
          ]}
          onPress={isFormSlide ? handleComplete : handleNext}
          accessibilityRole="button"
          accessibilityLabel={isFormSlide ? 'Começar protocolo' : 'Próximo'}
        >
          <Text style={styles.nextButtonText}>
            {isFormSlide ? 'Começar Protocolo' : 'Próximo'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  scrollView: {
    flex: 1,
  },
  slide: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  slideContent: {
    alignItems: 'center',
  },
  slideEmoji: {
    fontSize: 80,
    marginBottom: spacing.xl,
  },
  slideTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  slideDescription: {
    fontSize: typography.fontSize.base,
    color: colors.gray300,
    textAlign: 'center',
    lineHeight: 24,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  formEmoji: {
    fontSize: 64,
    marginBottom: spacing.lg,
  },
  formTitle: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  formDescription: {
    fontSize: typography.fontSize.base,
    color: colors.gray300,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  inputGroup: {
    width: '100%',
    marginBottom: spacing.lg,
  },
  inputLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.gray300,
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    fontSize: typography.fontSize.base,
    color: colors.gray900,
  },
  inputError: {
    borderWidth: 2,
    borderColor: colors.error,
  },
  errorText: {
    fontSize: typography.fontSize.sm,
    color: colors.error,
    marginTop: spacing.xs,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.gray500,
    marginHorizontal: spacing.xs,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing['2xl'],
    gap: spacing.md,
  },
  backButton: {
    flex: 1,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.gray500,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.white,
  },
  nextButton: {
    flex: 2,
    padding: spacing.md,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  nextButtonFull: {
    flex: 1,
  },
  nextButtonText: {
    fontSize: typography.fontSize.base,
    fontWeight: '600',
    color: colors.white,
  },
})
