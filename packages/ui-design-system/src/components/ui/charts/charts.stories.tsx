import type { Meta, StoryObj } from '@storybook/react'
import { BarChart } from './bar-chart'
import { LineChart } from './line-chart'
import { PieChart, DonutChart } from './pie-chart'
import { Sparkline } from './sparkline'

// ============================================
// BAR CHART STORIES
// ============================================

const barMeta: Meta<typeof BarChart> = {
  title: 'Charts/BarChart',
  component: BarChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default barMeta

type BarStory = StoryObj<typeof BarChart>

const barData = [
  { label: 'Jan', value: 120 },
  { label: 'Fev', value: 180 },
  { label: 'Mar', value: 150 },
  { label: 'Abr', value: 220 },
  { label: 'Mai', value: 190 },
  { label: 'Jun', value: 250 },
]

export const BarDefault: BarStory = {
  args: {
    data: barData,
  },
}

export const BarHorizontal: BarStory = {
  args: {
    data: barData,
    horizontal: true,
  },
}

export const BarNoAnimation: BarStory = {
  args: {
    data: barData,
    animated: false,
  },
}

export const BarCustomColors: BarStory = {
  args: {
    data: [
      { label: 'Produto A', value: 320, color: 'var(--success)' },
      { label: 'Produto B', value: 180, color: 'var(--warning)' },
      { label: 'Produto C', value: 250, color: 'var(--error)' },
      { label: 'Produto D', value: 400, color: 'var(--info)' },
    ],
    height: 250,
  },
}

export const BarMinimal: BarStory = {
  args: {
    data: barData,
    showValues: false,
    showLabels: false,
  },
}
