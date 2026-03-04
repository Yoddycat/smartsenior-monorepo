import type { Meta, StoryObj } from '@storybook/react'
import { Timeline, TimelineItem, TimelineTitle, TimelineDescription, TimelineTime } from './timeline'

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Timeline>

export const Default: Story = {
  render: () => (
    <Timeline style={{ width: '400px' }}>
      <TimelineItem status="completed">
        <TimelineTitle>Pedido Confirmado</TimelineTitle>
        <TimelineDescription>Seu pedido foi recebido e confirmado.</TimelineDescription>
        <TimelineTime>10/03/2024 às 14:30</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Em Preparação</TimelineTitle>
        <TimelineDescription>Estamos preparando seu pedido.</TimelineDescription>
        <TimelineTime>10/03/2024 às 15:00</TimelineTime>
      </TimelineItem>
      <TimelineItem status="current">
        <TimelineTitle>Em Transporte</TimelineTitle>
        <TimelineDescription>Seu pedido está a caminho.</TimelineDescription>
        <TimelineTime>10/03/2024 às 16:30</TimelineTime>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Entregue</TimelineTitle>
        <TimelineDescription>Aguardando entrega.</TimelineDescription>
      </TimelineItem>
    </Timeline>
  ),
}

export const AllCompleted: Story = {
  render: () => (
    <Timeline style={{ width: '400px' }}>
      <TimelineItem status="completed">
        <TimelineTitle>Conta Criada</TimelineTitle>
        <TimelineTime>01/01/2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Email Verificado</TimelineTitle>
        <TimelineTime>01/01/2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Perfil Completo</TimelineTitle>
        <TimelineTime>02/01/2024</TimelineTime>
      </TimelineItem>
    </Timeline>
  ),
}

export const WithCustomIcons: Story = {
  render: () => (
    <Timeline style={{ width: '400px' }}>
      <TimelineItem
        status="completed"
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        }
      >
        <TimelineTitle>Aprovado</TimelineTitle>
      </TimelineItem>
      <TimelineItem
        status="current"
        icon={
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        }
      >
        <TimelineTitle>Em Processamento</TimelineTitle>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Finalizado</TimelineTitle>
      </TimelineItem>
    </Timeline>
  ),
}

export const ProjectHistory: Story = {
  render: () => (
    <Timeline style={{ width: '450px' }}>
      <TimelineItem status="completed">
        <TimelineTitle>Projeto Iniciado</TimelineTitle>
        <TimelineDescription>
          Requisitos definidos e equipe formada.
        </TimelineDescription>
        <TimelineTime>Janeiro 2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="completed">
        <TimelineTitle>Design Aprovado</TimelineTitle>
        <TimelineDescription>
          Protótipos revisados e aprovados pelo cliente.
        </TimelineDescription>
        <TimelineTime>Fevereiro 2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="current">
        <TimelineTitle>Desenvolvimento</TimelineTitle>
        <TimelineDescription>
          Implementação das funcionalidades principais em andamento.
        </TimelineDescription>
        <TimelineTime>Março 2024</TimelineTime>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Testes</TimelineTitle>
        <TimelineDescription>
          QA e testes de aceitação.
        </TimelineDescription>
      </TimelineItem>
      <TimelineItem status="upcoming">
        <TimelineTitle>Lançamento</TimelineTitle>
        <TimelineDescription>
          Deploy em produção.
        </TimelineDescription>
      </TimelineItem>
    </Timeline>
  ),
}
