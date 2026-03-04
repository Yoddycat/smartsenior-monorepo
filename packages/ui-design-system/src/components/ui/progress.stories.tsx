import type { Meta, StoryObj } from '@storybook/react'
import { Progress, CircularProgress } from './progress'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  args: {
    value: 60,
    style: { width: '300px' },
  },
}

export const WithLabel: Story = {
  args: {
    value: 75,
    showLabel: true,
    label: 'Progresso',
    style: { width: '300px' },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <Progress value={60} label="Default" showLabel />
      <Progress value={100} variant="success" label="Sucesso" showLabel />
      <Progress value={45} variant="warning" label="Aviso" showLabel />
      <Progress value={20} variant="error" label="Erro" showLabel />
      <Progress value={80} variant="info" label="Info" showLabel />
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px' }}>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Pequeno (sm)
        </span>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Médio (md)
        </span>
        <Progress value={60} size="md" />
      </div>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Grande (lg)
        </span>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
}

export const Circular: Story = {
  render: () => (
    <CircularProgress value={75} />
  ),
}

export const CircularAllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <CircularProgress value={60} variant="default" />
      <CircularProgress value={100} variant="success" />
      <CircularProgress value={45} variant="warning" />
      <CircularProgress value={20} variant="error" />
      <CircularProgress value={80} variant="info" />
    </div>
  ),
}

export const CircularSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <CircularProgress value={75} size={60} strokeWidth={6} />
      <CircularProgress value={75} size={80} strokeWidth={8} />
      <CircularProgress value={75} size={100} strokeWidth={10} />
      <CircularProgress value={75} size={120} strokeWidth={12} />
    </div>
  ),
}

export const DownloadProgress: Story = {
  render: () => (
    <div style={{ width: '350px', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <span style={{ fontWeight: 500 }}>Baixando arquivo...</span>
        <span style={{ color: 'var(--foreground-muted)', fontSize: '0.875rem' }}>2.4 MB / 5.0 MB</span>
      </div>
      <Progress value={48} size="md" />
    </div>
  ),
}

export const ProfileCompletion: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', border: '1px solid var(--border)', borderRadius: '12px' }}>
      <CircularProgress value={65} variant="info" size={80} />
      <div>
        <h3 style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>Complete seu perfil</h3>
        <p style={{ margin: 0, color: 'var(--foreground-muted)', fontSize: '0.875rem' }}>
          Adicione mais informações para completar seu perfil.
        </p>
      </div>
    </div>
  ),
}

export const StepProgress: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <span style={{ fontWeight: 500 }}>Etapa 2 de 4</span>
        <span style={{ color: 'var(--foreground-muted)' }}>50%</span>
      </div>
      <Progress value={50} variant="info" size="lg" />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--foreground-muted)' }}>
        <span>Dados</span>
        <span>Endereço</span>
        <span>Pagamento</span>
        <span>Revisão</span>
      </div>
    </div>
  ),
}
