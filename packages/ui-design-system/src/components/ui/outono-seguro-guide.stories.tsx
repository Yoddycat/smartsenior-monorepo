import type { Meta, StoryObj } from '@storybook/react'
import {
  OutotonoSeguroGuide,
  HeroStatsGrid,
  HydrationScheduleCard,
  HydrationTracker,
  NutritionTracker,
  ExerciseTracker,
  VaccinationCard,
  SafetyChecklist,
  ThirtyDayPlan,
  ProtocolSummary,
  EmergencyAlert,
} from './outono-seguro-guide'

const meta: Meta<typeof OutotonoSeguroGuide> = {
  title: 'SmartSenior/Outono Seguro Guide',
  component: OutotonoSeguroGuide,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Guia Outono Seguro - Versão Interativa

O **Guia Outono Seguro** é um material preventivo para cuidadores de idosos,
agora reimaginado como uma experiência interativa usando os componentes de
animação do Design System SmartSenior.

## Componentes de Animação Utilizados

- **AnimatedCounter / AnimatedPercentage** - Estatísticas animadas
- **AnimatedProgress / AnimatedCircularProgress** - Barras de progresso
- **AnimatedCheckbox / AnimatedCheckboxGroup** - Checklists interativos
- **FadeInView / FadeInStagger** - Animações de entrada
- **PulseView / AttentionView** - Alertas e destaques
- **SuccessAnimation** - Feedback de conclusão

## Seções do Guia

1. **Estatísticas de Impacto** - Números que mostram a importância da prevenção
2. **Hidratação** - Tracker de consumo de líquidos com cronograma
3. **Nutrição** - Monitoramento de nutrientes-chave
4. **Movimento** - Protocolo de 15 minutos de exercícios
5. **Vacinação** - Calendário de vacinas com alertas
6. **Segurança** - Auditoria domiciliar interativa
7. **Plano de 30 Dias** - Cronograma semanal com progresso
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof OutotonoSeguroGuide>

export const GuiaCompleto: Story = {
  name: 'Guia Completo',
  render: () => (
    <div className="min-h-screen bg-[var(--background)]">
      <OutotonoSeguroGuide />
    </div>
  ),
}

export const EstatisticasHero: Story = {
  name: 'Estatísticas Hero',
  render: () => (
    <div className="p-8 bg-[var(--background)]">
      <h2 className="text-2xl font-bold text-center mb-8 text-[var(--foreground)]">
        Estatísticas de Impacto - Outono Seguro
      </h2>
      <HeroStatsGrid />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Estatísticas animadas que destacam a importância da prevenção no outono:
- **70-89 anos**: faixa etária mais vulnerável
- **3x**: maior risco de pneumonia no frio
- **40%**: das quedas ocorrem nos meses frios
- **5**: protocolos preventivos essenciais

Usa \`AnimatedCounter\` para animação suave dos números.
        `,
      },
    },
  },
}

export const TrackerHidratacao: Story = {
  name: 'Tracker de Hidratação',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-2xl mx-auto">
      <HydrationScheduleCard />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Tracker interativo de hidratação com:
- Cronograma de 9 horários para oferecer líquidos
- Checkboxes animados para marcar consumo
- Barra de progresso circular e linear
- Animação de sucesso ao atingir a meta

Meta: 1.500 ml/dia distribuídos ao longo do dia.
        `,
      },
    },
  },
}

export const ProgressoHidratacao: Story = {
  name: 'Progresso de Hidratação',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-2xl mx-auto space-y-8">
      <h3 className="text-lg font-semibold">Baixa Hidratação (600ml)</h3>
      <HydrationTracker current={600} />

      <h3 className="text-lg font-semibold">Hidratação Moderada (1100ml)</h3>
      <HydrationTracker current={1100} />

      <h3 className="text-lg font-semibold">Meta Atingida (1500ml)</h3>
      <HydrationTracker current={1500} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Visualização do progresso de hidratação em diferentes estágios:
- **Baixo** (< 70%): Variante warning, alerta para aumentar consumo
- **Moderado** (70-99%): Variante default, bom progresso
- **Meta atingida** (100%): Variante success com animação de confetti
        `,
      },
    },
  },
}

export const TrackerNutrientes: Story = {
  name: 'Tracker de Nutrientes',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-2xl mx-auto">
      <NutritionTracker />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Monitoramento dos 5 nutrientes-chave para imunidade no outono:
- **Vitamina D**: Essencial para imunidade e ossos
- **Proteína**: Previne sarcopenia (perda muscular)
- **Vitamina C**: Antioxidante, fortalece defesas
- **Zinco**: Regula resposta imune
- **Ômega-3**: Anti-inflamatório natural

Cada nutriente mostra progresso animado com cores indicativas.
        `,
      },
    },
  },
}

export const TrackerExercicios: Story = {
  name: 'Tracker de Exercícios',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-2xl mx-auto">
      <ExerciseTracker />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Protocolo de 15 minutos diários de exercícios para idosos:
- Caminhada em casa (5 min)
- Elevação de calcanhares (2 min)
- Sentar e levantar (2 min)
- Rotação de ombros (1 min)
- Força de braços (2 min)
- Respiração profunda (3 min)

Ao completar todos, exibe animação de celebração com confetti.
        `,
      },
    },
  },
}

