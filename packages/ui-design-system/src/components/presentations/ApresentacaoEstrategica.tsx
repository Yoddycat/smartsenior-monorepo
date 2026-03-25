import * as React from 'react'
import {
  Logo,
  LogoHorizontal,
  Heading,
  Text,
  Blockquote,
  GradientText,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  StatCard,
  Grid,
  GridItem,
  Container,
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  Badge,
  Divider,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../ui'

// ============================================
// TIPOS
// ============================================

interface SlideProps {
  children: React.ReactNode
  variant?: 'light' | 'dark' | 'accent'
  className?: string
}

// ============================================
// COMPONENTES BASE
// ============================================

const Slide: React.FC<SlideProps> = ({ children, variant = 'light', className = '' }) => {
  const baseClasses = 'w-full min-h-[600px] p-12 flex flex-col relative'
  const variantClasses = {
    light: 'bg-[var(--background)] text-[var(--foreground)]',
    dark: 'bg-[var(--background-emphasis)] text-[var(--foreground-inverse)]',
    accent: 'bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-white',
  }

  return (
    <section className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </section>
  )
}

const SlideNumber: React.FC<{ number: number }> = ({ number }) => (
  <span className="absolute bottom-6 right-8 text-sm opacity-50">
    {number}
  </span>
)

// ============================================
// SLIDES DA APRESENTAÇÃO
// ============================================

/**
 * Slide 1: Capa
 */
export const SlideCapa: React.FC = () => (
  <Slide variant="dark" className="items-center justify-center text-center">
    <Logo variant="horizontal" size="xl" color="white" className="mb-8" />
    <Heading level={1} className="text-5xl mb-4 text-white">
      Planejamento Estratégico
    </Heading>
    <Text size="lg" className="text-white/80 mb-6">
      Ano 1 (12 meses) — Consolidação Final
    </Text>
    <Text className="text-2xl italic text-[var(--accent)] mt-8">
      "Longevidade com qualidade de vida."
    </Text>
    <div className="mt-12 text-sm text-white/60">
      Março 2026 · Equipe Interna
    </div>
    <SlideNumber number={1} />
  </Slide>
)

/**
 * Slide 2: Agenda
 */
export const SlideAgenda: React.FC = () => (
  <Slide>
    <Heading level={2} className="mb-8">Agenda</Heading>
    <div className="space-y-4 text-xl">
      {[
        { num: '01', title: 'Quem Somos', desc: 'Missão, Visão e Valores' },
        { num: '02', title: 'Nossa Estratégia', desc: 'Hedgehog Concept' },
        { num: '03', title: 'Modelo de Negócio', desc: 'Canvas e Escada de Valor' },
        { num: '04', title: 'Motor de Crescimento', desc: 'Flywheel' },
        { num: '05', title: 'Execução', desc: 'Fases e Metas' },
        { num: '06', title: 'Próximos Passos', desc: 'Ações Imediatas' },
      ].map((item) => (
        <div key={item.num} className="flex items-center gap-4 p-4 rounded-lg hover:bg-[var(--background-subtle)] transition-colors">
          <span className="text-[var(--accent)] font-bold text-2xl">{item.num}</span>
          <div>
            <Text weight="semibold">{item.title}</Text>
            <Text size="sm" color="muted">{item.desc}</Text>
          </div>
        </div>
      ))}
    </div>
    <SlideNumber number={2} />
  </Slide>
)

/**
 * Slide 3: Missão
 */
export const SlideMissao: React.FC = () => (
  <Slide className="items-center justify-center">
    <Heading level={1} className="text-4xl md:text-5xl mb-8 text-[var(--primary)]">
      Nossa Missão
    </Heading>
    <Blockquote className="max-w-4xl text-center text-2xl md:text-3xl leading-relaxed">
      "Transformar o cuidado com pessoas 60+ através de{' '}
      <GradientText>tecnologia inteligente</GradientText> e{' '}
      <GradientText>protocolos clínicos validados</GradientText>,
      devolvendo tempo e tranquilidade às famílias."
    </Blockquote>
    <SlideNumber number={3} />
  </Slide>
)

/**
 * Slide 4: Visão
 */
export const SlideVisao: React.FC = () => (
  <Slide variant="dark" className="items-center justify-center">
    <Heading level={1} className="text-4xl md:text-5xl mb-8 text-white">
      Nossa Visão
    </Heading>
    <div className="max-w-4xl text-center">
      <Text className="text-2xl md:text-3xl leading-relaxed text-white">
        "Ser a principal referência em{' '}
        <span className="text-[#FF8200] font-bold">gestão inteligente do envelhecimento</span>{' '}
        no Brasil, transformando a forma como famílias cuidam de seus entes queridos 60+ e de si próprias."
      </Text>
    </div>
    <SlideNumber number={4} />
  </Slide>
)

/**
 * Slide 5: Valores
 */
export const SlideValores: React.FC = () => {
  const valores = [
    { icon: '🔬', titulo: 'Ciência Aplicada', desc: 'Decisões baseadas em evidências e protocolos validados' },
    { icon: '🛡️', titulo: 'Autonomia com Segurança', desc: 'Potencializar independência, não criar dependência' },
    { icon: '👨‍👩‍👧', titulo: 'Família no Centro', desc: 'Cuidar do idoso E de quem cuida' },
    { icon: '🤖', titulo: 'Tecnologia Humanizada', desc: 'IA a serviço do cuidado, não substituindo o humano' },
    { icon: '⚡', titulo: 'Prevenção Ativa', desc: 'Antecipar problemas, não apenas reagir' },
    { icon: '⚖️', titulo: 'Ética Inabalável', desc: 'Público vulnerável exige responsabilidade máxima' },
  ]

  return (
    <Slide>
      <Heading level={2} className="mb-8">Nossos Valores</Heading>
      <Grid cols={3} gap={6}>
        {valores.map((valor) => (
          <Card key={valor.titulo} className="border-l-4 border-l-[var(--accent)]">
            <CardContent className="pt-6">
              <div className="text-4xl mb-4">{valor.icon}</div>
              <CardTitle className="text-lg mb-2">{valor.titulo}</CardTitle>
              <Text size="sm" color="muted">{valor.desc}</Text>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <SlideNumber number={5} />
    </Slide>
  )
}

/**
 * Slide 6: Hedgehog Concept
 */
export const SlideHedgehog: React.FC = () => (
  <Slide>
    <Heading level={2} className="mb-1">Hedgehog Concept</Heading>
    <Text color="muted" className="mb-4">Jim Collins — Good to Great</Text>

    <div className="flex-1 flex flex-col items-center">
      {/* PAIXÃO - Topo */}
      <Card className="border-2 border-[var(--accent)] bg-[var(--accent)]/5 w-80 text-center">
        <CardContent className="py-4">
          <CardTitle className="text-[var(--accent)] text-lg mb-2">PAIXÃO</CardTitle>
          <Text size="sm">
            Proporcionar longevidade com saúde e qualidade de vida para pessoas 60+
          </Text>
        </CardContent>
      </Card>

      {/* Linha vertical + ramificação */}
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-6 bg-[var(--foreground-muted)]" />
        <div className="flex items-center">
          <div className="w-40 h-0.5 bg-[var(--foreground-muted)]" />
          <div className="w-2 h-2 rounded-full bg-[var(--foreground-muted)]" />
          <div className="w-40 h-0.5 bg-[var(--foreground-muted)]" />
        </div>
        <div className="flex justify-between w-80">
          <div className="w-0.5 h-4 bg-[var(--foreground-muted)]" />
          <div className="w-0.5 h-4 bg-[var(--foreground-muted)]" />
          <div className="w-0.5 h-4 bg-[var(--foreground-muted)]" />
        </div>
      </div>

      {/* 3 caixas inferiores conectadas */}
      <div className="flex items-stretch gap-0">
        {/* MELHOR DO MUNDO */}
        <Card className="border-2 border-[var(--primary)] bg-[var(--primary)]/5 w-56">
          <CardContent className="py-4 text-center">
            <CardTitle className="text-[var(--primary)] text-base mb-2">MELHOR DO MUNDO</CardTitle>
            <Text size="sm">
              Protocolos geriátricos + IA (Dux, Carina) + 10 anos Villa Senior
            </Text>
          </CardContent>
        </Card>

        {/* Seta ◄──► esquerda */}
        <div className="flex items-center px-2">
          <span className="text-[var(--foreground-muted)] text-xl">◄──►</span>
        </div>

        {/* HEDGEHOG CORE - Centro */}
        <div
          className="w-56 rounded-lg border-2 p-4 text-center"
          style={{
            backgroundColor: '#FE5000',
            borderColor: '#FE5000',
            color: '#FFFFFF'
          }}
        >
          <h4 style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '1rem', marginBottom: '0.5rem' }}>
            HEDGEHOG (CORE)
          </h4>
          <p style={{ color: '#FFFFFF', fontSize: '0.875rem' }}>
            Gestão inteligente da longevidade
          </p>
        </div>

        {/* Seta ◄──► direita */}
        <div className="flex items-center px-2">
          <span className="text-[var(--foreground-muted)] text-xl">◄──►</span>
        </div>

        {/* MOTOR ECONÔMICO */}
        <Card className="border-2 border-[var(--success)] bg-[var(--success)]/5 w-56">
          <CardContent className="py-4 text-center">
            <CardTitle className="text-[var(--success)] text-base mb-2">MOTOR ECONÔMICO</CardTitle>
            <Text size="sm">
              Assinatura recorrente com escada de valor R$197 → R$15k
            </Text>
          </CardContent>
        </Card>
      </div>
    </div>
    <SlideNumber number={6} />
  </Slide>
)

/**
 * Slide 7: Oceano Azul
 */
export const SlideOceanoAzul: React.FC = () => {
  const matriz = {
    eliminar: ['Presença física obrigatória', 'Burocracia de planos de saúde', 'Generalismo (todas as idades)', 'Modelo reativo'],
    reduzir: ['Custo operacional por cliente', 'Complexidade de onboarding', 'Necessidade de deslocamento', 'Tempo de resposta humana'],
    elevar: ['Especialização geriátrica (10x)', 'Prevenção ativa (10x)', 'Orientação familiar estruturada', 'Continuidade do cuidado'],
    criar: ['Agente IA geriátrico (Dux)', 'Monitoramento preditivo (Carina)', 'Categoria "Gestão de Longevidade"', 'SmartSenior Inside (selo)'],
  }

  return (
    <Slide>
      <Heading level={2} className="mb-2">Estratégia Oceano Azul</Heading>
      <Text color="muted" className="mb-6">Matriz ERRC — Kim & Mauborgne</Text>

      <Grid cols={2} gap={4}>
        <Card className="border-l-4 border-l-red-500 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700">Eliminar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {matriz.eliminar.map((item) => (
                <li key={item} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-700">Reduzir</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {matriz.reduzir.map((item) => (
                <li key={item} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[var(--primary)] bg-blue-50">
          <CardHeader>
            <CardTitle className="text-[var(--primary)]">Elevar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {matriz.elevar.map((item) => (
                <li key={item} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[var(--success)] bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-[var(--success)]">Criar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {matriz.criar.map((item) => (
                <li key={item} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <SlideNumber number={7} />
    </Slide>
  )
}

/**
 * Slide 8: Escada de Valor
 */
export const SlideEscadaValor: React.FC = () => {
  const tiers = [
    { nome: 'Essencial', preco: 'R$197–497/mês', desc: 'App + Protocolos + Dux básico', width: '40%' },
    { nome: 'Avançado', preco: 'R$500–1.500/mês', desc: 'Telemedicina + Carina + Relatórios', width: '55%' },
    { nome: 'Premium', preco: 'R$1.500–5.000/mês', desc: 'Gestor dedicado + Rede de especialistas', width: '70%' },
    { nome: 'Concierge', preco: 'R$5.000–15.000/mês', desc: 'Full service + Atendimento 24/7', width: '85%' },
  ]

  return (
    <Slide>
      <Heading level={2} className="mb-8">Escada de Valor</Heading>

      <div className="flex gap-8 flex-1">
        {/* Escada alinhada à esquerda, do Essencial ao Concierge */}
        <div className="flex-1 flex flex-col justify-center gap-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.nome}
              className="bg-[var(--primary)] text-white p-4 rounded-lg"
              style={{
                width: tier.width,
                opacity: 0.6 + (index * 0.13),
              }}
            >
              <Text weight="bold" className="text-white">{tier.nome}</Text>
              <Text size="sm" className="text-white/80">{tier.preco}</Text>
              <Text size="sm" className="text-white/60 mt-1">{tier.desc}</Text>
            </div>
          ))}
        </div>

        <div className="w-80">
          <Card>
            <CardHeader>
              <CardTitle>Segmentos D2C</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li>
                  <Text weight="semibold">Personal Senior</Text>
                  <Text size="sm" color="muted">Filho(a) 40-55, classe A/B</Text>
                </li>
                <li>
                  <Text weight="semibold">Senior Ativo</Text>
                  <Text size="sm" color="muted">60-75 anos, independente</Text>
                </li>
                <li>
                  <Text weight="semibold">Familiar Sobrecarregado</Text>
                  <Text size="sm" color="muted">Cuidador informal, B/C</Text>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <SlideNumber number={8} />
    </Slide>
  )
}

/**
 * Slide 9: Unit Economics
 */
export const SlideUnitEconomics: React.FC = () => (
  <Slide>
    <Heading level={2} className="mb-8">Unit Economics</Heading>

    <Grid cols={4} gap={4} className="mb-6">
      <StatCard title="ARPU" value="R$200–500" description="por mês" />
      <StatCard title="CAC" value="R$50–150" description="por cliente" />
      <StatCard title="LTV (12m)" value="R$2.1k–5.4k" description="lifetime value" />
      <StatCard
        title="LTV:CAC"
        value="14:1 a 80:1"
        description="excepcional"
        variant="primary"
      />
    </Grid>

    <Grid cols={3} gap={4}>
      <StatCard title="Payback" value="< 1 mês" variant="success" />
      <StatCard title="Margem Bruta" value="65%–80%" />
      <StatCard
        title="Breakeven"
        value="~170 assinantes"
        variant="primary"
      />
    </Grid>
    <SlideNumber number={9} />
  </Slide>
)

/**
 * Slide 10: Flywheel
 */
export const SlideFlywheel: React.FC = () => {
  const etapas = [
    'Conteúdo Educativo',
    'Leads Qualificados',
    'Teste de Dependência',
    'Produto de Entrada',
    'Assinatura Recorrente',
    'Outcomes Mensuráveis',
    'Dados + Inteligência',
  ]

  return (
    <Slide>
      <Heading level={2} className="mb-2">Motor de Crescimento</Heading>
      <Text color="muted" className="mb-6">Flywheel — Jim Collins</Text>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[450px] h-[450px]">
          {/* Círculo externo */}
          <div className="absolute inset-0 rounded-full border-4 border-[var(--accent)] border-dashed" />

          {/* Centro - CENTRALIZADO */}
          <div
            className="absolute rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-center p-4 shadow-xl"
            style={{
              width: '140px',
              height: '140px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Text weight="bold" className="text-white text-sm">
              Ciclo<br />Virtuoso
            </Text>
          </div>

          {/* Etapas ao redor */}
          {etapas.map((etapa, index) => {
            const angle = (index * 360) / etapas.length - 90
            const radius = 195
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const y = Math.sin((angle * Math.PI) / 180) * radius

            return (
              <div
                key={etapa}
                className="absolute bg-white border-2 border-[var(--primary)] rounded-lg px-3 py-2 text-xs font-medium text-center shadow-md"
                style={{
                  left: `calc(50% + ${x}px - 55px)`,
                  top: `calc(50% + ${y}px - 18px)`,
                  width: '110px',
                }}
              >
                {etapa}
              </div>
            )
          })}
        </div>
      </div>

      <Text color="muted" align="center" size="sm" className="mt-2">
        Conteúdo gera leads → Leads fazem testes → Testes geram dados → Dados melhoram IA → IA gera outcomes → Outcomes geram prova social
      </Text>
      <SlideNumber number={10} />
    </Slide>
  )
}

/**
 * Slide 11: Fases de Execução
 */
export const SlideFases: React.FC = () => (
  <Slide>
    <Heading level={2} className="mb-8">Fases de Execução — Ano 1</Heading>

    <Timeline orientation="horizontal" className="justify-center">
      <TimelineItem status="current" orientation="horizontal">
        <Card className="border-[var(--primary)]">
          <CardHeader>
            <Badge>M1–6</Badge>
            <CardTitle className="text-[var(--primary)]">Validação</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm">
              <li>• Piloto 3 residenciais</li>
              <li>• Campanhas teste</li>
              <li>• MVP agentes IA</li>
              <li>• Produtos de entrada</li>
            </ul>
            <div className="mt-4 p-3 bg-[var(--primary)] text-white rounded-lg text-center">
              <Text weight="bold" className="text-white">Meta: 50 assinantes</Text>
            </div>
          </CardContent>
        </Card>
      </TimelineItem>

      <TimelineItem status="upcoming" orientation="horizontal">
        <Card className="border-[var(--success)]">
          <CardHeader>
            <Badge variant="outline">M7–12</Badge>
            <CardTitle className="text-[var(--success)]">Tração</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-sm">
              <li>• Escala D2C</li>
              <li>• Onboarding B2B2C</li>
              <li>• E-commerce</li>
              <li>• Estrutura completa</li>
            </ul>
            <div className="mt-4 p-3 bg-[var(--success)] text-white rounded-lg text-center">
              <Text weight="bold" className="text-white">Meta: 300 assinantes</Text>
            </div>
          </CardContent>
        </Card>
      </TimelineItem>
    </Timeline>
    <SlideNumber number={11} />
  </Slide>
)

/**
 * Slide 12: Metas Validação
 */
export const SlideMetasValidacao: React.FC = () => (
  <Slide>
    <Heading level={2} className="mb-6">Metas — Fase Validação (M1–6)</Heading>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Métrica</TableHead>
          <TableHead className="text-center">M1</TableHead>
          <TableHead className="text-center">M2</TableHead>
          <TableHead className="text-center">M3</TableHead>
          <TableHead className="text-center">M4</TableHead>
          <TableHead className="text-center">M5</TableHead>
          <TableHead className="text-center">M6</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">Residenciais Ativos</TableCell>
          <TableCell className="text-center">0</TableCell>
          <TableCell className="text-center">1</TableCell>
          <TableCell className="text-center">2</TableCell>
          <TableCell className="text-center">2</TableCell>
          <TableCell className="text-center">3</TableCell>
          <TableCell className="text-center bg-[var(--primary)]/10 font-semibold">3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Usuários Piloto</TableCell>
          <TableCell className="text-center">0</TableCell>
          <TableCell className="text-center">20</TableCell>
          <TableCell className="text-center">40</TableCell>
          <TableCell className="text-center">60</TableCell>
          <TableCell className="text-center">80</TableCell>
          <TableCell className="text-center bg-[var(--primary)]/10 font-semibold">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">NPS Piloto</TableCell>
          <TableCell className="text-center text-[var(--foreground-muted)]">–</TableCell>
          <TableCell className="text-center text-[var(--foreground-muted)]">–</TableCell>
          <TableCell className="text-center">55</TableCell>
          <TableCell className="text-center">60</TableCell>
          <TableCell className="text-center">65</TableCell>
          <TableCell className="text-center bg-[var(--primary)]/10 font-semibold">65</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Leads Gerados</TableCell>
          <TableCell className="text-center">100</TableCell>
          <TableCell className="text-center">200</TableCell>
          <TableCell className="text-center">300</TableCell>
          <TableCell className="text-center">400</TableCell>
          <TableCell className="text-center">450</TableCell>
          <TableCell className="text-center bg-[var(--primary)]/10 font-semibold">500</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Assinantes Ativos</TableCell>
          <TableCell className="text-center">0</TableCell>
          <TableCell className="text-center">15</TableCell>
          <TableCell className="text-center">25</TableCell>
          <TableCell className="text-center">30</TableCell>
          <TableCell className="text-center">40</TableCell>
          <TableCell className="text-center bg-[var(--success)] text-white font-bold">50</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Burn Mensal (R$k)</TableCell>
          <TableCell className="text-center">5</TableCell>
          <TableCell className="text-center">6</TableCell>
          <TableCell className="text-center">8</TableCell>
          <TableCell className="text-center">9</TableCell>
          <TableCell className="text-center">10</TableCell>
          <TableCell className="text-center bg-[var(--primary)]/10 font-semibold">12</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div className="flex justify-center mt-8">
      <Badge className="bg-[var(--primary)] text-white text-lg px-6 py-2">
        Meta M6: 50 assinantes ativos
      </Badge>
    </div>
    <SlideNumber number={12} />
  </Slide>
)

/**
 * Slide 13: Metas Tração
 */
export const SlideMetasTracao: React.FC = () => (
  <Slide>
    <Heading level={2} className="mb-6">Metas — Fase Tração (M7–12)</Heading>

    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Métrica</TableHead>
          <TableHead className="text-center">M7</TableHead>
          <TableHead className="text-center">M8</TableHead>
          <TableHead className="text-center">M9</TableHead>
          <TableHead className="text-center">M10</TableHead>
          <TableHead className="text-center">M11</TableHead>
          <TableHead className="text-center">M12</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">Assinantes</TableCell>
          <TableCell className="text-center">100</TableCell>
          <TableCell className="text-center">120</TableCell>
          <TableCell className="text-center">150</TableCell>
          <TableCell className="text-center">180</TableCell>
          <TableCell className="text-center">220</TableCell>
          <TableCell className="text-center">300</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">NPS</TableCell>
          <TableCell className="text-center">65</TableCell>
          <TableCell className="text-center">68</TableCell>
          <TableCell className="text-center">70</TableCell>
          <TableCell className="text-center">70</TableCell>
          <TableCell className="text-center">72</TableCell>
          <TableCell className="text-center">75</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">CAC (R$)</TableCell>
          <TableCell className="text-center">90</TableCell>
          <TableCell className="text-center">80</TableCell>
          <TableCell className="text-center">75</TableCell>
          <TableCell className="text-center">70</TableCell>
          <TableCell className="text-center">65</TableCell>
          <TableCell className="text-center">60</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Receita (R$k)</TableCell>
          <TableCell className="text-center">10</TableCell>
          <TableCell className="text-center">15</TableCell>
          <TableCell className="text-center">21</TableCell>
          <TableCell className="text-center">30</TableCell>
          <TableCell className="text-center">40</TableCell>
          <TableCell className="text-center">56</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-semibold">Breakeven</TableCell>
          <TableCell className="text-center">Não</TableCell>
          <TableCell className="text-center">Não</TableCell>
          <TableCell className="text-center">Próximo</TableCell>
          <TableCell className="text-center bg-[var(--success)] text-white font-bold">SIM</TableCell>
          <TableCell className="text-center bg-[var(--success)] text-white font-bold">Sim</TableCell>
          <TableCell className="text-center bg-[var(--success)] text-white font-bold">Sim</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div className="flex justify-center mt-8">
      <Badge className="bg-[var(--success)] text-white text-lg px-6 py-2">
        Breakeven no Mês 10
      </Badge>
    </div>
    <SlideNumber number={13} />
  </Slide>
)

/**
 * Slide 14: Investimento
 */
export const SlideInvestimento: React.FC = () => (
  <Slide>
    <Heading level={2} className="mb-8">Investimento — Ano 1</Heading>

    <Grid cols={3} gap={6}>
      <Card>
        <CardHeader>
          <CardTitle className="text-[var(--success)]">Otimista</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Validação</TableCell>
                <TableCell className="font-bold">R$30k</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tração</TableCell>
                <TableCell className="font-bold">R$102k</TableCell>
              </TableRow>
              <TableRow className="bg-[var(--background-muted)]">
                <TableCell className="font-bold">TOTAL</TableCell>
                <TableCell className="font-bold">R$132k</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-[var(--accent)] border-2 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent)]/80 text-white rounded-t-lg -m-px">
          <CardTitle className="text-white">Realista</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Validação</TableCell>
                <TableCell className="font-bold">R$60k</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tração</TableCell>
                <TableCell className="font-bold">R$183k</TableCell>
              </TableRow>
              <TableRow className="bg-[var(--accent)]/10">
                <TableCell className="font-bold">TOTAL</TableCell>
                <TableCell className="font-bold text-[var(--accent)]">R$243k</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-[var(--foreground-muted)]">Conservador</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Validação</TableCell>
                <TableCell className="font-bold">R$90k</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tração</TableCell>
                <TableCell className="font-bold">R$264k</TableCell>
              </TableRow>
              <TableRow className="bg-[var(--background-muted)]">
                <TableCell className="font-bold">TOTAL</TableCell>
                <TableCell className="font-bold">R$354k</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Grid>

    <Text align="center" weight="semibold" className="mt-8">
      Meta de investimento: até R$330k
    </Text>
    <SlideNumber number={14} />
  </Slide>
)

/**
 * Slide 15: Próximos Passos
 */
export const SlideProximosPassos: React.FC = () => {
  const acoes = [
    { num: 1, acao: 'Formalizar piloto Villa Senior', prazo: 'Semana 1', resp: 'CEO' },
    { num: 2, acao: 'Prospectar 2 residenciais', prazo: 'Semana 1–4', resp: 'Negócios' },
    { num: 3, acao: 'MVP agente Dux (protótipo)', prazo: 'Semana 1–8', resp: 'Produto' },
    { num: 4, acao: 'Campanha teste Instagram/Google', prazo: 'Semana 2–4', resp: 'Negócios' },
    { num: 5, acao: 'Estruturar Teste de Dependência', prazo: 'Semana 2–6', resp: 'Produto' },
    { num: 6, acao: 'Definir produto de entrada v1', prazo: 'Semana 3–4', resp: 'CEO + Clínico' },
    { num: 7, acao: 'Setup financeiro e jurídico', prazo: 'Semana 1–4', resp: 'ADM' },
    { num: 8, acao: 'Dashboard de métricas', prazo: 'Semana 4–6', resp: 'Produto' },
  ]

  return (
    <Slide>
      <Heading level={2} className="mb-6">Próximos Passos — 8 Semanas</Heading>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Ação</TableHead>
            <TableHead className="w-32">Prazo</TableHead>
            <TableHead className="w-32">Responsável</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {acoes.map((item) => (
            <TableRow key={item.num}>
              <TableCell className="font-bold text-[var(--accent)]">{item.num}</TableCell>
              <TableCell>{item.acao}</TableCell>
              <TableCell>{item.prazo}</TableCell>
              <TableCell>
                <Badge variant="outline">{item.resp}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <SlideNumber number={15} />
    </Slide>
  )
}

/**
 * Slide 16: Encerramento
 */
export const SlideEncerramento: React.FC = () => (
  <Slide variant="dark" className="items-center justify-center text-center">
    <Logo variant="icon" size="2xl" color="white" className="mb-8" />
    <Heading level={1} className="text-5xl mb-4 text-white">
      SmartSenior
    </Heading>
    <Text className="text-3xl italic text-[var(--accent)] mb-12">
      "Longevidade com qualidade de vida."
    </Text>
    <Text size="lg" className="text-white/80">
      Vamos construir juntos.
    </Text>
    <SlideNumber number={16} />
  </Slide>
)

// ============================================
// APRESENTAÇÃO COMPLETA
// ============================================

export interface ApresentacaoEstrategicaProps {
  /** Mostrar apenas um slide específico */
  slideNumber?: number
}

/**
 * Apresentação Estratégica SmartSenior
 *
 * Utiliza componentes do Design System SmartSenior para apresentar
 * o planejamento estratégico do Ano 1 da empresa.
 *
 * @example
 * // Apresentação completa
 * <ApresentacaoEstrategica />
 *
 * // Slide específico
 * <ApresentacaoEstrategica slideNumber={6} />
 */
export const ApresentacaoEstrategica: React.FC<ApresentacaoEstrategicaProps> = ({ slideNumber }) => {
  const slides = [
    SlideCapa,
    SlideAgenda,
    SlideMissao,
    SlideVisao,
    SlideValores,
    SlideHedgehog,
    SlideOceanoAzul,
    SlideEscadaValor,
    SlideUnitEconomics,
    SlideFlywheel,
    SlideFases,
    SlideMetasValidacao,
    SlideMetasTracao,
    SlideInvestimento,
    SlideProximosPassos,
    SlideEncerramento,
  ]

  if (slideNumber !== undefined && slideNumber >= 1 && slideNumber <= slides.length) {
    const SlideComponent = slides[slideNumber - 1]
    return <SlideComponent />
  }

  return (
    <div className="space-y-8">
      {slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
    </div>
  )
}

export default ApresentacaoEstrategica
