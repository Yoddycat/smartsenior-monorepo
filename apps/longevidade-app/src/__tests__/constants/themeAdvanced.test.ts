/**
 * Theme Constants Advanced Tests
 * Detailed tests for theme constants
 */

import { colors, spacing, borderRadius, typography } from '../../constants/theme'

describe('Theme colors', () => {
  it('has primary color', () => {
    expect(colors.primary).toBeDefined()
    expect(colors.primary).toMatch(/^#[0-9A-Fa-f]{6}$/)
  })

  it('has secondary color', () => {
    expect(colors.secondary).toBeDefined()
    expect(colors.secondary).toMatch(/^#[0-9A-Fa-f]{6}$/)
  })

  it('has success color', () => {
    expect(colors.success).toBeDefined()
  })

  it('has danger color', () => {
    expect(colors.danger).toBeDefined()
  })

  it('has warning color', () => {
    expect(colors.warning).toBeDefined()
  })

  it('has info color', () => {
    expect(colors.info).toBeDefined()
  })

  it('has white color', () => {
    expect(colors.white).toBe('#FFFFFF')
  })

  it('has gray scale', () => {
    expect(colors.gray50).toBeDefined()
    expect(colors.gray100).toBeDefined()
    expect(colors.gray200).toBeDefined()
    expect(colors.gray300).toBeDefined()
    expect(colors.gray400).toBeDefined()
    expect(colors.gray500).toBeDefined()
    expect(colors.gray700).toBeDefined()
    expect(colors.gray900).toBeDefined()
  })
})

describe('Theme spacing', () => {
  it('has xs spacing', () => {
    expect(spacing.xs).toBeDefined()
    expect(typeof spacing.xs).toBe('number')
  })

  it('has sm spacing', () => {
    expect(spacing.sm).toBeDefined()
    expect(typeof spacing.sm).toBe('number')
  })

  it('has md spacing', () => {
    expect(spacing.md).toBeDefined()
    expect(typeof spacing.md).toBe('number')
  })

  it('has lg spacing', () => {
    expect(spacing.lg).toBeDefined()
    expect(typeof spacing.lg).toBe('number')
  })

  it('has xl spacing', () => {
    expect(spacing.xl).toBeDefined()
    expect(typeof spacing.xl).toBe('number')
  })

  it('spacing increases progressively', () => {
    expect(spacing.xs).toBeLessThan(spacing.sm)
    expect(spacing.sm).toBeLessThan(spacing.md)
    expect(spacing.md).toBeLessThan(spacing.lg)
    expect(spacing.lg).toBeLessThan(spacing.xl)
  })
})

describe('Theme borderRadius', () => {
  it('has sm radius', () => {
    expect(borderRadius.sm).toBeDefined()
    expect(typeof borderRadius.sm).toBe('number')
  })

  it('has md radius', () => {
    expect(borderRadius.md).toBeDefined()
    expect(typeof borderRadius.md).toBe('number')
  })

  it('has lg radius', () => {
    expect(borderRadius.lg).toBeDefined()
    expect(typeof borderRadius.lg).toBe('number')
  })

  it('has xl radius', () => {
    expect(borderRadius.xl).toBeDefined()
    expect(typeof borderRadius.xl).toBe('number')
  })

  it('has full radius', () => {
    expect(borderRadius.full).toBeDefined()
    expect(borderRadius.full).toBeGreaterThan(100)
  })
})

describe('Theme typography', () => {
  it('has fontSize object', () => {
    expect(typography.fontSize).toBeDefined()
  })

  it('has xs font size', () => {
    expect(typography.fontSize.xs).toBeDefined()
    expect(typeof typography.fontSize.xs).toBe('number')
  })

  it('has sm font size', () => {
    expect(typography.fontSize.sm).toBeDefined()
    expect(typeof typography.fontSize.sm).toBe('number')
  })

  it('has base font size', () => {
    expect(typography.fontSize.base).toBeDefined()
    expect(typeof typography.fontSize.base).toBe('number')
  })

  it('has lg font size', () => {
    expect(typography.fontSize.lg).toBeDefined()
    expect(typeof typography.fontSize.lg).toBe('number')
  })

  it('has xl font size', () => {
    expect(typography.fontSize.xl).toBeDefined()
    expect(typeof typography.fontSize.xl).toBe('number')
  })

  it('font sizes increase progressively', () => {
    expect(typography.fontSize.xs).toBeLessThan(typography.fontSize.sm)
    expect(typography.fontSize.sm).toBeLessThan(typography.fontSize.base)
    expect(typography.fontSize.base).toBeLessThan(typography.fontSize.lg)
    expect(typography.fontSize.lg).toBeLessThan(typography.fontSize.xl)
  })
})

describe('Theme category colors', () => {
  it('has hydration color', () => {
    expect(colors.hydration).toBeDefined()
  })

  it('has movement color', () => {
    expect(colors.movement).toBeDefined()
  })

  it('has sleep color', () => {
    expect(colors.sleep).toBeDefined()
  })

  it('has nutrition color', () => {
    expect(colors.nutrition).toBeDefined()
  })

  it('has mindfulness color', () => {
    expect(colors.mindfulness).toBeDefined()
  })

  it('has supplements color', () => {
    expect(colors.supplements).toBeDefined()
  })
})

describe('Theme color format', () => {
  const hexColorRegex = /^#[0-9A-Fa-f]{6}$/

  it('primary is valid hex', () => {
    expect(colors.primary).toMatch(hexColorRegex)
  })

  it('secondary is valid hex', () => {
    expect(colors.secondary).toMatch(hexColorRegex)
  })

  it('gray colors are valid hex', () => {
    expect(colors.gray500).toMatch(hexColorRegex)
    expect(colors.gray900).toMatch(hexColorRegex)
  })
})
