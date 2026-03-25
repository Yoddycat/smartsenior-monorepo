# AIOS Skills System

Sistema de skills para os 11 agentes AIOS com validação de autoridade e execução de comandos.

## Visão Geral

O Skills System permite que agentes executem comandos (`*command`) com:
- Validação de autoridade (quem pode executar o quê)
- Registro centralizado de skills e handlers
- Dependências entre skills
- Execução com contexto completo

## Instalação

```typescript
import { initializeSkillSystem } from '@smartsenior/aios-core/skills'

// Inicializa todas as skills e handlers
const result = initializeSkillSystem()
// { skills: 51, handlers: { registered: 16 }, coverage: 31 }
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
    └── sdc/              # Handlers do Story Development Cycle
```

## Skills por Agente

### @sm (Scrum Master)
| Comando | Descrição |
|---------|-----------|
| `*draft` | Criar story draft |
| `*story-checklist` | Validar contra checklist |
| `*create-next-story` | Criar próxima story do epic |

### @po (Product Owner)
| Comando | Descrição |
|---------|-----------|
| `*validate-story-draft` | Validar story (10 pontos) |
| `*close-story` | Fechar story como Done |
| `*accept-story` | Aceitar story após QA |
| `*prioritize-backlog` | Priorizar backlog |

### @dev (Developer)
| Comando | Descrição |
|---------|-----------|
| `*develop` | Implementar story |
| `*commit` | Criar commit git |
| `*run-tests` | Executar testes |
| `*lint` | Executar linting |
| `*typecheck` | Verificar tipos TypeScript |
| `*refactor` | Refatorar código |

### @qa (Quality Assurance)
| Comando | Descrição |
|---------|-----------|
| `*gate` | Executar QA gate (7 checks) |
| `*review` | Code review |
| `*qa-loop` | Loop iterativo de QA |
| `*coderabbit-review` | Review automatizado |
| `*security-audit` | Auditoria de segurança |
| `*critique-spec` | Criticar especificação |

### @devops (DevOps) - EXCLUSIVO
| Comando | Descrição |
|---------|-----------|
| `*push` | Push para remote |
| `*create-pr` | Criar pull request |
| `*merge-pr` | Merge de PR |
| `*release` | Criar release |
| `*setup-mcp` | Configurar MCP server |

### @pm (Project Manager)
| Comando | Descrição |
|---------|-----------|
| `*create-prd` | Criar PRD |
| `*create-epic` | Criar epic |
| `*execute-epic` | Executar epic |
| `*gather-requirements` | Coletar requisitos |
| `*write-spec` | Escrever especificação |

### @architect (Architect)
| Comando | Descrição |
|---------|-----------|
| `*assess-complexity` | Avaliar complexidade |
| `*design-system` | Criar design de sistema |
| `*create-architecture` | Criar arquitetura |
| `*review-architecture` | Revisar arquitetura |
| `*plan-implementation` | Planejar implementação |

### @analyst (Analyst)
| Comando | Descrição |
|---------|-----------|
| `*research-prompt` | Pesquisa para spec |
| `*analyze-data` | Analisar dados |
| `*create-report` | Criar relatório |
| `*competitor-analysis` | Análise de competidores |

### @data-engineer (Data Engineer)
| Comando | Descrição |
|---------|-----------|
| `*create-schema` | Criar schema DDL |
| `*optimize-query` | Otimizar queries |
| `*create-migration` | Criar migration |
| `*audit-database` | Auditar banco |
| `*implement-rls` | Implementar RLS |

### @aios-master (AIOS Master)
| Comando | Descrição |
|---------|-----------|
| `*run-workflow` | Executar workflow |
| `*help` | Mostrar ajuda |
| `*status` | Status do sistema |
| `*config` | Gerenciar configuração |
| `*delegate` | Delegar tarefa |

### @ux-design-expert (UX Design Expert)
| Comando | Descrição |
|---------|-----------|
| `*create-prototype` | Criar protótipo |
| `*review-ux` | Revisar UX/UI |
| `*create-wireframe` | Criar wireframe |
| `*audit-accessibility` | Auditoria WCAG |
| `*create-design-system` | Criar design system |
| `*user-flow-analysis` | Análise de user flow |

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
  withErrorHandling,
  type ExtendedSkillContext,
} from '@smartsenior/aios-core/skills'

// Criar handler
async function myHandler(
  context: ExtendedSkillContext,
  args?: Record<string, unknown>
) {
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

### Status do Sistema

```typescript
import { getSkillSystemStatus } from '@smartsenior/aios-core/skills'

const status = getSkillSystemStatus()
// {
//   initialized: true,
//   skills: { total: 51, byOwner: {...}, byCategory: {...} },
//   handlers: { total: 16, coverage: 31, withHandlers: [...], withoutHandlers: [...] }
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

## Testes

```bash
cd packages/aios-core
npm test
```

54 testes cobrindo:
- Registry (registro, filtros, execução)
- Authority (validação, presets, bloqueios)
- Skill Definitions (todas as skills)
- Handlers (SDC completo)
- Integração (inicialização, status)
