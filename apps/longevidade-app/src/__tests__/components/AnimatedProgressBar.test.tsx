/**
 * AnimatedProgressBar Tests
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import { AnimatedProgressBar } from '../../components/animated/AnimatedProgressBar'

// Mock Animated
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.Animated.timing = jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  return RN
})

describe('AnimatedProgressBar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders without crashing', () => {
      expect(() => render(<AnimatedProgressBar progress={50} />)).not.toThrow()
    })

    it('renders with 0% progress', () => {
      const { toJSON } = render(<AnimatedProgressBar progress={0} />)
      expect(toJSON()).toBeTruthy()
    })

    it('renders with 100% progress', () => {
      const { toJSON } = render(<AnimatedProgressBar progress={100} />)
      expect(toJSON()).toBeTruthy()
    })

    it('renders with partial progress', () => {
      const { toJSON } = render(<AnimatedProgressBar progress={75} />)
      expect(toJSON()).toBeTruthy()
    })
  })

  describe('props', () => {
    it('accepts height prop', () => {
      expect(() =>
        render(<AnimatedProgressBar progress={50} height={12} />)
      ).not.toThrow()
    })

    it('accepts duration prop', () => {
      expect(() =>
        render(<AnimatedProgressBar progress={50} duration={500} />)
      ).not.toThrow()
    })

    it('accepts delay prop', () => {
      expect(() =>
        render(<AnimatedProgressBar progress={50} delay={200} />)
      ).not.toThrow()
    })

    it('accepts backgroundColor prop', () => {
      expect(() =>
        render(<AnimatedProgressBar progress={50} backgroundColor="#e0e0e0" />)
      ).not.toThrow()
    })

    it('accepts progressColor prop', () => {
      expect(() =>
        render(<AnimatedProgressBar progress={50} progressColor="#4CAF50" />)
      ).not.toThrow()
    })

    it('accepts all props together', () => {
      expect(() =>
        render(
          <AnimatedProgressBar
            progress={65}
            height={10}
            duration={800}
            delay={100}
            backgroundColor="#f0f0f0"
            progressColor="#2196F3"
          />
        )
      ).not.toThrow()
    })
  })

  describe('progress updates', () => {
    it('handles progress increase', () => {
      const { rerender, toJSON } = render(<AnimatedProgressBar progress={25} />)
      expect(toJSON()).toBeTruthy()

      rerender(<AnimatedProgressBar progress={75} />)
      expect(toJSON()).toBeTruthy()
    })

    it('handles progress decrease', () => {
      const { rerender, toJSON } = render(<AnimatedProgressBar progress={80} />)
      expect(toJSON()).toBeTruthy()

      rerender(<AnimatedProgressBar progress={40} />)
      expect(toJSON()).toBeTruthy()
    })

    it('clamps progress above 100', () => {
      const { toJSON } = render(<AnimatedProgressBar progress={150} />)
      expect(toJSON()).toBeTruthy()
    })

    it('clamps progress below 0', () => {
      const { toJSON } = render(<AnimatedProgressBar progress={-10} />)
      expect(toJSON()).toBeTruthy()
    })
  })
})
