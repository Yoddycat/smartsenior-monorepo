import * as React from "react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// ============================================
// TYPES
// ============================================

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: Date
  status?: 'sending' | 'sent' | 'error'
  metadata?: Record<string, unknown>
}

export interface AIChatProps {
  messages: ChatMessage[]
  onSendMessage: (content: string) => void
  onRetry?: (messageId: string) => void
  isLoading?: boolean
  placeholder?: string
  disabled?: boolean
  showTimestamp?: boolean
  showAvatar?: boolean
  userAvatar?: React.ReactNode
  assistantAvatar?: React.ReactNode
  assistantName?: string
  userName?: string
  welcomeMessage?: string
  suggestedPrompts?: string[]
  onSuggestedPromptClick?: (prompt: string) => void
  maxHeight?: string | number
  className?: string
}

export interface ChatBubbleProps {
  message: ChatMessage
  showTimestamp?: boolean
  showAvatar?: boolean
  avatar?: React.ReactNode
  name?: string
  onRetry?: () => void
}

export interface ChatInputProps {
  onSend: (content: string) => void
  placeholder?: string
  disabled?: boolean
  isLoading?: boolean
  className?: string
}

// ============================================
// ICONS
// ============================================

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
)

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const BotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>
)

const RetryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
)

// ============================================
// TYPING INDICATOR
// ============================================

const TypingIndicator: React.FC = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    <div className="flex gap-1">
      <span className="w-2 h-2 bg-[var(--foreground-muted)] rounded-full animate-bounce [animation-delay:-0.3s]" />
      <span className="w-2 h-2 bg-[var(--foreground-muted)] rounded-full animate-bounce [animation-delay:-0.15s]" />
      <span className="w-2 h-2 bg-[var(--foreground-muted)] rounded-full animate-bounce" />
    </div>
  </div>
)

