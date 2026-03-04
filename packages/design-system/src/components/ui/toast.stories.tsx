import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastContainer, useToast } from './toast'
import { Button } from './button'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    id: '1',
    title: 'Notificação',
    description: 'Esta é uma notificação padrão.',
  },
}

export const Success: Story = {
  args: {
    id: '2',
    title: 'Sucesso!',
    description: 'Sua ação foi concluída com sucesso.',
    variant: 'success',
  },
}

export const Warning: Story = {
  args: {
    id: '3',
    title: 'Atenção',
    description: 'Verifique as informações antes de continuar.',
    variant: 'warning',
  },
}

export const Error: Story = {
  args: {
    id: '4',
    title: 'Erro',
    description: 'Ocorreu um erro ao processar sua solicitação.',
    variant: 'error',
  },
}

export const Info: Story = {
  args: {
    id: '5',
    title: 'Informação',
    description: 'Uma nova atualização está disponível.',
    variant: 'info',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '350px' }}>
      <Toast id="1" title="Default" description="Notificação padrão" />
      <Toast id="2" title="Sucesso!" description="Operação concluída" variant="success" />
      <Toast id="3" title="Atenção" description="Verifique os dados" variant="warning" />
      <Toast id="4" title="Erro" description="Falha na operação" variant="error" />
      <Toast id="5" title="Info" description="Nova mensagem" variant="info" />
    </div>
  ),
}

export const Interactive: Story = {
  render: () => {
    const ToastDemo = () => {
      const { toasts, addToast, removeToast } = useToast()

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <Button
              size="sm"
              onClick={() => addToast({ title: 'Salvo!', description: 'Alterações salvas com sucesso.', variant: 'success' })}
            >
              Toast Sucesso
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => addToast({ title: 'Atenção', description: 'Campos obrigatórios pendentes.', variant: 'warning' })}
            >
              Toast Aviso
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => addToast({ title: 'Erro', description: 'Não foi possível conectar.', variant: 'error' })}
            >
              Toast Erro
            </Button>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => addToast({ title: 'Info', description: 'Nova versão disponível.', variant: 'info' })}
            >
              Toast Info
            </Button>
          </div>
          <ToastContainer toasts={toasts} onClose={removeToast} />
        </div>
      )
    }

    return <ToastDemo />
  },
}
