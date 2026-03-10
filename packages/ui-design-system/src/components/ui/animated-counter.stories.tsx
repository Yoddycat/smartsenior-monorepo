import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { AnimatedCounter, AnimatedPercentage, AnimatedCurrency } from './animated-counter'

const meta: Meta<typeof AnimatedCounter> = {
  title: 'Components/AnimatedCounter',
  component: AnimatedCounter,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Componente de contador animado que exibe números com animação suave.

## Uso
Ideal para:
- Estatísticas e métricas
- Dashboards
- Valores dinâmicos que mudam
- Porcentagens de progresso
- Valores monetários

## Variantes
- **AnimatedCounter**: Contador genérico
- **AnimatedPercentage**: Com sufixo %
- **AnimatedCurrency**: Formatação de moeda
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AnimatedCounter>

export const Default: Story = {
  args: {
    value: 1234,
    className: 'text-4xl font-bold',
  },
}

export const WithSuffix: Story = {
  args: {
    value: 85,
    suffix: ' pontos',
    className: 'text-3xl font-semibold text-[var(--primary)]',
  },
}

export const WithPrefix: Story = {
  args: {
    value: 42,
    prefix: '# ',
    className: 'text-3xl font-bold',
  },
}

export const Percentage: Story = {
  render: () => (
    <div className="text-5xl font-bold text-[var(--success)]">
      <AnimatedPercentage value={87.5} decimals={1} duration={1500} />
    </div>
  ),
}

export const Currency: Story = {
  render: () => (
    <div className="text-4xl font-bold">
      <AnimatedCurrency value={1234.56} duration={2000} />
    </div>
  ),
}

export const CustomFormat: Story = {
  args: {
    value: 1500000,
    formatValue: (v) => v.toLocaleString('pt-BR'),
    className: 'text-3xl font-bold',
  },
}

export const WithDecimals: Story = {
  args: {
    value: 98.7,
    decimals: 1,
    suffix: '°C',
    className: 'text-4xl font-bold text-[var(--warning)]',
  },
}

export const SlowAnimation: Story = {
  args: {
    value: 100,
    duration: 3000,
    suffix: '%',
    className: 'text-5xl font-bold',
  },
}

export const WithDelay: Story = {
  args: {
    value: 500,
    delay: 1000,
    className: 'text-4xl font-bold',
  },
  parameters: {
    docs: {
      description: {
        story: 'Animação começa após 1 segundo de delay.',
      },
    },
  },
}

export const EasingVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 text-center">
      {(['linear', 'easeOut', 'easeInOut', 'spring'] as const).map((easing) => (
        <div key={easing} className="space-y-2">
          <AnimatedCounter
            value={100}
            easing={easing}
            duration={2000}
            className="text-3xl font-bold"
          />
          <p className="text-sm text-[var(--foreground-muted)]">{easing}</p>
        </div>
      ))}
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(0)

    return (
      <div className="flex flex-col items-center gap-6">
        <AnimatedCounter
          value={value}
          duration={800}
          className="text-6xl font-bold text-[var(--primary)]"
        />
        <div className="flex gap-3">
          <button
            onClick={() => setValue((v) => v + 10)}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            +10
          </button>
          <button
            onClick={() => setValue((v) => v + 100)}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            +100
          </button>
          <button
            onClick={() => setValue(0)}
            className="px-4 py-2 bg-[var(--foreground-muted)] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Reset
          </button>
        </div>
      </div>
    )
  },
}

export const StatsGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-6 bg-[var(--background-muted)] rounded-xl">
      <div className="text-center">
        <AnimatedCounter
          value={1234}
          className="text-3xl font-bold text-[var(--foreground)]"
        />
        <p className="text-sm text-[var(--foreground-muted)] mt-1">Usuários</p>
      </div>
      <div className="text-center">
        <AnimatedPercentage
          value={94.5}
          decimals={1}
          className="text-3xl font-bold text-[var(--success)]"
        />
        <p className="text-sm text-[var(--foreground-muted)] mt-1">Satisfação</p>
      </div>
      <div className="text-center">
        <AnimatedCurrency
          value={45678.90}
          duration={1500}
          className="text-3xl font-bold text-[var(--primary)]"
        />
        <p className="text-sm text-[var(--foreground-muted)] mt-1">Receita</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso em um grid de estatísticas.',
      },
    },
  },
}

export const HealthMetrics: Story = {
  name: 'Health Metrics (SmartSenior)',
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-6 max-w-md">
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">❤️</span>
          <span className="text-sm text-[var(--foreground-muted)]">BPM</span>
        </div>
        <AnimatedCounter
          value={72}
          duration={1200}
          className="text-4xl font-bold text-red-500"
        />
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">👣</span>
          <span className="text-sm text-[var(--foreground-muted)]">Passos</span>
        </div>
        <AnimatedCounter
          value={8432}
          formatValue={(v) => v.toLocaleString('pt-BR')}
          duration={1500}
          className="text-4xl font-bold text-blue-500"
        />
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">💧</span>
          <span className="text-sm text-[var(--foreground-muted)]">Hidratação</span>
        </div>
        <AnimatedPercentage
          value={65}
          duration={1000}
          className="text-4xl font-bold text-cyan-500"
        />
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm border">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">😴</span>
          <span className="text-sm text-[var(--foreground-muted)]">Sono</span>
        </div>
        <AnimatedCounter
          value={7.5}
          decimals={1}
          suffix="h"
          duration={1200}
          className="text-4xl font-bold text-purple-500"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de métricas de saúde para o SmartSenior.',
      },
    },
  },
}
