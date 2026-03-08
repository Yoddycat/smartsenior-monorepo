/**
 * AnimatedCheckbox Tests
 * Basic module and smoke tests
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

import { AnimatedCheckbox } from '../../components/animated/AnimatedCheckbox'

describe('AnimatedCheckbox', () => {
  const mockOnPress = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('module', () => {
    it('is defined', () => {
      expect(AnimatedCheckbox).toBeDefined()
    })

    it('is a function component', () => {
      expect(typeof AnimatedCheckbox).toBe('function')
    })
  })

  describe('rendering', () => {
    it('renders without crashing', () => {
      expect(() =>
        render(<AnimatedCheckbox checked={false} onPress={mockOnPress} />)
      ).not.toThrow()
    })

    it('renders unchecked state', () => {
      const { toJSON } = render(
        <AnimatedCheckbox checked={false} onPress={mockOnPress} />
      )
      expect(toJSON()).toBeTruthy()
    })

    it('renders checked state', () => {
      const { toJSON } = render(
        <AnimatedCheckbox checked={true} onPress={mockOnPress} />
      )
      expect(toJSON()).toBeTruthy()
    })

    it('renders with custom size', () => {
      const { toJSON } = render(
        <AnimatedCheckbox checked={false} onPress={mockOnPress} size={32} />
      )
      expect(toJSON()).toBeTruthy()
    })
  })

  describe('props', () => {
    it('accepts custom checked color', () => {
      expect(() =>
        render(
          <AnimatedCheckbox
            checked={true}
            onPress={mockOnPress}
            checkedColor="#FF0000"
          />
        )
      ).not.toThrow()
    })

    it('accepts custom unchecked color', () => {
      expect(() =>
        render(
          <AnimatedCheckbox
            checked={false}
            onPress={mockOnPress}
            uncheckedColor="#CCCCCC"
          />
        )
      ).not.toThrow()
    })

    it('accepts style prop', () => {
      expect(() =>
        render(
          <AnimatedCheckbox
            checked={false}
            onPress={mockOnPress}
            style={{ margin: 10 }}
          />
        )
      ).not.toThrow()
    })

    it('accepts disabled prop', () => {
      expect(() =>
        render(
          <AnimatedCheckbox
            checked={false}
            onPress={mockOnPress}
            disabled={true}
          />
        )
      ).not.toThrow()
    })

    it('accepts all valid props', () => {
      expect(() =>
        render(
          <AnimatedCheckbox
            checked={true}
            onPress={mockOnPress}
            size={28}
            disabled={false}
            checkedColor="#00FF00"
            uncheckedColor="#EEEEEE"
            style={{ padding: 5 }}
            accessibilityLabel="Complete task"
          />
        )
      ).not.toThrow()
    })
  })

  describe('state transitions', () => {
    it('handles transition from unchecked to checked', () => {
      const { rerender, toJSON } = render(
        <AnimatedCheckbox checked={false} onPress={mockOnPress} />
      )
      expect(toJSON()).toBeTruthy()

      rerender(<AnimatedCheckbox checked={true} onPress={mockOnPress} />)
      expect(toJSON()).toBeTruthy()
    })

    it('handles transition from checked to unchecked', () => {
      const { rerender, toJSON } = render(
        <AnimatedCheckbox checked={true} onPress={mockOnPress} />
      )
      expect(toJSON()).toBeTruthy()

      rerender(<AnimatedCheckbox checked={false} onPress={mockOnPress} />)
      expect(toJSON()).toBeTruthy()
    })
  })
})