// ============================================
// CHAT BUBBLE
// ============================================

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  showTimestamp = true,
  showAvatar = true,
  avatar,
  name,
  onRetry,
}) => {
  const isUser = message.role === 'user'
  const isError = message.status === 'error'

  const formatTime = (date?: Date) => {
    if (!date) return ''
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }

  const defaultAvatar = isUser ? <UserIcon /> : <BotIcon />

  return (
    <div
      className={cn(
        "flex gap-3 px-4 py-2",
        isUser && "flex-row-reverse"
      )}
    >
      {/* Avatar */}
      {showAvatar && (
        <div
          className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
            isUser
              ? "bg-[var(--primary)] text-white"
              : "bg-[var(--background-muted)] text-[var(--foreground)]"
          )}
        >
          {avatar || defaultAvatar}
        </div>
      )}

      {/* Content */}
      <div className={cn("flex flex-col gap-1 max-w-[75%]", isUser && "items-end")}>
        {/* Name */}
        {name && (
          <span className="text-xs font-medium text-[var(--foreground-muted)]">
            {name}
          </span>
        )}

        {/* Message bubble */}
        <div
          className={cn(
            "px-4 py-3 rounded-2xl text-base leading-relaxed",
            isUser
              ? "bg-[var(--primary)] text-white rounded-br-md"
              : "bg-[var(--background-muted)] text-[var(--foreground)] rounded-bl-md",
            isError && "border-2 border-[var(--error)]"
          )}
        >
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        </div>

        {/* Footer */}
        <div className={cn("flex items-center gap-2", isUser && "flex-row-reverse")}>
          {showTimestamp && message.timestamp && (
            <span className="text-xs text-[var(--foreground-muted)]">
              {formatTime(message.timestamp)}
            </span>
          )}

          {message.status === 'sending' && (
            <span className="text-xs text-[var(--foreground-muted)]">Enviando...</span>
          )}

          {isError && onRetry && (
            <button
              onClick={onRetry}
              className={cn(
                "flex items-center gap-1 text-xs text-[var(--error)]",
                "hover:underline focus:outline-none focus:underline"
              )}
            >
              <RetryIcon />
              Tentar novamente
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

ChatBubble.displayName = "ChatBubble"

// ============================================
// CHAT INPUT
// ============================================

const ChatInput: React.FC<ChatInputProps> = ({
  onSend,
  placeholder = "Digite sua mensagem...",
  disabled = false,
  isLoading = false,
  className,
}) => {
  const [value, setValue] = React.useState('')
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (trimmed && !disabled && !isLoading) {
      onSend(trimmed)
      setValue('')
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto'
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    // Auto-resize
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`
    }
  }

  return (
    <div
      className={cn(
        "flex items-end gap-2 p-4 border-t border-[var(--border)] bg-[var(--card)]",
        className
      )}
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || isLoading}
        rows={1}
        className={cn(
          "flex-1 resize-none px-4 py-3 rounded-xl text-base",
          "bg-[var(--background)] border border-[var(--border)]",
          "text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]",
          "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:border-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "min-h-[48px] max-h-[150px]"
        )}
      />
      <button
        onClick={handleSubmit}
        disabled={disabled || isLoading || !value.trim()}
        className={cn(
          "flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center",
          "bg-[var(--primary)] text-white",
          "hover:bg-[var(--primary-hover)] transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        aria-label="Enviar mensagem"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <SendIcon />
        )}
      </button>
    </div>
  )
}

ChatInput.displayName = "ChatInput"

// ============================================
// SUGGESTED PROMPTS
// ============================================

interface SuggestedPromptsProps {
  prompts: string[]
  onClick: (prompt: string) => void
}

const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({ prompts, onClick }) => (
  <div className="flex flex-wrap gap-2 px-4 py-3">
    {prompts.map((prompt, index) => (
      <button
        key={index}
        onClick={() => onClick(prompt)}
        className={cn(
          "px-4 py-2 rounded-full text-sm",
          "bg-[var(--background-muted)] text-[var(--foreground)]",
          "border border-[var(--border)]",
          "hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)]",
          "focus:outline-none focus:ring-2 focus:ring-[var(--ring)]",
          "transition-colors"
        )}
      >
        {prompt}
      </button>
    ))}
  </div>
)

// ============================================
// WELCOME MESSAGE
// ============================================

interface WelcomeMessageProps {
  message: string
  assistantAvatar?: React.ReactNode
  assistantName?: string
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  message,
  assistantAvatar,
  assistantName = "Assistente",
}) => (
  <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
    <div className="w-16 h-16 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mb-4">
      {assistantAvatar || <BotIcon />}
    </div>
    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
      {assistantName}
    </h3>
    <p className="text-[var(--foreground-muted)] max-w-md">
      {message}
    </p>
  </div>
)

// ============================================
// AI CHAT (MAIN COMPONENT)
// ============================================

const AIChat: React.FC<AIChatProps> = ({
  messages,
  onSendMessage,
  onRetry,
  isLoading = false,
  placeholder = "Digite sua mensagem...",
  disabled = false,
  showTimestamp = true,
  showAvatar = true,
  userAvatar,
  assistantAvatar,
  assistantName = "Assistente",
  userName = "Você",
  welcomeMessage,
  suggestedPrompts,
  onSuggestedPromptClick,
  maxHeight = 500,
  className,
}) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const messagesContainerRef = React.useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom on new messages
  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const handleSuggestedPromptClick = (prompt: string) => {
    if (onSuggestedPromptClick) {
      onSuggestedPromptClick(prompt)
    } else {
      onSendMessage(prompt)
    }
  }

  const showWelcome = messages.length === 0 && welcomeMessage
  const showSuggestions = messages.length === 0 && suggestedPrompts && suggestedPrompts.length > 0

  return (
    <div
      className={cn(
        "flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden",
        className
      )}
    >
      {/* Messages area */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto"
        style={{ maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight }}
      >
        {showWelcome && (
          <WelcomeMessage
            message={welcomeMessage}
            assistantAvatar={assistantAvatar}
            assistantName={assistantName}
          />
        )}

        {showSuggestions && (
          <SuggestedPrompts
            prompts={suggestedPrompts}
            onClick={handleSuggestedPromptClick}
          />
        )}

        {messages
          .filter((m) => m.role !== 'system')
          .map((message) => (
            <ChatBubble
              key={message.id}
              message={message}
              showTimestamp={showTimestamp}
              showAvatar={showAvatar}
              avatar={message.role === 'user' ? userAvatar : assistantAvatar}
              name={message.role === 'user' ? userName : assistantName}
              onRetry={onRetry ? () => onRetry(message.id) : undefined}
            />
          ))}

        {isLoading && (
          <div className="flex gap-3 px-4 py-2">
            {showAvatar && (
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--background-muted)] text-[var(--foreground)] flex items-center justify-center">
                {assistantAvatar || <BotIcon />}
              </div>
            )}
            <div className="bg-[var(--background-muted)] rounded-2xl rounded-bl-md">
              <TypingIndicator />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <ChatInput
        onSend={onSendMessage}
        placeholder={placeholder}
        disabled={disabled}
        isLoading={isLoading}
      />
    </div>
  )
}

AIChat.displayName = "AIChat"

// ============================================
// EXPORTS
// ============================================

export { AIChat, ChatBubble, ChatInput, TypingIndicator }
