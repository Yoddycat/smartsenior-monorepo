import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { label: 'Ativar notificações' },
}

export const WithDescription: Story = {
  args: {
    label: 'Modo escuro',
    description: 'Alterna entre temas claro e escuro',
  },
}

export const Checked: Story = {
  args: { label: 'Ativado', defaultChecked: true },
}

export const Disabled: Story = {
  args: { label: 'Opção desabilitada', disabled: true },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Switch size="sm" label="Pequeno" />
      <Switch size="md" label="Médio" />
      <Switch size="lg" label="Grande" />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Switch
          label="Modo avião"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p>Estado: {checked ? 'Ativado' : 'Desativado'}</p>
      </div>
    )
  },
}
