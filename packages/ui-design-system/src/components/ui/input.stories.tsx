import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'search'],
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Digite seu nome...',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'João da Silva',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'seu@email.com',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Sua senha',
  },
}

export const Error: Story = {
  args: {
    error: true,
    defaultValue: 'email-invalido',
    placeholder: 'Digite seu email',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Campo desabilitado',
  },
}

export const WithIcon: Story = {
  render: () => (
    <Input
      placeholder="Buscar..."
      leftElement={
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      }
    />
  ),
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Input placeholder="Normal" />
      <Input placeholder="Com valor" defaultValue="Texto digitado" />
      <Input placeholder="Com erro" error defaultValue="Valor inválido" />
      <Input placeholder="Desabilitado" disabled />
    </div>
  ),
}
