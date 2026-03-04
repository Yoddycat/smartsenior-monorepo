import type { Meta, StoryObj } from '@storybook/react'
import { AIChat, ChatMessage } from './ai-chat'
import * as React from 'react'

const meta: Meta<typeof AIChat> = {
  title: 'Components/AIChat',
  component: AIChat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof AIChat>

const sampleMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Olá! Como posso ajudar você hoje?',
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: '2',
    role: 'user',
    content: 'Preciso de ajuda para agendar uma consulta médica.',
    timestamp: new Date(Date.now() - 50000),
  },
  {
    id: '3',
    role: 'assistant',
    content: 'Claro! Posso ajudar com isso. Qual especialidade médica você está procurando?',
    timestamp: new Date(Date.now() - 40000),
  },
  {
    id: '4',
    role: 'user',
    content: 'Cardiologista',
    timestamp: new Date(Date.now() - 30000),
  },
  {
    id: '5',
    role: 'assistant',
    content: 'Encontrei 3 cardiologistas disponíveis na sua região. Você prefere atendimento presencial ou por telemedicina?',
    timestamp: new Date(Date.now() - 20000),
  },
]

export const Default: Story = {
  args: {
    messages: sampleMessages,
    onSendMessage: (content) => console.log('Send:', content),
  },
}

export const Empty: Story = {
  args: {
    messages: [],
    onSendMessage: (content) => console.log('Send:', content),
    welcomeMessage: 'Olá! Sou seu assistente virtual. Como posso ajudar você hoje?',
    assistantName: 'SmartSenior',
  },
}

export const WithSuggestedPrompts: Story = {
  args: {
    messages: [],
    onSendMessage: (content) => console.log('Send:', content),
    welcomeMessage: 'Olá! Sou seu assistente de saúde. Como posso ajudar?',
    suggestedPrompts: [
      'Agendar consulta',
      'Ver medicamentos',
      'Falar com médico',
      'Dúvidas frequentes',
    ],
  },
}

export const Loading: Story = {
  args: {
    messages: [
      {
        id: '1',
        role: 'user',
        content: 'Qual é o horário de funcionamento da clínica?',
        timestamp: new Date(),
      },
    ],
    onSendMessage: (content) => console.log('Send:', content),
    isLoading: true,
  },
}

export const WithError: Story = {
  args: {
    messages: [
      {
        id: '1',
        role: 'user',
        content: 'Agendar consulta para amanhã',
        timestamp: new Date(),
        status: 'error',
      },
    ],
    onSendMessage: (content) => console.log('Send:', content),
    onRetry: (id) => console.log('Retry:', id),
  },
}

export const NoTimestamps: Story = {
  args: {
    messages: sampleMessages,
    onSendMessage: (content) => console.log('Send:', content),
    showTimestamp: false,
  },
}

export const NoAvatars: Story = {
  args: {
    messages: sampleMessages,
    onSendMessage: (content) => console.log('Send:', content),
    showAvatar: false,
  },
}

export const CustomNames: Story = {
  args: {
    messages: sampleMessages,
    onSendMessage: (content) => console.log('Send:', content),
    assistantName: 'Dr. SmartSenior',
    userName: 'Paciente',
  },
}

export const Disabled: Story = {
  args: {
    messages: sampleMessages,
    onSendMessage: (content) => console.log('Send:', content),
    disabled: true,
  },
}

export const TallChat: Story = {
  args: {
    messages: sampleMessages,
    onSendMessage: (content) => console.log('Send:', content),
    maxHeight: 600,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '450px' }}>
        <Story />
      </div>
    ),
  ],
}

export const Interactive: Story = {
  render: function InteractiveChat() {
    const [messages, setMessages] = React.useState<ChatMessage[]>([])
    const [isLoading, setIsLoading] = React.useState(false)

    const handleSend = async (content: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: new Date(),
        status: 'sent',
      }

      setMessages((prev) => [...prev, userMessage])
      setIsLoading(true)

      // Simulate AI response
      setTimeout(() => {
        const responses = [
          'Entendi sua solicitação. Deixe-me verificar...',
          'Claro! Posso ajudar com isso.',
          'Essa é uma ótima pergunta! Vou buscar as informações.',
          'Obrigado por entrar em contato. Vou processar seu pedido.',
        ]

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1500)
    }

    return (
      <AIChat
        messages={messages}
        onSendMessage={handleSend}
        isLoading={isLoading}
        welcomeMessage="Olá! Sou o assistente virtual SmartSenior. Como posso ajudar você hoje?"
        assistantName="SmartSenior"
        suggestedPrompts={[
          'Agendar consulta',
          'Meus medicamentos',
          'Falar com atendente',
        ]}
      />
    )
  },
}

export const HealthAssistant: Story = {
  render: function HealthAssistant() {
    const [messages, setMessages] = React.useState<ChatMessage[]>([
      {
        id: '1',
        role: 'assistant',
        content: 'Bom dia! Sou a assistente de saúde SmartSenior. Vi que você tem uma consulta agendada para amanhã às 14h com Dr. Carlos (Cardiologista). Posso ajudar com algo?',
        timestamp: new Date(),
      },
    ])
    const [isLoading, setIsLoading] = React.useState(false)

    const handleSend = (content: string) => {
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        role: 'user',
        content,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setIsLoading(true)

      setTimeout(() => {
        let response = 'Entendi. Vou verificar isso para você.'

        if (content.toLowerCase().includes('remarcar')) {
          response = 'Claro! Encontrei os seguintes horários disponíveis com Dr. Carlos:\n\n• Quinta-feira, 10h\n• Sexta-feira, 15h30\n• Segunda-feira, 9h\n\nQual horário prefere?'
        } else if (content.toLowerCase().includes('cancelar')) {
          response = 'Você tem certeza que deseja cancelar a consulta de amanhã com Dr. Carlos? Esta ação pode gerar taxa de cancelamento.'
        } else if (content.toLowerCase().includes('medicamento')) {
          response = 'Seus medicamentos atuais:\n\n💊 Losartana 50mg - 1x ao dia (manhã)\n💊 AAS 100mg - 1x ao dia (almoço)\n💊 Sinvastatina 20mg - 1x ao dia (noite)\n\nLembre-se de não interromper o uso sem orientação médica.'
        }

        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      }, 1200)
    }

    return (
      <div style={{ width: '420px' }}>
        <AIChat
          messages={messages}
          onSendMessage={handleSend}
          isLoading={isLoading}
          assistantName="Assistente de Saúde"
          maxHeight={450}
        />
      </div>
    )
  },
}
