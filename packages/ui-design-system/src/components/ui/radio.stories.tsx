import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioGroup } from './radio'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    label: 'Opção única',
    name: 'example',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Plano Premium',
    description: 'Acesso completo a todos os recursos.',
    name: 'plan',
    value: 'premium',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Opção desabilitada',
    disabled: true,
    name: 'disabled',
  },
}

export const RadioGroupVertical: Story = {
  render: () => (
    <RadioGroup name="plan" defaultValue="basic">
      <Radio value="basic" label="Plano Básico" description="Recursos essenciais" />
      <Radio value="pro" label="Plano Pro" description="Recursos avançados" />
      <Radio value="enterprise" label="Plano Enterprise" description="Soluções personalizadas" />
    </RadioGroup>
  ),
}

export const RadioGroupHorizontal: Story = {
  render: () => (
    <RadioGroup name="size" defaultValue="md" orientation="horizontal">
      <Radio value="sm" label="Pequeno" />
      <Radio value="md" label="Médio" />
      <Radio value="lg" label="Grande" />
    </RadioGroup>
  ),
}

export const PaymentMethods: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Forma de Pagamento</h3>
      <RadioGroup name="payment" defaultValue="pix">
        <Radio value="pix" label="PIX" description="Pagamento instantâneo" />
        <Radio value="credit" label="Cartão de Crédito" description="Parcele em até 12x" />
        <Radio value="boleto" label="Boleto" description="Vencimento em 3 dias" />
      </RadioGroup>
    </div>
  ),
}
