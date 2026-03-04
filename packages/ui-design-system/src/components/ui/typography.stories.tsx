import type { Meta, StoryObj } from '@storybook/react'
import {
  Typography,
  Heading,
  Text,
  Label,
  Caption,
  Highlight,
  Blockquote,
  GradientText,
  Prose,
} from './typography'

// ============================================
// TYPOGRAPHY
// ============================================

const typographyMeta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default typographyMeta

type TypographyStory = StoryObj<typeof Typography>

export const AllVariants: TypographyStory = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1 - Display</Typography>
      <Typography variant="h2">Heading 2 - Title</Typography>
      <Typography variant="h3">Heading 3 - Subtitle</Typography>
      <Typography variant="h4">Heading 4 - Section</Typography>
      <Typography variant="h5">Heading 5 - Subsection</Typography>
      <Typography variant="h6">Heading 6 - Label</Typography>
      <Typography variant="lead">Lead - Texto introdutório destacado</Typography>
      <Typography variant="body-lg">Body Large - Texto maior para ênfase</Typography>
      <Typography variant="body">Body - Texto padrão para parágrafos e conteúdo</Typography>
      <Typography variant="body-sm">Body Small - Texto menor para informações secundárias</Typography>
      <Typography variant="caption">Caption - Legendas e textos auxiliares</Typography>
      <Typography variant="overline">OVERLINE - CATEGORIAS E LABELS</Typography>
    </div>
  ),
}

export const Colors: TypographyStory = {
  render: () => (
    <div className="space-y-2">
      <Typography color="default">Default - Cor padrão do texto</Typography>
      <Typography color="muted">Muted - Texto secundário</Typography>
      <Typography color="primary">Primary - Destaque principal</Typography>
      <Typography color="success">Success - Mensagens de sucesso</Typography>
      <Typography color="warning">Warning - Alertas</Typography>
      <Typography color="error">Error - Erros</Typography>
      <Typography color="info">Info - Informações</Typography>
    </div>
  ),
}

export const Alignment: TypographyStory = {
  render: () => (
    <div className="space-y-4 max-w-lg">
      <Typography align="left">Alinhado à esquerda (padrão)</Typography>
      <Typography align="center">Centralizado</Typography>
      <Typography align="right">Alinhado à direita</Typography>
      <Typography align="justify">
        Texto justificado - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
}

export const Weights: TypographyStory = {
  render: () => (
    <div className="space-y-2">
      <Typography weight="normal">Normal weight (400)</Typography>
      <Typography weight="medium">Medium weight (500)</Typography>
      <Typography weight="semibold">Semibold weight (600)</Typography>
      <Typography weight="bold">Bold weight (700)</Typography>
    </div>
  ),
}

export const Truncate: TypographyStory = {
  render: () => (
    <div className="space-y-4 max-w-xs">
      <Typography truncate>
        Single line truncate - Este texto será cortado com reticências quando for muito longo
      </Typography>
      <Typography truncate={2}>
        Multi-line truncate (2 lines) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </Typography>
      <Typography truncate={3}>
        Multi-line truncate (3 lines) - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
    </div>
  ),
}

// ============================================
// HEADING
// ============================================

export const HeadingLevels: StoryObj<typeof Heading> = {
  render: () => (
    <div className="space-y-4">
      <Heading level={1}>Heading Level 1</Heading>
      <Heading level={2}>Heading Level 2</Heading>
      <Heading level={3}>Heading Level 3</Heading>
      <Heading level={4}>Heading Level 4</Heading>
      <Heading level={5}>Heading Level 5</Heading>
      <Heading level={6}>Heading Level 6</Heading>
    </div>
  ),
}

export const HeadingWithColors: StoryObj<typeof Heading> = {
  render: () => (
    <div className="space-y-3">
      <Heading level={2}>Default Heading</Heading>
      <Heading level={2} color="primary">Primary Heading</Heading>
      <Heading level={2} color="muted">Muted Heading</Heading>
    </div>
  ),
}

// ============================================
// TEXT
// ============================================

export const TextSizes: StoryObj<typeof Text> = {
  render: () => (
    <div className="space-y-3">
      <Text size="lg">Large text - Para ênfase e destaque</Text>
      <Text size="base">Base text - Tamanho padrão para parágrafos</Text>
      <Text size="sm">Small text - Para informações secundárias</Text>
    </div>
  ),
}

// ============================================
// LABEL
// ============================================

export const LabelVariants: StoryObj<typeof Label> = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nome completo</Label>
        <input id="name" className="mt-1 block w-full rounded border p-2" />
      </div>
      <div>
        <Label htmlFor="email" required>Email</Label>
        <input id="email" className="mt-1 block w-full rounded border p-2" />
      </div>
      <div>
        <Label htmlFor="disabled" disabled>Campo desabilitado</Label>
        <input id="disabled" disabled className="mt-1 block w-full rounded border p-2" />
      </div>
      <div>
        <Label htmlFor="error" error>Campo com erro</Label>
        <input id="error" className="mt-1 block w-full rounded border border-red-500 p-2" />
      </div>
    </div>
  ),
}

// ============================================
// CAPTION
// ============================================

