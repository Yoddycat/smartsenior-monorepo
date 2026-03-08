/**
 * Theme Constants Tests
 * Tests for design system theme values
 */

import { colors, spacing, borderRadius, typography, shadows, theme } from '../../constants/theme'

describe('Theme constants', () => {
  describe('exports', () => {
    it('exports colors', () => {
      expect(colors).toBeDefined()
    })

    it('exports spacing', () => {
      expect(spacing).toBeDefined()
    })

    it('exports borderRadius', () => {
      expect(borderRadius).toBeDefined()
    })

    it('exports typography', () => {
      expect(typography).toBeDefined()
    })

    it('exports shadows', () => {
      expect(shadows).toBeDefined()
    })

    it('exports theme object', () => {
      expect(theme).toBeDefined()
    })
  })
})

describe('colors', () => {
  describe('brand colors', () => {
    it('has primary (SmartSenior orange)', () => {
      expect(colors.primary).toBe('#FF7A00')
    })

    it('has primaryLight', () => {
      expect(colors.primaryLight).toBe('#FF9A3C')
    })

    it('has primaryDark', () => {
      expect(colors.primaryDark).toBe('#E66A00')
    })

    it('has secondary (SmartSenior navy)', () => {
      expect(colors.secondary).toBe('#1A365D')
    })

    it('has secondaryLight', () => {
      expect(colors.secondaryLight).toBe('#2D4A73')
    })

    it('has secondaryDark', () => {
      expect(colors.secondaryDark).toBe('#0F1F35')
    })
  })

  describe('semantic colors', () => {
    it('has success', () => {
      expect(colors.success).toBe('#22C55E')
    })

    it('has warning', () => {
      expect(colors.warning).toBe('#F59E0B')
    })

    it('has danger', () => {
      expect(colors.danger).toBe('#EF4444')
    })

    it('has error (alias for danger)', () => {
      expect(colors.error).toBe('#EF4444')
      expect(colors.error).toBe(colors.danger)
    })

    it('has info', () => {
      expect(colors.info).toBe('#3B82F6')
    })
  })

  describe('neutral colors', () => {
    it('has white', () => {
      expect(colors.white).toBe('#FFFFFF')
    })

    it('has black', () => {
      expect(colors.black).toBe('#000000')
    })

    it('has gray scale', () => {
      expect(colors.gray50).toBe('#F9FAFB')
      expect(colors.gray100).toBe('#F3F4F6')
      expect(colors.gray200).toBe('#E5E7EB')
      expect(colors.gray300).toBe('#D1D5DB')
      expect(colors.gray400).toBe('#9CA3AF')
      expect(colors.gray500).toBe('#6B7280')
      expect(colors.gray600).toBe('#4B5563')
      expect(colors.gray700).toBe('#374151')
      expect(colors.gray800).toBe('#1F2937')
      expect(colors.gray900).toBe('#111827')
    })
  })

  describe('category colors', () => {
    it('has nutrition', () => {
      expect(colors.nutrition).toBe('#22C55E')
    })

    it('has movement', () => {
      expect(colors.movement).toBe('#3B82F6')
    })

    it('has sleep', () => {
      expect(colors.sleep).toBe('#8B5CF6')
    })

    it('has hydration', () => {
      expect(colors.hydration).toBe('#06B6D4')
    })

    it('has supplements', () => {
      expect(colors.supplements).toBe('#F59E0B')
    })

    it('has mindfulness', () => {
      expect(colors.mindfulness).toBe('#EC4899')
    })

    it('has social', () => {
      expect(colors.social).toBe('#F97316')
    })

    it('has cognitive', () => {
      expect(colors.cognitive).toBe('#6366F1')
    })
  })
})

describe('spacing', () => {
  it('has xs (4)', () => {
    expect(spacing.xs).toBe(4)
  })

  it('has sm (8)', () => {
    expect(spacing.sm).toBe(8)
  })

  it('has md (16)', () => {
    expect(spacing.md).toBe(16)
  })

  it('has lg (24)', () => {
    expect(spacing.lg).toBe(24)
  })

  it('has xl (32)', () => {
    expect(spacing.xl).toBe(32)
  })

  it('has 2xl (48)', () => {
    expect(spacing['2xl']).toBe(48)
  })

  it('follows 4px base scale', () => {
    expect(spacing.xs).toBe(4)
    expect(spacing.sm).toBe(spacing.xs * 2)
    expect(spacing.md).toBe(spacing.sm * 2)
    expect(spacing.lg).toBe(spacing.md * 1.5)
  })
})

