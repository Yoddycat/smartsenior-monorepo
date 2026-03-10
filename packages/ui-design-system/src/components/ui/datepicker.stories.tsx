import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DatePicker } from './datepicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {},
}

export const WithValue: Story = {
  args: {
    defaultValue: new Date(),
  },
}

export const WithMinMax: Story = {
  args: {
    minDate: new Date(),
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias
    placeholder: 'Próximos 30 dias',
  },
}

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Selecione uma data',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: new Date(),
  },
}

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <DatePicker value={date} onChange={setDate} />
        <p>Data selecionada: {date?.toLocaleDateString('pt-BR') || 'Nenhuma'}</p>
      </div>
    )
  },
}
