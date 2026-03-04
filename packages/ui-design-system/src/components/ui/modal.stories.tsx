import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose } from './modal'
import { Button } from './button'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Título do Modal</ModalTitle>
            <ModalDescription>
              Esta é uma descrição do modal explicando seu propósito.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
            <p>Conteúdo do modal vai aqui. Você pode adicionar qualquer elemento.</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Confirmar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const SmallSize: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal Pequeno</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="sm">
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Confirmação</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <p>Tem certeza que deseja continuar?</p>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Não</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Sim</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const LargeSize: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Modal Grande</Button>
        <Modal open={open} onClose={() => setOpen(false)} size="lg">
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Termos de Uso</ModalTitle>
            <ModalDescription>
              Por favor, leia atentamente os termos abaixo.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
            <div style={{ maxHeight: '300px', overflow: 'auto' }}>
              <p style={{ marginBottom: '1rem' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Recusar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Aceitar</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}

export const FormModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Editar Perfil</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalClose onClose={() => setOpen(false)} />
          <ModalHeader>
            <ModalTitle>Editar Perfil</ModalTitle>
            <ModalDescription>
              Atualize suas informações pessoais.
            </ModalDescription>
          </ModalHeader>
          <ModalContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                  Nome
                </label>
                <input
                  type="text"
                  defaultValue="João da Silva"
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
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="joao@email.com"
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
          </ModalContent>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Salvar</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  },
}
