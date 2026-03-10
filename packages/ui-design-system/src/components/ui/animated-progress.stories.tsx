import type { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect } from 'react'
import { AnimatedProgress, AnimatedCircularProgress } from './animated-progress'

const meta: Meta<typeof AnimatedProgress> = {
  title: 'Components/AnimatedProgress',
  component: AnimatedProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Barra de progresso com animação JavaScript suave.

## Características
- Animação baseada em requestAnimationFrame
- Múltiplas funções de easing
- Suporte a gradientes e efeitos de glow
- Labels animados
- Variante circular disponível
        `,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof AnimatedProgress>

export const Default: Story = {
  args: {
    value: 65,
  },
}

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
  },
}

export const LabelPositions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Top (default)</p>
        <AnimatedProgress value={60} showLabel labelPosition="top" />
      </div>
      <div>
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Right</p>
        <AnimatedProgress value={75} showLabel labelPosition="right" />
      </div>
      <div>
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Inside</p>
        <AnimatedProgress value={85} showLabel labelPosition="inside" size="xl" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} className="flex items-center gap-4">
          <span className="w-8 text-sm text-[var(--foreground-muted)]">{size}</span>
          <AnimatedProgress value={70} size={size} className="flex-1" />
        </div>
      ))}
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      {(['default', 'success', 'warning', 'error', 'info'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          <span className="w-16 text-sm text-[var(--foreground-muted)] capitalize">{variant}</span>
          <AnimatedProgress value={65} variant={variant} className="flex-1" />
        </div>
      ))}
    </div>
  ),
}

export const Gradient: Story = {
  args: {
    value: 80,
    variant: 'gradient',
    gradientColors: ['#FF7A00', '#FFB800'],
    size: 'lg',
    showLabel: true,
  },
}

export const GlowEffect: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-[var(--background-muted)] rounded-xl">
      <AnimatedProgress value={75} variant="default" glow size="lg" />
      <AnimatedProgress value={85} variant="success" glow size="lg" />
      <AnimatedProgress
        value={90}
        variant="gradient"
        gradientColors={['#8B5CF6', '#EC4899']}
        glow
        size="lg"
      />
    </div>
  ),
}

export const Striped: Story = {
  render: () => (
    <div className="space-y-4">
      <AnimatedProgress value={60} striped size="lg" />
      <AnimatedProgress value={75} striped stripedAnimated variant="success" size="lg" />
      <AnimatedProgress value={45} striped stripedAnimated variant="warning" size="lg" />
    </div>
  ),
}

export const EasingFunctions: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="space-y-6">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90"
        >
          Replay Animation
        </button>
        <div className="space-y-4">
          {(['linear', 'easeOut', 'easeInOut', 'spring'] as const).map((easing) => (
            <div key={`${easing}-${key}`} className="flex items-center gap-4">
              <span className="w-20 text-sm text-[var(--foreground-muted)]">{easing}</span>
              <AnimatedProgress
                value={80}
                easing={easing}
                duration={2000}
                className="flex-1"
              />
            </div>
          ))}
        </div>
      </div>
    )
  },
}

export const SlowAnimation: Story = {
  args: {
    value: 100,
    duration: 3000,
    showLabel: true,
    size: 'lg',
    variant: 'success',
  },
}

export const WithDelay: Story = {
  args: {
    value: 80,
    delay: 1000,
    showLabel: true,
    label: 'Loading...',
  },
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(0)

    return (
      <div className="space-y-6">
        <AnimatedProgress
          value={value}
          showLabel
          size="lg"
          variant={value >= 100 ? 'success' : 'default'}
          glow={value >= 100}
        />
        <div className="flex gap-3">
          <button
            onClick={() => setValue((v) => Math.min(v + 10, 100))}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90"
          >
            +10%
          </button>
          <button
            onClick={() => setValue((v) => Math.min(v + 25, 100))}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90"
          >
            +25%
          </button>
          <button
            onClick={() => setValue(0)}
            className="px-4 py-2 bg-[var(--foreground-muted)] text-white rounded-lg hover:opacity-90"
          >
            Reset
          </button>
        </div>
      </div>
    )
  },
}

// Circular Progress Stories
export const CircularDefault: StoryObj<typeof AnimatedCircularProgress> = {
  render: () => (
    <div className="flex justify-center">
      <AnimatedCircularProgress value={72} />
    </div>
  ),
}

export const CircularVariants: StoryObj<typeof AnimatedCircularProgress> = {
  render: () => (
    <div className="flex gap-6 justify-center">
      {(['default', 'success', 'warning', 'error', 'info'] as const).map((variant) => (
        <AnimatedCircularProgress key={variant} value={75} variant={variant} />
      ))}
    </div>
  ),
}

export const CircularSizes: StoryObj<typeof AnimatedCircularProgress> = {
  render: () => (
    <div className="flex items-center gap-6 justify-center">
      <AnimatedCircularProgress value={65} size={48} strokeWidth={4} />
      <AnimatedCircularProgress value={65} size={80} strokeWidth={8} />
      <AnimatedCircularProgress value={65} size={120} strokeWidth={12} />
    </div>
  ),
}

export const CircularGlow: StoryObj<typeof AnimatedCircularProgress> = {
  render: () => (
    <div className="flex gap-6 justify-center p-6 bg-[var(--background-muted)] rounded-xl">
      <AnimatedCircularProgress value={85} variant="success" glow />
      <AnimatedCircularProgress value={60} variant="warning" glow />
      <AnimatedCircularProgress value={92} variant="info" glow />
    </div>
  ),
}

export const HealthDashboard: Story = {
  name: 'Health Dashboard (SmartSenior)',
  render: () => {
    const [metrics, setMetrics] = useState({
      steps: 0,
      hydration: 0,
      sleep: 0,
      activity: 0,
    })

    useEffect(() => {
      // Simulate loading data
      const timer = setTimeout(() => {
        setMetrics({
          steps: 84,
          hydration: 65,
          sleep: 88,
          activity: 72,
        })
      }, 500)
      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="space-y-6 p-6 max-w-md">
        <h2 className="text-lg font-semibold">Seu Progresso Diário</h2>

        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">👣</span>
              <span className="text-sm font-medium">Passos</span>
            </div>
            <AnimatedProgress
              value={metrics.steps}
              variant="default"
              showLabel
              labelPosition="right"
              duration={1200}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">💧</span>
              <span className="text-sm font-medium">Hidratação</span>
            </div>
            <AnimatedProgress
              value={metrics.hydration}
              variant="info"
              showLabel
              labelPosition="right"
              duration={1400}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">😴</span>
              <span className="text-sm font-medium">Qualidade do Sono</span>
            </div>
            <AnimatedProgress
              value={metrics.sleep}
              variant="success"
              showLabel
              labelPosition="right"
              duration={1600}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🏃</span>
              <span className="text-sm font-medium">Atividade Física</span>
            </div>
            <AnimatedProgress
              value={metrics.activity}
              variant="gradient"
              gradientColors={['#FF7A00', '#FFB800']}
              showLabel
              labelPosition="right"
              duration={1800}
            />
          </div>
        </div>

        {/* Circular summary */}
        <div className="flex justify-center gap-6 pt-4 border-t">
          <div className="text-center">
            <AnimatedCircularProgress
              value={Math.round((metrics.steps + metrics.hydration + metrics.sleep + metrics.activity) / 4)}
              variant="success"
              size={100}
              strokeWidth={10}
              duration={2000}
              delay={500}
            />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">Score Geral</p>
          </div>
        </div>
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '450px' }}>
        <Story />
      </div>
    ),
  ],
}
