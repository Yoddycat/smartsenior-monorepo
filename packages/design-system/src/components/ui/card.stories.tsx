import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card'
import { Button } from './button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>
          Descrição do card com informações adicionais.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo principal do card. Aqui você pode adicionar qualquer informação relevante.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader>
        <CardTitle>Plano Premium</CardTitle>
        <CardDescription>
          Acesso completo a todos os recursos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          R$ 99<span style={{ fontSize: '1rem', fontWeight: 'normal' }}>/mês</span>
        </div>
        <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
          <li>Suporte 24/7</li>
          <li>Acesso ilimitado</li>
          <li>Relatórios avançados</li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="accent" style={{ width: '100%' }}>
          Assinar Agora
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card style={{ width: '300px', padding: '1.5rem' }}>
      <p style={{ margin: 0 }}>
        Um card simples sem header ou footer, apenas com conteúdo direto.
      </p>
    </Card>
  ),
}

export const LoginForm: Story = {
  render: () => (
    <Card style={{ width: '400px' }}>
      <CardHeader>
        <CardTitle>Entrar na Conta</CardTitle>
        <CardDescription>
          Digite suas credenciais para acessar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Email
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              style={{
                width: '100%',
                height: '48px',
                padding: '0 16px',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
              Senha
            </label>
            <input
              type="password"
              placeholder="Sua senha"
              style={{
                width: '100%',
                height: '48px',
                padding: '0 16px',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '16px',
              }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter style={{ flexDirection: 'column', gap: '0.75rem' }}>
        <Button variant="primary" style={{ width: '100%' }}>
          Entrar
        </Button>
        <Button variant="link">
          Esqueceu a senha?
        </Button>
      </CardFooter>
    </Card>
  ),
}
