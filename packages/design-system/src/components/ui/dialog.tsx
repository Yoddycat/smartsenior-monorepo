import * as React from "react"
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose } from "./modal"
import { Button } from "./button"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export interface DialogProps {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
}

/**
 * Dialog component following SmartSenior Design System
 *
 * Simple dialog wrapper around Modal for common use cases
 */
const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ open, onClose, title, description, children, className }, ref) => {
    return (
      <Modal ref={ref} open={open} onClose={onClose} className={className}>
        <ModalClose onClose={onClose} />
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          {description && <ModalDescription>{description}</ModalDescription>}
        </ModalHeader>
        {children && <ModalContent>{children}</ModalContent>}
      </Modal>
    )
  }
)
Dialog.displayName = "Dialog"

export interface AlertDialogProps {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  description: string
  confirmText?: string
  cancelText?: string
  variant?: 'default' | 'danger'
}

/**
 * AlertDialog component following SmartSenior Design System
 *
 * Confirmation dialog with action buttons
 */
const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  ({
    open,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar',
    variant = 'default'
  }, ref) => {
    return (
      <Modal ref={ref} open={open} onClose={onClose} size="sm">
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeader>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            {cancelText}
          </Button>
          <Button
            variant={variant === 'danger' ? 'destructive' : 'primary'}
            onClick={() => {
              onConfirm()
              onClose()
            }}
          >
            {confirmText}
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
)
AlertDialog.displayName = "AlertDialog"

export { Dialog, AlertDialog }
