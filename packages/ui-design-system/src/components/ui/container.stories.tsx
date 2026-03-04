import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: (
      <div style={{ padding: '2rem', background: 'var(--background-muted)' }}>
        Container padrão (lg - 1024px)
      </div>
    ),
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Container size="sm">
        <div style={{ padding: '1rem', background: 'var(--background-muted)' }}>
          sm (640px)
        </div>
      </Container>
      <Container size="md">
        <div style={{ padding: '1rem', background: 'var(--background-muted)' }}>
          md (768px)
        </div>
      </Container>
      <Container size="lg">
        <div style={{ padding: '1rem', background: 'var(--background-muted)' }}>
          lg (1024px)
        </div>
      </Container>
      <Container size="xl">
        <div style={{ padding: '1rem', background: 'var(--background-muted)' }}>
          xl (1280px)
        </div>
      </Container>
      <Container size="full">
        <div style={{ padding: '1rem', background: 'var(--background-muted)' }}>
          full (100%)
        </div>
      </Container>
    </div>
  ),
}

export const NoPadding: Story = {
  args: {
    padding: false,
    children: (
      <div style={{ padding: '2rem', background: 'var(--background-muted)' }}>
        Container sem padding
      </div>
    ),
  },
}
