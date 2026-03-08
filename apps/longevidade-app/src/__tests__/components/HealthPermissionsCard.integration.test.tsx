/**
 * HealthPermissionsCard Integration Tests
 * Tests component rendering with mocked useHealth hook
 */

import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { HealthPermissionsCard } from '../../components/HealthPermissionsCard'
import { useHealth } from '../../hooks/useHealth'

// Mock the useHealth hook
jest.mock('../../hooks/useHealth')
const mockUseHealth = useHealth as jest.MockedFunction<typeof useHealth>

describe('HealthPermissionsCard Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Unavailable State', () => {
    it('renders unavailable message when isAvailable is false', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: false,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Dados de Saúde')
      expect(tree).toContain('Os serviços de saúde não estão disponíveis')
    })
  })

  describe('No Permissions State', () => {
    it('renders connect button when no permissions granted', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Conectar Dados de Saúde')
      expect(tree).toContain('Conecte seus dados de saúde')
    })

    it('renders all permission items as not granted', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Passos')
      expect(tree).toContain('Frequência Cardíaca')
      expect(tree).toContain('Variabilidade (HRV)')
      expect(tree).toContain('Horas de Sono')
      // Check for unchecked indicator
      expect(tree).toContain('○')
    })
  })

  describe('All Permissions Granted State', () => {
    it('renders connected badge when all permissions granted', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: true, heartRate: true, hrv: true, sleep: true },
        hasAllPermissions: true,
        hasAnyPermission: true,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Conectado')
      expect(tree).toContain('Todas as permissões concedidas')
      expect(tree).not.toContain('Conectar Dados de Saúde')
    })

    it('renders all permission items as granted', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: true, heartRate: true, hrv: true, sleep: true },
        hasAllPermissions: true,
        hasAnyPermission: true,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      // Check for checked indicator
      expect(tree).toContain('✓')
    })
  })

  describe('Partial Permissions State', () => {
    it('renders mixed permission states correctly', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: true, heartRate: true, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: true,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Conectar Dados de Saúde')
      expect(tree).toContain('Conecte seus dados de saúde')
      // Both indicators should be present
      expect(tree).toContain('✓')
      expect(tree).toContain('○')
    })
  })

  describe('Loading State', () => {
    it('shows loading indicator when isLoading is true', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: true,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { UNSAFE_getByType } = render(<HealthPermissionsCard />)
      const ActivityIndicator = require('react-native').ActivityIndicator
      expect(UNSAFE_getByType(ActivityIndicator)).toBeTruthy()
    })

    it('disables button when loading', () => {
      const mockRequestPermissions = jest.fn()
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: true,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: mockRequestPermissions,
        refreshSummary: jest.fn(),
      })

      const { UNSAFE_getByType } = render(<HealthPermissionsCard />)
      const TouchableOpacity = require('react-native').TouchableOpacity
      const button = UNSAFE_getByType(TouchableOpacity)

      expect(button.props.disabled).toBe(true)
    })
  })

  describe('Error State', () => {
    it('renders error message when error exists', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: 'Erro ao solicitar permissões',
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Erro ao solicitar permissões')
    })
  })

  describe('Button Interaction', () => {
    it('calls requestPermissions when button is pressed', () => {
      const mockRequestPermissions = jest.fn()
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: mockRequestPermissions,
        refreshSummary: jest.fn(),
      })

      const { UNSAFE_getByType } = render(<HealthPermissionsCard />)
      const TouchableOpacity = require('react-native').TouchableOpacity
      const button = UNSAFE_getByType(TouchableOpacity)

      fireEvent.press(button)

      expect(mockRequestPermissions).toHaveBeenCalledTimes(1)
    })
  })

  describe('Permission Labels', () => {
    it('renders all permission labels correctly', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Passos')
      expect(tree).toContain('Frequência Cardíaca')
      expect(tree).toContain('Variabilidade (HRV)')
      expect(tree).toContain('Horas de Sono')
    })
  })

  describe('Header Display', () => {
    it('renders title in available state', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: true,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Dados de Saúde')
    })

    it('renders title in unavailable state', () => {
      mockUseHealth.mockReturnValue({
        isAvailable: false,
        isLoading: false,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
        hasAllPermissions: false,
        hasAnyPermission: false,
        error: null,
        summary: null,
        isLoadingSummary: false,
        requestPermissions: jest.fn(),
        refreshSummary: jest.fn(),
      })

      const { toJSON } = render(<HealthPermissionsCard />)
      const tree = JSON.stringify(toJSON())

      expect(tree).toContain('Dados de Saúde')
    })
  })

  describe('Component Renders Without Crashing', () => {
    it('renders in all states without throwing', () => {
      const states = [
        { isAvailable: false },
        { isAvailable: true, hasAllPermissions: false },
        { isAvailable: true, hasAllPermissions: true },
        { isAvailable: true, isLoading: true },
        { isAvailable: true, error: 'Error' },
      ]

      states.forEach((stateOverride) => {
        mockUseHealth.mockReturnValue({
          isAvailable: true,
          isLoading: false,
          permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
          hasAllPermissions: false,
          hasAnyPermission: false,
          error: null,
          summary: null,
          isLoadingSummary: false,
          requestPermissions: jest.fn(),
          refreshSummary: jest.fn(),
          ...stateOverride,
        })

        expect(() => render(<HealthPermissionsCard />)).not.toThrow()
      })
    })
  })
})
