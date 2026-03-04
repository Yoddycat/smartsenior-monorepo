import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" style={{ width: '400px' }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Primeiro item</AccordionTrigger>
        <AccordionContent>
          Este é o conteúdo do primeiro item do accordion. Pode conter qualquer tipo de informação.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Segundo item</AccordionTrigger>
        <AccordionContent>
          Este é o conteúdo do segundo item do accordion.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Terceiro item</AccordionTrigger>
        <AccordionContent>
          Este é o conteúdo do terceiro item do accordion.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" defaultValue={['item-1', 'item-3']} style={{ width: '400px' }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Seção 1</AccordionTrigger>
        <AccordionContent>
          Múltiplos itens podem ficar abertos ao mesmo tempo.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Seção 2</AccordionTrigger>
        <AccordionContent>
          Clique em qualquer cabeçalho para expandir ou recolher.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Seção 3</AccordionTrigger>
        <AccordionContent>
          Esta seção também começa aberta por padrão.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const FAQ: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <h2 style={{ marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.5rem' }}>
        Perguntas Frequentes
      </h2>
      <Accordion type="single">
        <AccordionItem value="q1">
          <AccordionTrigger>Como faço para criar uma conta?</AccordionTrigger>
          <AccordionContent>
            Clique no botão "Criar Conta" no canto superior direito da página.
            Preencha seus dados e siga as instruções para verificar seu email.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q2">
          <AccordionTrigger>Quais formas de pagamento são aceitas?</AccordionTrigger>
          <AccordionContent>
            Aceitamos cartões de crédito (Visa, Mastercard, Elo), PIX,
            boleto bancário e transferência bancária.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q3">
          <AccordionTrigger>Qual é o prazo de entrega?</AccordionTrigger>
          <AccordionContent>
            O prazo de entrega varia de acordo com sua região. Após a confirmação
            do pagamento, o prazo médio é de 5 a 10 dias úteis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="q4">
          <AccordionTrigger>Como solicitar reembolso?</AccordionTrigger>
          <AccordionContent>
            Para solicitar reembolso, acesse "Meus Pedidos", selecione o pedido
            desejado e clique em "Solicitar Reembolso". O prazo para reembolso
            é de até 7 dias úteis.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Settings: Story = {
  render: () => (
    <div style={{ width: '450px' }}>
      <Accordion type="multiple" defaultValue={['general']}>
        <AccordionItem value="general">
          <AccordionTrigger>Configurações Gerais</AccordionTrigger>
          <AccordionContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Idioma</span>
                <span style={{ color: 'var(--foreground-muted)' }}>Português (BR)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Fuso horário</span>
                <span style={{ color: 'var(--foreground-muted)' }}>Brasília (GMT-3)</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="privacy">
          <AccordionTrigger>Privacidade</AccordionTrigger>
          <AccordionContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Perfil público</span>
                <span style={{ color: 'var(--foreground-muted)' }}>Ativado</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Mostrar online</span>
                <span style={{ color: 'var(--foreground-muted)' }}>Desativado</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="notifications">
          <AccordionTrigger>Notificações</AccordionTrigger>
          <AccordionContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Email</span>
                <span style={{ color: 'var(--foreground-muted)' }}>Ativado</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Push</span>
                <span style={{ color: 'var(--foreground-muted)' }}>Ativado</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>SMS</span>
                <span style={{ color: 'var(--foreground-muted)' }}>Desativado</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
