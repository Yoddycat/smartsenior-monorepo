# AIOS Skills System

Sistema de skills para os 11 agentes AIOS com validação de autoridade e execução de comandos.

## Visão Geral

O Skills System permite que agentes executem comandos (`*command`) com:
- Validação de autoridade (quem pode executar o quê)
- Registro centralizado de skills e handlers
- Dependências entre skills
- Execução com contexto completo

## Métricas Atuais

| Métrica | Valor |
|---------|-------|
| Total de skills | 51 |
| Handlers implementados | 51 (100%) |
| Testes | 103 |
| Agentes | 11 |

## Instalação

```typescript
import { initializeSkillSystem } from '@smartsenior/aios-core/skills'

// Inicializa todas as skills e handlers
const result = initializeSkillSystem()
// { skills: 51, handlers: { registered: 51 }, coverage: 100 }
```

## Estrutura

```
skills/
├── index.ts              # Exports públicos
├── types.ts              # Interfaces principais
├── authority.ts          # Sistema de autoridade
├── registry.ts           # Registro centralizado
├── definitions/          # Definições de skills por agente
│   ├── sm/               # @sm: *draft, *story-checklist
│   ├── po/               # @po: *validate-story-draft
│   ├── dev/              # @dev: *develop, *commit
│   ├── qa/               # @qa: *gate, *review
│   ├── devops/           # @devops: *push, *create-pr
│   ├── pm/               # @pm: *create-prd, *execute-epic
│   ├── architect/        # @architect: *assess-complexity
│   ├── analyst/          # @analyst: *research-prompt
│   ├── data-engineer/    # @data-engineer: *create-schema
│   ├── aios-master/      # @aios-master: *run-workflow
│   └── ux-design-expert/ # @ux-design-expert: *create-prototype
└── handlers/             # Implementação de execução
    ├── types.ts          # Tipos de handlers
    ├── base.ts           # Utilitários
    ├── sdc/              # Handlers do Story Development Cycle
    ├── pm/               # PM handlers
    ├── architect/        # Architect handlers
    ├── analyst/          # Analyst handlers
    ├── aios-master/      # AIOS Master handlers
    ├── data-engineer/    # Data Engineer handlers
    └── ux-design-expert/ # UX Design Expert handlers
```

## Skills por Agente

### @sm (Scrum Master) - 3 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*draft` | Criar story draft | ✅ |
| `*story-checklist` | Validar contra checklist | ✅ |
| `*create-next-story` | Criar próxima story do épico | ✅ |

### @po (Product Owner) - 4 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*validate-story-draft` | Validar story (10 pontos) | ✅ |
| `*accept-story` | Aceitar story após QA | ✅ |
| `*close-story` | Marcar story como Done | ✅ |
| `*prioritize-backlog` | Reordenar backlog | ✅ |

### @dev (Developer) - 6 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*develop` | Implementar story | ✅ |
| `*commit` | Criar commit git | ✅ |
| `*run-tests` | Executar testes | ✅ |
| `*lint` | Executar linting | ✅ |
| `*typecheck` | Verificar tipos TypeScript | ✅ |
| `*refactor` | Refatorar código com safety checks | ✅ |

### @qa (Quality Assurance) - 6 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*gate` | Executar QA gate (7 checks) | ✅ |
| `*review` | Code review | ✅ |
| `*qa-loop` | Loop iterativo de QA | ✅ |
| `*coderabbit-review` | Review automatizado + self-healing | ✅ |
| `*security-audit` | Auditoria OWASP | ✅ |
| `*critique-spec` | Criticar especificação | ✅ |

### @devops (DevOps) - 5 skills (EXCLUSIVO)
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*push` | Push para remote | ✅ |
| `*create-pr` | Criar pull request | ✅ |
| `*merge-pr` | Merge de PR | ✅ |
| `*release` | Criar release | ✅ |
| `*setup-mcp` | Configurar MCP server | ✅ |

### @pm (Project Manager) - 5 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*create-prd` | Criar PRD | ✅ |
| `*create-epic` | Criar epic | ✅ |
| `*execute-epic` | Executar epic | ✅ |
| `*gather-requirements` | Coletar requisitos | ✅ |
| `*write-spec` | Escrever especificação | ✅ |

