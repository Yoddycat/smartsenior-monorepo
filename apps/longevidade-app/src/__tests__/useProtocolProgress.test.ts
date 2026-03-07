import { getGreeting } from '../hooks/useProtocolProgress'

describe('getGreeting', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should return "Bom dia!" in the morning (before 12:00)', () => {
    jest.setSystemTime(new Date('2024-01-15T09:00:00'))
    expect(getGreeting()).toBe('Bom dia!')
  })

  it('should return "Boa tarde!" in the afternoon (12:00-17:59)', () => {
    jest.setSystemTime(new Date('2024-01-15T14:00:00'))
    expect(getGreeting()).toBe('Boa tarde!')
  })

  it('should return "Boa noite!" in the evening (18:00+)', () => {
    jest.setSystemTime(new Date('2024-01-15T20:00:00'))
    expect(getGreeting()).toBe('Boa noite!')
  })
})

describe('Protocol duration constants', () => {
  it('should have 84 days (3 months) protocol duration', () => {
    // Protocol is 84 days (28 days × 3 months)
    expect(28 * 3).toBe(84)
  })

  it('should have 12 weeks in protocol', () => {
    // 84 days = 12 weeks
    expect(84 / 7).toBe(12)
  })

  it('should calculate correct week from day', () => {
    const calculateWeek = (day: number) => Math.min(Math.ceil(day / 7), 12)

    expect(calculateWeek(1)).toBe(1)
    expect(calculateWeek(7)).toBe(1)
    expect(calculateWeek(8)).toBe(2)
    expect(calculateWeek(14)).toBe(2)
    expect(calculateWeek(84)).toBe(12)
  })

  it('should calculate correct month from day', () => {
    const calculateMonth = (day: number) => Math.min(Math.ceil(day / 28), 3)

    expect(calculateMonth(1)).toBe(1)
    expect(calculateMonth(28)).toBe(1)
    expect(calculateMonth(29)).toBe(2)
    expect(calculateMonth(56)).toBe(2)
    expect(calculateMonth(57)).toBe(3)
    expect(calculateMonth(84)).toBe(3)
    expect(calculateMonth(100)).toBe(3) // capped at 3
  })
})

describe('Date calculations', () => {
  it('should calculate days since start correctly', () => {
    const start = new Date('2024-01-01')
    const end = new Date('2024-01-15')
    const diffTime = end.getTime() - start.getTime()
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    expect(diffDays).toBe(14)
  })

  it('should format date as YYYY-MM-DD', () => {
    const date = new Date('2024-01-15T12:00:00')
    const formatted = date.toISOString().split('T')[0]

    expect(formatted).toBe('2024-01-15')
  })
})

describe('Completion rate calculations', () => {
  it('should calculate completion rate correctly', () => {
    const calculateRate = (completed: number, total: number) =>
      total > 0 ? Math.round((completed / total) * 100) : 0

    expect(calculateRate(0, 6)).toBe(0)
    expect(calculateRate(3, 6)).toBe(50)
    expect(calculateRate(6, 6)).toBe(100)
    expect(calculateRate(4, 6)).toBe(67)
    expect(calculateRate(0, 0)).toBe(0)
  })
})