describe('borderRadius', () => {
  it('has sm (4)', () => {
    expect(borderRadius.sm).toBe(4)
  })

  it('has md (8)', () => {
    expect(borderRadius.md).toBe(8)
  })

  it('has lg (12)', () => {
    expect(borderRadius.lg).toBe(12)
  })

  it('has xl (16)', () => {
    expect(borderRadius.xl).toBe(16)
  })

  it('has full (9999 for pill shape)', () => {
    expect(borderRadius.full).toBe(9999)
  })
})

describe('typography', () => {
  describe('fontFamily', () => {
    it('has regular', () => {
      expect(typography.fontFamily.regular).toBe('System')
    })

    it('has medium', () => {
      expect(typography.fontFamily.medium).toBe('System')
    })

    it('has semibold', () => {
      expect(typography.fontFamily.semibold).toBe('System')
    })

    it('has bold', () => {
      expect(typography.fontFamily.bold).toBe('System')
    })
  })

  describe('fontSize', () => {
    it('has xs (12)', () => {
      expect(typography.fontSize.xs).toBe(12)
    })

    it('has sm (14)', () => {
      expect(typography.fontSize.sm).toBe(14)
    })

    it('has base (16)', () => {
      expect(typography.fontSize.base).toBe(16)
    })

    it('has lg (18)', () => {
      expect(typography.fontSize.lg).toBe(18)
    })

    it('has xl (20)', () => {
      expect(typography.fontSize.xl).toBe(20)
    })

    it('has 2xl (24)', () => {
      expect(typography.fontSize['2xl']).toBe(24)
    })

    it('has 3xl (30)', () => {
      expect(typography.fontSize['3xl']).toBe(30)
    })

    it('has 4xl (36)', () => {
      expect(typography.fontSize['4xl']).toBe(36)
    })
  })
})

describe('shadows', () => {
  describe('sm shadow', () => {
    it('has correct properties', () => {
      expect(shadows.sm.shadowColor).toBe('#000')
      expect(shadows.sm.shadowOffset).toEqual({ width: 0, height: 1 })
      expect(shadows.sm.shadowOpacity).toBe(0.05)
      expect(shadows.sm.shadowRadius).toBe(2)
      expect(shadows.sm.elevation).toBe(1)
    })
  })

  describe('md shadow', () => {
    it('has correct properties', () => {
      expect(shadows.md.shadowColor).toBe('#000')
      expect(shadows.md.shadowOffset).toEqual({ width: 0, height: 2 })
      expect(shadows.md.shadowOpacity).toBe(0.1)
      expect(shadows.md.shadowRadius).toBe(4)
      expect(shadows.md.elevation).toBe(3)
    })
  })

  describe('lg shadow', () => {
    it('has correct properties', () => {
      expect(shadows.lg.shadowColor).toBe('#000')
      expect(shadows.lg.shadowOffset).toEqual({ width: 0, height: 4 })
      expect(shadows.lg.shadowOpacity).toBe(0.15)
      expect(shadows.lg.shadowRadius).toBe(8)
      expect(shadows.lg.elevation).toBe(5)
    })
  })
})

describe('theme object', () => {
  it('includes all sub-themes', () => {
    expect(theme.colors).toBe(colors)
    expect(theme.spacing).toBe(spacing)
    expect(theme.borderRadius).toBe(borderRadius)
    expect(theme.typography).toBe(typography)
    expect(theme.shadows).toBe(shadows)
  })
})

describe('color accessibility', () => {
  // Check that colors are valid hex codes
  const isValidHex = (color: string) => /^#([0-9A-F]{3}){1,2}$/i.test(color)

  it('brand colors are valid hex', () => {
    expect(isValidHex(colors.primary)).toBe(true)
    expect(isValidHex(colors.secondary)).toBe(true)
  })

  it('semantic colors are valid hex', () => {
    expect(isValidHex(colors.success)).toBe(true)
    expect(isValidHex(colors.warning)).toBe(true)
    expect(isValidHex(colors.danger)).toBe(true)
    expect(isValidHex(colors.info)).toBe(true)
  })

  it('neutral colors are valid hex', () => {
    expect(isValidHex(colors.white)).toBe(true)
    expect(isValidHex(colors.black)).toBe(true)
    expect(isValidHex(colors.gray500)).toBe(true)
  })

  it('category colors are valid hex', () => {
    expect(isValidHex(colors.nutrition)).toBe(true)
    expect(isValidHex(colors.movement)).toBe(true)
    expect(isValidHex(colors.sleep)).toBe(true)
    expect(isValidHex(colors.hydration)).toBe(true)
  })
})
