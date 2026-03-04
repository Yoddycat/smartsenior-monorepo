import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState, EmptyStateNoResults, EmptyStateNoData } from './empty-state'
import { Button } from './button'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    title: 'Nenhum item encontrado',
    description: 'Não há itens para exibir no momento.',
  },
}

export const WithAction: Story = {
  args: {
    title: 'Nenhum projeto',
    description: 'Você ainda não criou nenhum projeto.',
    action: <Button variant="primary">Criar Projeto</Button>,
  },
}

export const CustomIcon: Story = {
  args: {
    icon: (
      <svg className="w-16 h-16 text-[var(--foreground-muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    title: 'Nenhum arquivo',
    description: 'Arraste arquivos aqui ou clique para fazer upload.',
    action: <Button variant="outline">Selecionar Arquivos</Button>,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <EmptyState size="sm" title="Pequeno" description="Versão compacta" />
      <EmptyState size="md" title="Médio" description="Versão padrão" />
      <EmptyState size="lg" title="Grande" description="Versão destacada" />
    </div>
  ),
}

export const NoResultsPreset: Story = {
  render: () => <EmptyStateNoResults onReset={() => alert('Filtros limpos')} />,
}

export const NoDataPreset: Story = {
  render: () => <EmptyStateNoData onCreate={() => alert('Criar novo')} createLabel="Adicionar Item" />,
}
