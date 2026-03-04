import type { Meta, StoryObj } from '@storybook/react'
import { ErrorState, NotFoundState, ServerErrorState, NetworkErrorState } from './error-state'

const meta: Meta<typeof ErrorState> = {
  title: 'Components/ErrorState',
  component: ErrorState,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof ErrorState>

export const Default: Story = {
  args: {
    onRetry: () => alert('Tentando novamente...'),
  },
}

export const WithDetails: Story = {
  args: {
    title: 'Erro ao carregar dados',
    description: 'Não foi possível conectar ao servidor.',
    error: new Error('Connection timeout after 30000ms'),
    showDetails: true,
    onRetry: () => alert('Tentando novamente...'),
  },
}

export const WithBackAndRetry: Story = {
  args: {
    title: 'Falha na operação',
    description: 'A ação não pôde ser concluída.',
    onBack: () => alert('Voltando...'),
    onRetry: () => alert('Tentando novamente...'),
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <ErrorState size="sm" title="Erro pequeno" onRetry={() => {}} />
      <ErrorState size="md" title="Erro médio" onRetry={() => {}} />
      <ErrorState size="lg" title="Erro grande" onRetry={() => {}} />
    </div>
  ),
}

export const NotFound: Story = {
  render: () => <NotFoundState onBack={() => alert('Voltando...')} />,
}

export const ServerError: Story = {
  render: () => <ServerErrorState onRetry={() => alert('Tentando novamente...')} />,
}

export const NetworkError: Story = {
  render: () => <NetworkErrorState onRetry={() => alert('Tentando novamente...')} />,
}
