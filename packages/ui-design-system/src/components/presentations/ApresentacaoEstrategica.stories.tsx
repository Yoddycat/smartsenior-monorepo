import type { Meta, StoryObj } from '@storybook/react'
import {
  ApresentacaoEstrategica,
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
} from './ApresentacaoEstrategica'

const meta: Meta<typeof ApresentacaoEstrategica> = {
  title: 'Apresentações/Planejamento Estratégico 2026',
  component: ApresentacaoEstrategica,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Apresentação Estratégica SmartSenior

Apresentação do planejamento estratégico do Ano 1 da SmartSenior,
utilizando os componentes do Design System.

## Conteúdo

1. **Capa** — Título e tagline
2. **Agenda** — Estrutura da apresentação
3. **Missão** — Propósito da empresa
4. **Visão** — Onde queremos chegar
5. **Valores** — Nossos princípios
6. **Hedgehog Concept** — Estratégia central (Collins)
7. **Oceano Azul** — Diferenciação (Kim & Mauborgne)
8. **Escada de Valor** — Tiers de assinatura
9. **Unit Economics** — Métricas financeiras
10. **Flywheel** — Motor de crescimento
11. **Fases** — Validação e Tração
12. **Metas Validação** — M1-6
13. **Metas Tração** — M7-12
14. **Investimento** — Cenários
15. **Próximos Passos** — Ações imediatas
16. **Encerramento** — Chamada à ação
        `,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ApresentacaoEstrategica>

// ============================================
// APRESENTAÇÃO COMPLETA
// ============================================

export const Completa: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Apresentação completa com todos os 15 slides.',
      },
    },
  },
}

// ============================================
// SLIDES INDIVIDUAIS
// ============================================

export const Slide01_Capa: Story = {
  render: () => <SlideCapa />,
  parameters: {
    docs: {
      description: {
        story: 'Slide de abertura com logo, título e tagline.',
      },
    },
  },
}

export const Slide02_Agenda: Story = {
  render: () => <SlideAgenda />,
  parameters: {
    docs: {
      description: {
        story: 'Estrutura da apresentação em 6 blocos.',
      },
    },
  },
}

export const Slide03_Missao: Story = {
  render: () => <SlideMissao />,
  parameters: {
    docs: {
      description: {
        story: 'Declaração de missão da SmartSenior.',
      },
    },
  },
}

export const Slide04_Visao: Story = {
  render: () => <SlideVisao />,
  parameters: {
    docs: {
      description: {
        story: 'Visão de futuro — ser referência em gestão da longevidade.',
      },
    },
  },
}

export const Slide05_Valores: Story = {
  render: () => <SlideValores />,
  parameters: {
    docs: {
      description: {
        story: 'Os 6 valores que guiam a empresa.',
      },
    },
  },
}

export const Slide06_Hedgehog: Story = {
  render: () => <SlideHedgehog />,
  parameters: {
    docs: {
      description: {
        story: 'Conceito Hedgehog de Jim Collins — interseção de paixão, competência e motor econômico.',
      },
    },
  },
}

export const Slide07_OceanoAzul: Story = {
  render: () => <SlideOceanoAzul />,
  parameters: {
    docs: {
      description: {
        story: 'Matriz ERRC do Oceano Azul — Eliminar, Reduzir, Elevar, Criar.',
      },
    },
  },
}

export const Slide08_EscadaDeValor: Story = {
  render: () => <SlideEscadaValor />,
  parameters: {
    docs: {
      description: {
        story: 'Tiers de assinatura de R$197 a R$15.000.',
      },
    },
  },
}

export const Slide09_UnitEconomics: Story = {
  render: () => <SlideUnitEconomics />,
  parameters: {
    docs: {
      description: {
        story: 'Métricas financeiras: ARPU, CAC, LTV, Payback, Margem.',
      },
    },
  },
}

export const Slide10_Flywheel: Story = {
  render: () => <SlideFlywheel />,
  parameters: {
    docs: {
      description: {
        story: 'Motor de crescimento circular — conteúdo → leads → assinatura → dados.',
      },
    },
  },
}

export const Slide11_Fases: Story = {
  render: () => <SlideFases />,
  parameters: {
    docs: {
      description: {
        story: 'Duas fases: Validação (M1-6) e Tração (M7-12).',
      },
    },
  },
}

export const Slide12_MetasValidacao: Story = {
  render: () => <SlideMetasValidacao />,
  parameters: {
    docs: {
      description: {
        story: 'Tabela de metas mensais da fase de validação (M1-6).',
      },
    },
  },
}

export const Slide13_MetasTracao: Story = {
  render: () => <SlideMetasTracao />,
  parameters: {
    docs: {
      description: {
        story: 'Tabela de metas mensais da fase de tração com breakeven no M10.',
      },
    },
  },
}

export const Slide14_Investimento: Story = {
  render: () => <SlideInvestimento />,
  parameters: {
    docs: {
      description: {
        story: 'Três cenários de investimento: otimista, realista e conservador.',
      },
    },
  },
}

export const Slide15_ProximosPassos: Story = {
  render: () => <SlideProximosPassos />,
  parameters: {
    docs: {
      description: {
        story: '8 ações prioritárias para as próximas 8 semanas.',
      },
    },
  },
}

export const Slide16_Encerramento: Story = {
  render: () => <SlideEncerramento />,
  parameters: {
    docs: {
      description: {
        story: 'Slide final com chamada à ação.',
      },
    },
  },
}
