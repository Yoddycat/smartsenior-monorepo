import type { Meta, StoryObj } from '@storybook/react'
import { LineChart } from './line-chart'

const meta: Meta<typeof LineChart> = {
  title: 'Charts/LineChart',
  component: LineChart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof LineChart>

const singleSeries = [
  {
    name: 'Vendas',
    data: [
      { label: 'Jan', value: 120 },
      { label: 'Fev', value: 180 },
      { label: 'Mar', value: 150 },
      { label: 'Abr', value: 220 },
      { label: 'Mai', value: 190 },
      { label: 'Jun', value: 280 },
    ],
  },
]

const multipleSeries = [
  {
    name: 'Vendas',
    data: [
      { label: 'Jan', value: 120 },
      { label: 'Fev', value: 180 },
      { label: 'Mar', value: 150 },
      { label: 'Abr', value: 220 },
      { label: 'Mai', value: 190 },
      { label: 'Jun', value: 280 },
    ],
    color: 'var(--primary)',
  },
  {
    name: 'Custos',
    data: [
      { label: 'Jan', value: 80 },
      { label: 'Fev', value: 100 },
      { label: 'Mar', value: 90 },
      { label: 'Abr', value: 120 },
      { label: 'Mai', value: 110 },
      { label: 'Jun', value: 140 },
    ],
    color: 'var(--error)',
  },
  {
    name: 'Lucro',
    data: [
      { label: 'Jan', value: 40 },
      { label: 'Fev', value: 80 },
      { label: 'Mar', value: 60 },
      { label: 'Abr', value: 100 },
      { label: 'Mai', value: 80 },
      { label: 'Jun', value: 140 },
    ],
    color: 'var(--success)',
  },
]

export const Default: Story = {
  args: {
    series: singleSeries,
  },
}

export const MultipleSeries: Story = {
  args: {
    series: multipleSeries,
  },
}

export const AreaChart: Story = {
  args: {
    series: singleSeries,
    showArea: true,
  },
}

export const MultipleAreaChart: Story = {
  args: {
    series: multipleSeries,
    showArea: true,
  },
}

export const StraightLines: Story = {
  args: {
    series: singleSeries,
    curved: false,
  },
}

export const NoDots: Story = {
  args: {
    series: singleSeries,
    showDots: false,
  },
}

export const NoGrid: Story = {
  args: {
    series: singleSeries,
    showGrid: false,
  },
}

export const Minimal: Story = {
  args: {
    series: singleSeries,
    showGrid: false,
    showDots: false,
    showLabels: false,
    showLegend: false,
  },
}

export const TallChart: Story = {
  args: {
    series: multipleSeries,
    height: 400,
    showArea: true,
  },
}
