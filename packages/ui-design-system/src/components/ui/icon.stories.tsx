import type { Meta, StoryObj } from '@storybook/react'
import { Icon, SmartSeniorIcons, type LucideIcon } from './icon'
import {
  Heart,
  Droplets,
  Footprints,
  AlertTriangle,
  CheckCircle,
  Pill,
  Activity,
  Thermometer,
  ShieldCheck,
} from 'lucide-react'

const meta: Meta<typeof Icon> = {
  title: 'Foundation/Iconography',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Sistema de Iconografia SmartSenior

O Design System SmartSenior utiliza [Lucide Icons](https://lucide.dev/) como base,
com wrappers e categorizações específicas para o domínio de cuidado com idosos.

## Características

- **Tamanhos acessíveis**: De xs (12px) a 3xl (48px) para boa visibilidade
- **Cores semânticas**: Integradas com os tokens de cor do Design System
- **Categorização por domínio**: Ícones organizados por contexto de uso
- **Acessibilidade**: Suporte a labels e decorative mode

## Uso Básico

\`\`\`tsx
import { Icon, SmartSeniorIcons } from '@smartsenior/ui-design-system'
import { Heart } from 'lucide-react'

// Uso direto
<Icon icon={Heart} size="lg" color="error" />

// Usando o catálogo SmartSenior
<Icon icon={SmartSeniorIcons.health.heart} size="lg" color="error" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Componente Lucide icon a ser renderizado',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Tamanho do ícone',
    },
    color: {
      control: 'select',
      options: ['inherit', 'current', 'primary', 'accent', 'muted', 'subtle', 'success', 'warning', 'error', 'info', 'inverse'],
      description: 'Cor semântica do ícone',
    },
    label: {
      control: 'text',
      description: 'Label acessível para leitores de tela',
    },
    decorative: {
      control: 'boolean',
      description: 'Se true, o ícone é escondido de leitores de tela',
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

// ============================================
// BASIC EXAMPLES
// ============================================

export const Default: Story = {
  args: {
    icon: Heart,
    size: 'md',
    color: 'current',
  },
}

export const WithLabel: Story = {
  args: {
    icon: Heart,
    size: 'lg',
    color: 'error',
    label: 'Saúde do coração',
  },
}

// ============================================
// SIZES
// ============================================

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xs" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>xs (12px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="sm" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>sm (16px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="md" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>md (20px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="lg" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>lg (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>xl (32px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="2xl" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>2xl (40px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="3xl" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>3xl (48px)</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tamanhos disponíveis para ícones, de xs (12px) a 3xl (48px). Recomendamos usar lg ou xl para melhor visibilidade em interfaces para idosos.',
      },
    },
  },
}

// ============================================
// COLORS
// ============================================

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="primary" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="accent" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>accent</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="muted" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>muted</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="subtle" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>subtle</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="success" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>success</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="warning" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>warning</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="error" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>error</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon icon={Heart} size="xl" color="info" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginTop: '4px' }}>info</div>
      </div>
      <div style={{ textAlign: 'center', background: 'var(--primary)', padding: '8px', borderRadius: '8px' }}>
        <Icon icon={Heart} size="xl" color="inverse" />
        <div style={{ fontSize: '12px', color: 'var(--foreground-inverse)', marginTop: '4px' }}>inverse</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Cores semânticas disponíveis para ícones. Todas as cores são derivadas dos tokens do Design System.',
      },
    },
  },
}

// ============================================
// SMARTSENIOR ICON CATALOG
// ============================================

const IconGrid = ({ title, icons }: { title: string; icons: Record<string, LucideIcon> }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{
      fontSize: '14px',
      fontWeight: 600,
      color: 'var(--foreground)',
      marginBottom: '1rem',
      paddingBottom: '0.5rem',
      borderBottom: '1px solid var(--border)',
    }}>
      {title}
    </h3>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: '1rem'
    }}>
      {Object.entries(icons).map(([name, IconComponent]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            transition: 'all 0.15s ease',
          }}
        >
          <Icon icon={IconComponent} size="lg" color="primary" />
          <span style={{
            fontSize: '11px',
            color: 'var(--foreground-muted)',
            marginTop: '8px',
            textAlign: 'center',
            wordBreak: 'break-word',
          }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export const CatalogHealth: Story = {
  name: 'Catálogo: Saúde e Bem-estar',
  render: () => <IconGrid title="Saúde e Bem-estar" icons={SmartSeniorIcons.health} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones relacionados a saúde, sinais vitais, medicação e cuidados médicos.',
      },
    },
  },
}

export const CatalogNutrition: Story = {
  name: 'Catálogo: Hidratação e Nutrição',
  render: () => <IconGrid title="Hidratação e Nutrição" icons={SmartSeniorIcons.nutrition} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para tracking de hidratação e alimentação.',
      },
    },
  },
}

export const CatalogMovement: Story = {
  name: 'Catálogo: Movimento e Mobilidade',
  render: () => <IconGrid title="Movimento e Mobilidade" icons={SmartSeniorIcons.movement} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para atividade física e mobilidade.',
      },
    },
  },
}

export const CatalogSchedule: Story = {
  name: 'Catálogo: Tempo e Agenda',
  render: () => <IconGrid title="Tempo e Agenda" icons={SmartSeniorIcons.schedule} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para agendamento, alarmes e gestão de tempo.',
      },
    },
  },
}

export const CatalogCommunication: Story = {
  name: 'Catálogo: Comunicação',
  render: () => <IconGrid title="Comunicação" icons={SmartSeniorIcons.communication} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para chamadas, mensagens e notificações.',
      },
    },
  },
}

export const CatalogFamily: Story = {
  name: 'Catálogo: Cuidado e Família',
  render: () => <IconGrid title="Cuidado e Família" icons={SmartSeniorIcons.family} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para representar familiares, cuidadores e ambiente doméstico.',
      },
    },
  },
}

export const CatalogSafety: Story = {
  name: 'Catálogo: Segurança e Alertas',
  render: () => <IconGrid title="Segurança e Alertas" icons={SmartSeniorIcons.safety} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para estados de alerta, sucesso, erro e feedback.',
      },
    },
  },
}

export const CatalogNavigation: Story = {
  name: 'Catálogo: Navegação',
  render: () => <IconGrid title="Navegação" icons={SmartSeniorIcons.navigation} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para navegação e direcionamento.',
      },
    },
  },
}

export const CatalogActions: Story = {
  name: 'Catálogo: Ações',
  render: () => <IconGrid title="Ações" icons={SmartSeniorIcons.actions} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para ações do usuário (adicionar, editar, deletar, etc.).',
      },
    },
  },
}

export const CatalogStatus: Story = {
  name: 'Catálogo: Status e Progresso',
  render: () => <IconGrid title="Status e Progresso" icons={SmartSeniorIcons.status} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para indicadores de status e progresso.',
      },
    },
  },
}

export const CatalogDocuments: Story = {
  name: 'Catálogo: Documentos',
  render: () => <IconGrid title="Documentos" icons={SmartSeniorIcons.documents} />,
  parameters: {
    docs: {
      description: {
        story: 'Ícones para documentos, arquivos e checklists.',
      },
    },
  },
}

export const CatalogFull: Story = {
  name: 'Catálogo Completo',
  render: () => (
    <div style={{ maxWidth: '900px' }}>
      <div style={{
        padding: '1rem',
        marginBottom: '2rem',
        background: 'var(--background-subtle)',
        borderRadius: '8px',
        border: '1px solid var(--border)',
      }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '0.5rem' }}>
          Biblioteca de Ícones SmartSenior
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--foreground-muted)' }}>
          Todos os ícones organizados por categoria de uso no contexto de cuidado com idosos.
        </p>
      </div>

      <IconGrid title="🏥 Saúde e Bem-estar" icons={SmartSeniorIcons.health} />
      <IconGrid title="💧 Hidratação e Nutrição" icons={SmartSeniorIcons.nutrition} />
      <IconGrid title="🚶 Movimento e Mobilidade" icons={SmartSeniorIcons.movement} />
      <IconGrid title="⏰ Tempo e Agenda" icons={SmartSeniorIcons.schedule} />
      <IconGrid title="📱 Comunicação" icons={SmartSeniorIcons.communication} />
      <IconGrid title="👨‍👩‍👧 Cuidado e Família" icons={SmartSeniorIcons.family} />
      <IconGrid title="⚠️ Segurança e Alertas" icons={SmartSeniorIcons.safety} />
      <IconGrid title="🧭 Navegação" icons={SmartSeniorIcons.navigation} />
      <IconGrid title="✋ Ações" icons={SmartSeniorIcons.actions} />
      <IconGrid title="📊 Status e Progresso" icons={SmartSeniorIcons.status} />
      <IconGrid title="📄 Documentos" icons={SmartSeniorIcons.documents} />
      <IconGrid title="🌤️ Ambiente" icons={SmartSeniorIcons.environment} />
      <IconGrid title="📲 Dispositivos" icons={SmartSeniorIcons.device} />
      <IconGrid title="⭐ Diversos" icons={SmartSeniorIcons.misc} />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Catálogo completo de todos os ícones disponíveis no Design System SmartSenior.',
      },
    },
  },
}

// ============================================
// USE CASES
// ============================================

export const UseCaseProtocols: Story = {
  name: 'Caso de Uso: 5 Protocolos SmartSenior',
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'var(--background)',
        border: '2px solid var(--info)',
        minWidth: '120px',
      }}>
        <Icon icon={Droplets} size="2xl" color="info" />
        <span style={{ marginTop: '0.75rem', fontWeight: 600, color: 'var(--foreground)' }}>Hidratação</span>
        <span style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>6 ofertas/dia</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'var(--background)',
        border: '2px solid var(--success)',
        minWidth: '120px',
      }}>
        <Icon icon={SmartSeniorIcons.nutrition.fruit} size="2xl" color="success" />
        <span style={{ marginTop: '0.75rem', fontWeight: 600, color: 'var(--foreground)' }}>Nutrição</span>
        <span style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>Proteína + Vit D</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'var(--background)',
        border: '2px solid var(--accent)',
        minWidth: '120px',
      }}>
        <Icon icon={Footprints} size="2xl" color="accent" />
        <span style={{ marginTop: '0.75rem', fontWeight: 600, color: 'var(--foreground)' }}>Movimento</span>
        <span style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>15 min/dia</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'var(--background)',
        border: '2px solid var(--warning)',
        minWidth: '120px',
      }}>
        <Icon icon={SmartSeniorIcons.health.vaccine} size="2xl" color="warning" />
        <span style={{ marginTop: '0.75rem', fontWeight: 600, color: 'var(--foreground)' }}>Vacinação</span>
        <span style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>Gripe + Pneumo</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'var(--background)',
        border: '2px solid var(--error)',
        minWidth: '120px',
      }}>
        <Icon icon={ShieldCheck} size="2xl" color="error" />
        <span style={{ marginTop: '0.75rem', fontWeight: 600, color: 'var(--foreground)' }}>Segurança</span>
        <span style={{ fontSize: '12px', color: 'var(--foreground-muted)' }}>Casa segura</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso dos ícones para representar os 5 protocolos preventivos do guia SmartSenior "Outono Seguro".',
      },
    },
  },
}

export const UseCaseAlerts: Story = {
  name: 'Caso de Uso: Estados de Alerta',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem',
        borderRadius: '8px',
        background: 'color-mix(in srgb, var(--success) 10%, transparent)',
        border: '1px solid var(--success)',
      }}>
        <Icon icon={CheckCircle} size="lg" color="success" />
        <div>
          <div style={{ fontWeight: 600, color: 'var(--foreground)' }}>Hidratação em dia</div>
          <div style={{ fontSize: '14px', color: 'var(--foreground-muted)' }}>6/6 ofertas concluídas</div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem',
        borderRadius: '8px',
        background: 'color-mix(in srgb, var(--warning) 10%, transparent)',
        border: '1px solid var(--warning)',
      }}>
        <Icon icon={AlertTriangle} size="lg" color="warning" />
        <div>
          <div style={{ fontWeight: 600, color: 'var(--foreground)' }}>Atenção: Urina escura</div>
          <div style={{ fontSize: '14px', color: 'var(--foreground-muted)' }}>Aumente a hidratação</div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem',
        borderRadius: '8px',
        background: 'color-mix(in srgb, var(--error) 10%, transparent)',
        border: '1px solid var(--error)',
      }}>
        <Icon icon={SmartSeniorIcons.safety.critical} size="lg" color="error" />
        <div>
          <div style={{ fontWeight: 600, color: 'var(--foreground)' }}>Emergência: Confusão mental</div>
          <div style={{ fontSize: '14px', color: 'var(--foreground-muted)' }}>Ligue SAMU (192)</div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso dos ícones em diferentes estados de alerta (sucesso, atenção, emergência).',
      },
    },
  },
}

export const UseCaseDailyChecklist: Story = {
  name: 'Caso de Uso: Checklist Diário',
  render: () => (
    <div style={{
      maxWidth: '350px',
      padding: '1.5rem',
      borderRadius: '12px',
      background: 'var(--background)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <Icon icon={SmartSeniorIcons.schedule.calendarCheck} size="lg" color="primary" />
        <span style={{ fontWeight: 700, fontSize: '16px' }}>Checklist de Hoje</span>
      </div>

      {[
        { icon: Droplets, label: 'Hidratação (6 ofertas)', done: true },
        { icon: Pill, label: 'Medicação manhã', done: true },
        { icon: Footprints, label: 'Exercício 15 min', done: false },
        { icon: SmartSeniorIcons.nutrition.meal, label: 'Almoço com proteína', done: false },
        { icon: Thermometer, label: 'Verificar temperatura', done: false },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '0.75rem 0',
            borderBottom: i < 4 ? '1px solid var(--border-muted)' : 'none',
            opacity: item.done ? 0.6 : 1,
          }}
        >
          <Icon
            icon={item.done ? CheckCircle : item.icon}
            size="md"
            color={item.done ? 'success' : 'muted'}
          />
          <span style={{
            flex: 1,
            textDecoration: item.done ? 'line-through' : 'none',
            color: item.done ? 'var(--foreground-muted)' : 'var(--foreground)',
          }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso dos ícones em um checklist diário de cuidados.',
      },
    },
  },
}

export const UseCaseAgentCards: Story = {
  name: 'Caso de Uso: Agentes IA SmartSenior',
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
      <div style={{
        width: '200px',
        padding: '1.5rem',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))',
        color: 'var(--primary-foreground)',
        textAlign: 'center',
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
        }}>
          <Icon icon={Activity} size="2xl" color="inverse" />
        </div>
        <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '0.25rem' }}>Agente Dux</div>
        <div style={{ fontSize: '14px', opacity: 0.9 }}>Orientações personalizadas</div>
      </div>

      <div style={{
        width: '200px',
        padding: '1.5rem',
        borderRadius: '16px',
        background: '#FF6A13',
        color: '#FFFFFF',
        textAlign: 'center',
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#FFAA4D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
        }}>
          <Icon icon={SmartSeniorIcons.family.care} size="2xl" color="inverse" />
        </div>
        <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '0.25rem' }}>Agente Carina</div>
        <div style={{ fontSize: '14px', opacity: 0.9 }}>Monitoramento de rotina</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso dos ícones para representar os agentes de IA do SmartSenior (Dux e Carina).',
      },
    },
  },
}
