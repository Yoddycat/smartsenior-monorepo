import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { AnimatedCheckbox, AnimatedCheckboxGroup } from './animated-checkbox'

const meta: Meta<typeof AnimatedCheckbox> = {
  title: 'Components/AnimatedCheckbox',
  component: AnimatedCheckbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Checkbox com animação SVG suave para o checkmark.

## Características
- Animação de stroke-dashoffset no checkmark
- Efeito haptic (escala) ao clicar
- Efeito bounce opcional
- Múltiplas variantes de cor
- Tamanhos ajustáveis
- Acessível (WCAG AA)
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AnimatedCheckbox>

export const Default: Story = {
  args: {
    label: 'Aceito os termos de uso',
  },
}

export const WithDescription: Story = {
  args: {
    label: 'Lembrar de mim',
    description: 'Manter conectado neste dispositivo por 30 dias',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AnimatedCheckbox size="sm" label="Pequeno (sm)" defaultChecked />
      <AnimatedCheckbox size="md" label="Médio (md) - padrão" defaultChecked />
      <AnimatedCheckbox size="lg" label="Grande (lg)" defaultChecked />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AnimatedCheckbox variant="default" label="Default" defaultChecked />
      <AnimatedCheckbox variant="success" label="Success" defaultChecked />
      <AnimatedCheckbox variant="warning" label="Warning" defaultChecked />
      <AnimatedCheckbox variant="error" label="Error" defaultChecked />
      <AnimatedCheckbox variant="info" label="Info" defaultChecked />
    </div>
  ),
}

export const WithBounce: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <div className="flex flex-col gap-4">
        <AnimatedCheckbox
          checked={checked}
          onCheckedChange={setChecked}
          label="Clique para ver o efeito bounce"
          variant="success"
          bounce
          size="lg"
        />
        <p className="text-sm text-[var(--foreground-muted)]">
          Status: {checked ? '✅ Marcado' : '⬜ Desmarcado'}
        </p>
      </div>
    )
  },
}

export const Controlled: Story = {
  render: () => {
    const [values, setValues] = useState({
      option1: false,
      option2: true,
      option3: false,
    })

    return (
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <AnimatedCheckbox
            checked={values.option1}
            onCheckedChange={(checked) => setValues({ ...values, option1: checked })}
            label="Notificações por email"
            variant="default"
          />
          <AnimatedCheckbox
            checked={values.option2}
            onCheckedChange={(checked) => setValues({ ...values, option2: checked })}
            label="Notificações push"
            variant="default"
          />
          <AnimatedCheckbox
            checked={values.option3}
            onCheckedChange={(checked) => setValues({ ...values, option3: checked })}
            label="Notificações SMS"
            variant="default"
          />
        </div>
        <div className="text-sm p-3 bg-[var(--background-muted)] rounded-lg">
          <strong>Estado atual:</strong>
          <pre className="mt-1">{JSON.stringify(values, null, 2)}</pre>
        </div>
      </div>
    )
  },
}

export const SlowAnimation: Story = {
  args: {
    label: 'Animação lenta (500ms)',
    duration: 500,
    variant: 'success',
    size: 'lg',
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AnimatedCheckbox label="Desabilitado desmarcado" disabled />
      <AnimatedCheckbox label="Desabilitado marcado" disabled defaultChecked />
    </div>
  ),
}

export const Error: Story = {
  args: {
    label: 'Campo obrigatório',
    description: 'Você precisa aceitar os termos para continuar',
    error: true,
  },
}

export const Group: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['daily'])

    const toggleOption = (option: string) => {
      setSelected((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      )
    }

    return (
      <AnimatedCheckboxGroup
        label="Frequência de lembretes"
        description="Escolha quando deseja receber lembretes de medicamentos"
      >
        <AnimatedCheckbox
          checked={selected.includes('daily')}
          onCheckedChange={() => toggleOption('daily')}
          label="Diariamente"
          variant="success"
        />
        <AnimatedCheckbox
          checked={selected.includes('weekly')}
          onCheckedChange={() => toggleOption('weekly')}
          label="Semanalmente"
          variant="success"
        />
        <AnimatedCheckbox
          checked={selected.includes('monthly')}
          onCheckedChange={() => toggleOption('monthly')}
          label="Mensalmente"
          variant="success"
        />
      </AnimatedCheckboxGroup>
    )
  },
}

export const HorizontalGroup: Story = {
  render: () => (
    <AnimatedCheckboxGroup
      label="Selecione os dias"
      orientation="horizontal"
    >
      <AnimatedCheckbox label="Seg" size="sm" defaultChecked />
      <AnimatedCheckbox label="Ter" size="sm" defaultChecked />
      <AnimatedCheckbox label="Qua" size="sm" />
      <AnimatedCheckbox label="Qui" size="sm" defaultChecked />
      <AnimatedCheckbox label="Sex" size="sm" />
      <AnimatedCheckbox label="Sáb" size="sm" />
      <AnimatedCheckbox label="Dom" size="sm" />
    </AnimatedCheckboxGroup>
  ),
}

export const HealthReminders: Story = {
  name: 'Health Reminders (SmartSenior)',
  render: () => {
    const [reminders, setReminders] = useState({
      medication: true,
      hydration: true,
      exercise: false,
      sleep: true,
    })

    const toggleReminder = (key: keyof typeof reminders) => {
      setReminders((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <div className="p-6 max-w-sm space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-1">Lembretes de Saúde</h2>
          <p className="text-sm text-[var(--foreground-muted)]">
            Configure quais lembretes você deseja receber
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-[var(--background-subtle)] rounded-xl">
            <AnimatedCheckbox
              checked={reminders.medication}
              onCheckedChange={() => toggleReminder('medication')}
              label="💊 Medicamentos"
              description="Lembrete para tomar seus remédios"
              variant="success"
              bounce
              size="lg"
            />
          </div>

          <div className="p-4 bg-[var(--background-subtle)] rounded-xl">
            <AnimatedCheckbox
              checked={reminders.hydration}
              onCheckedChange={() => toggleReminder('hydration')}
              label="💧 Hidratação"
              description="Lembrete para beber água"
              variant="info"
              bounce
              size="lg"
            />
          </div>

          <div className="p-4 bg-[var(--background-subtle)] rounded-xl">
            <AnimatedCheckbox
              checked={reminders.exercise}
              onCheckedChange={() => toggleReminder('exercise')}
              label="🏃 Exercícios"
              description="Lembrete para fazer atividade física"
              variant="warning"
              bounce
              size="lg"
            />
          </div>

          <div className="p-4 bg-[var(--background-subtle)] rounded-xl">
            <AnimatedCheckbox
              checked={reminders.sleep}
              onCheckedChange={() => toggleReminder('sleep')}
              label="😴 Hora de dormir"
              description="Lembrete para ir descansar"
              variant="default"
              bounce
              size="lg"
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-[var(--foreground-muted)]">
            {Object.values(reminders).filter(Boolean).length} de 4 lembretes ativos
          </p>
        </div>
      </div>
    )
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
}
