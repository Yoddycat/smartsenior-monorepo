import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer, DrawerHeader, DrawerTitle, DrawerDescription, DrawerContent, DrawerFooter, DrawerClose } from './drawer'
import { Button } from './button'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <DrawerHeader>
            <DrawerTitle>Título do Drawer</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <p>Conteúdo do drawer. Você pode adicionar qualquer elemento aqui.</p>
          </DrawerContent>
          <DrawerFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Salvar</Button>
          </DrawerFooter>
        </Drawer>
      </>
    )
  },
}

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Drawer Esquerda</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="left">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href="#" style={{ padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>Início</a>
              <a href="#" style={{ padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>Produtos</a>
              <a href="#" style={{ padding: '0.75rem', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>Contato</a>
            </nav>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Drawer Inferior</Button>
        <Drawer open={open} onClose={() => setOpen(false)} side="bottom" size="sm">
          <DrawerHeader>
            <DrawerTitle>Filtros</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <p>Opções de filtro apareceriam aqui.</p>
          </DrawerContent>
        </Drawer>
      </>
    )
  },
}

export const LargeSize: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Drawer Grande</Button>
        <Drawer open={open} onClose={() => setOpen(false)} size="lg">
          <DrawerHeader>
            <DrawerTitle>Detalhes do Pedido</DrawerTitle>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Informações</h4>
                <p style={{ color: 'var(--foreground-muted)' }}>Pedido #12345</p>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Itens</h4>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Produto A - R$ 99,00</li>
                  <li>Produto B - R$ 149,00</li>
                  <li>Produto C - R$ 79,00</li>
                </ul>
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Total</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>R$ 327,00</p>
              </div>
            </div>
          </DrawerContent>
          <DrawerFooter>
            <Button variant="primary" onClick={() => setOpen(false)}>Fechar</Button>
          </DrawerFooter>
        </Drawer>
      </>
    )
  },
}

export const FormDrawer: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Novo Contato</Button>
        <Drawer open={open} onClose={() => setOpen(false)} size="md">
          <DrawerHeader>
            <div>
              <DrawerTitle>Adicionar Contato</DrawerTitle>
              <DrawerDescription>Preencha os dados do novo contato.</DrawerDescription>
            </div>
            <DrawerClose onClose={() => setOpen(false)} />
          </DrawerHeader>
          <DrawerContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nome</label>
                <input
                  type="text"
                  placeholder="Nome completo"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 12px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                <input
                  type="email"
                  placeholder="email@exemplo.com"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 12px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Telefone</label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 12px',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </div>
          </DrawerContent>
          <DrawerFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Salvar</Button>
          </DrawerFooter>
        </Drawer>
      </>
    )
  },
}
