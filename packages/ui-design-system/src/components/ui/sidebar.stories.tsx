import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarItem } from './sidebar'
import { Avatar, AvatarFallback } from './avatar'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj<typeof Sidebar>

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
)

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '400px' }}>
      <Sidebar collapsible={false}>
        <SidebarHeader>
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SmartSenior</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem icon={<HomeIcon />} active>Início</SidebarItem>
            <SidebarItem icon={<UsersIcon />}>Usuários</SidebarItem>
            <SidebarItem icon={<FolderIcon />}>Projetos</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Relatórios</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Configurações</SidebarGroupLabel>
            <SidebarItem icon={<SettingsIcon />}>Preferências</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar>
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div>
              <p style={{ margin: 0, fontWeight: 500, fontSize: '0.875rem' }}>João Silva</p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--foreground-muted)' }}>Admin</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div style={{ flex: 1, padding: '1.5rem', background: 'var(--background-muted)' }}>
        <h1>Conteúdo Principal</h1>
        <p>O sidebar fica à esquerda.</p>
      </div>
    </div>
  ),
}

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div style={{ display: 'flex', height: '400px' }}>
        <Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>
          <SidebarHeader>
            {!collapsed && <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SmartSenior</span>}
            {collapsed && <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>SS</span>}
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarItem icon={<HomeIcon />} collapsed={collapsed} active>Início</SidebarItem>
              <SidebarItem icon={<UsersIcon />} collapsed={collapsed}>Usuários</SidebarItem>
              <SidebarItem icon={<FolderIcon />} collapsed={collapsed}>Projetos</SidebarItem>
              <SidebarItem icon={<ChartIcon />} collapsed={collapsed}>Relatórios</SidebarItem>
              <SidebarItem icon={<SettingsIcon />} collapsed={collapsed}>Configurações</SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <div style={{ flex: 1, padding: '1.5rem', background: 'var(--background-muted)' }}>
          <h1>Sidebar Colapsável</h1>
          <p>Clique no botão para expandir/recolher o sidebar.</p>
          <p>Estado: {collapsed ? 'Recolhido' : 'Expandido'}</p>
        </div>
      </div>
    )
  },
}

export const WithGroups: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '500px' }}>
      <Sidebar collapsible={false}>
        <SidebarHeader>
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>Dashboard</span>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Principal</SidebarGroupLabel>
            <SidebarItem icon={<HomeIcon />} active>Visão Geral</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Gestão</SidebarGroupLabel>
            <SidebarItem icon={<UsersIcon />}>Equipe</SidebarItem>
            <SidebarItem icon={<FolderIcon />}>Projetos</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Sistema</SidebarGroupLabel>
            <SidebarItem icon={<SettingsIcon />}>Configurações</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div style={{ flex: 1, padding: '1.5rem', background: 'var(--background-muted)' }}>
        <h1>Sidebar com Grupos</h1>
        <p>Itens organizados por categorias.</p>
      </div>
    </div>
  ),
}

export const AdminPanel: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '500px' }}>
      <Sidebar collapsible={false} width="260px">
        <SidebarHeader>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            <span style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>Admin Panel</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarItem icon={<HomeIcon />} active>Dashboard</SidebarItem>
            <SidebarItem icon={<UsersIcon />}>Clientes</SidebarItem>
            <SidebarItem icon={<FolderIcon />}>Pedidos</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Relatórios</SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Administração</SidebarGroupLabel>
            <SidebarItem icon={<UsersIcon />}>Usuários</SidebarItem>
            <SidebarItem icon={<SettingsIcon />}>Configurações</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem' }}>
            <Avatar>
              <AvatarFallback style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}>
                AD
              </AvatarFallback>
            </Avatar>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontWeight: 500, fontSize: '0.875rem' }}>Admin</p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--foreground-muted)' }}>
                admin@empresa.com
              </p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <div style={{ flex: 1, padding: '1.5rem', background: 'var(--background-muted)' }}>
        <h1>Painel Administrativo</h1>
        <p>Exemplo de layout completo com sidebar.</p>
      </div>
    </div>
  ),
}
