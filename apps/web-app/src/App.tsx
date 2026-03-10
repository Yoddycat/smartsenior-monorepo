/**
 * SmartSenior Web App
 *
 * Example of using shared packages from the monorepo
 */

import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Typography,
  AIChat,
  ChatMessage,
} from '@smartsenior/ui-design-system'

import {
  AGENT_ROLES,
  createTask,
  WORKFLOW_TYPES,
} from '@smartsenior/aios-core'

// Styles are imported in main.tsx

export function App() {
  const handleSendMessage = (content: string) => {
    console.log('Message sent:', content)
  }

  const messages: ChatMessage[] = []

  return (
    <div className="min-h-screen bg-[var(--background)] p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Typography variant="h1">SmartSenior Web App</Typography>
        <Typography variant="lead">
          Exemplo de aplicação utilizando o Design System e AIOS Core compartilhados.
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Design System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button>Botão Primário</Button>
              <Button variant="secondary">Botão Secundário</Button>
              <Button variant="accent">Botão CTA</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AIOS Core</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="body-sm" color="muted">
                Agentes disponíveis:
              </Typography>
              <ul className="mt-2 space-y-1">
                {Object.entries(AGENT_ROLES).slice(0, 5).map(([key, value]) => (
                  <li key={key} className="text-sm">
                    <strong>@{key}</strong>: {value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>AI Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <AIChat
              messages={messages}
              onSendMessage={handleSendMessage}
              welcomeMessage="Olá! Como posso ajudar você hoje?"
              assistantName="SmartSenior"
              suggestedPrompts={[
                'Agendar consulta',
                'Ver medicamentos',
                'Falar com atendente',
              ]}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
