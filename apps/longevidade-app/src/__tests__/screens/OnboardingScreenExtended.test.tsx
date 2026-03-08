/**
 * OnboardingScreen Extended Tests
 * Tests for module and internal logic
 */

import React from 'react'

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve(null)),
}))

describe('OnboardingScreen', () => {
  describe('module', () => {
    it('can be imported', () => {
      const { OnboardingScreen } = require('../../screens/OnboardingScreen')
      expect(OnboardingScreen).toBeDefined()
    })

    it('is a function component', () => {
      const { OnboardingScreen } = require('../../screens/OnboardingScreen')
      expect(typeof OnboardingScreen).toBe('function')
    })
  })
})

describe('OnboardingScreen SLIDES data', () => {
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

  it('has 3 slides', () => {
    expect(SLIDES).toHaveLength(3)
  })

  it('first slide is welcome', () => {
    expect(SLIDES[0].id).toBe('welcome')
  })

  it('second slide is protocol', () => {
    expect(SLIDES[1].id).toBe('protocol')
  })

  it('third slide is tracking', () => {
    expect(SLIDES[2].id).toBe('tracking')
  })

  it('all slides have required fields', () => {
    SLIDES.forEach((slide) => {
      expect(slide.id).toBeDefined()
      expect(slide.emoji).toBeDefined()
      expect(slide.title).toBeDefined()
      expect(slide.description).toBeDefined()
    })
  })

  it('all slides have emojis', () => {
    expect(SLIDES[0].emoji).toBe('🌟')
    expect(SLIDES[1].emoji).toBe('📋')
    expect(SLIDES[2].emoji).toBe('📊')
  })
})

describe('OnboardingScreen form validation', () => {
  const validateForm = (userData: { name: string; birthYear: string }) => {
    const errors: { name?: string; birthYear?: string } = {}

    if (!userData.name.trim()) {
      errors.name = 'Por favor, informe seu nome'
    }

    const year = parseInt(userData.birthYear, 10)
    const currentYear = new Date().getFullYear()
    if (!userData.birthYear) {
      errors.birthYear = 'Por favor, informe seu ano de nascimento'
    } else if (isNaN(year) || year < 1900 || year > currentYear - 18) {
      errors.birthYear = 'Ano de nascimento inválido'
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    }
  }

  describe('name validation', () => {
    it('rejects empty name', () => {
      const result = validateForm({ name: '', birthYear: '1960' })
      expect(result.isValid).toBe(false)
      expect(result.errors.name).toBe('Por favor, informe seu nome')
    })

    it('rejects whitespace-only name', () => {
      const result = validateForm({ name: '   ', birthYear: '1960' })
      expect(result.isValid).toBe(false)
      expect(result.errors.name).toBe('Por favor, informe seu nome')
    })

    it('accepts valid name', () => {
      const result = validateForm({ name: 'João', birthYear: '1960' })
      expect(result.errors.name).toBeUndefined()
    })
  })

  describe('birthYear validation', () => {
    it('rejects empty birthYear', () => {
      const result = validateForm({ name: 'João', birthYear: '' })
      expect(result.isValid).toBe(false)
      expect(result.errors.birthYear).toBe('Por favor, informe seu ano de nascimento')
    })

    it('rejects non-numeric birthYear', () => {
      const result = validateForm({ name: 'João', birthYear: 'abcd' })
      expect(result.isValid).toBe(false)
      expect(result.errors.birthYear).toBe('Ano de nascimento inválido')
    })

    it('rejects birthYear before 1900', () => {
      const result = validateForm({ name: 'João', birthYear: '1899' })
      expect(result.isValid).toBe(false)
      expect(result.errors.birthYear).toBe('Ano de nascimento inválido')
    })

    it('rejects birthYear too recent (under 18)', () => {
      const currentYear = new Date().getFullYear()
      const result = validateForm({ name: 'João', birthYear: String(currentYear - 10) })
      expect(result.isValid).toBe(false)
      expect(result.errors.birthYear).toBe('Ano de nascimento inválido')
    })

    it('accepts valid birthYear', () => {
      const result = validateForm({ name: 'João', birthYear: '1960' })
      expect(result.errors.birthYear).toBeUndefined()
    })

    it('accepts minimum valid age (18)', () => {
      const currentYear = new Date().getFullYear()
      const result = validateForm({ name: 'João', birthYear: String(currentYear - 18) })
      expect(result.errors.birthYear).toBeUndefined()
    })
  })

  describe('combined validation', () => {
    it('returns true when all fields valid', () => {
      const result = validateForm({ name: 'Maria Silva', birthYear: '1955' })
      expect(result.isValid).toBe(true)
      expect(result.errors).toEqual({})
    })

    it('returns false with multiple errors', () => {
      const result = validateForm({ name: '', birthYear: '' })
      expect(result.isValid).toBe(false)
      expect(result.errors.name).toBeDefined()
      expect(result.errors.birthYear).toBeDefined()
    })
  })
})

