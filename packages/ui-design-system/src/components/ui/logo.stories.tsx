import type { Meta, StoryObj } from '@storybook/react'
import { Logo, LogoIcon, LogoVertical, LogoHorizontal, LogoFavicon } from './logo'

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
      options: ['vertical', 'horizontal', 'icon', 'favicon'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: {
      control: 'select',
      options: ['gradient', 'orange', 'white', 'black'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Logo>

// ============================================
// DEFAULT
// ============================================

export const Default: Story = {
  args: {
    variant: 'horizontal',
    size: 'lg',
    color: 'gradient',
  },
}

// ============================================
// VARIANTS
// ============================================

export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
    size: 'lg',
    color: 'gradient',
  },
}

export const Vertical: Story = {
  args: {
    variant: 'vertical',
    size: 'lg',
    color: 'gradient',
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    size: 'xl',
    color: 'gradient',
  },
}

export const Favicon: Story = {
  args: {
    variant: 'favicon',
    size: 'lg',
    color: 'gradient',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <p className="text-sm text-[var(--foreground-muted)] mb-4">Horizontal</p>
        <LogoHorizontal size="lg" />
      </div>
      <div className="text-center">
        <p className="text-sm text-[var(--foreground-muted)] mb-4">Vertical</p>
        <LogoVertical size="lg" />
      </div>
      <div className="text-center">
        <p className="text-sm text-[var(--foreground-muted)] mb-4">Icon</p>
        <LogoIcon size="xl" />
      </div>
      <div className="text-center">
        <p className="text-sm text-[var(--foreground-muted)] mb-4">Favicon</p>
        <LogoFavicon size="lg" />
      </div>
    </div>
  ),
}

// ============================================
// SIZES
// ============================================

export const HorizontalSizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-6">
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">xs</span>
        <Logo variant="horizontal" size="xs" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">sm</span>
        <Logo variant="horizontal" size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">md</span>
        <Logo variant="horizontal" size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">lg</span>
        <Logo variant="horizontal" size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">xl</span>
        <Logo variant="horizontal" size="xl" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm text-[var(--foreground-muted)]">2xl</span>
        <Logo variant="horizontal" size="2xl" />
      </div>
    </div>
  ),
}

export const IconSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <LogoIcon size="xs" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">xs</p>
      </div>
      <div className="text-center">
        <LogoIcon size="sm" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">sm</p>
      </div>
      <div className="text-center">
        <LogoIcon size="md" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">md</p>
      </div>
      <div className="text-center">
        <LogoIcon size="lg" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">lg</p>
      </div>
      <div className="text-center">
        <LogoIcon size="xl" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">xl</p>
      </div>
      <div className="text-center">
        <LogoIcon size="2xl" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">2xl</p>
      </div>
    </div>
  ),
}

export const FaviconSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <LogoFavicon size="xs" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">16px</p>
      </div>
      <div className="text-center">
        <LogoFavicon size="sm" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">24px</p>
      </div>
      <div className="text-center">
        <LogoFavicon size="md" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">32px</p>
      </div>
      <div className="text-center">
        <LogoFavicon size="lg" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">48px</p>
      </div>
      <div className="text-center">
        <LogoFavicon size="xl" />
        <p className="text-xs text-[var(--foreground-muted)] mt-1">64px</p>
      </div>
    </div>
  ),
}

// ============================================
// COLORS
// ============================================

export const GradientColor: Story = {
  args: {
    variant: 'horizontal',
    color: 'gradient',
    size: 'lg',
  },
}

export const OrangeColor: Story = {
  args: {
    variant: 'horizontal',
    color: 'orange',
    size: 'lg',
  },
}

export const BlackColor: Story = {
  args: {
    variant: 'horizontal',
    color: 'black',
    size: 'lg',
  },
}