### @architect (Architect) - 3 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*assess-complexity` | Avaliar complexidade | ✅ |
| `*design-system` | Criar design de sistema | ✅ |
| `*plan-implementation` | Planejar implementação | ✅ |

### @analyst (Analyst) - 3 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*research-prompt` | Pesquisa para spec | ✅ |
| `*analyze-data` | Analisar dados | ✅ |
| `*create-report` | Criar relatório | ✅ |

### @data-engineer (Data Engineer) - 5 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*create-schema` | Criar schema DDL | ✅ |
| `*optimize-query` | Otimizar queries | ✅ |
| `*create-migration` | Criar migration | ✅ |
| `*audit-database` | Auditar banco | ✅ |
| `*implement-rls` | Implementar RLS | ✅ |

### @ux-design-expert (UX Design Expert) - 6 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*create-prototype` | Criar protótipo | ✅ |
| `*review-ux` | Revisar UX/UI | ✅ |
| `*create-wireframe` | Criar wireframe | ✅ |
| `*audit-accessibility` | Auditoria WCAG | ✅ |
| `*create-design-system` | Criar design system | ✅ |
| `*user-flow-analysis` | Análise de user flow | ✅ |

### @aios-master (AIOS Master) - 5 skills
| Comando | Descrição | Handler |
|---------|-----------|---------|
| `*run-workflow` | Executar workflow | ✅ |
| `*help` | Mostrar ajuda | ✅ |
| `*status` | Status do sistema | ✅ |
| `*delegate` | Delegar tarefa | ✅ |
| `*config` | Gerenciar configuração | ✅ |

## Sistema de Autoridade

### Níveis de Autoridade

```typescript
type AuthorityLevel = 'exclusive' | 'shared' | 'delegated'
```

- **exclusive**: Apenas o agente owner pode executar
- **shared**: Múltiplos agentes podem executar
- **delegated**: Delegado de outro agente

### Presets

```typescript
import { AUTHORITY_PRESETS } from '@smartsenior/aios-core/skills'

// Uso exclusivo por agente
AUTHORITY_PRESETS.DEVOPS_EXCLUSIVE  // Só @devops
AUTHORITY_PRESETS.DEV_EXCLUSIVE     // Só @dev
AUTHORITY_PRESETS.QA_EXCLUSIVE      // Só @qa

// Compartilhado
AUTHORITY_PRESETS.DEV_QA_SHARED     // @dev e @qa
AUTHORITY_PRESETS.ALL_AGENTS        // Todos

// @aios-master pode executar QUALQUER skill
```

### Operações Bloqueadas

```typescript
// Estas operações são BLOQUEADAS para todos exceto @devops:
- 'git push'
- 'gh pr create'
- 'gh pr merge'
```

## Uso

### Registrar e Executar Skills

```typescript
import {
  initializeSkillSystem,
  getRegistry,
} from '@smartsenior/aios-core/skills'

// Inicializar
initializeSkillSystem()

// Obter registry
const registry = getRegistry()

// Executar por comando
const result = await registry.executeByCommand('*develop', {
  sessionId: 'session-1',
  executingAgent: 'dev',
  storyId: '1.1',
})

// Executar por ID
const result = await registry.execute('dev:develop', context, args)
```

### Validar Autoridade

```typescript
import { validateSkillAuthority, exclusiveAuthority } from '@smartsenior/aios-core/skills'

const authority = exclusiveAuthority('devops')

// Dev tentando executar
const result = validateSkillAuthority(authority, 'dev')
// { authorized: false, reason: '...', suggestDelegateTo: 'devops' }

// DevOps executando
const result = validateSkillAuthority(authority, 'devops')
// { authorized: true }
```

### Criar Skills Customizadas

```typescript
import { defineSkill, defineDevSkill } from '@smartsenior/aios-core/skills'

// Skill genérica
const mySkill = defineSkill({
  command: '*my-command',
  name: 'My Command',
  description: 'Does something',
  owner: 'dev',
  category: 'development',
})

// Usando helper (auto-configura owner, category, authority)
const devSkill = defineDevSkill({
  command: '*custom-dev',
  name: 'Custom Dev Skill',
  description: 'A custom dev skill',
})
```