export const CalendarioVacinas: Story = {
  name: 'Calendário de Vacinas',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-2xl mx-auto">
      <VaccinationCard />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Calendário interativo de vacinas essenciais:
- **Influenza (gripe)**: URGENTE no outono (março-abril)
- **Pneumocócica**: Reforço a cada 5 anos
- **Covid-19**: Conforme campanha atual
- **Herpes-zóster**: Para 60+ anos
- **dTpa**: A cada 10 anos

Vacinas urgentes têm destaque visual com animação pulsante.
        `,
      },
    },
  },
}

export const ChecklistSeguranca: Story = {
  name: 'Checklist de Segurança',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-2xl mx-auto">
      <SafetyChecklist />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Auditoria de segurança domiciliar para prevenir quedas:
- **Banheiro**: Tapete antiderrapante + barra de apoio
- **Quarto**: Luz noturna automática
- **Cozinha**: Fixar ou remover tapetes
- **Sala**: Organizar fiação
- **Corredor**: Melhorar iluminação
- **Calçados**: Solado antiderrapante

Ao completar todas as verificações, exibe animação de "Casa segura!".
        `,
      },
    },
  },
}

export const Plano30Dias: Story = {
  name: 'Plano de 30 Dias',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-4xl mx-auto">
      <ThirtyDayPlan />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Plano estruturado em 4 semanas:

**Semana 1 - Avaliação**: Diagnóstico inicial da situação
**Semana 2 - Ajustes**: Implementação das mudanças
**Semana 3 - Proteção**: Vacinas e revisão médica
**Semana 4 - Monitoramento**: Acompanhamento e manutenção

Cada semana tem progresso individual e progresso geral do plano.
        `,
      },
    },
  },
}

export const ResumoProtocolos: Story = {
  name: 'Resumo dos Protocolos',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-4xl mx-auto">
      <ProtocolSummary />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Resumo visual dos 5 protocolos essenciais:
1. 💧 **Hidratação**: 6 ofertas diárias, meta 1,5-2 L
2. 🥗 **Nutrição**: Proteína + vitaminas + minerais
3. 🏃 **Movimento**: 15 minutos diários
4. 💉 **Vacinação**: Gripe, pneumo e Covid em dia
5. 🏠 **Segurança**: Ambiente livre de riscos

Cards animados com fade-in stagger para entrada sequencial.
        `,
      },
    },
  },
}

export const AlertaEmergencia: Story = {
  name: 'Alerta de Emergência',
  render: () => (
    <div className="p-8 bg-[var(--background)] flex justify-center">
      <EmergencyAlert />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Alerta de emergência com animações de atenção:
- **AttentionView** com shake para chamar atenção
- **PulseView** com glow no ícone
- Informação do SAMU (192) em destaque

Usado para alertar sobre confusão mental súbita = emergência.
        `,
      },
    },
  },
}

export const ComponentesAnimacao: Story = {
  name: 'Showcase de Animações',
  render: () => (
    <div className="p-8 bg-[var(--background)] max-w-4xl mx-auto space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-[var(--foreground)]">
          Componentes de Animação Utilizados
        </h2>
        <p className="text-[var(--foreground-muted)] mb-8">
          O Guia Outono Seguro utiliza todos os componentes de animação do
          Design System SmartSenior para criar uma experiência interativa
          e engajante para cuidadores de idosos.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">1. AnimatedCounter / AnimatedPercentage</h3>
        <HeroStatsGrid />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">2. AnimatedProgress / AnimatedCircularProgress</h3>
        <HydrationTracker current={1200} />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">3. AnimatedCheckbox / AnimatedCheckboxGroup</h3>
        <SafetyChecklist />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">4. FadeInView / FadeInStagger</h3>
        <ProtocolSummary />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">5. PulseView / AttentionView</h3>
        <EmergencyAlert />
      </section>

      <section>
        <h3 className="text-lg font-semibold mb-4">6. SuccessAnimation</h3>
        <div className="bg-white p-6 rounded-xl border text-center">
          <p className="text-sm text-[var(--foreground-muted)] mb-4">
            Complete todos os itens de um tracker para ver a animação de sucesso!
          </p>
          <ExerciseTracker />
        </div>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Demonstração de todos os componentes de animação utilizados no Guia Outono Seguro:

1. **AnimatedCounter / AnimatedPercentage** - Números que contam de 0 até o valor final
2. **AnimatedProgress** - Barras de progresso com preenchimento animado
3. **AnimatedCheckbox** - Checkboxes com bounce e efeito de confirmação
4. **FadeInView / FadeInStagger** - Elementos que aparecem com fade e slide
5. **PulseView / AttentionView** - Elementos que pulsam ou tremem para chamar atenção
6. **SuccessAnimation** - Checkmark animado com confetti para celebrar conclusões

Esses componentes tornam o guia mais interativo e recompensador,
incentivando cuidadores a completar as tarefas de prevenção.
        `,
      },
    },
  },
}
