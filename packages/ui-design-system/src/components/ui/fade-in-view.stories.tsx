import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FadeInView, FadeInStagger } from './fade-in-view'

const meta: Meta<typeof FadeInView> = {
  title: 'Components/FadeInView',
  component: FadeInView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente wrapper para animações de fade-in com slide opcional.

## Características
- Animação CSS suave e performática
- Direções configuráveis (up, down, left, right)
- Trigger por mount ou viewport (scroll reveal)
- Suporte a stagger para listas
- Respeita prefers-reduced-motion
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FadeInView>

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 bg-white rounded-xl shadow-md border ${className || ''}`}>
    {children}
  </div>
)

export const Default: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay Animation
        </button>
        <FadeInView key={key}>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Fade In Default</h3>
            <p className="text-[var(--foreground-muted)]">
              Animação suave de entrada
            </p>
          </Card>
        </FadeInView>
      </div>
    )
  },
}

export const Directions: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay Animation
        </button>
        <div className="grid grid-cols-2 gap-4" key={key}>
          <FadeInView direction="up" delay={0}>
            <Card className="text-center">
              <span className="text-2xl">⬆️</span>
              <p className="mt-2 font-medium">Up</p>
            </Card>
          </FadeInView>
          <FadeInView direction="down" delay={100}>
            <Card className="text-center">
              <span className="text-2xl">⬇️</span>
              <p className="mt-2 font-medium">Down</p>
            </Card>
          </FadeInView>
          <FadeInView direction="left" delay={200}>
            <Card className="text-center">
              <span className="text-2xl">⬅️</span>
              <p className="mt-2 font-medium">Left</p>
            </Card>
          </FadeInView>
          <FadeInView direction="right" delay={300}>
            <Card className="text-center">
              <span className="text-2xl">➡️</span>
              <p className="mt-2 font-medium">Right</p>
            </Card>
          </FadeInView>
        </div>
      </div>
    )
  },
}

export const EasingFunctions: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay Animation
        </button>
        <div className="space-y-4" key={key}>
          {(['linear', 'easeOut', 'easeInOut', 'spring'] as const).map((easing, i) => (
            <FadeInView key={easing} easing={easing} delay={i * 150} distance={40}>
              <Card>
                <span className="font-mono text-sm">{easing}</span>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    )
  },
}

export const LongDistance: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay Animation
        </button>
        <FadeInView key={key} distance={100} duration={800} easing="spring">
          <Card className="w-64">
            <h3 className="text-lg font-semibold mb-2">Spring Effect</h3>
            <p className="text-[var(--foreground-muted)]">
              100px distance with spring easing
            </p>
          </Card>
        </FadeInView>
      </div>
    )
  },
}

export const Staggered: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay Animation
        </button>
        <FadeInStagger key={key} staggerDelay={100} className="space-y-3">
          <Card>Item 1</Card>
          <Card>Item 2</Card>
          <Card>Item 3</Card>
          <Card>Item 4</Card>
          <Card>Item 5</Card>
        </FadeInStagger>
      </div>
    )
  },
}

export const StaggeredGrid: Story = {
  render: () => {
    const [key, setKey] = useState(0)
    const items = Array.from({ length: 9 }, (_, i) => i + 1)

    return (
      <div className="flex flex-col items-center gap-6">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay Animation
        </button>
        <FadeInStagger
          key={key}
          staggerDelay={75}
          direction="up"
          easing="spring"
          className="grid grid-cols-3 gap-3"
        >
          {items.map((item) => (
            <Card key={item} className="w-24 h-24 flex items-center justify-center">
              <span className="text-2xl font-bold text-[var(--primary)]">{item}</span>
            </Card>
          ))}
        </FadeInStagger>
      </div>
    )
  },
}

export const ViewportTrigger: Story = {
  render: () => (
    <div className="h-[600px] overflow-y-auto p-4 border rounded-xl">
      <div className="space-y-8">
        <div className="h-[200px] bg-[var(--background-muted)] rounded-xl flex items-center justify-center">
          <p className="text-[var(--foreground-muted)]">Scroll down...</p>
        </div>

        <FadeInView trigger="viewport" direction="left">
          <Card>
            <h3 className="text-lg font-semibold">Section 1</h3>
            <p className="text-[var(--foreground-muted)]">Slides in from left</p>
          </Card>
        </FadeInView>

        <div className="h-[100px]" />

        <FadeInView trigger="viewport" direction="right">
          <Card>
            <h3 className="text-lg font-semibold">Section 2</h3>
            <p className="text-[var(--foreground-muted)]">Slides in from right</p>
          </Card>
        </FadeInView>

        <div className="h-[100px]" />

        <FadeInView trigger="viewport" direction="up" distance={50}>
          <Card>
            <h3 className="text-lg font-semibold">Section 3</h3>
            <p className="text-[var(--foreground-muted)]">Slides up 50px</p>
          </Card>
        </FadeInView>

        <div className="h-[200px]" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const HealthDashboard: Story = {
  name: 'Health Dashboard (SmartSenior)',
  render: () => {
    const [key, setKey] = useState(0)

    const metrics = [
      { icon: '❤️', label: 'Batimentos', value: '72 bpm', color: 'text-red-500' },
      { icon: '👣', label: 'Passos', value: '8.432', color: 'text-blue-500' },
      { icon: '💧', label: 'Hidratação', value: '65%', color: 'text-cyan-500' },
      { icon: '😴', label: 'Sono', value: '7.5h', color: 'text-purple-500' },
    ]

    return (
      <div className="p-6 max-w-md" key={key}>
        <FadeInView duration={600}>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold">Bom dia, Maria!</h2>
              <p className="text-[var(--foreground-muted)]">Seu resumo de saúde</p>
            </div>
            <button
              onClick={() => setKey((k) => k + 1)}
              className="text-sm text-[var(--primary)]"
            >
              Replay
            </button>
          </div>
        </FadeInView>

        <FadeInStagger staggerDelay={150} initialDelay={300} className="grid grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <Card key={metric.label}>
              <span className="text-3xl">{metric.icon}</span>
              <p className="text-sm text-[var(--foreground-muted)] mt-2">{metric.label}</p>
              <p className={`text-2xl font-bold mt-1 ${metric.color}`}>{metric.value}</p>
            </Card>
          ))}
        </FadeInStagger>

        <FadeInView delay={900} direction="up">
          <Card className="mt-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <p className="font-semibold">Próximo medicamento</p>
                <p className="text-sm text-[var(--foreground-muted)]">
                  Losartana 50mg às 14:00
                </p>
              </div>
            </div>
          </Card>
        </FadeInView>

        <FadeInView delay={1100} direction="up">
          <Card className="mt-4 bg-[var(--success)] text-white">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold">Parabéns!</p>
                <p className="text-sm opacity-90">
                  Você atingiu 84% das metas de hoje
                </p>
              </div>
            </div>
          </Card>
        </FadeInView>
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

export const NoAnimation: Story = {
  args: {
    disabled: true,
    children: (
      <Card>
        <h3 className="text-lg font-semibold">No Animation</h3>
        <p className="text-[var(--foreground-muted)]">
          Animation disabled (respects prefers-reduced-motion)
        </p>
      </Card>
    ),
  },
}
