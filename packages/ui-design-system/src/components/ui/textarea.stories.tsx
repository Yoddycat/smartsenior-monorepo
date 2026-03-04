import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: { placeholder: 'Digite sua mensagem...', style: { width: '350px' } },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style: { width: '350px' },
  },
}

export const Error: Story = {
  args: {
    error: true,
    placeholder: 'Campo obrigatório',
    style: { width: '350px' },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Texto desabilitado',
    style: { width: '350px' },
  },
}

export const NoResize: Story = {
  args: {
    resize: 'none',
    placeholder: 'Sem redimensionamento',
    style: { width: '350px' },
  },
}

export const FormExample: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
        Mensagem
      </label>
      <Textarea placeholder="Escreva sua mensagem..." rows={5} />
      <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'var(--foreground-muted)' }}>
        Máximo de 500 caracteres
      </p>
    </div>
  ),
}
