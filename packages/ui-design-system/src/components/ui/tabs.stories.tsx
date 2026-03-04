import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1" style={{ width: '400px' }}>
      <TabsList>
        <TabsTrigger value="tab1">Aba 1</TabsTrigger>
        <TabsTrigger value="tab2">Aba 2</TabsTrigger>
        <TabsTrigger value="tab3">Aba 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Conteúdo da primeira aba.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Conteúdo da segunda aba.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Conteúdo da terceira aba.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const AccountSettings: Story = {
  render: () => (
    <Tabs defaultValue="profile" style={{ width: '500px' }}>
      <TabsList>
        <TabsTrigger value="profile">Perfil</TabsTrigger>
        <TabsTrigger value="security">Segurança</TabsTrigger>
        <TabsTrigger value="notifications">Notificações</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Informações do Perfil</h3>
          <p style={{ color: 'var(--foreground-muted)' }}>
            Atualize suas informações pessoais e foto de perfil.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="security">
        <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Configurações de Segurança</h3>
          <p style={{ color: 'var(--foreground-muted)' }}>
            Gerencie sua senha e autenticação de dois fatores.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="notifications">
        <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1rem', fontWeight: 600 }}>Preferências de Notificação</h3>
          <p style={{ color: 'var(--foreground-muted)' }}>
            Escolha como deseja receber notificações.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const ProductDetails: Story = {
  render: () => (
    <Tabs defaultValue="description" style={{ width: '500px' }}>
      <TabsList>
        <TabsTrigger value="description">Descrição</TabsTrigger>
        <TabsTrigger value="specs">Especificações</TabsTrigger>
        <TabsTrigger value="reviews">Avaliações</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p>
          Este produto é feito com materiais de alta qualidade e oferece durabilidade excepcional.
          Ideal para uso diário com design moderno e funcional.
        </p>
      </TabsContent>
      <TabsContent value="specs">
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
          <li>Material: Aço inoxidável</li>
          <li>Dimensões: 20 x 15 x 10 cm</li>
          <li>Peso: 500g</li>
          <li>Garantia: 2 anos</li>
        </ul>
      </TabsContent>
      <TabsContent value="reviews">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <strong>Maria S.</strong> - ⭐⭐⭐⭐⭐
            <p style={{ margin: '0.5rem 0 0', color: 'var(--foreground-muted)' }}>
              Produto excelente! Chegou antes do prazo.
            </p>
          </div>
          <div>
            <strong>João P.</strong> - ⭐⭐⭐⭐
            <p style={{ margin: '0.5rem 0 0', color: 'var(--foreground-muted)' }}>
              Muito bom, recomendo.
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  ),
}
