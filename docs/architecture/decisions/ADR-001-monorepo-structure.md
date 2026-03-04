# ADR-001: Estrutura Monorepo para SmartSenior

## Metadata

| Campo | Valor |
|-------|-------|
| **ID** | ADR-001 |
| **Status** | Aceito |
| **Data** | 2026-03-04 |
| **Decisor(es)** | Edilson Emmanoel |
| **Categoria** | Arquitetura de Projeto |

---

## Contexto

O cliente SmartSenior possui múltiplos aplicativos e projetos que compartilham componentes de UI, Design System e lógica de negócio (AIOS Core). A abordagem tradicional de repositórios separados (polyrepo) apresenta desafios:

- **Duplicação de código** entre projetos
- **Inconsistência visual** entre aplicativos
- **Dificuldade de sincronização** de atualizações do Design System
- **Overhead de manutenção** de múltiplos repositórios
- **Complexidade no versionamento** de dependências internas

---

## Decisão

**Utilizaremos uma estrutura de Monorepo com pnpm workspaces e Turborepo** para o cliente SmartSenior.

### Stack Escolhida

| Ferramenta | Função |
|------------|--------|
| **pnpm** | Gerenciador de pacotes com workspaces |
| **Turborepo** | Build system com cache e execução paralela |
| **TypeScript** | Linguagem principal |

### Estrutura de Diretórios

```
/Users/edilson/projetos/SmartSenior/
├── package.json              # Root do monorepo
├── pnpm-workspace.yaml       # Configuração de workspaces
├── turbo.json                # Configuração do Turborepo
│
├── packages/                 # Pacotes compartilhados
│   ├── design-system/        # @smartsenior/design-system
│   └── aios-core/            # @smartsenior/aios-core
│
└── apps/                     # Aplicações
    ├── web-app/              # App principal
    ├── admin-portal/         # (futuro)
    └── landing-page/         # (futuro)
```

---

## Alternativas Consideradas

### 1. Polyrepo (Repositórios Separados)

**Prós:**
- Isolamento completo entre projetos
- Permissões granulares por repositório
- CI/CD independente

**Contras:**
- Duplicação de código e configurações
- Dificuldade em sincronizar atualizações
- Overhead de manutenção

**Decisão:** Rejeitado devido à necessidade de compartilhamento intenso de componentes.

### 2. npm workspaces

**Prós:**
- Nativo do npm, sem dependências extras
- Amplamente suportado

**Contras:**
- Mais lento que pnpm
- Não economiza espaço em disco
- Sem cache de build nativo

**Decisão:** Rejeitado em favor do pnpm por performance.

### 3. Nx

**Prós:**
- Muito poderoso e completo
- Excelente para monorepos grandes

**Contras:**
- Curva de aprendizado maior
- Mais opinativo na estrutura
- Overhead para projetos menores

**Decisão:** Rejeitado por complexidade desnecessária no momento atual.

---

## Consequências

### Positivas

1. **Compartilhamento eficiente** - Design System e AIOS Core disponíveis para todos os apps
2. **Consistência garantida** - Todos os apps usam a mesma versão dos componentes
3. **DX melhorada** - Uma única instalação de dependências
4. **Builds otimizados** - Cache do Turborepo acelera CI/CD
5. **Atomic commits** - Mudanças cross-projeto em um único commit
6. **Refatoração simplificada** - Rename/move com impacto visível

### Negativas

1. **Repositório maior** - Clone inicial mais demorado
2. **CI mais complexo** - Precisa de cache para ser eficiente
3. **Curva de aprendizado** - Equipe precisa entender workspaces

### Riscos e Mitigações

| Risco | Mitigação |
|-------|-----------|
| Build lento sem cache | Turborepo com remote caching |
| Conflitos de merge | Estrutura clara de ownership por pasta |
| Dependências circulares | Lint rules e revisão de arquitetura |

---

## Implementação

### Configuração Realizada

1. **pnpm-workspace.yaml**
   ```yaml
   packages:
     - "packages/*"
     - "apps/*"
   ```

2. **turbo.json** com pipelines de build, dev, test, lint

3. **Pacotes configurados:**
   - `@smartsenior/design-system` - 50+ componentes React
   - `@smartsenior/aios-core` - Framework de agentes

4. **Comandos disponíveis:**
   ```bash
   pnpm dev          # Dev em todos os projetos
   pnpm build        # Build com cache
   pnpm storybook    # Storybook do DS
   ```

---

## Referências

- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Monorepo Explained](https://monorepo.tools/)

---

*Documento gerado via AIOS Master — Orion, orquestrando o sistema* 🎯
