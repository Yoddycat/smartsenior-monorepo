import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback, getInitials } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
        alt="João Silva"
      />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="Maria Santos" />
      <AvatarFallback>MS</AvatarFallback>
    </Avatar>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex' }}>
      <Avatar style={{ marginLeft: 0 }}>
        <AvatarImage
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="Usuário 1"
        />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar style={{ marginLeft: '-0.75rem', border: '2px solid var(--background)' }}>
        <AvatarImage
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
          alt="Usuário 2"
        />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar style={{ marginLeft: '-0.75rem', border: '2px solid var(--background)' }}>
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
          alt="Usuário 3"
        />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar style={{ marginLeft: '-0.75rem', border: '2px solid var(--background)' }}>
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const ColoredFallbacks: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar>
        <AvatarFallback style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
          AB
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback style={{ backgroundColor: 'var(--accent)', color: 'var(--accent-foreground)' }}>
          CD
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback style={{ backgroundColor: 'var(--success)', color: 'var(--success-foreground)' }}>
          EF
        </AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback style={{ backgroundColor: 'var(--warning)', color: 'var(--warning-foreground)' }}>
          GH
        </AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const UserCard: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        border: '1px solid var(--border)',
        borderRadius: '12px',
        width: '280px',
      }}
    >
      <Avatar size="lg">
        <AvatarImage
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="João Silva"
        />
        <AvatarFallback>{getInitials('João Silva')}</AvatarFallback>
      </Avatar>
      <div>
        <p style={{ fontWeight: 600, margin: 0 }}>João Silva</p>
        <p style={{ color: 'var(--foreground-muted)', margin: '0.25rem 0 0', fontSize: '0.875rem' }}>
          joao@email.com
        </p>
      </div>
    </div>
  ),
}

export const InitialsHelper: Story = {
  render: () => {
    const names = [
      'Maria Santos',
      'João',
      'Ana Paula Ferreira',
      'Carlos Eduardo',
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {names.map((name) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar>
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
            <span>{name}</span>
          </div>
        ))}
      </div>
    )
  },
}
