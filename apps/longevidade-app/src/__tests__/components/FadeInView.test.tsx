/**
 * FadeInView Tests
 */

import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { FadeInView } from '../../components/animated/FadeInView'

// Mock Animated
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.Animated.timing = jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  RN.Animated.parallel = jest.fn((animations) => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  return RN
})

describe('FadeInView', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders without crashing', () => {
      expect(() =>
        render(
          <FadeInView>
            <Text>Test content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('renders children correctly', () => {
      const { toJSON } = render(
        <FadeInView>
          <Text>Hello World</Text>
        </FadeInView>
      )
      const json = JSON.stringify(toJSON())
      expect(json).toContain('Hello World')
    })

    it('renders multiple children', () => {
      const { toJSON } = render(
        <FadeInView>
          <Text>First</Text>
          <Text>Second</Text>
        </FadeInView>
      )
      const json = JSON.stringify(toJSON())
      expect(json).toContain('First')
      expect(json).toContain('Second')
    })
  })

  describe('direction prop', () => {
    it('accepts direction="up"', () => {
      expect(() =>
        render(
          <FadeInView direction="up">
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('accepts direction="down"', () => {
      expect(() =>
        render(
          <FadeInView direction="down">
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('accepts direction="left"', () => {
      expect(() =>
        render(
          <FadeInView direction="left">
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('accepts direction="right"', () => {
      expect(() =>
        render(
          <FadeInView direction="right">
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('accepts direction="none"', () => {
      expect(() =>
        render(
          <FadeInView direction="none">
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })
  })

  describe('animation props', () => {
    it('accepts delay prop', () => {
      expect(() =>
        render(
          <FadeInView delay={200}>
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('accepts duration prop', () => {
      expect(() =>
        render(
          <FadeInView duration={500}>
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('accepts distance prop', () => {
      expect(() =>
        render(
          <FadeInView distance={30}>
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })

    it('accepts all props together', () => {
      expect(() =>
        render(
          <FadeInView
            delay={100}
            duration={400}
            direction="up"
            distance={20}
          >
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })
  })

  describe('style prop', () => {
    it('accepts custom style', () => {
      expect(() =>
        render(
          <FadeInView style={{ backgroundColor: 'red' }}>
            <Text>Content</Text>
          </FadeInView>
        )
      ).not.toThrow()
    })
  })
})
