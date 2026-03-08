/**
 * Web Health Service Tests
 * Tests for web fallback health service implementation
 */

// Import the actual web service
import { healthService } from '../../services/health/healthService.web'

describe('WebHealthService', () => {
  describe('isAvailable', () => {
    it('returns false (health APIs not available on web)', async () => {
      const result = await healthService.isAvailable()
      expect(result).toBe(false)
    })
  })

  describe('requestPermissions', () => {
    it('returns all false permissions', async () => {
      const result = await healthService.requestPermissions(['steps', 'heartRate', 'hrv', 'sleep'])

      expect(result.steps).toBe(false)
      expect(result.heartRate).toBe(false)
      expect(result.hrv).toBe(false)
      expect(result.sleep).toBe(false)
    })

    it('logs warning', async () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation()

      await healthService.requestPermissions(['steps'])

      expect(warnSpy).toHaveBeenCalledWith(
        '[HealthService Web] Health APIs not available on web platform'
      )

      warnSpy.mockRestore()
    })
  })

  describe('checkPermissions', () => {
    it('returns all false permissions', async () => {
      const result = await healthService.checkPermissions()

      expect(result.steps).toBe(false)
      expect(result.heartRate).toBe(false)
      expect(result.hrv).toBe(false)
      expect(result.sleep).toBe(false)
    })
  })

  describe('getSteps', () => {
    it('returns empty array', async () => {
      const start = new Date('2024-01-01')
      const end = new Date('2024-01-07')

      const result = await healthService.getSteps(start, end)

      expect(result).toEqual([])
    })

    it('logs warning', async () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation()

      await healthService.getSteps(new Date(), new Date())

      expect(warnSpy).toHaveBeenCalledWith(
        '[HealthService Web] Cannot read steps on web platform'
      )

      warnSpy.mockRestore()
    })
  })

  describe('getHeartRate', () => {
    it('returns empty array', async () => {
      const start = new Date('2024-01-01')
      const end = new Date('2024-01-07')

      const result = await healthService.getHeartRate(start, end)

      expect(result).toEqual([])
    })

    it('logs warning', async () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation()

      await healthService.getHeartRate(new Date(), new Date())

      expect(warnSpy).toHaveBeenCalledWith(
        '[HealthService Web] Cannot read heart rate on web platform'
      )

      warnSpy.mockRestore()
    })
  })

  describe('getHRV', () => {
    it('returns empty array', async () => {
      const start = new Date('2024-01-01')
      const end = new Date('2024-01-07')

      const result = await healthService.getHRV(start, end)

      expect(result).toEqual([])
    })

    it('logs warning', async () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation()

      await healthService.getHRV(new Date(), new Date())

      expect(warnSpy).toHaveBeenCalledWith(
        '[HealthService Web] Cannot read HRV on web platform'
      )

      warnSpy.mockRestore()
    })
  })

  describe('getSleep', () => {
    it('returns empty array', async () => {
      const start = new Date('2024-01-01')
      const end = new Date('2024-01-07')

      const result = await healthService.getSleep(start, end)

      expect(result).toEqual([])
    })

    it('logs warning', async () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation()

      await healthService.getSleep(new Date(), new Date())

      expect(warnSpy).toHaveBeenCalledWith(
        '[HealthService Web] Cannot read sleep on web platform'
      )

      warnSpy.mockRestore()
    })
  })
})
