import type { Meta, StoryObj } from '@storybook/react'
import { Sparkline } from './sparkline'

const meta: Meta<typeof Sparkline> = {
  title: 'Charts/Sparkline',
  component: Sparkline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Sparkline>

const trendUp = [10, 15, 12, 18, 22, 20, 28, 32, 30, 38, 42, 45]
const trendDown = [45, 42, 38, 30, 32, 28, 20, 22, 18, 12, 15, 10]
const volatile = [20, 35, 15, 40, 25, 45, 20, 50, 30, 55, 35, 60]
const stable = [30, 32, 31, 29, 30, 31, 30, 32, 31, 30, 29, 31]

export const Default: Story = {
  args: {
    data: trendUp,
  },
}

export const TrendingUp: Story = {
  args: {
    data: trendUp,
    color: 'var(--success)',
  },
}

export const TrendingDown: Story = {
  args: {
    data: trendDown,
    color: 'var(--error)',
  },
}

export const Volatile: Story = {
  args: {
    data: volatile,
    color: 'var(--warning)',
  },
}

export const Stable: Story = {
  args: {
    data: stable,
    color: 'var(--info)',
  },
}

export const Wider: Story = {
  args: {
    data: trendUp,
    width: 200,
    height: 40,
  },
}

export const NoArea: Story = {
  args: {
    data: trendUp,
    showArea: false,
  },
}

export const NoDot: Story = {
  args: {
    data: trendUp,
    showDot: false,
  },
}

export const StraightLines: Story = {
  args: {
    data: volatile,
    curved: false,
  },
}

export const Minimal: Story = {
  args: {
    data: trendUp,
    showArea: false,
    showDot: false,
    curved: false,
  },
}

export const InlineUsage: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 bg-[var(--card)] rounded-lg">
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--foreground-muted)]">Receita</span>
        <Sparkline data={trendUp} color="var(--success)" width={80} height={24} />
        <span className="text-sm font-medium text-[var(--success)]">+12%</span>
      </div>
      <div className="w-px h-6 bg-[var(--border)]" />
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--foreground-muted)]">Custos</span>
        <Sparkline data={stable} color="var(--info)" width={80} height={24} />
        <span className="text-sm font-medium text-[var(--foreground)]">0%</span>
      </div>
      <div className="w-px h-6 bg-[var(--border)]" />
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--foreground-muted)]">Churn</span>
        <Sparkline data={trendDown} color="var(--error)" width={80} height={24} />
        <span className="text-sm font-medium text-[var(--error)]">-8%</span>
      </div>
    </div>
  ),
}
