import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PulseView, BreathingView, AttentionView } from './pulse-view'

const meta: Meta<typeof PulseView> = {
  title: 'Components/PulseView',
  component: PulseView,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componentes de animação para chamar atenção do usuário.

## Variantes

### PulseView
- **scale**: Pulsa aumentando/diminuindo tamanho
- **glow**: Pulsa com efeito de brilho
- **ring**: Anel expandindo ao redor
- **opacity**: Pulsa opacidade
- **bounce**: Pulsa para cima/baixo

### BreathingView
Animação suave de "respiração" para elementos calmos.

### AttentionView
Animações fortes para chamar atenção imediata.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof PulseView>

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`px-3 py-1 rounded-full text-sm font-medium ${className || 'bg-[var(--primary)] text-white'}`}>
    {children}
  </span>
)

const IconButton = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${className || 'bg-[var(--primary)] text-white'}`}>
    {children}
  </div>
)

export const Default: Story = {
  render: () => (
    <PulseView>
      <Badge>New</Badge>
    </PulseView>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="text-center">
        <PulseView variant="scale">
          <IconButton>🔔</IconButton>
        </PulseView>
        <p className="text-sm text-[var(--foreground-muted)] mt-2">scale</p>
      </div>

      <div className="text-center">
        <PulseView variant="opacity">
          <IconButton>📧</IconButton>
        </PulseView>
        <p className="text-sm text-[var(--foreground-muted)] mt-2">opacity</p>
      </div>

      <div className="text-center">
        <PulseView variant="glow" color="var(--success)">
          <IconButton className="bg-[var(--success)]">✓</IconButton>
        </PulseView>
        <p className="text-sm text-[var(--foreground-muted)] mt-2">glow</p>
      </div>

      <div className="text-center">
        <PulseView variant="ring" color="var(--error)">
          <IconButton className="bg-[var(--error)]">!</IconButton>
        </PulseView>
        <p className="text-sm text-[var(--foreground-muted)] mt-2">ring</p>
      </div>

      <div className="text-center">
        <PulseView variant="bounce">
          <IconButton>👆</IconButton>
        </PulseView>
        <p className="text-sm text-[var(--foreground-muted)] mt-2">bounce</p>
      </div>
    </div>
  ),
}

export const IntensityLevels: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      {[0.2, 0.5, 0.8, 1.0].map((intensity) => (
        <div key={intensity} className="text-center">
          <PulseView variant="scale" intensity={intensity}>
            <IconButton>💡</IconButton>
          </PulseView>
          <p className="text-sm text-[var(--foreground-muted)] mt-2">{intensity}</p>
        </div>
      ))}
    </div>
  ),
}

export const Speeds: Story = {
  render: () => (
    <div className="flex gap-6 items-center">
      {[500, 1000, 1500, 3000].map((duration) => (
        <div key={duration} className="text-center">
          <PulseView variant="scale" duration={duration}>
            <Badge>{duration}ms</Badge>
          </PulseView>
          <p className="text-sm text-[var(--foreground-muted)] mt-2">{duration}ms</p>
        </div>
      ))}
    </div>
  ),
}

export const LimitedCount: Story = {
  render: () => {
    const [key, setKey] = useState(0)
    const [completed, setCompleted] = useState(false)

    return (
      <div className="flex flex-col items-center gap-6">
        <PulseView
          key={key}
          variant="glow"
          color="var(--warning)"
          count={3}
          duration={800}
          onComplete={() => setCompleted(true)}
        >
          <IconButton className="bg-[var(--warning)] text-[var(--warning-foreground)]">
            ⚠️
          </IconButton>
        </PulseView>

        <div className="text-center">
          <p className="text-sm text-[var(--foreground-muted)]">
            {completed ? '✅ Animação completa!' : 'Pulsa 3 vezes...'}
          </p>
          <button
            onClick={() => {
              setKey((k) => k + 1)
              setCompleted(false)
            }}
            className="mt-2 text-sm text-[var(--primary)] hover:underline"
          >
            Replay
          </button>
        </div>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [active, setActive] = useState(true)

    return (
      <div className="flex flex-col items-center gap-6">
        <PulseView active={active} variant="glow" color="var(--info)">
          <IconButton className="bg-[var(--info)]">🔵</IconButton>
        </PulseView>

        <button
          onClick={() => setActive(!active)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          {active ? 'Pausar' : 'Iniciar'} Animação
        </button>
      </div>
    )
  },
}

export const Breathing: Story = {
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="text-center">
        <BreathingView>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <span className="text-4xl">🧘</span>
          </div>
        </BreathingView>
        <p className="text-sm text-[var(--foreground-muted)] mt-4">Default (4s)</p>
      </div>

      <div className="text-center">
        <BreathingView duration={2000} scale={1.08}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="text-4xl">💜</span>
          </div>
        </BreathingView>
        <p className="text-sm text-[var(--foreground-muted)] mt-4">Fast (2s)</p>
      </div>

      <div className="text-center">
        <BreathingView duration={6000} scale={1.02}>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
            <span className="text-4xl">🌿</span>
          </div>
        </BreathingView>
        <p className="text-sm text-[var(--foreground-muted)] mt-4">Slow (6s)</p>
      </div>
    </div>
  ),
}

export const Attention: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-8">
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Trigger Animations
        </button>

        <div className="flex gap-8 items-center" key={key}>
          <div className="text-center">
            <AttentionView type="shake">
              <IconButton className="bg-[var(--error)]">❌</IconButton>
            </AttentionView>
            <p className="text-sm text-[var(--foreground-muted)] mt-2">shake</p>
          </div>

          <div className="text-center">
            <AttentionView type="wobble" duration={800}>
              <IconButton className="bg-[var(--warning)]">⚠️</IconButton>
            </AttentionView>
            <p className="text-sm text-[var(--foreground-muted)] mt-2">wobble</p>
          </div>

          <div className="text-center">
            <AttentionView type="flash" count={2}>
              <IconButton className="bg-[var(--info)]">💡</IconButton>
            </AttentionView>
            <p className="text-sm text-[var(--foreground-muted)] mt-2">flash</p>
          </div>

          <div className="text-center">
            <AttentionView type="heartbeat" duration={600}>
              <IconButton className="bg-red-500">❤️</IconButton>
            </AttentionView>
            <p className="text-sm text-[var(--foreground-muted)] mt-2">heartbeat</p>
          </div>
        </div>
      </div>
    )
  },
}

export const NotificationBadge: Story = {
  name: 'Notification Badge (SmartSenior)',
  render: () => (
    <div className="flex gap-8 items-center">
      <div className="relative">
        <IconButton className="bg-[var(--background-muted)] text-[var(--foreground)]">
          🔔
        </IconButton>
        <PulseView variant="scale" className="absolute -top-1 -right-1">
          <Badge className="bg-[var(--error)] text-white text-xs px-2">3</Badge>
        </PulseView>
      </div>

      <div className="relative">
        <IconButton className="bg-[var(--background-muted)] text-[var(--foreground)]">
          💬
        </IconButton>
        <PulseView variant="glow" color="var(--success)" className="absolute -top-1 -right-1">
          <Badge className="bg-[var(--success)] text-white text-xs px-2">12</Badge>
        </PulseView>
      </div>

      <div className="relative">
        <IconButton className="bg-[var(--background-muted)] text-[var(--foreground)]">
          📧
        </IconButton>
        <PulseView variant="ring" color="var(--primary)" className="absolute -top-1 -right-1">
          <Badge className="bg-[var(--primary)] text-white text-xs px-2">99+</Badge>
        </PulseView>
      </div>
    </div>
  ),
}

export const MedicationReminder: Story = {
  name: 'Medication Reminder (SmartSenior)',
  render: () => {
    const [taken, setTaken] = useState(false)

    return (
      <div className="p-6 max-w-sm">
        <div className="p-4 bg-white rounded-xl shadow-md border">
          <div className="flex items-start gap-4">
            <PulseView
              active={!taken}
              variant="glow"
              color="var(--warning)"
              duration={2000}
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--warning)] flex items-center justify-center">
                <span className="text-3xl">💊</span>
              </div>
            </PulseView>

            <div className="flex-1">
              <h3 className="font-semibold text-lg">Hora do medicamento!</h3>
              <p className="text-[var(--foreground-muted)]">
                Losartana 50mg
              </p>
              <p className="text-sm text-[var(--foreground-muted)]">
                Programado para 14:00
              </p>

              {!taken ? (
                <button
                  onClick={() => setTaken(true)}
                  className="mt-3 px-4 py-2 bg-[var(--success)] text-white rounded-lg w-full font-medium"
                >
                  ✓ Marcar como tomado
                </button>
              ) : (
                <div className="mt-3 px-4 py-2 bg-[var(--success)] text-white rounded-lg text-center">
                  ✓ Tomado às 14:05
                </div>
              )}
            </div>
          </div>
        </div>

        {taken && (
          <button
            onClick={() => setTaken(false)}
            className="mt-4 text-sm text-[var(--primary)] hover:underline w-full text-center"
          >
            Reset demo
          </button>
        )}
      </div>
    )
  },
}

export const EmergencyButton: Story = {
  name: 'Emergency Button (SmartSenior)',
  render: () => (
    <div className="p-8">
      <PulseView variant="ring" color="var(--error)" duration={1500}>
        <button className="w-32 h-32 rounded-full bg-[var(--error)] text-white flex flex-col items-center justify-center shadow-lg hover:bg-red-600 transition-colors">
          <span className="text-4xl">🆘</span>
          <span className="text-sm font-bold mt-1">EMERGÊNCIA</span>
        </button>
      </PulseView>
    </div>
  ),
}