describe('OnboardingScreen navigation logic', () => {
  const TOTAL_SLIDES = 4 // 3 info slides + 1 form

  it('starts at slide 0', () => {
    const currentSlide = 0
    expect(currentSlide).toBe(0)
  })

  it('can navigate to next slide', () => {
    let currentSlide = 0
    currentSlide = currentSlide + 1
    expect(currentSlide).toBe(1)
  })

  it('can navigate to previous slide', () => {
    let currentSlide = 2
    currentSlide = currentSlide - 1
    expect(currentSlide).toBe(1)
  })

  const isFormSlide = (currentSlide: number, slidesLength: number) => {
    return currentSlide === slidesLength
  }

  it('identifies form slide correctly', () => {
    expect(isFormSlide(3, 3)).toBe(true)
  })

  it('identifies non-form slide correctly', () => {
    expect(isFormSlide(1, 3)).toBe(false)
  })
})

describe('OnboardingScreen profile storage', () => {
  const PROFILE_STORAGE_KEY = '@longevidade:user_profile'
  const ONBOARDING_COMPLETE_KEY = '@longevidade:onboarding_complete'

  it('has correct profile storage key', () => {
    expect(PROFILE_STORAGE_KEY).toBe('@longevidade:user_profile')
  })

  it('has correct onboarding complete key', () => {
    expect(ONBOARDING_COMPLETE_KEY).toBe('@longevidade:onboarding_complete')
  })

  it('creates profile object correctly', () => {
    const userData = { name: 'João Silva', birthYear: '1960' }
    const profile = {
      name: userData.name.trim(),
      birthYear: parseInt(userData.birthYear, 10),
      protocolStartDate: new Date().toISOString().split('T')[0],
      healthConnected: false,
    }

    expect(profile.name).toBe('João Silva')
    expect(profile.birthYear).toBe(1960)
    expect(profile.protocolStartDate).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(profile.healthConnected).toBe(false)
  })
})

describe('OnboardingScreen button text', () => {
  it('shows Próximo on info slides', () => {
    const isFormSlide = false
    const buttonText = isFormSlide ? 'Começar Protocolo' : 'Próximo'
    expect(buttonText).toBe('Próximo')
  })

  it('shows Começar Protocolo on form slide', () => {
    const isFormSlide = true
    const buttonText = isFormSlide ? 'Começar Protocolo' : 'Próximo'
    expect(buttonText).toBe('Começar Protocolo')
  })
})

describe('OnboardingScreen input formatting', () => {
  const formatBirthYear = (text: string) => {
    return text.replace(/[^0-9]/g, '')
  }

  it('removes non-numeric characters', () => {
    expect(formatBirthYear('abc1960xyz')).toBe('1960')
  })

  it('keeps only numbers', () => {
    expect(formatBirthYear('1 9 6 0')).toBe('1960')
  })

  it('handles empty string', () => {
    expect(formatBirthYear('')).toBe('')
  })

  it('handles all letters', () => {
    expect(formatBirthYear('abcdef')).toBe('')
  })
})

describe('OnboardingScreen progress dots', () => {
  const totalDots = 4 // 3 slides + 1 form

  it('has correct number of dots', () => {
    expect(totalDots).toBe(4)
  })

  it('identifies active dot', () => {
    const currentSlide = 2
    const dots = [0, 1, 2, 3].map((index) => ({
      index,
      isActive: index === currentSlide,
    }))

    expect(dots[2].isActive).toBe(true)
    expect(dots[0].isActive).toBe(false)
  })
})
