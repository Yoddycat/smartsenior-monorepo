import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { SuccessAnimation, ErrorAnimation, LoadingToSuccess } from './success-animation'

const meta: Meta<typeof SuccessAnimation> = {
  title: 'Components/SuccessAnimation',
  component: SuccessAnimation,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Animações de feedback para conclusão de ações.

## Componentes

### SuccessAnimation
Checkmark animado em círculo para feedback de sucesso.

### ErrorAnimation
X animado em círculo para feedback de erro.

### LoadingToSuccess
Spinner que transforma em sucesso ou erro.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SuccessAnimation>

export const Default: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <SuccessAnimation key={key} />
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay
        </button>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-end gap-6" key={key}>
          <div className="text-center">
            <SuccessAnimation size={48} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">48px</p>
          </div>
          <div className="text-center">
            <SuccessAnimation size={80} delay={200} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">80px</p>
          </div>
          <div className="text-center">
            <SuccessAnimation size={120} delay={400} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">120px</p>
          </div>
        </div>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay
        </button>
      </div>
    )
  },
}

export const Variants: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-6" key={key}>
          <div className="text-center">
            <SuccessAnimation variant="success" />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">success</p>
          </div>
          <div className="text-center">
            <SuccessAnimation variant="primary" delay={150} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">primary</p>
          </div>
          <div className="text-center">
            <SuccessAnimation variant="info" delay={300} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">info</p>
          </div>
          <div className="text-center">
            <SuccessAnimation variant="warning" delay={450} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">warning</p>
          </div>
        </div>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay
        </button>
      </div>
    )
  },
}

export const WithConfetti: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <SuccessAnimation key={key} size={100} confetti />
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay with Confetti
        </button>
      </div>
    )
  },
}

export const Error: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8" key={key}>
          <div className="text-center">
            <ErrorAnimation size={80} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">With shake</p>
          </div>
          <div className="text-center">
            <ErrorAnimation size={80} shake={false} delay={200} />
            <p className="text-sm text-[var(--foreground-muted)] mt-2">No shake</p>
          </div>
        </div>
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay
        </button>
      </div>
    )
  },
}

export const LoadingTransition: Story = {
  render: () => {
    const [state, setState] = useState<'loading' | 'success' | 'error'>('loading')

    return (
      <div className="flex flex-col items-center gap-6">
        <LoadingToSuccess
          state={state}
          size={100}
          confetti={state === 'success'}
        />

        <div className="flex gap-3">
          <button
            onClick={() => setState('loading')}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
          >
            Loading
          </button>
          <button
            onClick={() => setState('success')}
            className="px-4 py-2 bg-[var(--success)] text-white rounded-lg"
          >
            Success
          </button>
          <button
            onClick={() => setState('error')}
            className="px-4 py-2 bg-[var(--error)] text-white rounded-lg"
          >
            Error
          </button>
        </div>

        <p className="text-sm text-[var(--foreground-muted)]">
          Estado atual: <strong>{state}</strong>
        </p>
      </div>
    )
  },
}

export const SlowAnimation: Story = {
  render: () => {
    const [key, setKey] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <SuccessAnimation key={key} duration={1500} size={100} />
        <button
          onClick={() => setKey((k) => k + 1)}
          className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg"
        >
          Replay (1.5s)
        </button>
      </div>
    )
  },
}

export const MedicationTaken: Story = {
  name: 'Medication Taken (SmartSenior)',
  render: () => {
    const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle')

    const handleTake = () => {
      setState('loading')
      setTimeout(() => setState('success'), 1500)
    }

    const reset = () => setState('idle')

    return (
      <div className="p-6 max-w-sm">
        <div className="p-6 bg-white rounded-xl shadow-md border text-center">
          {state === 'idle' && (
            <>
              <div className="w-20 h-20 mx-auto rounded-full bg-[var(--warning)] flex items-center justify-center mb-4">
                <span className="text-4xl">💊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Losartana 50mg</h3>
              <p className="text-[var(--foreground-muted)] mb-4">
                Horário: 14:00
              </p>
              <button
                onClick={handleTake}
                className="w-full px-4 py-3 bg-[var(--success)] text-white rounded-lg font-medium text-lg"
              >
                Marcar como tomado
              </button>
            </>
          )}

          {state === 'loading' && (
            <>
              <LoadingToSuccess state="loading" size={80} />
              <p className="text-[var(--foreground-muted)] mt-4">
                Registrando...
              </p>
            </>
          )}

          {state === 'success' && (
            <>
              <SuccessAnimation size={80} confetti />
              <h3 className="text-xl font-semibold mt-4 text-[var(--success)]">
                Medicamento registrado!
              </h3>
              <p className="text-[var(--foreground-muted)] mt-2">
                Tomado às 14:05
              </p>
              <button
                onClick={reset}
                className="mt-4 text-sm text-[var(--primary)] hover:underline"
              >
                Reset demo
              </button>
            </>
          )}
        </div>
      </div>
    )
  },
}

export const TaskCompletion: Story = {
  name: 'Task Completion (SmartSenior)',
  render: () => {
    const [tasks, setTasks] = useState([
      { id: 1, label: 'Tomar medicamento da manhã', done: false },
      { id: 2, label: 'Beber 2 copos de água', done: false },
      { id: 3, label: 'Caminhar 10 minutos', done: false },
    ])
    const [celebrating, setCelebrating] = useState<number | null>(null)

    const completeTask = (id: number) => {
      setCelebrating(id)
      setTimeout(() => {
        setTasks((prev) =>
          prev.map((t) => (t.id === id ? { ...t, done: true } : t))
        )
        setCelebrating(null)
      }, 800)
    }

    const allDone = tasks.every((t) => t.done)

    return (
      <div className="p-6 max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Tarefas de Hoje</h2>

        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-4 rounded-xl border flex items-center gap-3 transition-colors ${
                task.done ? 'bg-[var(--success)]/10 border-[var(--success)]' : 'bg-white'
              }`}
            >
              {celebrating === task.id ? (
                <SuccessAnimation size={32} duration={400} />
              ) : task.done ? (
                <div className="w-8 h-8 rounded-full bg-[var(--success)] flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
              ) : (
                <button
                  onClick={() => completeTask(task.id)}
                  className="w-8 h-8 rounded-full border-2 border-[var(--border)] hover:border-[var(--success)] transition-colors"
                />
              )}
              <span className={task.done ? 'line-through text-[var(--foreground-muted)]' : ''}>
                {task.label}
              </span>
            </div>
          ))}
        </div>

        {allDone && (
          <div className="mt-6 text-center">
            <SuccessAnimation size={60} confetti variant="success" />
            <p className="mt-4 text-lg font-semibold text-[var(--success)]">
              Parabéns! Todas as tarefas concluídas!
            </p>
            <button
              onClick={() => setTasks((prev) => prev.map((t) => ({ ...t, done: false })))}
              className="mt-2 text-sm text-[var(--primary)] hover:underline"
            >
              Reset demo
            </button>
          </div>
        )}
      </div>
    )
  },
}
