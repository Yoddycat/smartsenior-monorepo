import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Stepper>

const steps = [
  { label: 'Dados Pessoais', description: 'Informações básicas' },
  { label: 'Endereço', description: 'Local de entrega' },
  { label: 'Pagamento', description: 'Forma de pagamento' },
  { label: 'Confirmação', description: 'Revisar pedido' },
]

export const FirstStep: Story = {
  args: { steps, currentStep: 1 },
}

export const MiddleStep: Story = {
  args: { steps, currentStep: 2 },
}

export const LastStep: Story = {
  args: { steps, currentStep: 4 },
}

export const Completed: Story = {
  args: { steps, currentStep: 5 },
}

export const Clickable: Story = {
  args: {
    steps,
    currentStep: 3,
    onStepClick: (step) => alert(`Clicou no passo ${step}`),
  },
}

export const SimpleSteps: Story = {
  args: {
    steps: [
      { label: 'Passo 1' },
      { label: 'Passo 2' },
      { label: 'Passo 3' },
    ],
    currentStep: 2,
  },
}
