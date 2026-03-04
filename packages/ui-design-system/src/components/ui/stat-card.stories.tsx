import type { Meta, StoryObj } from '@storybook/react'
import { StatCard, MiniStat } from './stat-card'

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof StatCard>

export const Default: Story = {
  args: {
    title: 'Total de Vendas',
    value: 'R$ 45.231',
    style: { width: '280px' },
  },
}

export const WithDescription: Story = {
  args: {
    title: 'Novos Usuários',
    value: '1.234',
    description: 'Últimos 30 dias',
    style: { width: '280px' },
  },
}

export const WithTrendUp: Story = {
  args: {
    title: 'Receita',
    value: 'R$ 89.400',
    trend: { value: 12.5, direction: 'up', label: 'vs mês anterior' },
    style: { width: '280px' },
  },
}

export const WithTrendDown: Story = {
  args: {
    title: 'Taxa de Cancelamento',
    value: '2.4%',
    trend: { value: -0.8, direction: 'down', label: 'vs mês anterior' },
    variant: 'success',
    style: { width: '280px' },
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Pedidos',
    value: '342',
    trend: { value: 8, direction: 'up' },
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    style: { width: '280px' },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', width: '600px' }}>
      <StatCard title="Default" value="1.234" variant="default" />
      <StatCard title="Primary" value="5.678" variant="primary" />
      <StatCard title="Success" value="98%" variant="success" trend={{ value: 5, direction: 'up' }} />
      <StatCard title="Warning" value="23" variant="warning" trend={{ value: 3, direction: 'up' }} />
      <StatCard title="Error" value="12" variant="error" trend={{ value: -2, direction: 'down' }} />
    </div>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', width: '100%' }}>
      <StatCard
        title="Receita Total"
        value="R$ 284.500"
        trend={{ value: 14.2, direction: 'up', label: 'vs mês anterior' }}
        icon={
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="12" y1="1" x2="12" y2="23" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        }
        variant="primary"
      />
      <StatCard
        title="Clientes"
        value="2.430"
        trend={{ value: 8.1, direction: 'up' }}
        icon={
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
      />
      <StatCard
        title="Conversão"
        value="3.2%"
        trend={{ value: 0.5, direction: 'up' }}
        variant="success"
      />
      <StatCard
        title="Suporte"
        value="12"
        description="Tickets abertos"
        variant="warning"
      />
    </div>
  ),
  parameters: { layout: 'padded' },
}

export const MiniStats: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <MiniStat label="Visitantes" value="1.2K" />
      <MiniStat label="Páginas/Sessão" value="4.3" />
      <MiniStat label="Tempo Médio" value="2m 30s" />
    </div>
  ),
}