export const WhiteOnDark: Story = {
  render: () => (
    <div className="bg-[#1a365d] p-8 rounded-xl">
      <Logo variant="horizontal" color="white" size="xl" />
    </div>
  ),
}

export const AllColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg border border-[var(--border)]">
        <p className="text-sm text-gray-600 mb-3">Gradient (Padrão)</p>
        <Logo variant="horizontal" color="gradient" size="lg" />
      </div>
      <div className="p-6 bg-white rounded-lg border border-[var(--border)]">
        <p className="text-sm text-gray-600 mb-3">Orange (Laranja sólido)</p>
        <Logo variant="horizontal" color="orange" size="lg" />
      </div>
      <div className="p-6 bg-white rounded-lg border border-[var(--border)]">
        <p className="text-sm text-gray-600 mb-3">Black (P&B)</p>
        <Logo variant="horizontal" color="black" size="lg" />
      </div>
      <div className="p-6 bg-[#1a365d] rounded-lg">
        <p className="text-sm text-white/70 mb-3">White (Negativo - para fundos escuros)</p>
        <Logo variant="horizontal" color="white" size="lg" />
      </div>
    </div>
  ),
}

export const VerticalColors: Story = {
  render: () => (
    <div className="flex gap-8">
      <div className="p-6 bg-white rounded-lg border border-[var(--border)] text-center">
        <LogoVertical color="gradient" size="lg" />
        <p className="text-xs text-gray-600 mt-2">Gradient</p>
      </div>
      <div className="p-6 bg-white rounded-lg border border-[var(--border)] text-center">
        <LogoVertical color="orange" size="lg" />
        <p className="text-xs text-gray-600 mt-2">Orange</p>
      </div>
      <div className="p-6 bg-white rounded-lg border border-[var(--border)] text-center">
        <LogoVertical color="black" size="lg" />
        <p className="text-xs text-gray-600 mt-2">Black</p>
      </div>
      <div className="p-6 bg-[#1a365d] rounded-lg text-center">
        <LogoVertical color="white" size="lg" />
        <p className="text-xs text-white/70 mt-2">White</p>
      </div>
    </div>
  ),
}

// ============================================
// USE CASES
// ============================================

export const Header: Story = {
  render: () => (
    <header className="w-full max-w-4xl flex items-center justify-between p-4 bg-[var(--background)] border border-[var(--border)] rounded-xl shadow-sm">
      <Logo variant="horizontal" size="sm" />
      <nav className="flex gap-6">
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
    <footer className="w-full max-w-4xl p-8 bg-[#1a365d] rounded-xl text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo variant="horizontal" color="white" size="md" />
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
      <LogoIcon size="xl" />
      <p className="text-sm text-[var(--foreground-muted)]">Carregando...</p>
    </div>
  ),
}

export const AppIcon: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {/* App icon - Navy background with white logo */}
      <div className="text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#1a365d] flex items-center justify-center shadow-lg">
          <LogoFavicon size="xl" color="white" />
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mt-2">App Icon</p>
      </div>
      {/* Medium icon - White background */}
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center shadow-md">
          <LogoFavicon size="lg" color="gradient" />
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mt-2">Médio</p>
      </div>
      {/* Small icon - Subtle background */}
      <div className="text-center">
        <div className="w-10 h-10 rounded-lg bg-[var(--background-subtle)] border border-[var(--border)] flex items-center justify-center shadow-sm">
          <LogoFavicon size="md" color="orange" />
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mt-2">Pequeno</p>
      </div>
    </div>
  ),
}

export const SocialMedia: Story = {
  render: () => (
    <div className="flex gap-4">
      {/* Profile Picture */}
      <div className="w-24 h-24 rounded-full bg-[var(--background)] border-4 border-orange-500 flex items-center justify-center overflow-hidden">
        <LogoIcon size="xl" />
      </div>
      {/* Cover Image Corner */}
      <div className="w-40 h-24 rounded-lg bg-gradient-to-r from-orange-500 to-orange-400 flex items-end justify-start p-3">
        <Logo variant="horizontal" color="white" size="sm" />
      </div>
    </div>
  ),
}

