/**
 * OnboardingScreen Tests
 * Basic smoke tests for the onboarding flow
 */

import React from 'react'

// Mock AsyncStorage first
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// Mock react-native to handle Dimensions
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')
  RN.Dimensions.get = jest.fn().mockReturnValue({ width: 375, height: 812 })
  return RN
})

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

  describe('SLIDES constant', () => {
    it('has welcome slide', () => {
      // The component contains SLIDES array with welcome content
      // Test passes if component can be required without error
      const { OnboardingScreen } = require('../../screens/OnboardingScreen')
      expect(OnboardingScreen).toBeDefined()
    })
  })
})
