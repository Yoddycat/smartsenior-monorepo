import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription, Banner } from './alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    children: 'Esta é uma mensagem de alerta padrão.',
    style: { width: '400px' },
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <AlertTitle>Informação</AlertTitle>
        <AlertDescription>Uma nova atualização está disponível.</AlertDescription>
      </>
    ),
    style: { width: '400px' },
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <AlertTitle>Sucesso!</AlertTitle>
        <AlertDescription>Suas alterações foram salvas com sucesso.</AlertDescription>
      </>
    ),
    style: { width: '400px' },
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <AlertTitle>Atenção</AlertTitle>
        <AlertDescription>Sua sessão expira em 5 minutos.</AlertDescription>
      </>
    ),
    style: { width: '400px' },
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: (
      <>
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>Não foi possível processar sua solicitação.</AlertDescription>
      </>
    ),
    style: { width: '400px' },
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    onDismiss: () => console.log('Alert dismissed'),
    children: (
      <>
        <AlertTitle>Dica</AlertTitle>
        <AlertDescription>Você pode fechar este alerta clicando no X.</AlertDescription>
      </>
    ),
    style: { width: '400px' },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Alert variant="default"><AlertDescription>Default alert</AlertDescription></Alert>
      <Alert variant="info"><AlertDescription>Info alert</AlertDescription></Alert>
      <Alert variant="success"><AlertDescription>Success alert</AlertDescription></Alert>
      <Alert variant="warning"><AlertDescription>Warning alert</AlertDescription></Alert>
      <Alert variant="error"><AlertDescription>Error alert</AlertDescription></Alert>
    </div>
  ),
}

export const BannerExample: Story = {
  render: () => (
    <div style={{ width: '100%' }}>
      <Banner variant="info" dismissible>
        <AlertDescription>
          Estamos em manutenção programada das 02:00 às 04:00.
        </AlertDescription>
      </Banner>
    </div>
  ),
  parameters: { layout: 'fullscreen' },
}
