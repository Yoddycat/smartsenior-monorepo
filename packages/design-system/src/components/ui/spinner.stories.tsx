import type { Meta, StoryObj } from '@storybook/react'
import { Spinner, Loading, LoadingDots } from './spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {},
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Spinner variant="default" size="lg" />
      <Spinner variant="primary" size="lg" />
      <Spinner variant="secondary" size="lg" />
    </div>
  ),
}

export const LoadingWithText: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Loading size="sm" text="Carregando..." />
      <Loading size="md" text="Processando dados..." />
      <Loading size="lg" text="Aguarde um momento..." />
    </div>
  ),
}

export const LoadingOverlay: Story = {
  render: () => (
    <div style={{ position: 'relative', width: '300px', height: '200px', border: '1px solid var(--border)', borderRadius: '8px' }}>
      <p style={{ padding: '1rem' }}>Conteúdo abaixo do overlay</p>
      <Loading overlay text="Salvando..." />
    </div>
  ),
}

export const DotsAnimation: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span>Carregando</span>
      <LoadingDots />
    </div>
  ),
}

export const ButtonLoading: Story = {
  render: () => (
    <button
      disabled
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1.5rem',
        background: 'var(--primary)',
        color: 'var(--primary-foreground)',
        border: 'none',
        borderRadius: '8px',
        opacity: 0.7,
      }}
    >
      <Spinner size="sm" variant="secondary" />
      Processando...
    </button>
  ),
}
