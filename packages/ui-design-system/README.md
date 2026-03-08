# SmartSenior Design System

Design System da marca SmartSenior, focado em acessibilidade e clareza para público sênior.

## Stack Técnica

- **Tailwind CSS v4** (CSS-first configuration)
- **OKLCH Color Space** (wide gamut + accessibility)
- **shadcn/ui patterns** + **Radix Primitives**
- **W3C DTCG** (Design Tokens Community Group format)
- **WCAG 2.2 AA** compliance

## Estrutura de Tokens (3 Camadas)

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 3: Component Tokens                                   │
│  (button.primary.background, input.border, card.shadow)     │
├─────────────────────────────────────────────────────────────┤
│  Layer 2: Semantic Tokens                                    │
│  (--primary, --accent, --background, --foreground)          │
├─────────────────────────────────────────────────────────────┤
│  Layer 1: Primitive Tokens                                   │
│  (--color-blue-700, --spacing-4, --font-size-base)          │
└─────────────────────────────────────────────────────────────┘
```

## Instalação

```bash
cd smart-senior-ds
npm install
```

## Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `src/styles/app.css` | Tailwind v4 `@theme` + CSS custom properties |
| `src/tokens/tokens.yaml` | Source of truth (3 camadas) |
| `src/tokens/tokens.dtcg.json` | W3C DTCG format |
| `src/tokens/index.ts` | TypeScript exports tipados |
| `src/lib/utils.ts` | Helpers (`cn`, theme toggle, etc.) |

## Cores da Marca (OKLCH)

### Azuis Institucionais
- `--color-blue-900`: oklch(0.28 0.08 245) — #003057 (Navy)
- `--color-blue-700`: oklch(0.40 0.13 250) — #004B87 (Primary Blue)

### Cianos e Verdes (Apoio/Sucesso)
- `--color-cyan-500`: oklch(0.70 0.13 195) — #00AEC7 (Info)
- `--color-teal-800`: oklch(0.42 0.08 190) — #115E67 (Teal Dark)
- `--color-teal-500`: oklch(0.60 0.10 175) — #279989 (Success)

### Laranjas e Amarelos (Destaque/CTA)
- `--color-orange-600`: oklch(0.65 0.23 35) — #FE5000 (Orange Dark)
- `--color-orange-500`: oklch(0.70 0.21 40) — #FF6A13 (Orange Primary)
- `--color-orange-400`: oklch(0.73 0.20 50) — #FF8200 (Orange Light)
- `--color-amber-400`: oklch(0.82 0.15 70) — #FFAA4D (Warning)
- `--color-yellow-400`: oklch(0.86 0.17 85) — #FFC600 (Yellow)

## Tipografia

| Uso | Fonte | Fallbacks |
|-----|-------|-----------|
| Headings | Gotham | Gotham Narrow, system-ui |
| Body | Proxima Nova | Figtree, Barlow, system-ui |
| Code | JetBrains Mono | Fira Code, monospace |

**Base font-size: 18px** (otimizado para leitura sênior)

## Light/Dark Mode

```html
<!-- Light mode (default) -->
<html>

<!-- Dark mode -->
<html data-theme="dark">

<!-- System preference -->
<html>
<!-- CSS handles @media (prefers-color-scheme: dark) -->
```

```typescript
import { toggleTheme, initializeTheme } from '@smartsenior/design-system';

// On app load
initializeTheme();

// Toggle
toggleTheme(); // auto
toggleTheme('dark'); // explicit
```

## Uso dos Tokens

### CSS
```css
.my-component {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: var(--spacing-4);
  border-radius: var(--radius-md);
}
```

### TypeScript
```typescript
import { semanticColors, buttonTokens } from '@smartsenior/design-system';

// Access tokens
const primaryColor = semanticColors.primary; // "var(--primary)"
const buttonHeight = buttonTokens.sizes.lg.height; // "var(--spacing-14)"
```

### Tailwind Classes
```jsx
<button className="bg-primary text-primary-foreground px-6 py-3 rounded-md">
  Click me
</button>
```

## Acessibilidade (WCAG 2.2)

- ✅ **Focus visible** obrigatório (3px orange ring)
- ✅ **Touch targets** mínimo 44x44px
- ✅ **Contraste** AA mínimo (verificado em OKLCH)
- ✅ **Font size** base 18px para legibilidade
- ✅ **Line height** 1.5 para conforto
- ✅ **Reduced motion** respeitado

## Próximos Passos

```bash
# 1. Instalar dependências
npm install

# 2. Bootstrap shadcn/ui
npx shadcn@latest init

# 3. Adicionar componentes
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card

# 4. Rodar Storybook
npm run storybook
```

## Comandos AIOS

Se usando com @ux-design-expert:

- `*build button` — Criar componente Button
- `*a11y-check` — Verificar acessibilidade
- `*document` — Gerar documentação

---

**SmartSenior Design System v0.1.0**
Desenvolvido com 💝 por Uma (UX-Design Expert)