export const CaptionExample: StoryObj<typeof Caption> = {
  render: () => (
    <div className="space-y-4">
      <div>
        <img
          src="https://via.placeholder.com/400x200"
          alt="Placeholder"
          className="rounded-lg"
        />
        <Caption className="mt-2 block">Figura 1: Exemplo de imagem com legenda</Caption>
      </div>
      <div>
        <Caption>Última atualização: 04/03/2026</Caption>
      </div>
    </div>
  ),
}

// ============================================
// HIGHLIGHT
// ============================================

export const HighlightVariants: StoryObj<typeof Highlight> = {
  render: () => (
    <div className="space-y-4">
      <Typography>
        Use <Highlight variant="mark">mark</Highlight> para destacar texto importante.
      </Typography>
      <Typography>
        Use <Highlight variant="code">código inline</Highlight> para snippets de código.
      </Typography>
      <Typography>
        Pressione <Highlight variant="kbd">Ctrl</Highlight> + <Highlight variant="kbd">S</Highlight> para salvar.
      </Typography>
    </div>
  ),
}

// ============================================
// BLOCKQUOTE
// ============================================

export const BlockquoteExample: StoryObj<typeof Blockquote> = {
  render: () => (
    <div className="space-y-6 max-w-lg">
      <Blockquote>
        A simplicidade é a sofisticação máxima.
      </Blockquote>
      <Blockquote author="Leonardo da Vinci">
        A simplicidade é a sofisticação máxima.
      </Blockquote>
      <Blockquote
        author="Steve Jobs"
        cite="https://example.com"
      >
        Design não é apenas como algo parece e se sente.
        Design é como funciona.
      </Blockquote>
    </div>
  ),
}

// ============================================
// GRADIENT TEXT
// ============================================

export const GradientTextExamples: StoryObj<typeof GradientText> = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h2">
        <GradientText>SmartSenior Design System</GradientText>
      </Typography>
      <Typography variant="h3">
        <GradientText from="var(--success)" to="var(--info)">
          Gradiente Verde para Azul
        </GradientText>
      </Typography>
      <Typography variant="h3">
        <GradientText
          from="var(--warning)"
          via="var(--error)"
          to="var(--primary)"
        >
          Gradiente com três cores
        </GradientText>
      </Typography>
      <Typography variant="h3">
        <GradientText direction="bottom">
          Gradiente Vertical
        </GradientText>
      </Typography>
    </div>
  ),
}

// ============================================
// PROSE
// ============================================

export const ProseExample: StoryObj<typeof Prose> = {
  render: () => (
    <Prose className="max-w-2xl">
      <h1>Título Principal</h1>
      <p>
        Este é um exemplo de conteúdo rico usando o componente <strong>Prose</strong>.
        Ele aplica estilos consistentes para elementos HTML comuns.
      </p>

      <h2>Subtítulo</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Você pode incluir <a href="#">links</a> e <code>código inline</code>.
      </p>

      <h3>Lista não ordenada</h3>
      <ul>
        <li>Primeiro item</li>
        <li>Segundo item</li>
        <li>Terceiro item</li>
      </ul>

      <h3>Lista ordenada</h3>
      <ol>
        <li>Passo um</li>
        <li>Passo dois</li>
        <li>Passo três</li>
      </ol>

      <blockquote>
        Este é um blockquote para citações ou destaques importantes.
      </blockquote>

      <pre><code>{`function hello() {
  console.log("Hello, World!");
}`}</code></pre>

      <hr />

      <p>
        Texto final após a linha horizontal.
      </p>
    </Prose>
  ),
}

// ============================================
// FONT SPECIMEN
// ============================================

export const FontSpecimen: TypographyStory = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="overline" color="muted" className="mb-2">FONT FAMILY</Typography>
        <Typography variant="h1">Inter Variable</Typography>
      </div>

      <div>
        <Typography variant="overline" color="muted" className="mb-4">ALPHABET</Typography>
        <Typography variant="h3" className="mb-2">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
        </Typography>
        <Typography variant="h3" className="mb-2">
          abcdefghijklmnopqrstuvwxyz
        </Typography>
        <Typography variant="h3">
          0123456789 !@#$%^&*()
        </Typography>
      </div>

      <div>
        <Typography variant="overline" color="muted" className="mb-4">WEIGHTS</Typography>
        <div className="space-y-2">
          <Typography style={{ fontWeight: 100 }}>Thin (100) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 200 }}>Extra Light (200) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 300 }}>Light (300) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 400 }}>Regular (400) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 500 }}>Medium (500) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 600 }}>Semibold (600) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 700 }}>Bold (700) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 800 }}>Extra Bold (800) - The quick brown fox</Typography>
          <Typography style={{ fontWeight: 900 }}>Black (900) - The quick brown fox</Typography>
        </div>
      </div>

      <div>
        <Typography variant="overline" color="muted" className="mb-4">ACCESSIBILITY</Typography>
        <Typography variant="body-lg" className="max-w-lg">
          A fonte Inter foi escolhida por sua excelente legibilidade em telas,
          especialmente para usuários seniores. Com altura-x generosa e distinção
          clara entre caracteres similares (I, l, 1, O, 0), ela garante uma
          experiência de leitura confortável.
        </Typography>
      </div>
    </div>
  ),
}
