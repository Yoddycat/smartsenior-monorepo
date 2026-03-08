/**
 * ProfileScreen Tests
 */

import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import { ProfileScreen } from '../../screens/ProfileScreen'

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
)

// Mock hooks
jest.mock('../../hooks', () => ({
  useHealth: () => ({
    isAvailable: true,
    isLoading: false,
    permissions: {
      steps: true,
      heartRate: true,
      hrv: false,
      sleep: false,
    },
    hasAnyPermission: true,
    hasAllPermissions: false,
    requestPermissions: jest.fn(() =>
      Promise.resolve({
        steps: true,
        heartRate: true,
        hrv: false,
        sleep: false,
      })
    ),
  }),
}))

// Mock notifications
jest.mock('../../services/notifications', () => ({
  loadNotificationSettings: jest.fn(() =>
    Promise.resolve({
      enabled: true,
      morningEnabled: true,
      eveningEnabled: true,
      morningReminderTime: '08:00',
      eveningReminderTime: '21:00',
    })
  ),
  saveNotificationSettings: jest.fn(() => Promise.resolve()),
  sendTestNotification: jest.fn(() => Promise.resolve()),
  defaultNotificationSettings: {
    enabled: true,
    morningEnabled: true,
    eveningEnabled: true,
    morningReminderTime: '08:00',
    eveningReminderTime: '21:00',
  },
}))

// Mock TimeInputModal
jest.mock('../../components', () => ({
  TimeInputModal: () => null,
}))

describe('ProfileScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders without crashing', async () => {
      await waitFor(() => {
        expect(() => render(<ProfileScreen />)).not.toThrow()
      })
    })

    it('renders profile header', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Perfil')
      })
    })

    it('renders settings subtitle', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Gerencie suas configurações')
      })
    })
  })

  describe('sections', () => {
    it('renders health connection section', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Conexão de Saúde')
      })
    })

    it('renders notifications section', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Notificações')
      })
    })

    it('renders protocol section', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Protocolo')
      })
    })

    it('renders about section', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Sobre')
      })
    })
  })

  describe('health integration', () => {
    it('shows health service name based on platform', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        // Should show either Apple Health or Health Connect
        expect(
          json.includes('Apple Health') || json.includes('Health Connect')
        ).toBe(true)
      })
    })
  })

  describe('settings', () => {
    it('shows notification toggle', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Notificações')
      })
    })

    it('shows morning reminder option', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Lembrete Matinal')
      })
    })

    it('shows evening reminder option', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Lembrete Noturno')
      })
    })
  })

  describe('app info', () => {
    it('shows version', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Versão')
      })
    })

    it('shows developer info', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('SmartSenior')
      })
    })

    it('shows terms link', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Termos de Uso')
      })
    })

    it('shows privacy link', async () => {
      const { toJSON } = render(<ProfileScreen />)

      await waitFor(() => {
        const json = JSON.stringify(toJSON())
        expect(json).toContain('Política de Privacidade')
      })
    })
  })
})