export const BusinessCard: Story = {
  render: () => (
    <div className="w-96 h-56 bg-[var(--background)] rounded-xl shadow-xl p-6 flex flex-col justify-between border border-[var(--border)]">
      <Logo variant="horizontal" size="md" />
      <div>
        <h3 className="font-semibold text-[var(--foreground)]">João Silva</h3>
        <p className="text-sm text-[var(--foreground-muted)]">Diretor de Operações</p>
        <p className="text-xs text-[var(--foreground-muted)] mt-2">joao@smartsenior.com.br</p>
      </div>
    </div>
  ),
}

// ============================================
// BRAND GUIDELINES
// ============================================

export const BrandGuidelines: Story = {
  render: () => (
    <div className="max-w-3xl space-y-8 p-6 bg-[var(--background)] rounded-xl border border-[var(--border)]">
      <div>
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-2">SmartSenior Brand</h2>
        <p className="text-sm text-[var(--foreground-muted)] mb-6">
          O logo SmartSenior apresenta uma fênix estilizada, simbolizando renascimento,
          vitalidade e cuidado. As cores laranja e azul marinho transmitem energia,
          confiança e profissionalismo.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">Variantes do Logo</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-[var(--background-subtle)] rounded-lg text-center">
            <Logo variant="horizontal" size="sm" />
            <p className="text-xs text-[var(--foreground-muted)] mt-3">Horizontal</p>
          </div>
          <div className="p-4 bg-[var(--background-subtle)] rounded-lg text-center">
            <LogoVertical size="md" />
            <p className="text-xs text-[var(--foreground-muted)] mt-3">Vertical</p>
          </div>
          <div className="p-4 bg-[var(--background-subtle)] rounded-lg text-center">
            <LogoIcon size="lg" />
            <p className="text-xs text-[var(--foreground-muted)] mt-3">Ícone</p>
          </div>
          <div className="p-4 bg-[var(--background-subtle)] rounded-lg text-center">
            <LogoFavicon size="lg" />
            <p className="text-xs text-[var(--foreground-muted)] mt-3">Favicon</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">Cores da Marca</h3>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-b from-[#ff9a3c] to-[#ff6b00]"></div>
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Laranja<br/>Gradient</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-[#ff7a00]"></div>
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Laranja<br/>#FF7A00</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-[#1a365d]"></div>
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Azul Marinho<br/>#1A365D</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">Área de Proteção</h3>
        <div className="p-8 bg-[var(--background-subtle)] rounded-lg inline-block">
          <div className="border-2 border-dashed border-orange-300 p-6">
            <Logo variant="horizontal" size="lg" />
          </div>
        </div>
        <p className="text-xs text-[var(--foreground-muted)] mt-3">
          Mantenha uma área de respiro ao redor do logo equivalente à altura do ícone.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">Uso em Fundos</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-lg border border-[var(--border)]">
            <Logo variant="horizontal" color="gradient" size="md" />
            <p className="text-xs text-gray-600 mt-3">Fundo claro: usar gradient ou orange</p>
          </div>
          <div className="p-6 bg-[#1a365d] rounded-lg">
            <Logo variant="horizontal" color="white" size="md" />
            <p className="text-xs text-white/70 mt-3">Fundo escuro: usar white</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-[var(--foreground)] mb-4">Tamanho Mínimo</h3>
        <div className="flex items-end gap-6">
          <div>
            <Logo variant="horizontal" size="xs" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Mínimo horizontal: 24px altura</p>
          </div>
          <div>
            <LogoFavicon size="xs" />
            <p className="text-xs text-[var(--foreground-muted)] mt-2">Mínimo favicon: 16px</p>
          </div>
        </div>
      </div>
    </div>
  ),
}
