import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagGroup } from './tag'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: { children: 'Tag' },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <Tag size="sm">Pequena</Tag>
      <Tag size="md">Média</Tag>
      <Tag size="lg">Grande</Tag>
    </div>
  ),
}

export const Removable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Tag removable onRemove={() => alert('Removido: React')}>React</Tag>
      <Tag removable onRemove={() => alert('Removido: TypeScript')}>TypeScript</Tag>
      <Tag removable onRemove={() => alert('Removido: Tailwind')}>Tailwind</Tag>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Tag
        variant="success"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        }
      >
        Verificado
      </Tag>
      <Tag
        variant="warning"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        }
      >
        Pendente
      </Tag>
      <Tag
        variant="error"
        icon={
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        }
      >
        Erro
      </Tag>
    </div>
  ),
}

export const TagGroupExample: Story = {
  render: () => (
    <TagGroup gap="sm">
      <Tag variant="primary" removable>JavaScript</Tag>
      <Tag variant="primary" removable>React</Tag>
      <Tag variant="primary" removable>Node.js</Tag>
      <Tag variant="primary" removable>TypeScript</Tag>
      <Tag variant="primary" removable>GraphQL</Tag>
    </TagGroup>
  ),
}

export const StatusTags: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Tag variant="success" size="sm">Ativo</Tag>
        <span>Conta verificada e funcionando</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Tag variant="warning" size="sm">Pendente</Tag>
        <span>Aguardando aprovação</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Tag variant="error" size="sm">Bloqueado</Tag>
        <span>Acesso suspenso</span>
      </div>
    </div>
  ),
}
