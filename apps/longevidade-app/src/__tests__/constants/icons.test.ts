/**
 * Icons Constants Tests
 * Tests for pillar icons and category mappings
 */

// Mock require for image assets
jest.mock('../../../assets/images/icons/hidratacao.png', () => 'hidratacao.png', { virtual: true })
jest.mock('../../../assets/images/icons/nutricao.png', () => 'nutricao.png', { virtual: true })
jest.mock('../../../assets/images/icons/movimento.png', () => 'movimento.png', { virtual: true })
jest.mock('../../../assets/images/icons/sono.png', () => 'sono.png', { virtual: true })
jest.mock('../../../assets/images/icons/suplementos.png', () => 'suplementos.png', { virtual: true })
jest.mock('../../../assets/images/icons/mindfulness.png', () => 'mindfulness.png', { virtual: true })
jest.mock('../../../assets/images/icons/social.png', () => 'social.png', { virtual: true })
jest.mock('../../../assets/images/icons/cognitivo.png', () => 'cognitivo.png', { virtual: true })

describe('icons module', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('can be imported', () => {
    const icons = require('../../constants/icons')
    expect(icons).toBeDefined()
  })

  it('exports pillarIcons', () => {
    const { pillarIcons } = require('../../constants/icons')
    expect(pillarIcons).toBeDefined()
  })

  it('exports categoryColors', () => {
    const { categoryColors } = require('../../constants/icons')
    expect(categoryColors).toBeDefined()
  })

  it('exports categoryLabels', () => {
    const { categoryLabels } = require('../../constants/icons')
    expect(categoryLabels).toBeDefined()
  })
})

describe('categoryColors', () => {
  const { colors } = require('../../constants/theme')

  const expectedColors = {
    hydration: colors.hydration,
    nutrition: colors.nutrition,
    movement: colors.movement,
    sleep: colors.sleep,
    supplements: colors.supplements,
    mindfulness: colors.mindfulness,
    social: colors.social,
    cognitive: colors.cognitive,
  }

  it('has 8 categories', () => {
    expect(Object.keys(expectedColors)).toHaveLength(8)
  })

  it('hydration uses theme hydration color', () => {
    expect(expectedColors.hydration).toBe(colors.hydration)
  })

  it('nutrition uses theme nutrition color', () => {
    expect(expectedColors.nutrition).toBe(colors.nutrition)
  })

  it('movement uses theme movement color', () => {
    expect(expectedColors.movement).toBe(colors.movement)
  })

  it('sleep uses theme sleep color', () => {
    expect(expectedColors.sleep).toBe(colors.sleep)
  })

  it('supplements uses theme supplements color', () => {
    expect(expectedColors.supplements).toBe(colors.supplements)
  })

  it('mindfulness uses theme mindfulness color', () => {
    expect(expectedColors.mindfulness).toBe(colors.mindfulness)
  })

  it('social uses theme social color', () => {
    expect(expectedColors.social).toBe(colors.social)
  })

  it('cognitive uses theme cognitive color', () => {
    expect(expectedColors.cognitive).toBe(colors.cognitive)
  })
})

describe('categoryLabels', () => {
  const categoryLabels = {
    hydration: 'Hidratacao',
    nutrition: 'Nutricao',
    movement: 'Movimento',
    sleep: 'Sono',
    supplements: 'Suplementos',
    mindfulness: 'Mindfulness',
    social: 'Social',
    cognitive: 'Cognitivo',
  }

  it('has 8 labels', () => {
    expect(Object.keys(categoryLabels)).toHaveLength(8)
  })

  it('hydration label is Hidratacao', () => {
    expect(categoryLabels.hydration).toBe('Hidratacao')
  })

  it('nutrition label is Nutricao', () => {
    expect(categoryLabels.nutrition).toBe('Nutricao')
  })

  it('movement label is Movimento', () => {
    expect(categoryLabels.movement).toBe('Movimento')
  })

  it('sleep label is Sono', () => {
    expect(categoryLabels.sleep).toBe('Sono')
  })

  it('supplements label is Suplementos', () => {
    expect(categoryLabels.supplements).toBe('Suplementos')
  })

  it('mindfulness label is Mindfulness', () => {
    expect(categoryLabels.mindfulness).toBe('Mindfulness')
  })

  it('social label is Social', () => {
    expect(categoryLabels.social).toBe('Social')
  })

  it('cognitive label is Cognitivo', () => {
    expect(categoryLabels.cognitive).toBe('Cognitivo')
  })

  it('all labels are strings', () => {
    Object.values(categoryLabels).forEach((label) => {
      expect(typeof label).toBe('string')
    })
  })

  it('all labels are non-empty', () => {
    Object.values(categoryLabels).forEach((label) => {
      expect(label.length).toBeGreaterThan(0)
    })
  })
})

describe('pillarIcons structure', () => {
  const pillarIconKeys = [
    'hydration',
    'nutrition',
    'movement',
    'sleep',
    'supplements',
    'mindfulness',
    'social',
    'cognitive',
  ]

  it('has all expected pillars', () => {
    expect(pillarIconKeys).toHaveLength(8)
  })

  it('includes hydration', () => {
    expect(pillarIconKeys).toContain('hydration')
  })

  it('includes nutrition', () => {
    expect(pillarIconKeys).toContain('nutrition')
  })

  it('includes movement', () => {
    expect(pillarIconKeys).toContain('movement')
  })

  it('includes sleep', () => {
    expect(pillarIconKeys).toContain('sleep')
  })

  it('includes supplements', () => {
    expect(pillarIconKeys).toContain('supplements')
  })

  it('includes mindfulness', () => {
    expect(pillarIconKeys).toContain('mindfulness')
  })

  it('includes social', () => {
    expect(pillarIconKeys).toContain('social')
  })

  it('includes cognitive', () => {
    expect(pillarIconKeys).toContain('cognitive')
  })
})
