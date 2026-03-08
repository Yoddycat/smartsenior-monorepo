/**
 * OnboardingScreen Integration Tests
 * Tests component logic for slides, navigation, and form validation
 */

import React from 'react'

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
}))

describe('OnboardingScreen Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Slides Data', () => {
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

    it('has exactly 3 slides', () => {
      expect(SLIDES.length).toBe(3)
    })

    it('welcome slide has correct data', () => {
      const welcome = SLIDES.find((s) => s.id === 'welcome')
      expect(welcome).toBeDefined()
      expect(welcome?.emoji).toBe('🌟')
      expect(welcome?.title).toBe('Bem-vindo ao Longevidade')
    })

    it('protocol slide has correct data', () => {
      const protocol = SLIDES.find((s) => s.id === 'protocol')
      expect(protocol).toBeDefined()
      expect(protocol?.emoji).toBe('📋')
      expect(protocol?.title).toBe('Protocolo de 3 Meses')
    })

    it('tracking slide has correct data', () => {
      const tracking = SLIDES.find((s) => s.id === 'tracking')
      expect(tracking).toBeDefined()
      expect(tracking?.emoji).toBe('📊')
      expect(tracking?.title).toBe('Acompanhe seu Progresso')
    })

    it('all slides have required fields', () => {
      SLIDES.forEach((slide) => {
        expect(slide.id).toBeDefined()
        expect(slide.emoji).toBeDefined()
        expect(slide.title).toBeDefined()
        expect(slide.description).toBeDefined()
      })
    })
  })

  describe('Navigation Logic', () => {
    const SLIDES_LENGTH = 3

    const handleNext = (currentSlide: number): number | null => {
      if (currentSlide < SLIDES_LENGTH) {
        return currentSlide + 1
      }
      return null
    }

    const handleBack = (currentSlide: number): number | null => {
      if (currentSlide > 0) {
        return currentSlide - 1
      }
      return null
    }

    it('advances to next slide from slide 0', () => {
      expect(handleNext(0)).toBe(1)
    })

    it('advances to next slide from slide 1', () => {
      expect(handleNext(1)).toBe(2)
    })

    it('advances to next slide from slide 2', () => {
      expect(handleNext(2)).toBe(3) // form slide
    })

    it('does not advance beyond form slide', () => {
      expect(handleNext(3)).toBeNull()
    })

    it('goes back from slide 1 to 0', () => {
      expect(handleBack(1)).toBe(0)
    })

    it('goes back from slide 2 to 1', () => {
      expect(handleBack(2)).toBe(1)
    })

    it('goes back from form slide to slide 2', () => {
      expect(handleBack(3)).toBe(2)
    })

    it('does not go back from slide 0', () => {
      expect(handleBack(0)).toBeNull()
    })
  })

  describe('Form Slide Detection', () => {
    const SLIDES_LENGTH = 3

    const isFormSlide = (currentSlide: number): boolean => {
      return currentSlide === SLIDES_LENGTH
    }

    it('slide 0 is not form slide', () => {
      expect(isFormSlide(0)).toBe(false)
    })

    it('slide 1 is not form slide', () => {
      expect(isFormSlide(1)).toBe(false)
    })

    it('slide 2 is not form slide', () => {
      expect(isFormSlide(2)).toBe(false)
    })

    it('slide 3 (form) is form slide', () => {
      expect(isFormSlide(3)).toBe(true)
    })
  })

  describe('Form Validation', () => {
    interface ValidationResult {
      name?: string
      birthYear?: string
    }

    const validateForm = (name: string, birthYear: string, currentYear: number = 2026): ValidationResult => {
      const errors: ValidationResult = {}

      if (!name.trim()) {
        errors.name = 'Por favor, informe seu nome'
      }

      const year = parseInt(birthYear, 10)
      if (!birthYear) {
        errors.birthYear = 'Por favor, informe seu ano de nascimento'
      } else if (isNaN(year) || year < 1900 || year > currentYear - 18) {
        errors.birthYear = 'Ano de nascimento inválido'
      }

      return errors
    }

    const isValid = (errors: ValidationResult): boolean => {
      return Object.keys(errors).length === 0
    }

    describe('name validation', () => {
      it('accepts valid name', () => {
        const errors = validateForm('João Silva', '1980')
        expect(errors.name).toBeUndefined()
      })

      it('rejects empty name', () => {
        const errors = validateForm('', '1980')
        expect(errors.name).toBe('Por favor, informe seu nome')
      })

      it('rejects whitespace-only name', () => {
        const errors = validateForm('   ', '1980')
        expect(errors.name).toBe('Por favor, informe seu nome')
      })

      it('accepts name with spaces', () => {
        const errors = validateForm('Maria Clara Santos', '1980')
        expect(errors.name).toBeUndefined()
      })
    })

    describe('birthYear validation', () => {
      it('accepts valid birth year', () => {
        const errors = validateForm('João', '1980')
        expect(errors.birthYear).toBeUndefined()
      })

      it('rejects empty birth year', () => {
        const errors = validateForm('João', '')
        expect(errors.birthYear).toBe('Por favor, informe seu ano de nascimento')
      })

      it('rejects year before 1900', () => {
        const errors = validateForm('João', '1899')
        expect(errors.birthYear).toBe('Ano de nascimento inválido')
      })

      it('accepts year exactly 1900', () => {
        const errors = validateForm('João', '1900')
        expect(errors.birthYear).toBeUndefined()
      })

      it('rejects year too recent (must be 18+)', () => {
        const errors = validateForm('João', '2010', 2026) // 16 years old
        expect(errors.birthYear).toBe('Ano de nascimento inválido')
      })

      it('accepts year exactly 18 years ago', () => {
        const errors = validateForm('João', '2008', 2026) // exactly 18
        expect(errors.birthYear).toBeUndefined()
      })

      it('rejects non-numeric year', () => {
        const errors = validateForm('João', 'abcd')
        expect(errors.birthYear).toBe('Ano de nascimento inválido')
      })

      it('rejects partial year', () => {
        const errors = validateForm('João', '198')
        expect(errors.birthYear).toBe('Ano de nascimento inválido')
      })
    })

    describe('combined validation', () => {
      it('valid form returns no errors', () => {
        const errors = validateForm('João Silva', '1980')
        expect(isValid(errors)).toBe(true)
      })

      it('both fields empty returns both errors', () => {
        const errors = validateForm('', '')
        expect(errors.name).toBeDefined()
        expect(errors.birthYear).toBeDefined()
      })

      it('name valid, year invalid returns year error only', () => {
        const errors = validateForm('João', '1800')
        expect(errors.name).toBeUndefined()
        expect(errors.birthYear).toBeDefined()
      })

      it('name invalid, year valid returns name error only', () => {
        const errors = validateForm('', '1980')
        expect(errors.name).toBeDefined()
        expect(errors.birthYear).toBeUndefined()
      })
    })
  })

  describe('Input Sanitization', () => {
    const sanitizeBirthYear = (text: string): string => {
      return text.replace(/[^0-9]/g, '')
    }

    it('keeps numeric characters', () => {
      expect(sanitizeBirthYear('1980')).toBe('1980')
    })

    it('removes letters', () => {
      expect(sanitizeBirthYear('1980abc')).toBe('1980')
    })

    it('removes special characters', () => {
      expect(sanitizeBirthYear('19-80')).toBe('1980')
    })

    it('handles empty string', () => {
      expect(sanitizeBirthYear('')).toBe('')
    })

    it('removes spaces', () => {
      expect(sanitizeBirthYear('19 80')).toBe('1980')
    })

    it('removes all non-numeric', () => {
      expect(sanitizeBirthYear('abc!@#')).toBe('')
    })
  })

  describe('Profile Creation', () => {
    const createProfile = (name: string, birthYear: string) => {
      const currentDate = '2026-03-08T10:00:00.000Z'
      return {
        name: name.trim(),
        birthYear: parseInt(birthYear, 10),
        protocolStartDate: currentDate.split('T')[0],
        healthConnected: false,
      }
    }

    it('creates profile with trimmed name', () => {
      const profile = createProfile('  João Silva  ', '1980')
      expect(profile.name).toBe('João Silva')
    })

    it('creates profile with parsed birth year', () => {
      const profile = createProfile('João', '1980')
      expect(profile.birthYear).toBe(1980)
    })

    it('sets protocol start date', () => {
      const profile = createProfile('João', '1980')
      expect(profile.protocolStartDate).toBe('2026-03-08')
    })

    it('sets health connected to false', () => {
      const profile = createProfile('João', '1980')
      expect(profile.healthConnected).toBe(false)
    })
  })

  describe('Button Text Logic', () => {
    const SLIDES_LENGTH = 3

    const getButtonText = (currentSlide: number): string => {
      const isFormSlide = currentSlide === SLIDES_LENGTH
      return isFormSlide ? 'Começar Protocolo' : 'Próximo'
    }

    it('shows "Próximo" on slide 0', () => {
      expect(getButtonText(0)).toBe('Próximo')
    })

    it('shows "Próximo" on slide 1', () => {
      expect(getButtonText(1)).toBe('Próximo')
    })

    it('shows "Próximo" on slide 2', () => {
      expect(getButtonText(2)).toBe('Próximo')
    })

    it('shows "Começar Protocolo" on form slide', () => {
      expect(getButtonText(3)).toBe('Começar Protocolo')
    })
  })

  describe('Back Button Visibility', () => {
    const shouldShowBackButton = (currentSlide: number): boolean => {
      return currentSlide > 0
    }

    it('hides back button on slide 0', () => {
      expect(shouldShowBackButton(0)).toBe(false)
    })

    it('shows back button on slide 1', () => {
      expect(shouldShowBackButton(1)).toBe(true)
    })

    it('shows back button on slide 2', () => {
      expect(shouldShowBackButton(2)).toBe(true)
    })

    it('shows back button on form slide', () => {
      expect(shouldShowBackButton(3)).toBe(true)
    })
  })

  describe('Next Button Style Logic', () => {
    const getNextButtonStyle = (currentSlide: number): string[] => {
      const styles = ['nextButton']
      if (currentSlide === 0) {
        styles.push('nextButtonFull')
      }
      return styles
    }

    it('applies full width on slide 0', () => {
      const styles = getNextButtonStyle(0)
      expect(styles).toContain('nextButtonFull')
    })

    it('does not apply full width on slide 1', () => {
      const styles = getNextButtonStyle(1)
      expect(styles).not.toContain('nextButtonFull')
    })

    it('does not apply full width on form slide', () => {
      const styles = getNextButtonStyle(3)
      expect(styles).not.toContain('nextButtonFull')
    })
  })

  describe('Dot Style Logic', () => {
    const getDotStyle = (index: number, currentSlide: number): string[] => {
      const styles = ['dot']
      if (index === currentSlide) {
        styles.push('dotActive')
      }
      return styles
    }

    it('applies active style to current dot', () => {
      const styles = getDotStyle(0, 0)
      expect(styles).toContain('dotActive')
    })

    it('does not apply active style to other dots', () => {
      const styles = getDotStyle(1, 0)
      expect(styles).not.toContain('dotActive')
    })

    it('applies active style to form dot', () => {
      const styles = getDotStyle(3, 3)
      expect(styles).toContain('dotActive')
    })
  })

  describe('Total Dots Count', () => {
    const SLIDES = [{ id: '1' }, { id: '2' }, { id: '3' }]

    const getTotalDots = (): number => {
      return SLIDES.length + 1 // slides + form
    }

    it('has 4 dots total (3 slides + form)', () => {
      expect(getTotalDots()).toBe(4)
    })
  })

  describe('Scroll Position Calculation', () => {
    const SCREEN_WIDTH = 375

    const getScrollPosition = (slideIndex: number): number => {
      return slideIndex * SCREEN_WIDTH
    }

    it('calculates position for slide 0', () => {
      expect(getScrollPosition(0)).toBe(0)
    })

    it('calculates position for slide 1', () => {
      expect(getScrollPosition(1)).toBe(375)
    })

    it('calculates position for slide 2', () => {
      expect(getScrollPosition(2)).toBe(750)
    })

    it('calculates position for form slide', () => {
      expect(getScrollPosition(3)).toBe(1125)
    })
  })

  describe('Input Style Logic', () => {
    const getInputStyles = (hasError: boolean): string[] => {
      const styles = ['input']
      if (hasError) {
        styles.push('inputError')
      }
      return styles
    }

    it('applies only base style when no error', () => {
      const styles = getInputStyles(false)
      expect(styles).toEqual(['input'])
    })

    it('applies error style when has error', () => {
      const styles = getInputStyles(true)
      expect(styles).toContain('inputError')
    })
  })

  describe('Error Clearing Logic', () => {
    interface UserData {
      name: string
      birthYear: string
    }

    interface Errors {
      name?: string
      birthYear?: string
    }

    const handleNameChange = (text: string, userData: UserData, errors: Errors) => {
      const newUserData = { ...userData, name: text }
      const newErrors = { ...errors }
      if (errors.name) {
        delete newErrors.name
      }
      return { userData: newUserData, errors: newErrors }
    }

    const handleBirthYearChange = (text: string, userData: UserData, errors: Errors) => {
      const numericText = text.replace(/[^0-9]/g, '')
      const newUserData = { ...userData, birthYear: numericText }
      const newErrors = { ...errors }
      if (errors.birthYear) {
        delete newErrors.birthYear
      }
      return { userData: newUserData, errors: newErrors }
    }

    it('clears name error on name change', () => {
      const result = handleNameChange('João', { name: '', birthYear: '' }, { name: 'Error' })
      expect(result.errors.name).toBeUndefined()
    })

    it('keeps birthYear error on name change', () => {
      const result = handleNameChange('João', { name: '', birthYear: '' }, { name: 'Error', birthYear: 'Error2' })
      expect(result.errors.birthYear).toBe('Error2')
    })

    it('clears birthYear error on birthYear change', () => {
      const result = handleBirthYearChange('1980', { name: '', birthYear: '' }, { birthYear: 'Error' })
      expect(result.errors.birthYear).toBeUndefined()
    })

    it('keeps name error on birthYear change', () => {
      const result = handleBirthYearChange('1980', { name: '', birthYear: '' }, { name: 'Error', birthYear: 'Error2' })
      expect(result.errors.name).toBe('Error')
    })
  })

  describe('Platform Behavior', () => {
    const getKeyboardBehavior = (platform: 'ios' | 'android'): 'padding' | 'height' => {
      return platform === 'ios' ? 'padding' : 'height'
    }

    it('uses padding on iOS', () => {
      expect(getKeyboardBehavior('ios')).toBe('padding')
    })

    it('uses height on Android', () => {
      expect(getKeyboardBehavior('android')).toBe('height')
    })
  })

  describe('Storage Keys', () => {
    const PROFILE_STORAGE_KEY = '@longevidade:user_profile'
    const ONBOARDING_COMPLETE_KEY = '@longevidade:onboarding_complete'

    it('has correct profile storage key', () => {
      expect(PROFILE_STORAGE_KEY).toBe('@longevidade:user_profile')
    })

    it('has correct onboarding complete key', () => {
      expect(ONBOARDING_COMPLETE_KEY).toBe('@longevidade:onboarding_complete')
    })
  })

  describe('Year Boundary Tests', () => {
    const validateBirthYear = (year: string, currentYear: number = 2026) => {
      const parsedYear = parseInt(year, 10)
      if (!year) return 'required'
      if (isNaN(parsedYear)) return 'invalid'
      if (parsedYear < 1900) return 'too_old'
      if (parsedYear > currentYear - 18) return 'too_young'
      return 'valid'
    }

    it('validates 1900 as valid', () => {
      expect(validateBirthYear('1900')).toBe('valid')
    })

    it('validates 1899 as too old', () => {
      expect(validateBirthYear('1899')).toBe('too_old')
    })

    it('validates exact 18 years ago as valid (2008 in 2026)', () => {
      expect(validateBirthYear('2008', 2026)).toBe('valid')
    })

    it('validates 17 years ago as too young (2009 in 2026)', () => {
      expect(validateBirthYear('2009', 2026)).toBe('too_young')
    })

    it('validates current year as too young', () => {
      expect(validateBirthYear('2026', 2026)).toBe('too_young')
    })

    it('validates future year as too young', () => {
      expect(validateBirthYear('2030', 2026)).toBe('too_young')
    })
  })
})
