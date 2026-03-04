import type { Meta, StoryObj } from '@storybook/react'
import { PieChart, DonutChart } from './pie-chart'

const meta: Meta<typeof PieChart> = {
  title: 'Charts/PieChart',
  component: PieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PieChart>

const defaultData = [
  { label: 'Desktop', value: 45 },
  { label: 'Mobile', value: 35 },
  { label: 'Tablet', value: 15 },
  { label: 'Outros', value: 5 },
]

const budgetData = [
  { label: 'Marketing', value: 30000, color: 'var(--primary)' },
  { label: 'Desenvolvimento', value: 50000, color: 'var(--success)' },
  { label: 'Operações', value: 25000, color: 'var(--warning)' },
  { label: 'Suporte', value: 15000, color: 'var(--info)' },
]

export const Default: Story = {
  args: {
    data: defaultData,
  },
}

export const Donut: Story = {
  args: {
    data: defaultData,
    donut: true,
  },
}

export const LargeSize: Story = {
  args: {
    data: defaultData,
    size: 300,
  },
}

export const WithLabels: Story = {
  args: {
    data: defaultData,
    showLabels: true,
    size: 250,
  },
}

export const NoLegend: Story = {
  args: {
    data: defaultData,
    showLegend: false,
  },
}

export const CustomColors: Story = {
  args: {
    data: budgetData,
    size: 250,
  },
}

export const ThinDonut: Story = {
  args: {
    data: defaultData,
    donut: true,
    donutWidth: 20,
    size: 200,
  },
}

export const ThickDonut: Story = {
  args: {
    data: defaultData,
    donut: true,
    donutWidth: 60,
    size: 250,
  },
}

// DonutChart alias stories
const donutMeta: Meta<typeof DonutChart> = {
  title: 'Charts/DonutChart',
  component: DonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const DonutChartDefault: StoryObj<typeof DonutChart> = {
  render: () => <DonutChart data={defaultData} />,
}

export const DonutChartWithLabels: StoryObj<typeof DonutChart> = {
  render: () => <DonutChart data={defaultData} showLabels size={250} />,
}

export const DonutChartBudget: StoryObj<typeof DonutChart> = {
  render: () => <DonutChart data={budgetData} size={280} />,
}
