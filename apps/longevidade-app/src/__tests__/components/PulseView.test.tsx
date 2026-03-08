/**
 * PulseView Tests
 */

import React from 'react'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { PulseView } from '../../components/animated/PulseView'

// Mock Animated
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.Animated.timing = jest.fn(() => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  RN.Animated.loop = jest.fn((animation) => ({
    start: jest.fn(),
    stop: jest.fn(),
  }))
  RN.Animated.sequence = jest.fn((animations) => ({
    start: jest.fn((cb) => cb && cb({ finished: true })),
  }))
  return RN
})

describe('PulseView', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders without crashing', () => {
      expect(() =>
        render(
          <PulseView>
            <Text>Pulsing content</Text>
          </PulseView>
        )
      ).not.toThrow()
    })

    it('renders children correctly', () => {
      const { toJSON } = render(
        <PulseView>
          <Text>Hello</Text>
        </PulseView>
      )
      const json = JSON.stringify(toJSON())
      expect(json).toContain('Hello')
    })

    it('renders when active', () => {
      const { toJSON } = render(
        <PulseView active={true}>
          <Text>Active</Text>
        </PulseView>
      )
      expect(toJSON()).toBeTruthy()
    })

    it('renders when inactive', () => {
      const { toJSON } = render(
        <PulseView active={false}>
          <Text>Inactive</Text>
        </PulseView>
      )
      expect(toJSON()).toBeTruthy()
    })
  })

  describe('props', () => {
    it('accepts minScale prop', () => {
      expect(() =>
        render(
          <PulseView minScale={0.9}>
            <Text>Content</Text>
          </PulseView>
        )
      ).not.toThrow()
    })

    it('accepts maxScale prop', () => {
      expect(() =>
        render(
          <PulseView maxScale={1.2}>
            <Text>Content</Text>
          </PulseView>
        )
      ).not.toThrow()
    })

    it('accepts duration prop', () => {
      expect(() =>
        render(
          <PulseView duration={800}>
            <Text>Content</Text>
          </PulseView>
        )
      ).not.toThrow()
    })

    it('accepts all props together', () => {
      expect(() =>
        render(
          <PulseView
            active={true}
            minScale={0.95}
            maxScale={1.1}
            duration={600}
          >
            <Text>Content</Text>
          </PulseView>
        )
      ).not.toThrow()
    })
  })

  describe('active state changes', () => {
    it('handles activation', () => {
      const { rerender, toJSON } = render(
        <PulseView active={false}>
          <Text>Content</Text>
        </PulseView>
      )
      expect(toJSON()).toBeTruthy()

      rerender(
        <PulseView active={true}>
          <Text>Content</Text>
        </PulseView>
      )
      expect(toJSON()).toBeTruthy()
    })

    it('handles deactivation', () => {
      const { rerender, toJSON } = render(
        <PulseView active={true}>
          <Text>Content</Text>
        </PulseView>
      )
      expect(toJSON()).toBeTruthy()

      rerender(
        <PulseView active={false}>
          <Text>Content</Text>
        </PulseView>
      )
      expect(toJSON()).toBeTruthy()
    })
  })

  describe('style prop', () => {
    it('accepts custom style', () => {
      expect(() =>
        render(
          <PulseView style={{ padding: 10 }}>
            <Text>Content</Text>
          </PulseView>
        )
      ).not.toThrow()
    })
  })
})
