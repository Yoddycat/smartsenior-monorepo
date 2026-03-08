/**
 * AnimatedCounter Tests
 */

import React from 'react'
import { render } from '@testing-library/react-native'
import { AnimatedCounter } from '../../components/animated/AnimatedCounter'

// Mock Animated
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.Animated.timing = jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  return RN
})

describe('AnimatedCounter', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders without crashing', () => {
      expect(() => render(<AnimatedCounter value={100} />)).not.toThrow()
    })

    it('renders with value', () => {
      const { toJSON } = render(<AnimatedCounter value={50} />)
      expect(toJSON()).toBeTruthy()
    })

    it('renders with zero value', () => {
      const { toJSON } = render(<AnimatedCounter value={0} />)
      expect(toJSON()).toBeTruthy()
    })

    it('renders with large value', () => {
      const { toJSON } = render(<AnimatedCounter value={99999} />)
      expect(toJSON()).toBeTruthy()
    })
  })

  describe('props', () => {
    it('accepts suffix prop', () => {
      expect(() =>
        render(<AnimatedCounter value={75} suffix="%" />)
      ).not.toThrow()
    })

    it('accepts prefix prop', () => {
      expect(() =>
        render(<AnimatedCounter value={100} prefix="R$" />)
      ).not.toThrow()
    })

    it('accepts duration prop', () => {
      expect(() =>
        render(<AnimatedCounter value={50} duration={500} />)
      ).not.toThrow()
    })

    it('accepts delay prop', () => {
      expect(() =>
        render(<AnimatedCounter value={50} delay={200} />)
      ).not.toThrow()
    })

    it('accepts formatValue prop', () => {
      const formatValue = (val: number) => val.toFixed(2)
      expect(() =>
        render(<AnimatedCounter value={50.5} formatValue={formatValue} />)
      ).not.toThrow()
    })

    it('accepts all props together', () => {
      expect(() =>
        render(
          <AnimatedCounter
            value={1234}
            duration={1000}
            delay={100}
            prefix="$"
            suffix=" USD"
            formatValue={(val) => val.toLocaleString()}
          />
        )
      ).not.toThrow()
    })
  })

  describe('value changes', () => {
    it('handles value updates', () => {
      const { rerender, toJSON } = render(<AnimatedCounter value={10} />)
      expect(toJSON()).toBeTruthy()

      rerender(<AnimatedCounter value={20} />)
      expect(toJSON()).toBeTruthy()
    })

    it('handles value decrease', () => {
      const { rerender, toJSON } = render(<AnimatedCounter value={100} />)
      expect(toJSON()).toBeTruthy()

      rerender(<AnimatedCounter value={50} />)
      expect(toJSON()).toBeTruthy()
    })
  })
})
