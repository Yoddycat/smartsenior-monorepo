import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './tooltip'
import { Button } from './button'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="Esta é uma dica de ferramenta">
      <Button>Passe o mouse aqui</Button>
    </Tooltip>
  ),
}

export const Top: Story = {
  render: () => (
    <Tooltip content="Tooltip no topo" side="top">
      <Button>Topo</Button>
    </Tooltip>
  ),
}

export const Right: Story = {
  render: () => (
    <Tooltip content="Tooltip à direita" side="right">
      <Button>Direita</Button>
    </Tooltip>
  ),
}

export const Bottom: Story = {
  render: () => (
    <Tooltip content="Tooltip embaixo" side="bottom">
      <Button>Embaixo</Button>
    </Tooltip>
  ),
}

export const Left: Story = {
  render: () => (
    <Tooltip content="Tooltip à esquerda" side="left">
      <Button>Esquerda</Button>
    </Tooltip>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', padding: '4rem' }}>
      <Tooltip content="Posição: Topo" side="top">
        <Button variant="outline">Topo</Button>
      </Tooltip>
      <div style={{ display: 'flex', gap: '6rem' }}>
        <Tooltip content="Posição: Esquerda" side="left">
          <Button variant="outline">Esquerda</Button>
        </Tooltip>
        <Tooltip content="Posição: Direita" side="right">
          <Button variant="outline">Direita</Button>
        </Tooltip>
      </div>
      <Tooltip content="Posição: Embaixo" side="bottom">
        <Button variant="outline">Embaixo</Button>
      </Tooltip>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Tooltip content="Editar item">
        <button
          style={{
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            background: 'var(--background)',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="Excluir item">
        <button
          style={{
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            background: 'var(--background)',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
        </button>
      </Tooltip>
      <Tooltip content="Compartilhar">
        <button
          style={{
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            background: 'var(--background)',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </Tooltip>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip
      content="Este é um tooltip com conteúdo mais longo que explica algo em detalhes. Ele pode ter várias linhas de texto."
    >
      <Button>Hover para mais informações</Button>
    </Tooltip>
  ),
}
