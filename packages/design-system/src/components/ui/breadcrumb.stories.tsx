import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: 'Início', href: '/' },
      { label: 'Produtos', href: '/produtos' },
      { label: 'Categoria', href: '/produtos/categoria' },
      { label: 'Produto Atual' },
    ],
  },
}

export const TwoItems: Story = {
  args: {
    items: [
      { label: 'Início', href: '/' },
      { label: 'Página Atual' },
    ],
  },
}

export const WithIcons: Story = {
  args: {
    items: [
      {
        label: 'Início',
        href: '/',
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        ),
      },
      { label: 'Configurações', href: '/config' },
      { label: 'Perfil' },
    ],
  },
}

export const Collapsed: Story = {
  args: {
    maxItems: 3,
    items: [
      { label: 'Início', href: '/' },
      { label: 'Nível 1', href: '/1' },
      { label: 'Nível 2', href: '/2' },
      { label: 'Nível 3', href: '/3' },
      { label: 'Nível 4', href: '/4' },
      { label: 'Página Atual' },
    ],
  },
}

export const CustomSeparator: Story = {
  args: {
    separator: <span style={{ margin: '0 0.5rem', color: 'var(--foreground-muted)' }}>/</span>,
    items: [
      { label: 'Início', href: '/' },
      { label: 'Produtos', href: '/produtos' },
      { label: 'Detalhes' },
    ],
  },
}
