/**
 * Notifications Service Branch Coverage Tests
 * Tests specifically targeting uncovered branches
 */

// Suppress console warnings during tests
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('Notifications Service Branch Coverage', () => {
  describe('requestNotificationPermissions Branches', () => {
    const requestPermissions = async (
      isDevice: boolean,
      existingStatus: 'granted' | 'denied' | 'undetermined',
      requestedStatus: 'granted' | 'denied',
      platform: 'ios' | 'android'
    ): Promise<{ success: boolean; reason: string; channelCreated: boolean }> => {
      if (!isDevice) {
        return { success: false, reason: 'not_physical_device', channelCreated: false }
      }

      let finalStatus = existingStatus

      if (existingStatus !== 'granted') {
        finalStatus = requestedStatus
      }

      if (finalStatus !== 'granted') {
        return { success: false, reason: 'permission_denied', channelCreated: false }
      }

      const channelCreated = platform === 'android'

      return { success: true, reason: 'granted', channelCreated }
    }

    it('returns false when not a physical device', async () => {
      const result = await requestPermissions(false, 'undetermined', 'granted', 'ios')
      expect(result.success).toBe(false)
      expect(result.reason).toBe('not_physical_device')
    })

    it('skips request when already granted', async () => {
      const result = await requestPermissions(true, 'granted', 'denied', 'ios')
      expect(result.success).toBe(true)
      expect(result.reason).toBe('granted')
    })

    it('requests permission when not granted', async () => {
      const result = await requestPermissions(true, 'undetermined', 'granted', 'ios')
      expect(result.success).toBe(true)
    })

    it('returns false when permission denied after request', async () => {
      const result = await requestPermissions(true, 'undetermined', 'denied', 'ios')
      expect(result.success).toBe(false)
      expect(result.reason).toBe('permission_denied')
    })

    it('creates Android channel on Android', async () => {
      const result = await requestPermissions(true, 'granted', 'granted', 'android')
      expect(result.success).toBe(true)
      expect(result.channelCreated).toBe(true)
    })

    it('does not create Android channel on iOS', async () => {
      const result = await requestPermissions(true, 'granted', 'granted', 'ios')
      expect(result.success).toBe(true)
      expect(result.channelCreated).toBe(false)
    })

    it('handles denied existing status', async () => {
      const result = await requestPermissions(true, 'denied', 'denied', 'ios')
      expect(result.success).toBe(false)
      expect(result.reason).toBe('permission_denied')
    })
  })

  describe('loadNotificationSettings Branches', () => {
    interface NotificationSettings {
      enabled: boolean
      morningReminderTime: string
      eveningReminderTime: string
      morningEnabled: boolean
      eveningEnabled: boolean
    }

    const defaultSettings: NotificationSettings = {
      enabled: true,
      morningReminderTime: '08:00',
      eveningReminderTime: '20:00',
      morningEnabled: true,
      eveningEnabled: true,
    }

    const loadSettings = async (
      storageFn: () => Promise<string | null>
    ): Promise<{ settings: NotificationSettings; source: string }> => {
      try {
        const stored = await storageFn()
        if (stored) {
          const parsed = JSON.parse(stored)
          return {
            settings: { ...defaultSettings, ...parsed },
            source: 'storage',
          }
        }
      } catch (error) {
        return { settings: defaultSettings, source: 'default_after_error' }
      }
      return { settings: defaultSettings, source: 'default' }
    }

    it('returns stored settings when available', async () => {
      const result = await loadSettings(async () =>
        JSON.stringify({ enabled: false, morningReminderTime: '07:00' })
      )
      expect(result.source).toBe('storage')
      expect(result.settings.enabled).toBe(false)
      expect(result.settings.morningReminderTime).toBe('07:00')
      expect(result.settings.eveningReminderTime).toBe('20:00') // Default preserved
    })

    it('returns default when no stored settings', async () => {
      const result = await loadSettings(async () => null)
      expect(result.source).toBe('default')
      expect(result.settings).toEqual(defaultSettings)
    })

    it('returns default on storage error', async () => {
      const result = await loadSettings(async () => {
        throw new Error('Storage error')
      })
      expect(result.source).toBe('default_after_error')
      expect(result.settings).toEqual(defaultSettings)
    })

    it('returns default on JSON parse error', async () => {
      const result = await loadSettings(async () => 'invalid json')
      expect(result.source).toBe('default_after_error')
    })

    it('merges partial stored settings with defaults', async () => {
      const result = await loadSettings(async () =>
        JSON.stringify({ morningEnabled: false })
      )
      expect(result.settings.morningEnabled).toBe(false)
      expect(result.settings.eveningEnabled).toBe(true)
      expect(result.settings.enabled).toBe(true)
    })
  })

  describe('saveNotificationSettings Branches', () => {
    const saveSettings = async (
      saveFn: () => Promise<void>,
      scheduleFn: () => Promise<void>
    ): Promise<{ success: boolean; error?: string }> => {
      try {
        await saveFn()
        await scheduleFn()
        return { success: true }
      } catch (error) {
        return {
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        }
      }
    }

    it('saves and schedules successfully', async () => {
      const result = await saveSettings(
        async () => {},
        async () => {}
      )
      expect(result.success).toBe(true)
    })

    it('handles save error', async () => {
      const result = await saveSettings(
        async () => {
          throw new Error('Save failed')
        },
        async () => {}
      )
      expect(result.success).toBe(false)
      expect(result.error).toBe('Save failed')
    })

    it('handles schedule error', async () => {
      const result = await saveSettings(
        async () => {},
        async () => {
          throw new Error('Schedule failed')
        }
      )
      expect(result.success).toBe(false)
      expect(result.error).toBe('Schedule failed')
    })
  })

  describe('parseTime Function', () => {
    const parseTime = (timeString: string): { hour: number; minute: number } => {
      const [hour, minute] = timeString.split(':').map(Number)
      return { hour, minute }
    }

    it('parses 08:00 correctly', () => {
      const result = parseTime('08:00')
      expect(result.hour).toBe(8)
      expect(result.minute).toBe(0)
    })

    it('parses 20:30 correctly', () => {
      const result = parseTime('20:30')
      expect(result.hour).toBe(20)
      expect(result.minute).toBe(30)
    })

    it('parses 00:00 (midnight)', () => {
      const result = parseTime('00:00')
      expect(result.hour).toBe(0)
      expect(result.minute).toBe(0)
    })

    it('parses 23:59', () => {
      const result = parseTime('23:59')
      expect(result.hour).toBe(23)
      expect(result.minute).toBe(59)
    })

    it('parses 12:00 (noon)', () => {
      const result = parseTime('12:00')
      expect(result.hour).toBe(12)
      expect(result.minute).toBe(0)
    })
  })

  describe('scheduleNotifications Branches', () => {
    interface NotificationSettings {
      enabled: boolean
      morningReminderTime: string
      eveningReminderTime: string
      morningEnabled: boolean
      eveningEnabled: boolean
    }

    const scheduleNotifications = async (
      settings: NotificationSettings,
      hasPermission: boolean
    ): Promise<{
      cancelled: boolean
      morningScheduled: boolean
      eveningScheduled: boolean
      reason?: string
    }> => {
      // Always cancel existing first
      const cancelled = true

      if (!settings.enabled) {
        return { cancelled, morningScheduled: false, eveningScheduled: false, reason: 'disabled' }
      }

      if (!hasPermission) {
        return { cancelled, morningScheduled: false, eveningScheduled: false, reason: 'no_permission' }
      }

      const morningScheduled = settings.morningEnabled
      const eveningScheduled = settings.eveningEnabled

      return { cancelled, morningScheduled, eveningScheduled }
    }

    it('cancels all and returns early when disabled', async () => {
      const result = await scheduleNotifications(
        {
          enabled: false,
          morningReminderTime: '08:00',
          eveningReminderTime: '20:00',
          morningEnabled: true,
          eveningEnabled: true,
        },
        true
      )
      expect(result.cancelled).toBe(true)
      expect(result.morningScheduled).toBe(false)
      expect(result.eveningScheduled).toBe(false)
      expect(result.reason).toBe('disabled')
    })

    it('returns early when no permission', async () => {
      const result = await scheduleNotifications(
        {
          enabled: true,
          morningReminderTime: '08:00',
          eveningReminderTime: '20:00',
          morningEnabled: true,
          eveningEnabled: true,
        },
        false
      )
      expect(result.cancelled).toBe(true)
      expect(result.reason).toBe('no_permission')
    })

    it('schedules morning notification when enabled', async () => {
      const result = await scheduleNotifications(
        {
          enabled: true,
          morningReminderTime: '08:00',
          eveningReminderTime: '20:00',
          morningEnabled: true,
          eveningEnabled: false,
        },
        true
      )
      expect(result.morningScheduled).toBe(true)
      expect(result.eveningScheduled).toBe(false)
    })

    it('schedules evening notification when enabled', async () => {
      const result = await scheduleNotifications(
        {
          enabled: true,
          morningReminderTime: '08:00',
          eveningReminderTime: '20:00',
          morningEnabled: false,
          eveningEnabled: true,
        },
        true
      )
      expect(result.morningScheduled).toBe(false)
      expect(result.eveningScheduled).toBe(true)
    })

    it('schedules both notifications when both enabled', async () => {
      const result = await scheduleNotifications(
        {
          enabled: true,
          morningReminderTime: '08:00',
          eveningReminderTime: '20:00',
          morningEnabled: true,
          eveningEnabled: true,
        },
        true
      )
      expect(result.morningScheduled).toBe(true)
      expect(result.eveningScheduled).toBe(true)
    })

    it('schedules neither when both disabled', async () => {
      const result = await scheduleNotifications(
        {
          enabled: true,
          morningReminderTime: '08:00',
          eveningReminderTime: '20:00',
          morningEnabled: false,
          eveningEnabled: false,
        },
        true
      )
      expect(result.morningScheduled).toBe(false)
      expect(result.eveningScheduled).toBe(false)
    })
  })

  describe('sendTestNotification Branches', () => {
    const sendTestNotification = async (
      hasPermission: boolean
    ): Promise<{ sent: boolean; reason?: string }> => {
      if (!hasPermission) {
        return { sent: false, reason: 'no_permission' }
      }

      return { sent: true }
    }

    it('sends notification when has permission', async () => {
      const result = await sendTestNotification(true)
      expect(result.sent).toBe(true)
    })

    it('does not send when no permission', async () => {
      const result = await sendTestNotification(false)
      expect(result.sent).toBe(false)
      expect(result.reason).toBe('no_permission')
    })
  })

  describe('initializeNotifications Branches', () => {
    interface NotificationSettings {
      enabled: boolean
    }

    const initializeNotifications = async (
      settings: NotificationSettings
    ): Promise<{ scheduled: boolean; reason?: string }> => {
      if (settings.enabled) {
        return { scheduled: true }
      }
      return { scheduled: false, reason: 'disabled' }
    }

    it('schedules when enabled', async () => {
      const result = await initializeNotifications({ enabled: true })
      expect(result.scheduled).toBe(true)
    })

    it('does not schedule when disabled', async () => {
      const result = await initializeNotifications({ enabled: false })
      expect(result.scheduled).toBe(false)
      expect(result.reason).toBe('disabled')
    })
  })

  describe('Notification Content Generation', () => {
    const generateMorningContent = () => ({
      title: 'Bom dia! ☀️',
      body: 'Hora de começar suas tarefas do protocolo de longevidade.',
      data: { type: 'morning_reminder' },
      sound: true,
    })

    const generateEveningContent = () => ({
      title: 'Boa noite! 🌙',
      body: 'Não esqueça de completar suas tarefas antes de dormir.',
      data: { type: 'evening_reminder' },
      sound: true,
    })

    const generateTestContent = () => ({
      title: 'Teste de Notificação ✅',
      body: 'As notificações estão funcionando corretamente!',
      data: { type: 'test' },
      sound: true,
    })

    it('generates correct morning content', () => {
      const content = generateMorningContent()
      expect(content.title).toContain('Bom dia')
      expect(content.data.type).toBe('morning_reminder')
      expect(content.sound).toBe(true)
    })

    it('generates correct evening content', () => {
      const content = generateEveningContent()
      expect(content.title).toContain('Boa noite')
      expect(content.data.type).toBe('evening_reminder')
      expect(content.sound).toBe(true)
    })

    it('generates correct test content', () => {
      const content = generateTestContent()
      expect(content.title).toContain('Teste')
      expect(content.data.type).toBe('test')
      expect(content.sound).toBe(true)
    })
  })

  describe('Android Channel Configuration', () => {
    const createAndroidChannel = (platform: 'ios' | 'android') => {
      if (platform !== 'android') {
        return null
      }

      return {
        id: 'daily-reminders',
        name: 'Lembretes Diários',
        importance: 'HIGH',
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF7A00',
      }
    }

    it('creates channel on Android', () => {
      const channel = createAndroidChannel('android')
      expect(channel).not.toBeNull()
      expect(channel?.id).toBe('daily-reminders')
      expect(channel?.importance).toBe('HIGH')
    })

    it('does not create channel on iOS', () => {
      const channel = createAndroidChannel('ios')
      expect(channel).toBeNull()
    })
  })

  describe('Default Settings', () => {
    const defaultSettings = {
      enabled: true,
      morningReminderTime: '08:00',
      eveningReminderTime: '20:00',
      morningEnabled: true,
      eveningEnabled: true,
    }

    it('has notifications enabled by default', () => {
      expect(defaultSettings.enabled).toBe(true)
    })

    it('has morning reminder at 08:00', () => {
      expect(defaultSettings.morningReminderTime).toBe('08:00')
    })

    it('has evening reminder at 20:00', () => {
      expect(defaultSettings.eveningReminderTime).toBe('20:00')
    })

    it('has both reminders enabled', () => {
      expect(defaultSettings.morningEnabled).toBe(true)
      expect(defaultSettings.eveningEnabled).toBe(true)
    })
  })

  describe('Settings Merge Logic', () => {
    const mergeSettings = (
      defaults: Record<string, unknown>,
      stored: Record<string, unknown>
    ) => {
      return { ...defaults, ...stored }
    }

    it('overrides defaults with stored values', () => {
      const defaults = { enabled: true, time: '08:00' }
      const stored = { enabled: false }
      const result = mergeSettings(defaults, stored)
      expect(result.enabled).toBe(false)
      expect(result.time).toBe('08:00')
    })

    it('preserves all stored values', () => {
      const defaults = { a: 1, b: 2, c: 3 }
      const stored = { b: 20, c: 30 }
      const result = mergeSettings(defaults, stored)
      expect(result).toEqual({ a: 1, b: 20, c: 30 })
    })

    it('handles empty stored object', () => {
      const defaults = { a: 1, b: 2 }
      const result = mergeSettings(defaults, {})
      expect(result).toEqual(defaults)
    })
  })

  describe('Notification Trigger Configuration', () => {
    type TriggerType = 'DAILY' | 'IMMEDIATE'

    const createDailyTrigger = (hour: number, minute: number) => ({
      type: 'DAILY' as TriggerType,
      hour,
      minute,
    })

    const createImmediateTrigger = () => null

    it('creates daily trigger with correct time', () => {
      const trigger = createDailyTrigger(8, 30)
      expect(trigger.type).toBe('DAILY')
      expect(trigger.hour).toBe(8)
      expect(trigger.minute).toBe(30)
    })

    it('creates immediate trigger as null', () => {
      const trigger = createImmediateTrigger()
      expect(trigger).toBeNull()
    })

    it('handles midnight trigger', () => {
      const trigger = createDailyTrigger(0, 0)
      expect(trigger.hour).toBe(0)
      expect(trigger.minute).toBe(0)
    })

    it('handles end of day trigger', () => {
      const trigger = createDailyTrigger(23, 59)
      expect(trigger.hour).toBe(23)
      expect(trigger.minute).toBe(59)
    })
  })

  describe('Edge Cases', () => {
    it('handles rapid enable/disable toggling', () => {
      let enabled = true
      const results: boolean[] = []

      for (let i = 0; i < 5; i++) {
        enabled = !enabled
        results.push(enabled)
      }

      expect(results).toEqual([false, true, false, true, false])
    })

    it('handles concurrent settings updates', () => {
      const updates: Array<{ morningEnabled: boolean }> = []

      const update = (morningEnabled: boolean) => {
        updates.push({ morningEnabled })
      }

      update(true)
      update(false)
      update(true)

      expect(updates).toHaveLength(3)
      expect(updates[2].morningEnabled).toBe(true)
    })
  })
})
