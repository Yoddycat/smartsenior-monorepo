/**
 * SuccessAnimation Tests
 */

import React from 'react'
import { render } from '@testing-library/react-native'

// Mock Animated before importing component
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.Animated.timing = jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  RN.Animated.spring = jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  RN.Animated.sequence = jest.fn((animations) => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  RN.Animated.parallel = jest.fn((animations) => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  return RN
})

import { SuccessAnimation } from '../../components/animated/SuccessAnimation'

describe('SuccessAnimation', () => {
  const mockOnComplete = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  describe('module', () => {
    it('is defined', () => {
      expect(SuccessAnimation).toBeDefined()
    })

    it('is a function component', () => {
      expect(typeof SuccessAnimation).toBe('function')
    })
  })

  describe('visibility', () => {
    it('renders content when visible is true', () => {
      const { toJSON } = render(<SuccessAnimation visible={true} />)
      expect(toJSON()).toBeTruthy()
    })

    it('returns null when visible is false', () => {
      const { toJSON } = render(<SuccessAnimation visible={false} />)
      expect(toJSON()).toBeNull()
    })
  })

  describe('content display', () => {
    it('renders with default content', () => {
      const { toJSON } = render(<SuccessAnimation visible={true} />)
      const json = JSON.stringify(toJSON())
      expect(json).toContain('Parabéns')
    })

    it('renders with custom emoji', () => {
      const { toJSON } = render(
        <SuccessAnimation visible={true} emoji="✨" />
      )
      expect(toJSON()).toBeTruthy()
    })

    it('renders default message in output', () => {
      const { toJSON } = render(<SuccessAnimation visible={true} />)
      const json = JSON.stringify(toJSON())
      expect(json).toContain('Parabéns')
    })

    it('renders custom message in output', () => {
      const { toJSON } = render(
        <SuccessAnimation visible={true} message="Tarefa concluída!" />
      )
      const json = JSON.stringify(toJSON())
      expect(json).toContain('Tarefa')
      expect(json).toContain('conclu')
    })
  })

  describe('props', () => {
    it('accepts onComplete prop', () => {
      expect(() =>
        render(<SuccessAnimation visible={true} onComplete={mockOnComplete} />)
      ).not.toThrow()
    })

    it('accepts all props together', () => {
      expect(() =>
        render(
          <SuccessAnimation
            visible={true}
            emoji="🏆"
            message="Excelente trabalho!"
            onComplete={mockOnComplete}
          />
        )
      ).not.toThrow()
    })
  })

  describe('visibility transitions', () => {
    it('handles becoming visible', () => {
      const { rerender, toJSON } = render(<SuccessAnimation visible={false} />)
      expect(toJSON()).toBeNull()

      rerender(<SuccessAnimation visible={true} />)
      expect(toJSON()).toBeTruthy()
    })

    it('handles becoming invisible', () => {
      const { rerender, toJSON } = render(<SuccessAnimation visible={true} />)
      expect(toJSON()).toBeTruthy()

      rerender(<SuccessAnimation visible={false} />)
      expect(toJSON()).toBeNull()
    })
  })

  describe('custom emoji rendering', () => {
    it('renders custom emoji without crashing', () => {
      expect(() =>
        render(<SuccessAnimation visible={true} emoji="🏆" />)
      ).not.toThrow()
    })

    it('renders with different emoji values', () => {
      const { toJSON } = render(
        <SuccessAnimation visible={true} emoji="✨" />
      )
      expect(toJSON()).toBeTruthy()
    })

    it('renders with another emoji', () => {
      const { toJSON } = render(
        <SuccessAnimation visible={true} emoji="🎊" />
      )
      expect(toJSON()).toBeTruthy()
    })
  })
})
