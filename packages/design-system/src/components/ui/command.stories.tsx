import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Command, CommandGroup, CommandItem, CommandSeparator } from './command'
import { Button } from './button'

const meta: Meta<typeof Command> = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Abrir Command Palette (⌘K)
        </Button>
        <Command open={open} onClose={() => setOpen(false)}>
          <CommandGroup heading="Sugestões">
            <CommandItem onSelect={() => { setOpen(false); alert('Novo arquivo') }}>
              Novo Arquivo
            </CommandItem>
            <CommandItem onSelect={() => { setOpen(false); alert('Nova pasta') }}>
              Nova Pasta
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navegação">
            <CommandItem
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              }
              shortcut="⌘H"
              onSelect={() => { setOpen(false); alert('Início') }}
            >
              Início
            </CommandItem>
            <CommandItem
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              }
              shortcut="⌘,"
              onSelect={() => { setOpen(false); alert('Configurações') }}
            >
              Configurações
            </CommandItem>
          </CommandGroup>
        </Command>
      </>
    )
  },
}

export const WithSearch: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Buscar Comandos
        </Button>
        <Command open={open} onClose={() => setOpen(false)} placeholder="Buscar comandos...">
          <CommandGroup heading="Ações">
            <CommandItem onSelect={() => setOpen(false)}>Criar projeto</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Criar arquivo</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Criar pasta</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Criar componente</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Editar">
            <CommandItem onSelect={() => setOpen(false)}>Desfazer</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Refazer</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Copiar</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>Colar</CommandItem>
          </CommandGroup>
        </Command>
      </>
    )
  },
}

export const ApplicationCommands: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', color: 'var(--foreground-muted)' }}>
            Pressione <kbd style={{ padding: '0.25rem 0.5rem', background: 'var(--background-muted)', borderRadius: '4px' }}>⌘K</kbd> ou clique no botão
          </p>
          <Button onClick={() => setOpen(true)}>
            Abrir Command Palette
          </Button>
        </div>
        <Command open={open} onClose={() => setOpen(false)} placeholder="O que você quer fazer?">
          <CommandGroup heading="Projetos">
            <CommandItem
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>}
              onSelect={() => setOpen(false)}
            >
              Meus Projetos
            </CommandItem>
            <CommandItem
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>}
              onSelect={() => setOpen(false)}
            >
              Novo Projeto
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Conta">
            <CommandItem
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>}
              shortcut="⌘P"
              onSelect={() => setOpen(false)}
            >
              Perfil
            </CommandItem>
            <CommandItem
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>}
              onSelect={() => setOpen(false)}
            >
              Segurança
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Ajuda">
            <CommandItem
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>}
              shortcut="⌘?"
              onSelect={() => setOpen(false)}
            >
              Ajuda
            </CommandItem>
            <CommandItem
              icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>}
              onSelect={() => setOpen(false)}
            >
              Contato
            </CommandItem>
          </CommandGroup>
        </Command>
      </>
    )
  },
}
