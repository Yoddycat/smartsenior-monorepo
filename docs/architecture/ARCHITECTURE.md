# SmartSenior Monorepo - Arquitetura do Sistema

> **Documento de Arquitetura v1.0**
> **Última atualização:** 2026-03-04
> **Arquiteta:** Aria (@architect)

---

## 1. Visão Geral

O SmartSenior Monorepo é uma arquitetura de repositório único que centraliza todos os pacotes compartilhados e aplicações do cliente SmartSenior, permitindo:

- **Reutilização** de componentes UI e lógica de negócio
- **Consistência** visual e funcional entre aplicações
- **Velocidade** de desenvolvimento com dependências internas
- **Governança** centralizada de código e padrões

---

## 2. Estrutura de Diretórios

```
/Users/edilson/projetos/SmartSenior/
│
├── 📄 package.json                 # Root - configuração do monorepo
├── 📄 pnpm-workspace.yaml          # Definição dos workspaces
├── 📄 turbo.json                   # Configuração do Turborepo
├── 📄 pnpm-lock.yaml               # Lockfile unificado
├── 📄 .gitignore                   # Ignorar arquivos
│
├── 📁 packages/                    # ═══ PACOTES COMPARTILHADOS ═══
│   │
│   ├── 📁 ui-design-system/        # @smartsenior/ui-design-system
│   │   ├── 📄 package.json
│   │   ├── 📁 src/
│   │   │   ├── 📁 components/ui/   # 50+ componentes React
│   │   │   ├── 📁 styles/          # Tailwind CSS v4 + tokens
│   │   │   ├── 📁 tokens/          # Design tokens (DTCG)
│   │   │   └── 📄 index.ts         # Exportações públicas
│   │   ├── 📁 .storybook/          # Configuração Storybook
│   │   └── 📄 tsconfig.json
│   │
│   └── 📁 aios-core/               # @smartsenior/aios-core
│       ├── 📄 package.json
│       ├── 📁 src/
│       │   ├── 📁 agents/          # Definições de agentes
│       │   ├── 📁 tasks/           # Sistema de tarefas
│       │   ├── 📁 workflows/       # Orquestração de workflows
│       │   └── 📄 index.ts         # Exportações públicas
│       └── 📄 tsconfig.json
│
├── 📁 apps/                        # ═══ APLICAÇÕES ═══
│   │
│   ├── 📁 web-app/                 # @smartsenior/web-app (exemplo)
│   │   ├── 📄 package.json
│   │   └── 📁 src/
│   │
│   ├── 📁 admin-portal/            # (futuro) Painel administrativo
│   ├── 📁 patient-app/             # (futuro) App do paciente
│   ├── 📁 caregiver-app/           # (futuro) App do cuidador
│   └── 📁 landing-page/            # (futuro) Site institucional
│
└── 📁 docs/                        # ═══ DOCUMENTAÇÃO ═══
    └── 📁 architecture/
        ├── 📄 ARCHITECTURE.md      # Este documento
        └── 📁 decisions/
            └── 📄 ADR-001-monorepo-structure.md
```

---

## 3. Pacotes Compartilhados

### 3.1 @smartsenior/ui-design-system

**Propósito:** Biblioteca de componentes UI acessíveis para usuários seniores.

| Aspecto | Especificação |
|---------|---------------|
| **Framework** | React 18+ |
| **Styling** | Tailwind CSS v4 (CSS-first) |
| **Cores** | OKLCH color space |
| **Tokens** | W3C DTCG (3 camadas) |
| **Acessibilidade** | WCAG 2.2 AA |
| **Tipografia** | Inter Variable |
| **Touch Targets** | Mínimo 44px |
| **Documentação** | Storybook 8 |

**Componentes (50+):**

```
Forms:        Button, Input, Textarea, Checkbox, Radio, Select,
              Switch, Slider, DatePicker, TimePicker, FileUpload

Data Display: Badge, Card, Avatar, Progress, Skeleton, Table,
              List, Timeline, StatCard, Tag

Navigation:   Tabs, Accordion, Breadcrumb, Pagination, Stepper,
              DropdownMenu, Sidebar, Navbar

Layout:       Divider, Container, Grid

Feedback:     Alert, Spinner, EmptyState, ErrorState, Toast

Overlay:      Modal, Dialog, Drawer, Popover, Command

Information:  Tooltip, Calendar

Charts:       BarChart, LineChart, PieChart, DonutChart, Sparkline

AI/Chat:      AIChat, ChatBubble, ChatInput, TypingIndicator

Typography:   Typography, Heading, Text, Label, Caption,
              Highlight, Blockquote, GradientText, Prose
```

**Uso em aplicações:**

```typescript
import { Button, Card, AIChat } from '@smartsenior/ui-design-system'
import '@smartsenior/ui-design-system/styles'
```

---

### 3.2 @smartsenior/aios-core

**Propósito:** Framework de orquestração de agentes AI para automação de workflows.

| Aspecto | Especificação |
|---------|---------------|
| **Runtime** | Node.js 18+ |
| **Linguagem** | TypeScript |
| **Padrão** | Event-driven |

**Módulos:**

```typescript
// Agents - Definição e orquestração de agentes
import { AgentConfig, AgentRole, AGENT_ROLES } from '@smartsenior/aios-core/agents'

// Tasks - Sistema de gerenciamento de tarefas
import { Task, TaskStatus, createTask, updateTask } from '@smartsenior/aios-core/tasks'

// Workflows - Orquestração de workflows multi-etapa
import { Workflow, WorkflowStep, WORKFLOW_TYPES } from '@smartsenior/aios-core/workflows'
```

