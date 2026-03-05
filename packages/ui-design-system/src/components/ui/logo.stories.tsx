import type { Meta, StoryObj } from '@storybook/react'
import { Logo, LogoIcon, LogoWordmark, LogoFull } from './logo'

const meta: Meta<typeof Logo> = {
  title: 'Brand/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['full', 'icon', 'wordmark'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: 'select',
      options: ['default', 'white', 'primary', 'mono'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Logo>

// ============================================
// VARIANTS
// ============================================

export const Default: Story = {
  args: {
    variant: 'full',
    size: 'md',
  },
}

export const FullLogo: Story = {
  args: {
    variant: 'full',
    size: 'lg',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    size: 'lg',
  },
}

export const WordmarkOnly: Story = {
  args: {
    variant: 'wordmark',
    size: 'lg',
  },
}

// ============================================
// SIZES
// ============================================

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">xs</span>
        <Logo size="xs" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">sm</span>
        <Logo size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">md</span>
        <Logo size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">lg</span>
        <Logo size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">xl</span>
        <Logo size="xl" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">2xl</span>
        <Logo size="2xl" />
      </div>
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <LogoIcon size="xs" />
      <LogoIcon size="sm" />
      <LogoIcon size="md" />
      <LogoIcon size="lg" />
      <LogoIcon size="xl" />
      <LogoIcon size="2xl" />
    </div>
  ),
}

// ============================================
// COLORS
// ============================================

export const DefaultColor: Story = {
  args: {
    color: 'default',
    size: 'lg',
  },
}

export const PrimaryColor: Story = {
  args: {
    color: 'primary',
    size: 'lg',
  },
}

export const MonoColor: Story = {
  args: {
    color: 'mono',
    size: 'lg',
  },
}

export const WhiteOnDark: Story = {
  render: () => (
    <div className="bg-[var(--primary)] p-8 rounded-xl">
      <Logo color="white" size="xl" />
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-4 bg-[var(--background)] rounded-lg">
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Default</p>
        <Logo color="default" size="lg" />
      </div>
      <div className="p-4 bg-[var(--background)] rounded-lg">
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Primary</p>
        <Logo color="primary" size="lg" />
      </div>
      <div className="p-4 bg-[var(--background)] rounded-lg">
        <p className="text-sm text-[var(--foreground-muted)] mb-2">Mono</p>
        <Logo color="mono" size="lg" />
      </div>
      <div className="p-4 bg-[var(--primary)] rounded-lg">
        <p className="text-sm text-white mb-2">White (em fundo escuro)</p>
        <Logo color="white" size="lg" />
      </div>
    </div>
  ),
}

// ============================================
// ANIMATED
// ============================================

export const Animated: Story = {
  args: {
    animated: true,
    size: 'xl',
  },
}

// ============================================
// USE CASES
// ============================================

export const Header: Story = {
  render: () => (
    <header className="w-full max-w-4xl flex items-center justify-between p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl">
      <Logo size="sm" />
      <nav className="flex gap-4">
        <a href="#" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
          Início
        </a>
        <a href="#" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
          Serviços
        </a>
        <a href="#" className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]">
          Contato
        </a>
      </nav>
    </header>
  ),
}

export const Footer: Story = {
  render: () => (
    <footer className="w-full max-w-4xl p-8 bg-[var(--primary)] rounded-xl text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo color="white" size="md" />
        <p className="text-sm opacity-80">
          © 2026 SmartSenior. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  ),
}

export const LoadingScreen: Story = {
  render: () => (
    <div className="w-80 h-60 flex flex-col items-center justify-center gap-4 bg-[var(--background)] rounded-xl border border-[var(--border)]">
      <LogoIcon size="xl" animated />
      <p className="text-sm text-[var(--foreground-muted)]">Carregando...</p>
    </div>
  ),
}

export const AppIcon: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="w-16 h-16 rounded-2xl bg-[var(--primary)] flex items-center justify-center shadow-lg">
        <LogoIcon size="lg" color="white" />
      </div>
      <div className="w-12 h-12 rounded-xl bg-[var(--primary)] flex items-center justify-center shadow-md">
        <LogoIcon size="md" color="white" />
      </div>
      <div className="w-10 h-10 rounded-lg bg-[var(--primary)] flex items-center justify-center shadow">
        <LogoIcon size="sm" color="white" />
      </div>
    </div>
  ),
}

export const Favicon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded bg-[var(--primary)] flex items-center justify-center">
        <LogoIcon size="xs" color="white" />
      </div>
      <span className="text-sm text-[var(--foreground-muted)]">
        32x32 Favicon
      </span>
    </div>
  ),
}

// ============================================
// BRAND GUIDELINES
// ============================================

export const BrandGuidelines: Story = {
  render: () => (
    <div className="max-w-2xl space-y-8 p-6 bg-[var(--card)] rounded-xl border border-[var(--border)]">
      <div>
        <h2 className="text-xl font-semibold mb-4">SmartSenior Brand</h2>
        <p className="text-sm text-[var(--foreground-muted)] mb-6">
          O logo SmartSenior combina um coração com elementos de cuidado,
          representando nossa missão de proporcionar tecnologia acessível
          e carinho aos idosos.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Variantes</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <Logo variant="full" size="sm" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Full</p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <Logo variant="icon" size="md" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Icon</p>
          </div>
          <div className="p-4 bg-[var(--background)] rounded-lg text-center">
            <Logo variant="wordmark" size="sm" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Wordmark</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Área de proteção</h3>
        <div className="p-8 bg-[var(--background)] rounded-lg inline-block">
          <div className="border-2 border-dashed border-[var(--border)] p-4">
            <Logo size="lg" />
          </div>
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mt-2">
          Mantenha uma área de respiro ao redor do logo equivalente à altura do ícone.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-3">Tamanho mínimo</h3>
        <div className="flex items-end gap-4">
          <div>
            <Logo size="xs" />
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              Mínimo: 100px (full)
            </p>
          </div>
          <div>
            <LogoIcon size="xs" />
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              Mínimo: 24px (icon)
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
}
