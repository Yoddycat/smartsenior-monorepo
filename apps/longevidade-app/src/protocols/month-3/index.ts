// Mês 3: Integração - Potencializando a Longevidade
// Foco: Exercício Avançado, Conexões Sociais e Saúde Cognitiva

import { ProtocolTask, WeeklyGoal, MonthlyMilestone } from '../../types'

export const MONTH_3_TITLE = 'Integração'
export const MONTH_3_SUBTITLE = 'Potencializando a Longevidade'
export const MONTH_3_DESCRIPTION = `
O terceiro mês integra todos os pilares e adiciona elementos avançados.
Vamos intensificar o exercício, fortalecer conexões sociais e exercitar a mente
para uma longevidade plena e significativa.
`

export const MONTH_3_DAILY_TASKS: Omit<ProtocolTask, 'id' | 'status'>[] = [
  // Movimento Avançado
  {
    category: 'movement',
    title: 'Treino de força',
    description: 'Sessão de exercícios de resistência (20-30 min)',
    duration: 25,
    frequency: 'daily',
    targetTime: '07:00',
  },
  {
    category: 'movement',
    title: 'Cardio moderado',
    description: 'Atividade cardiovascular de intensidade moderada',
    duration: 20,
    frequency: 'daily',
    targetTime: '17:00',
  },
  {
    category: 'movement',
    title: 'Mobilidade e flexibilidade',
    description: 'Rotina de alongamento e mobilidade articular',
    duration: 15,
    frequency: 'daily',
    targetTime: '21:00',
  },

  // Conexões Sociais
  {
    category: 'social',
    title: 'Conexão significativa',
    description: 'Conversa genuína com amigo ou familiar (mínimo 15 min)',
    duration: 15,
    frequency: 'daily',
  },
  {
    category: 'social',
    title: 'Gratidão compartilhada',
    description: 'Expressar gratidão a alguém importante',
    frequency: 'daily',
  },

  // Saúde Cognitiva
  {
    category: 'cognitive',
    title: 'Leitura diária',
    description: 'Ler por pelo menos 20 minutos',
    duration: 20,
    frequency: 'daily',
    targetTime: '21:30',
  },
  {
    category: 'cognitive',
    title: 'Exercício mental',
    description: 'Quebra-cabeça, jogo de lógica ou aprendizado de algo novo',
    duration: 15,
    frequency: 'daily',
  },
  {
    category: 'cognitive',
    title: 'Reflexão noturna',
    description: 'Journaling: 3 aprendizados ou gratidões do dia',
    duration: 10,
    frequency: 'daily',
    targetTime: '22:00',
  },

  // Manter hábitos dos meses anteriores
  {
    category: 'hydration',
    title: 'Hidratação otimizada',
    description: '2.5L de água, incluindo água ao acordar',
    frequency: 'daily',
  },
  {
    category: 'nutrition',
    title: 'Nutrição anti-inflamatória',
    description: 'Seguir protocolo nutricional completo',
    frequency: 'daily',
  },
  {
    category: 'sleep',
    title: 'Sono restaurador',
    description: '7-8 horas de sono de qualidade',
    frequency: 'daily',
  },
  {
    category: 'mindfulness',
    title: 'Meditação avançada',
    description: '15 minutos de meditação focada',
    duration: 15,
    frequency: 'daily',
    targetTime: '06:30',
  },
]

export const MONTH_3_WEEKLY_GOALS: Omit<WeeklyGoal, 'id' | 'current'>[] = [
  // Semana 1
  {
    month: 3,
    week: 1,
    category: 'movement',
    title: 'Força e resistência',
    description: 'Completar 5 sessões de treino de força',
    target: 5,
    unit: 'sessões',
  },
  {
    month: 3,
    week: 1,
    category: 'social',
    title: 'Reconectar',
    description: 'Fazer 3 ligações para pessoas queridas',
    target: 3,
    unit: 'ligações',
  },

  // Semana 2
  {
    month: 3,
    week: 2,
    category: 'cognitive',
    title: 'Mente afiada',
    description: 'Completar exercícios cognitivos por 6 dias',
    target: 6,
    unit: 'dias',
  },
  {
    month: 3,
    week: 2,
    category: 'movement',
    title: 'Cardio consistente',
    description: 'Completar 150 minutos de cardio na semana',
    target: 150,
    unit: 'minutos',
  },

  // Semana 3
  {
    month: 3,
    week: 3,
    category: 'social',
    title: 'Comunidade',
    description: 'Participar de 2 atividades em grupo',
    target: 2,
    unit: 'atividades',
  },
  {
    month: 3,
    week: 3,
    category: 'cognitive',
    title: 'Aprendizado contínuo',
    description: 'Aprender algo novo (habilidade, idioma, etc)',
    target: 3,
    unit: 'sessões',
  },

  // Semana 4
  {
    month: 3,
    week: 4,
    category: 'movement',
    title: 'Protocolo completo',
    description: 'Completar força + cardio + mobilidade por 6 dias',
    target: 6,
    unit: 'dias',
  },
  {
    month: 3,
    week: 4,
    category: 'mindfulness',
    title: 'Presença total',
    description: 'Meditar 15 minutos por 7 dias consecutivos',
    target: 7,
    unit: 'dias',
  },
]

export const MONTH_3_MILESTONES: Omit<MonthlyMilestone, 'id' | 'achieved' | 'achievedAt'>[] = [
  {
    month: 3,
    title: 'Atleta da Longevidade',
    description: 'Completou 25 sessões de treino de força',
  },
  {
    month: 3,
    title: 'Conectado',
    description: 'Manteve conexões sociais diárias por 3 semanas',
  },
  {
    month: 3,
    title: 'Mente Brilhante',
    description: 'Completou 20 sessões de exercícios cognitivos',
  },
  {
    month: 3,
    title: 'Protocolo Completo',
    description: 'Completou os 3 meses com mais de 75% de adesão',
  },
  {
    month: 3,
    title: 'Mestre da Longevidade',
    description: 'Conquistou todos os marcos do protocolo de 3 meses',
  },
]