---

## 4. Aplicações (apps/)

### 4.1 Convenções

Cada aplicação em `apps/` deve:

1. **Naming:** `@smartsenior/{app-name}`
2. **Dependências:** Usar `workspace:*` para pacotes internos
3. **Scripts:** Implementar `dev`, `build`, `lint`, `typecheck`
4. **Private:** Marcar como `"private": true`

### 4.2 Template de Aplicação

```json
{
  "name": "@smartsenior/{app-name}",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@smartsenior/ui-design-system": "workspace:*",
    "@smartsenior/aios-core": "workspace:*",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  }
}
```

### 4.3 Aplicações Planejadas

| App | Descrição | Status |
|-----|-----------|--------|
| `web-app` | Aplicação principal (exemplo) | ✅ Criado |
| `admin-portal` | Painel administrativo | 📋 Planejado |
| `patient-app` | App do paciente/idoso | 📋 Planejado |
| `caregiver-app` | App do cuidador | 📋 Planejado |
| `landing-page` | Site institucional | 📋 Planejado |

---

## 5. Ferramentas e Configuração

### 5.1 Stack de Desenvolvimento

| Ferramenta | Versão | Propósito |
|------------|--------|-----------|
| **pnpm** | 9.15+ | Gerenciador de pacotes |
| **Turborepo** | 2.3+ | Build system com cache |
| **TypeScript** | 5.6+ | Tipagem estática |
| **Vite** | 6.0+ | Bundler e dev server |
| **Storybook** | 8.4+ | Documentação de componentes |
| **Vitest** | 2.1+ | Testes unitários |

### 5.2 Comandos Disponíveis

```bash
# Desenvolvimento
pnpm dev                    # Dev em todos os projetos
pnpm --filter {pkg} dev     # Dev em pacote específico

# Build
pnpm build                  # Build com cache Turborepo
pnpm --filter {pkg} build   # Build de pacote específico

# Testes
pnpm test                   # Testes em todos os projetos
pnpm lint                   # Lint em todos os projetos

# Storybook
pnpm storybook              # Abre Storybook do DS
pnpm storybook:build        # Build estático do Storybook

# Limpeza
pnpm clean                  # Remove builds e node_modules
```

### 5.3 Configuração de Workspaces

**pnpm-workspace.yaml:**
```yaml
packages:
  - "packages/*"
  - "apps/*"
```

**turbo.json:**
```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "storybook-static/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["^build"]
    }
  }
}
```

---

## 6. Fluxo de Dependências

```
┌─────────────────────────────────────────────────────────────┐
│                         APPS                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │  web-app    │  │admin-portal │  │ patient-app │  ...     │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘          │
│         │                │                │                  │
│         └────────────────┼────────────────┘                  │
│                          │                                   │
│                          ▼                                   │
├─────────────────────────────────────────────────────────────┤
│                       PACKAGES                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              @smartsenior/ui-design-system              │ │
│  │  (componentes, tokens, estilos, tipografia)            │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                 @smartsenior/aios-core                  │ │
│  │  (agents, tasks, workflows)                            │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Governança de Código

### 7.1 Ownership

| Diretório | Owner | Responsabilidade |
|-----------|-------|------------------|
| `packages/ui-design-system/` | @ux-design-expert | Componentes, tokens, acessibilidade |
| `packages/aios-core/` | @architect | Framework de agentes |
| `apps/*` | @dev | Implementação de aplicações |
| `docs/architecture/` | @architect | Documentação técnica |

### 7.2 Processo de Mudanças

1. **Design System:** Mudanças requerem review de acessibilidade
2. **AIOS Core:** Mudanças requerem testes de integração
3. **Apps:** Seguem fluxo padrão de PR

### 7.3 Versionamento

- **Pacotes:** Semantic Versioning (semver)
- **Apps:** Versionamento interno
- **Breaking changes:** Comunicar via ADR

---

## 8. Extensibilidade

### 8.1 Adicionando Novo Pacote

```bash
# Criar estrutura
mkdir -p packages/{novo-pacote}/src

# Criar package.json
cat > packages/{novo-pacote}/package.json << EOF
{
  "name": "@smartsenior/{novo-pacote}",
  "version": "0.1.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts"
}
EOF

# Instalar dependências
pnpm install
```

### 8.2 Adicionando Nova Aplicação

```bash
# Criar estrutura
mkdir -p apps/{nova-app}/src

# Usar template de app (seção 4.2)
# Instalar dependências
pnpm install
```

---

## 9. Decisões Arquiteturais

| ADR | Título | Status |
|-----|--------|--------|
| [ADR-001](./decisions/ADR-001-monorepo-structure.md) | Estrutura Monorepo | Aceito |

---

## 10. Roadmap Técnico

| Fase | Entregas | Status |
|------|----------|--------|
| **1.0** | Monorepo + Design System + AIOS Core | ✅ Concluído |
| **1.1** | Storybook publicado | 📋 Planejado |
| **1.2** | CI/CD com Turborepo cache | 📋 Planejado |
| **2.0** | Primeira aplicação completa | 📋 Planejado |

---

*— Aria, arquitetando o futuro* 🏗️
