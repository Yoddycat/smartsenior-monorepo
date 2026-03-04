import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Horizontal: Story = {
  args: { style: { width: '300px' } },
}

export const WithLabel: Story = {
  args: { label: 'ou', style: { width: '300px' } },
}

export const Dashed: Story = {
  args: { variant: 'dashed', style: { width: '300px' } },
}

export const Dotted: Story = {
  args: { variant: 'dotted', style: { width: '300px' } },
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '100px', gap: '1rem' }}>
      <span>Item 1</span>
      <Divider orientation="vertical" />
      <span>Item 2</span>
      <Divider orientation="vertical" />
      <span>Item 3</span>
    </div>
  ),
}

export const InContent: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <h3 style={{ marginBottom: '1rem' }}>Seção 1</h3>
      <p style={{ marginBottom: '1rem', color: 'var(--foreground-muted)' }}>
        Conteúdo da primeira seção.
      </p>
      <Divider />
      <h3 style={{ margin: '1rem 0' }}>Seção 2</h3>
      <p style={{ color: 'var(--foreground-muted)' }}>
        Conteúdo da segunda seção.
      </p>
    </div>
  ),
}
