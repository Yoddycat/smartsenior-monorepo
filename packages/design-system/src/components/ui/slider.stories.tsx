import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: { defaultValue: 50, style: { width: '300px' } },
}

export const WithLabel: Story = {
  args: {
    label: 'Volume',
    showValue: true,
    defaultValue: 75,
    style: { width: '300px' },
  },
}

export const CustomRange: Story = {
  args: {
    label: 'Temperatura',
    min: 16,
    max: 30,
    defaultValue: 22,
    showValue: true,
    formatValue: (v) => `${v}°C`,
    style: { width: '300px' },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
      <Slider size="sm" label="Pequeno" showValue defaultValue={30} />
      <Slider size="md" label="Médio" showValue defaultValue={50} />
      <Slider size="lg" label="Grande" showValue defaultValue={70} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'Desabilitado',
    defaultValue: 50,
    disabled: true,
    style: { width: '300px' },
  },
}
