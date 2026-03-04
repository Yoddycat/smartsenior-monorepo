import type { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from './popover'
import { Button } from './button'

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Abrir Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p style={{ margin: 0 }}>Conteúdo do popover.</p>
      </PopoverContent>
    </Popover>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Configurar</Button>
      </PopoverTrigger>
      <PopoverContent style={{ width: '280px' }}>
        <h4 style={{ margin: '0 0 1rem', fontWeight: 600 }}>Configurações</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
              Email
            </label>
            <input
              type="email"
              placeholder="email@exemplo.com"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid var(--border)',
                borderRadius: '6px',
              }}
            />
          </div>
          <PopoverClose>
            <Button variant="primary" style={{ width: '100%' }}>Salvar</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', padding: '6rem' }}>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">Topo</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p>Popover no topo</p>
        </PopoverContent>
      </Popover>

      <div style={{ display: 'flex', gap: '6rem' }}>
        <Popover>
          <PopoverTrigger>
            <Button variant="outline">Esquerda</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p>Popover à esquerda</p>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button variant="outline">Direita</Button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <p>Popover à direita</p>
          </PopoverContent>
        </Popover>
      </div>

      <Popover>
        <PopoverTrigger>
          <Button variant="outline">Embaixo</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p>Popover embaixo</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>
        <button
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          JS
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" style={{ width: '240px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
            }}
          >
            JS
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 600 }}>João Silva</p>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--foreground-muted)' }}>
              joao@email.com
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <button style={{ padding: '0.5rem', textAlign: 'left', background: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Perfil
          </button>
          <button style={{ padding: '0.5rem', textAlign: 'left', background: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Configurações
          </button>
          <hr style={{ margin: '0.5rem 0', border: 'none', borderTop: '1px solid var(--border)' }} />
          <button style={{ padding: '0.5rem', textAlign: 'left', background: 'transparent', border: 'none', borderRadius: '6px', cursor: 'pointer', color: 'var(--error)' }}>
            Sair
          </button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