### Handlers

```typescript
import {
  success,
  failure,
  successWithTriggers,
  withErrorHandling,
  type ExtendedSkillContext,
} from '@smartsenior/aios-core/skills'

// Criar handler
async function myHandler(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
): Promise<SkillResult<MyResult>> {
  const { deps, story } = context

  if (!story?.storyId) {
    return failure('Story ID required')
  }

  // Usar dependências injetadas
  const content = await deps.fs.read(story.storyPath)
  deps.logger.info('Processing story...')

  return success({ processed: true })
}

// Com error handling
const safeHandler = withErrorHandling(myHandler)
```

### Dependências Injetadas nos Handlers

```typescript
interface HandlerDependencies {
  fs: {
    read(path: string): Promise<string>
    write(path: string, content: string): Promise<void>
    exists(path: string): Promise<boolean>
    glob(pattern: string): Promise<string[]>
  }
  git: {
    status(): Promise<{ hasChanges: boolean }>
    add(files: string[]): Promise<void>
    commit(message: string): Promise<string>
    push(remote?: string, branch?: string): Promise<void>
    branch(): Promise<string>
  }
  logger: {
    info(message: string): void
    warn(message: string): void
    error(message: string): void
    debug(message: string): void
  }
  prompt: {
    confirm(message: string): Promise<boolean>
    input(message: string): Promise<string>
    select<T>(message: string, options: T[]): Promise<T>
  }
}
```

### Status do Sistema

```typescript
import { getSkillSystemStatus, getHandlerCounts } from '@smartsenior/aios-core/skills'

const status = getSkillSystemStatus()
// {
//   initialized: true,
//   skills: { total: 51, byOwner: {...}, byCategory: {...} },
//   handlers: { total: 42, coverage: 82, withHandlers: [...], withoutHandlers: [...] }
// }

const counts = getHandlerCounts()
// {
//   total: 42,
//   byCategory: {
//     sdc: 16,
//     pm: 5,
//     architect: 3,
//     analyst: 3,
//     'aios-master': 4,
//     'data-engineer': 5,
//     'ux-design-expert': 6
//   }
// }
```

## Workflows Suportados

### Story Development Cycle (SDC)

```
@sm *draft → @po *validate-story-draft → @dev *develop → @qa *gate → @devops *push
```

### QA Loop

```
@qa *review → verdict → @dev fixes → re-review (max 5 iterações)
```

### Spec Pipeline

```
@pm *gather-requirements → @architect *assess-complexity → @analyst *research-prompt → @pm *write-spec → @qa *critique-spec → @architect *plan-implementation
```

## Handler Utilities

```typescript
// Resultado de sucesso
success(data)
success(data, ['warning1', 'warning2'])

// Resultado de erro
failure('Error message')

// Sucesso com skills triggered
successWithTriggers(data, ['next:skill', 'another:skill'])

// Wrapper para error handling automático
const safeHandler = withErrorHandling(myHandler)

// Wrapper para dry-run
const dryRunHandler = withDryRun(myHandler, mockResult)

// Wrapper para timeout
const timedHandler = withTimeout(myHandler, 30000)

// Wrapper para confirmação
const confirmedHandler = withConfirmation(myHandler, 'Proceed?')

// Compor handlers
const composedHandler = composeHandlers(handler1, handler2, handler3)
```

## Testes

```bash
cd packages/aios-core
npm test
```

103 testes cobrindo:
- Base Handler Utilities (7 testes)
- Handler Wrappers (3 testes)
- SDC Handlers (12 testes)
- Handler Registry (9 testes)
- Data Engineer Handlers (10 testes)
- UX Design Expert Handlers (10 testes)
- New SDC Handlers (26 testes)
- AIOS Master Handlers (7 testes)
- Skills Registry (29 testes)

## Cobertura de Handlers por Categoria

| Categoria | Handlers | Cobertura |
|-----------|----------|-----------|
| SDC | 25 | 100% |
| PM | 5 | 100% |
| Architect | 3 | 100% |
| Analyst | 3 | 100% |
| AIOS Master | 5 | 100% |
| Data Engineer | 5 | 100% |
| UX Design Expert | 6 | 100% |
| **Total** | **51/51** | **100%** |
