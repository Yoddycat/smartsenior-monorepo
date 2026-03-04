import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    style: { width: '200px', height: '20px' },
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Default (rounded)
        </span>
        <Skeleton style={{ width: '200px', height: '40px' }} />
      </div>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Circular
        </span>
        <Skeleton variant="circular" style={{ width: '60px', height: '60px' }} />
      </div>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Rectangular
        </span>
        <Skeleton variant="rectangular" style={{ width: '200px', height: '100px' }} />
      </div>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Text
        </span>
        <Skeleton variant="text" style={{ width: '150px' }} />
      </div>
    </div>
  ),
}

export const TextBlock: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <SkeletonText lines={4} />
    </div>
  ),
}

export const AvatarSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
      <SkeletonAvatar size="xl" />
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div style={{ width: '350px' }}>
      <SkeletonCard />
    </div>
  ),
}

export const UserListItem: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <SkeletonAvatar size="md" />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" style={{ width: '120px', marginBottom: '0.5rem' }} />
        <Skeleton variant="text" style={{ width: '80px', height: '12px' }} />
      </div>
    </div>
  ),
}

export const ProductCard: Story = {
  render: () => (
    <div style={{ width: '280px', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden' }}>
      <Skeleton variant="rectangular" style={{ width: '100%', height: '180px' }} />
      <div style={{ padding: '1rem' }}>
        <Skeleton variant="text" style={{ width: '60%', marginBottom: '0.5rem' }} />
        <Skeleton variant="text" style={{ width: '80%', marginBottom: '1rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Skeleton style={{ width: '80px', height: '24px' }} />
          <Skeleton style={{ width: '100px', height: '40px' }} />
        </div>
      </div>
    </div>
  ),
}

export const TableRow: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      {[1, 2, 3].map((row) => (
        <div
          key={row}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <SkeletonAvatar size="sm" />
          <Skeleton variant="text" style={{ width: '120px' }} />
          <Skeleton variant="text" style={{ width: '80px' }} />
          <Skeleton variant="text" style={{ width: '100px' }} />
          <Skeleton style={{ width: '60px', height: '28px' }} />
        </div>
      ))}
    </div>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', width: '700px' }}>
      {[1, 2, 3].map((card) => (
        <div
          key={card}
          style={{
            padding: '1.5rem',
            border: '1px solid var(--border)',
            borderRadius: '12px',
          }}
        >
          <Skeleton variant="text" style={{ width: '60%', marginBottom: '1rem' }} />
          <Skeleton style={{ width: '80px', height: '32px', marginBottom: '0.5rem' }} />
          <Skeleton variant="text" style={{ width: '40%', height: '12px' }} />
        </div>
      ))}
    </div>
  ),
}

export const AnimationNone: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '200px' }}>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Pulse (default)
        </span>
        <Skeleton animation="pulse" style={{ width: '100%', height: '40px' }} />
      </div>
      <div>
        <span style={{ fontSize: '0.875rem', color: 'var(--foreground-muted)', marginBottom: '0.5rem', display: 'block' }}>
          Sem animação
        </span>
        <Skeleton animation="none" style={{ width: '100%', height: '40px' }} />
      </div>
    </div>
  ),
}
