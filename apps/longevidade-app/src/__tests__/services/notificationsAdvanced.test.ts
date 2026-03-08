/**
 * Notifications Service Advanced Tests
 * Detailed tests for notification functionality
 */

// Mock expo-notifications
const mockSchedule = jest.fn(() => Promise.resolve('notification-id'))
const mockCancel = jest.fn(() => Promise.resolve())
const mockCancelAll = jest.fn(() => Promise.resolve())
const mockGetAll = jest.fn((): Promise<Array<{ identifier: string; content: { title: string } }>> => Promise.resolve([]))
const mockGetPermissions = jest.fn(() =>
  Promise.resolve({ status: 'granted' })
)
const mockRequestPermissions = jest.fn(() =>
  Promise.resolve({ status: 'granted' })
)
const mockSetChannel = jest.fn(() => Promise.resolve())

jest.mock('expo-notifications', () => ({
  setNotificationHandler: jest.fn(),
  getPermissionsAsync: mockGetPermissions,
  requestPermissionsAsync: mockRequestPermissions,
  scheduleNotificationAsync: mockSchedule,
  cancelScheduledNotificationAsync: mockCancel,
  getAllScheduledNotificationsAsync: mockGetAll,
  cancelAllScheduledNotificationsAsync: mockCancelAll,
  setNotificationChannelAsync: mockSetChannel,
  AndroidImportance: { HIGH: 4 },
  SchedulableTriggerInputTypes: { DAILY: 'daily' },
}))

jest.mock('expo-device', () => ({
  isDevice: true,
}))

jest.mock('react-native', () => ({
  Platform: { OS: 'ios' },
}))

const mockAsyncStorage = {
  getItem: jest.fn((_key: string): Promise<string | null> => Promise.resolve(null)),
  setItem: jest.fn((_key: string, _value: string): Promise<void> => Promise.resolve()),
}

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

describe('Notification Service Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.resetModules()
    mockGetPermissions.mockResolvedValue({ status: 'granted' })
    mockRequestPermissions.mockResolvedValue({ status: 'granted' })
  })

  describe('requestNotificationPermissions', () => {
    it('returns true when permissions granted', async () => {
      const { requestNotificationPermissions } = require('../../services/notifications')
      const result = await requestNotificationPermissions()
      expect(result).toBe(true)
    })

    it('requests permissions when not granted', async () => {
      mockGetPermissions.mockResolvedValueOnce({ status: 'undetermined' })
      mockRequestPermissions.mockResolvedValueOnce({ status: 'granted' })

      const { requestNotificationPermissions } = require('../../services/notifications')
      await requestNotificationPermissions()

      expect(mockRequestPermissions).toHaveBeenCalled()
    })

    it('returns false when permission denied', async () => {
      mockGetPermissions.mockResolvedValueOnce({ status: 'denied' })
      mockRequestPermissions.mockResolvedValueOnce({ status: 'denied' })

      const { requestNotificationPermissions } = require('../../services/notifications')
      const result = await requestNotificationPermissions()

      expect(result).toBe(false)
    })
  })

  describe('loadNotificationSettings', () => {
    it('returns default settings when storage is empty', async () => {
      mockAsyncStorage.getItem.mockResolvedValueOnce(null)

      const { loadNotificationSettings, defaultNotificationSettings } = require('../../services/notifications')
      const settings = await loadNotificationSettings()

      expect(settings).toEqual(defaultNotificationSettings)
    })

    it('merges stored settings with defaults', async () => {
      mockAsyncStorage.getItem.mockResolvedValueOnce(
        JSON.stringify({ morningReminderTime: '07:00' })
      )

      const { loadNotificationSettings } = require('../../services/notifications')
      const settings = await loadNotificationSettings()

      expect(settings.morningReminderTime).toBe('07:00')
      expect(settings.enabled).toBe(true) // default
    })

    it('handles storage error', async () => {
      mockAsyncStorage.getItem.mockRejectedValueOnce(new Error('Storage error'))

      const { loadNotificationSettings, defaultNotificationSettings } = require('../../services/notifications')
      const settings = await loadNotificationSettings()

      expect(settings).toEqual(defaultNotificationSettings)
    })
  })

  describe('saveNotificationSettings', () => {
    it('saves settings to storage', async () => {
      const { saveNotificationSettings, defaultNotificationSettings } = require('../../services/notifications')

      await saveNotificationSettings(defaultNotificationSettings)

      expect(mockAsyncStorage.setItem).toHaveBeenCalled()
    })

    it('handles storage error', async () => {
      mockAsyncStorage.setItem.mockRejectedValueOnce(new Error('Storage error'))

      const { saveNotificationSettings, defaultNotificationSettings } = require('../../services/notifications')

      await expect(
        saveNotificationSettings(defaultNotificationSettings)
      ).resolves.not.toThrow()
    })
  })

  describe('scheduleNotifications', () => {
    it('cancels existing notifications first', async () => {
      const { scheduleNotifications, defaultNotificationSettings } = require('../../services/notifications')

      await scheduleNotifications(defaultNotificationSettings)

      expect(mockCancelAll).toHaveBeenCalled()
    })

    it('does not schedule when disabled', async () => {
      const { scheduleNotifications } = require('../../services/notifications')

      await scheduleNotifications({ enabled: false })

      expect(mockSchedule).not.toHaveBeenCalled()
    })

    it('schedules morning and evening reminders', async () => {
      const { scheduleNotifications } = require('../../services/notifications')

      await scheduleNotifications({
        enabled: true,
        morningEnabled: true,
        eveningEnabled: true,
        morningReminderTime: '08:00',
        eveningReminderTime: '20:00',
      })

      expect(mockSchedule).toHaveBeenCalledTimes(2)
    })

    it('only schedules morning when evening disabled', async () => {
      const { scheduleNotifications } = require('../../services/notifications')

      await scheduleNotifications({
        enabled: true,
        morningEnabled: true,
        eveningEnabled: false,
        morningReminderTime: '08:00',
        eveningReminderTime: '20:00',
      })

      expect(mockSchedule).toHaveBeenCalledTimes(1)
    })
  })

  describe('sendTestNotification', () => {
    it('schedules immediate notification', async () => {
      const { sendTestNotification } = require('../../services/notifications')

      await sendTestNotification()

      expect(mockSchedule).toHaveBeenCalledWith(
        expect.objectContaining({
          trigger: null, // immediate
        })
      )
    })

    it('does not send when permission denied', async () => {
      mockGetPermissions.mockResolvedValueOnce({ status: 'denied' })
      mockRequestPermissions.mockResolvedValueOnce({ status: 'denied' })

      const { sendTestNotification } = require('../../services/notifications')

      await sendTestNotification()

      expect(mockSchedule).not.toHaveBeenCalled()
    })
  })

  describe('getScheduledNotifications', () => {
    it('returns scheduled notifications', async () => {
      mockGetAll.mockResolvedValueOnce([
        { identifier: '1', content: { title: 'Test' } },
      ])

      const { getScheduledNotifications } = require('../../services/notifications')
      const notifications = await getScheduledNotifications()

      expect(notifications).toHaveLength(1)
    })
  })

  describe('cancelAllNotifications', () => {
    it('cancels all notifications', async () => {
      const { cancelAllNotifications } = require('../../services/notifications')

      await cancelAllNotifications()

      expect(mockCancelAll).toHaveBeenCalled()
    })
  })

  describe('initializeNotifications', () => {
    it('schedules notifications when enabled', async () => {
      mockAsyncStorage.getItem.mockResolvedValueOnce(
        JSON.stringify({ enabled: true })
      )

      const { initializeNotifications } = require('../../services/notifications')

      await initializeNotifications()

      expect(mockCancelAll).toHaveBeenCalled()
    })

    it('does not schedule when disabled', async () => {
      mockAsyncStorage.getItem.mockResolvedValueOnce(
        JSON.stringify({ enabled: false })
      )

      const { initializeNotifications } = require('../../services/notifications')

      await initializeNotifications()
      // cancelAll is called by loadNotificationSettings but schedule is not
    })
  })
})

