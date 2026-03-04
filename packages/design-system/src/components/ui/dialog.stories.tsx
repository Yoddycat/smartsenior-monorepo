import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Dialog, AlertDialog } from './dialog'
import { Button } from './button'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir Dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="Informação"
          description="Este é um dialog simples para exibir informações."
        >
          <p>Você pode adicionar qualquer conteúdo aqui dentro.</p>
        </Dialog>
      </>
    )
  },
}

export const AlertDialogDefault: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir Alert Dialog</Button>
        <AlertDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => alert('Confirmado!')}
          title="Confirmar Ação"
          description="Tem certeza que deseja continuar com esta ação?"
        />
      </>
    )
  },
}

export const AlertDialogDanger: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Excluir Item
        </Button>
        <AlertDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => alert('Item excluído!')}
          title="Excluir Item"
          description="Esta ação não pode ser desfeita. O item será permanentemente removido."
          confirmText="Excluir"
          cancelText="Cancelar"
          variant="danger"
        />
      </>
    )
  },
}

export const ConfirmLogout: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Sair da Conta
        </Button>
        <AlertDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => alert('Logout realizado!')}
          title="Sair da Conta"
          description="Você será desconectado e precisará fazer login novamente."
          confirmText="Sair"
          cancelText="Voltar"
        />
      </>
    )
  },
}

export const SaveChanges: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Fechar sem Salvar</Button>
        <AlertDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => alert('Alterações descartadas!')}
          title="Alterações não salvas"
          description="Você tem alterações não salvas. Deseja descartar e continuar?"
          confirmText="Descartar"
          cancelText="Voltar e Salvar"
          variant="danger"
        />
      </>
    )
  },
}
