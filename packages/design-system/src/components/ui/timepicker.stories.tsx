import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TimePicker } from './timepicker'

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof TimePicker>

export const Default: Story = {
  args: { style: { width: '200px' } },
}

export const WithValue: Story = {
  args: {
    defaultValue: '14:30',
    style: { width: '200px' },
  },
}

export const MinuteStep15: Story = {
  args: {
    minuteStep: 15,
    placeholder: 'Intervalos de 15min',
    style: { width: '200px' },
  },
}

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Selecione um horário',
    style: { width: '200px' },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '09:00',
    style: { width: '200px' },
  },
}

export const Controlled: Story = {
  render: () => {
    const [time, setTime] = useState('12:00')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
        <TimePicker value={time} onChange={setTime} />
        <p>Horário selecionado: {time}</p>
      </div>
    )
  },
}
