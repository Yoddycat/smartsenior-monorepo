import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Aceito os termos de uso',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Receber notificações',
    description: 'Receba atualizações por email sobre novidades e ofertas.',
  },
}

export const Checked: Story = {
  args: {
    label: 'Item selecionado',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Opção desabilitada',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Opção desabilitada marcada',
    disabled: true,
    defaultChecked: true,
  },
}

export const Error: Story = {
  args: {
    label: 'Campo obrigatório',
    error: true,
  },
}

export const CheckboxGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Checkbox label="Opção 1" description="Descrição da primeira opção" />
      <Checkbox label="Opção 2" description="Descrição da segunda opção" defaultChecked />
      <Checkbox label="Opção 3" description="Descrição da terceira opção" />
    </div>
  ),
}
