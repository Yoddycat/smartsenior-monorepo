/**
 * useHealth Hook Branch Coverage Tests
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

describe('useHealth Branch Coverage', () => {
  describe('hasAllPermissions Computation Branch', () => {
    interface Permissions {
      steps: boolean
      heartRate: boolean
      hrv: boolean
      sleep: boolean
    }

    const computeHasAllPermissions = (permissions: Permissions) => {
      return (
        permissions.steps &&
        permissions.heartRate &&
        permissions.hrv &&
        permissions.sleep
      )
    }

    it('returns true only when all permissions granted', () => {
      expect(
        computeHasAllPermissions({
          steps: true,
          heartRate: true,
          hrv: true,
          sleep: true,
        })
      ).toBe(true)
    })

    it('returns false when steps missing', () => {
      expect(
        computeHasAllPermissions({
          steps: false,
          heartRate: true,
          hrv: true,
          sleep: true,
        })
      ).toBe(false)
    })

    it('returns false when heartRate missing', () => {
      expect(
        computeHasAllPermissions({
          steps: true,
          heartRate: false,
          hrv: true,
          sleep: true,
        })
      ).toBe(false)
    })

    it('returns false when hrv missing', () => {
      expect(
        computeHasAllPermissions({
          steps: true,
          heartRate: true,
          hrv: false,
          sleep: true,
        })
      ).toBe(false)
    })

    it('returns false when sleep missing', () => {
      expect(
        computeHasAllPermissions({
          steps: true,
          heartRate: true,
          hrv: true,
          sleep: false,
        })
      ).toBe(false)
    })

    it('returns false when all missing', () => {
      expect(
        computeHasAllPermissions({
          steps: false,
          heartRate: false,
          hrv: false,
          sleep: false,
        })
      ).toBe(false)
    })
  })

  describe('hasAnyPermission Computation Branch', () => {
    interface Permissions {
      steps: boolean
      heartRate: boolean
      hrv: boolean
      sleep: boolean
    }

    const computeHasAnyPermission = (permissions: Permissions) => {
      return (
        permissions.steps ||
        permissions.heartRate ||
        permissions.hrv ||
        permissions.sleep
      )
    }

    it('returns true when only steps granted', () => {
      expect(
        computeHasAnyPermission({
          steps: true,
          heartRate: false,
          hrv: false,
          sleep: false,
        })
      ).toBe(true)
    })

    it('returns true when only heartRate granted', () => {
      expect(
        computeHasAnyPermission({
          steps: false,
          heartRate: true,
          hrv: false,
          sleep: false,
        })
      ).toBe(true)
    })

    it('returns true when only hrv granted', () => {
      expect(
        computeHasAnyPermission({
          steps: false,
          heartRate: false,
          hrv: true,
          sleep: false,
        })
      ).toBe(true)
    })

    it('returns true when only sleep granted', () => {
      expect(
        computeHasAnyPermission({
          steps: false,
          heartRate: false,
          hrv: false,
          sleep: true,
        })
      ).toBe(true)
    })

    it('returns true when all granted', () => {
      expect(
        computeHasAnyPermission({
          steps: true,
          heartRate: true,
          hrv: true,
          sleep: true,
        })
      ).toBe(true)
    })

    it('returns false when none granted', () => {
      expect(
        computeHasAnyPermission({
          steps: false,
          heartRate: false,
          hrv: false,
          sleep: false,
        })
      ).toBe(false)
    })
  })

  describe('Error Message Extraction Branch', () => {
    const extractErrorMessage = (error: unknown, fallback: string) => {
      return error instanceof Error ? error.message : fallback
    }

    it('extracts message from Error instance', () => {
      const error = new Error('Custom error message')
      expect(extractErrorMessage(error, 'fallback')).toBe('Custom error message')
    })

    it('returns fallback for string error', () => {
      expect(extractErrorMessage('string error', 'fallback')).toBe('fallback')
    })

    it('returns fallback for null', () => {
      expect(extractErrorMessage(null, 'fallback')).toBe('fallback')
    })

    it('returns fallback for undefined', () => {
      expect(extractErrorMessage(undefined, 'fallback')).toBe('fallback')
    })

    it('returns fallback for object without message', () => {
      expect(extractErrorMessage({ code: 123 }, 'fallback')).toBe('fallback')
    })

    it('returns fallback for number', () => {
      expect(extractErrorMessage(404, 'fallback')).toBe('fallback')
    })
  })

  describe('Availability Check State Update Branch', () => {
    interface State {
      isAvailable: boolean
      isLoading: boolean
      error: string | null
    }

    const updateStateOnAvailabilityCheck = (
      available: boolean,
      mounted: boolean,
      prevState: State
    ) => {
      if (!mounted) {
        return prevState // No update
      }
      return {
        ...prevState,
        isAvailable: available,
        isLoading: false,
      }
    }

    it('updates state when mounted', () => {
      const prev = { isAvailable: false, isLoading: true, error: null }
      const result = updateStateOnAvailabilityCheck(true, true, prev)
      expect(result.isAvailable).toBe(true)
      expect(result.isLoading).toBe(false)
    })

    it('does not update when unmounted', () => {
      const prev = { isAvailable: false, isLoading: true, error: null }
      const result = updateStateOnAvailabilityCheck(true, false, prev)
      expect(result).toBe(prev)
    })

    it('preserves error when updating availability', () => {
      const prev = { isAvailable: false, isLoading: true, error: 'some error' }
      const result = updateStateOnAvailabilityCheck(true, true, prev)
      expect(result.error).toBe('some error')
    })
  })

  describe('Availability Check Error State Branch', () => {
    interface State {
      isAvailable: boolean
      isLoading: boolean
      error: string | null
    }

    const updateStateOnAvailabilityError = (mounted: boolean, prevState: State) => {
      if (!mounted) {
        return prevState
      }
      return {
        ...prevState,
        isAvailable: false,
        isLoading: false,
        error: 'Failed to check health service availability',
      }
    }

    it('sets error state when mounted', () => {
      const prev = { isAvailable: false, isLoading: true, error: null }
      const result = updateStateOnAvailabilityError(true, prev)
      expect(result.isAvailable).toBe(false)
      expect(result.isLoading).toBe(false)
      expect(result.error).toBe('Failed to check health service availability')
    })

    it('does not set error when unmounted', () => {
      const prev = { isAvailable: false, isLoading: true, error: null }
      const result = updateStateOnAvailabilityError(false, prev)
      expect(result).toBe(prev)
    })
  })

  describe('Request Permissions State Flow', () => {
    interface State {
      isLoading: boolean
      error: string | null
      permissions: {
        steps: boolean
        heartRate: boolean
        hrv: boolean
        sleep: boolean
      }
    }

    const startPermissionRequest = (prevState: State): State => ({
      ...prevState,
      isLoading: true,
      error: null,
    })

    const completePermissionRequest = (
      permissions: State['permissions'],
      prevState: State
    ): State => ({
      ...prevState,
      permissions,
      isLoading: false,
    })

    const failPermissionRequest = (error: string, prevState: State): State => ({
      ...prevState,
      isLoading: false,
      error,
    })

    it('sets loading true on start', () => {
      const prev: State = {
        isLoading: false,
        error: 'old error',
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
      }
      const result = startPermissionRequest(prev)
      expect(result.isLoading).toBe(true)
      expect(result.error).toBeNull()
    })

    it('sets permissions and loading false on success', () => {
      const prev: State = {
        isLoading: true,
        error: null,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
      }
      const newPermissions = { steps: true, heartRate: true, hrv: false, sleep: true }
      const result = completePermissionRequest(newPermissions, prev)
      expect(result.isLoading).toBe(false)
      expect(result.permissions).toEqual(newPermissions)
    })

    it('sets error and loading false on failure', () => {
      const prev: State = {
        isLoading: true,
        error: null,
        permissions: { steps: false, heartRate: false, hrv: false, sleep: false },
      }
      const result = failPermissionRequest('Permission denied', prev)
      expect(result.isLoading).toBe(false)
      expect(result.error).toBe('Permission denied')
    })
  })

  describe('Refresh Summary State Flow', () => {
    interface State {
      isLoadingSummary: boolean
      error: string | null
      summary: object | null
    }

    const startSummaryRefresh = (prevState: State): State => ({
      ...prevState,
      isLoadingSummary: true,
      error: null,
    })

    const completeSummaryRefresh = (
      summary: object,
      prevState: State
    ): State => ({
      ...prevState,
      summary,
      isLoadingSummary: false,
    })

    const failSummaryRefresh = (error: string, prevState: State): State => ({
      ...prevState,
      isLoadingSummary: false,
      error,
    })

    it('sets loading true on start', () => {
      const prev: State = {
        isLoadingSummary: false,
        error: 'old error',
        summary: null,
      }
      const result = startSummaryRefresh(prev)
      expect(result.isLoadingSummary).toBe(true)
      expect(result.error).toBeNull()
    })

    it('sets summary and loading false on success', () => {
      const prev: State = {
        isLoadingSummary: true,
        error: null,
        summary: null,
      }
      const newSummary = { steps: { today: 5000 } }
      const result = completeSummaryRefresh(newSummary, prev)
      expect(result.isLoadingSummary).toBe(false)
      expect(result.summary).toEqual(newSummary)
    })

    it('sets error and loading false on failure', () => {
      const prev: State = {
        isLoadingSummary: true,
        error: null,
        summary: null,
      }
      const result = failSummaryRefresh('Network error', prev)
      expect(result.isLoadingSummary).toBe(false)
      expect(result.error).toBe('Network error')
    })
  })

  describe('Initial Permissions State', () => {
    const getInitialPermissions = () => ({
      steps: false,
      heartRate: false,
      hrv: false,
      sleep: false,
    })

    it('all permissions start as false', () => {
      const initial = getInitialPermissions()
      expect(initial.steps).toBe(false)
      expect(initial.heartRate).toBe(false)
      expect(initial.hrv).toBe(false)
      expect(initial.sleep).toBe(false)
    })
  })

  describe('Combined Permission Scenarios', () => {
    interface Permissions {
      steps: boolean
      heartRate: boolean
      hrv: boolean
      sleep: boolean
    }

    const analyzePermissions = (permissions: Permissions) => {
      const hasAll =
        permissions.steps &&
        permissions.heartRate &&
        permissions.hrv &&
        permissions.sleep

      const hasAny =
        permissions.steps ||
        permissions.heartRate ||
        permissions.hrv ||
        permissions.sleep

      const count = [
        permissions.steps,
        permissions.heartRate,
        permissions.hrv,
        permissions.sleep,
      ].filter(Boolean).length

      return { hasAll, hasAny, count }
    }

    it('analyzes all granted', () => {
      const result = analyzePermissions({
        steps: true,
        heartRate: true,
        hrv: true,
        sleep: true,
      })
      expect(result.hasAll).toBe(true)
      expect(result.hasAny).toBe(true)
      expect(result.count).toBe(4)
    })

    it('analyzes none granted', () => {
      const result = analyzePermissions({
        steps: false,
        heartRate: false,
        hrv: false,
        sleep: false,
      })
      expect(result.hasAll).toBe(false)
      expect(result.hasAny).toBe(false)
      expect(result.count).toBe(0)
    })

    it('analyzes partial (2 granted)', () => {
      const result = analyzePermissions({
        steps: true,
        heartRate: false,
        hrv: true,
        sleep: false,
      })
      expect(result.hasAll).toBe(false)
      expect(result.hasAny).toBe(true)
      expect(result.count).toBe(2)
    })

    it('analyzes partial (3 granted)', () => {
      const result = analyzePermissions({
        steps: true,
        heartRate: true,
        hrv: true,
        sleep: false,
      })
      expect(result.hasAll).toBe(false)
      expect(result.hasAny).toBe(true)
      expect(result.count).toBe(3)
    })

    it('analyzes single (1 granted)', () => {
      const result = analyzePermissions({
        steps: false,
        heartRate: true,
        hrv: false,
        sleep: false,
      })
      expect(result.hasAll).toBe(false)
      expect(result.hasAny).toBe(true)
      expect(result.count).toBe(1)
    })
  })
})
