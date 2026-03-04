import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarLink, NavbarMobileToggle, NavbarMobileMenu } from './navbar'
import { Button } from './button'

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarBrand>
        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SmartSenior</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <NavbarLink href="#" active>Início</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Produtos</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Sobre</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Contato</NavbarLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Button variant="primary" size="sm">Entrar</Button>
      </NavbarContent>
    </Navbar>
  ),
}

export const Sticky: Story = {
  render: () => (
    <div style={{ height: '200vh' }}>
      <Navbar sticky>
        <NavbarBrand>
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SmartSenior</span>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem>
            <NavbarLink href="#" active>Início</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Produtos</NavbarLink>
          </NavbarItem>
          <NavbarItem>
            <NavbarLink href="#">Contato</NavbarLink>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div style={{ padding: '2rem' }}>
        <p>Role a página para ver o navbar sticky.</p>
        <div style={{ height: '100vh' }} />
      </div>
    </div>
  ),
}

export const WithMobileMenu: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div style={{ position: 'relative' }}>
        <Navbar>
          <NavbarMobileToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          <NavbarBrand>
            <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SmartSenior</span>
          </NavbarBrand>
          <NavbarContent className="hidden md:flex">
            <NavbarItem>
              <NavbarLink href="#" active>Início</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Produtos</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink href="#">Contato</NavbarLink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent>
            <Button variant="primary" size="sm">Entrar</Button>
          </NavbarContent>
          <NavbarMobileMenu isOpen={isOpen}>
            <NavbarLink href="#" active>Início</NavbarLink>
            <NavbarLink href="#">Produtos</NavbarLink>
            <NavbarLink href="#">Sobre</NavbarLink>
            <NavbarLink href="#">Contato</NavbarLink>
          </NavbarMobileMenu>
        </Navbar>
      </div>
    )
  },
}

export const WithLogo: Story = {
  render: () => (
    <Navbar>
      <NavbarBrand>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
        <span style={{ fontWeight: 'bold', fontSize: '1.25rem', marginLeft: '0.5rem' }}>SmartSenior</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <NavbarLink href="#">Início</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Serviços</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Preços</NavbarLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <Button variant="ghost" size="sm">Login</Button>
        <Button variant="primary" size="sm">Cadastrar</Button>
      </NavbarContent>
    </Navbar>
  ),
}

export const NoBorder: Story = {
  render: () => (
    <Navbar bordered={false}>
      <NavbarBrand>
        <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SmartSenior</span>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <NavbarLink href="#" active>Início</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink href="#">Produtos</NavbarLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  ),
}