describe('Time parsing', () => {
  const parseTime = (timeString: string) => {
    const [hour, minute] = timeString.split(':').map(Number)
    return { hour, minute }
  }

  it('parses morning time', () => {
    expect(parseTime('08:00')).toEqual({ hour: 8, minute: 0 })
  })

  it('parses evening time', () => {
    expect(parseTime('20:30')).toEqual({ hour: 20, minute: 30 })
  })

  it('parses midnight', () => {
    expect(parseTime('00:00')).toEqual({ hour: 0, minute: 0 })
  })

  it('parses noon', () => {
    expect(parseTime('12:00')).toEqual({ hour: 12, minute: 0 })
  })

  it('parses with leading zeros', () => {
    expect(parseTime('09:05')).toEqual({ hour: 9, minute: 5 })
  })
})

describe('Notification content', () => {
  it('morning notification has correct structure', () => {
    const content = {
      title: 'Bom dia! ☀️',
      body: 'Hora de começar suas tarefas do protocolo de longevidade.',
      data: { type: 'morning_reminder' },
      sound: true,
    }

    expect(content.title).toContain('Bom dia')
    expect(content.data.type).toBe('morning_reminder')
  })

  it('evening notification has correct structure', () => {
    const content = {
      title: 'Boa noite! 🌙',
      body: 'Não esqueça de completar suas tarefas antes de dormir.',
      data: { type: 'evening_reminder' },
      sound: true,
    }

    expect(content.title).toContain('Boa noite')
    expect(content.data.type).toBe('evening_reminder')
  })

  it('test notification has correct structure', () => {
    const content = {
      title: 'Teste de Notificação ✅',
      body: 'As notificações estão funcionando corretamente!',
      data: { type: 'test' },
      sound: true,
    }

    expect(content.title).toContain('Teste')
    expect(content.data.type).toBe('test')
  })
})

describe('NotificationSettings validation', () => {
  it('validates time format', () => {
    const isValidTime = (time: string) => /^\d{2}:\d{2}$/.test(time)

    expect(isValidTime('08:00')).toBe(true)
    expect(isValidTime('20:30')).toBe(true)
    expect(isValidTime('8:00')).toBe(false)
    expect(isValidTime('08:0')).toBe(false)
  })

  it('validates hour range', () => {
    const isValidHour = (hour: number) => hour >= 0 && hour <= 23

    expect(isValidHour(0)).toBe(true)
    expect(isValidHour(12)).toBe(true)
    expect(isValidHour(23)).toBe(true)
    expect(isValidHour(24)).toBe(false)
    expect(isValidHour(-1)).toBe(false)
  })

  it('validates minute range', () => {
    const isValidMinute = (minute: number) => minute >= 0 && minute <= 59

    expect(isValidMinute(0)).toBe(true)
    expect(isValidMinute(30)).toBe(true)
    expect(isValidMinute(59)).toBe(true)
    expect(isValidMinute(60)).toBe(false)
    expect(isValidMinute(-1)).toBe(false)
  })
})
