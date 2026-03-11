import * as React from "react"
import { AnimatedCounter, AnimatedPercentage } from "./animated-counter"
import { AnimatedProgress, AnimatedCircularProgress } from "./animated-progress"
import { AnimatedCheckbox, AnimatedCheckboxGroup } from "./animated-checkbox"
import { FadeInView, FadeInStagger } from "./fade-in-view"
import { PulseView, AttentionView } from "./pulse-view"
import { SuccessAnimation } from "./success-animation"
import { Icon } from "./icon"
import {
  Droplets,
  Salad,
  Footprints,
  Syringe,
  Home,
  AlertTriangle,
  Sun,
  Activity,
  Heart,
  ShieldCheck,
  Calendar,
  Clock,
  Thermometer,
  Phone,
  Ambulance,
  type LucideIcon,
} from "lucide-react"

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

// ============================================
// STYLED ICON COMPONENT
// ============================================
export interface StyledIconProps {
  icon: LucideIcon
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const variantStyles = {
  primary: "from-[var(--primary)] to-[var(--primary)]/80",
  success: "from-emerald-400 to-emerald-600",
  warning: "from-amber-400 to-amber-600",
  error: "from-red-400 to-red-600",
  info: "from-blue-400 to-blue-600",
  accent: "from-[var(--accent)] to-[var(--accent)]/80",
}

const sizeStyles = {
  sm: { container: "w-8 h-8", icon: "sm" as const },
  md: { container: "w-10 h-10", icon: "md" as const },
  lg: { container: "w-12 h-12", icon: "lg" as const },
  xl: { container: "w-16 h-16", icon: "xl" as const },
}

export function StyledIcon({ icon, variant = 'primary', size = 'md', className }: StyledIconProps) {
  const styles = sizeStyles[size]

  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg",
        variantStyles[variant],
        styles.container,
        className
      )}
    >
      <Icon icon={icon} size={styles.icon} color="inverse" />
    </div>
  )
}

// ============================================
// HERO STATS SECTION
// ============================================
export interface HeroStatProps {
  value: number
  suffix?: string
  label: string
  description: string
  delay?: number
  icon: LucideIcon
  variant: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'accent'
}

export function HeroStat({ value, suffix = "", label, description, delay = 0, icon, variant }: HeroStatProps) {
  return (
    <FadeInView direction="up" delay={delay}>
      <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-[var(--border)]">
        <div className="flex justify-center mb-3">
          <StyledIcon icon={icon} variant={variant} size="lg" />
        </div>
        <div className="text-3xl font-bold text-[var(--foreground)]">
          <AnimatedCounter value={value} duration={1500} delay={delay} />
          {suffix}
        </div>
        <div className="text-sm font-medium text-[var(--foreground)] mt-1">{label}</div>
        <div className="text-xs text-[var(--foreground-muted)] mt-1">{description}</div>
      </div>
    </FadeInView>
  )
}

export function HeroStatsGrid() {
  const stats: HeroStatProps[] = [
    { value: 70, suffix: "-89", label: "anos", description: "faixa mais vulnerável", delay: 0, icon: Heart, variant: 'error' },
    { value: 3, suffix: "x", label: "mais risco", description: "de pneumonia no frio", delay: 150, icon: Thermometer, variant: 'warning' },
    { value: 40, suffix: "%", label: "das quedas", description: "ocorrem nos meses frios", delay: 300, icon: AlertTriangle, variant: 'info' },
    { value: 5, suffix: "", label: "protocolos", description: "preventivos", delay: 450, icon: ShieldCheck, variant: 'success' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <HeroStat key={i} {...stat} />
      ))}
    </div>
  )
}

// ============================================
// HYDRATION TRACKER
// ============================================
export interface HydrationTrackerProps {
  current: number
  goal?: number
  className?: string
}

const hydrationSchedule = [
  { time: "Ao acordar", amount: 200, tip: "Água morna ou chá leve" },
  { time: "Café da manhã", amount: 200, tip: "Suco, leite ou chá" },
  { time: "Metade manhã", amount: 150, tip: "Água ou chá de ervas" },
  { time: "Almoço", amount: 200, tip: "Água ou suco natural" },
  { time: "Início tarde", amount: 150, tip: "Água ou chá morno" },
  { time: "Lanche", amount: 150, tip: "Vitamina, iogurte líq." },
  { time: "Final tarde", amount: 150, tip: "Água ou chá suave" },
  { time: "Jantar", amount: 200, tip: "Sopa conta muito!" },
  { time: "Antes dormir", amount: 100, tip: "Pequena quantidade" },
]

export function HydrationTracker({ current, goal = 1500, className }: HydrationTrackerProps) {
  const percentage = Math.min((current / goal) * 100, 100)
  const variant = percentage >= 100 ? "success" : percentage >= 70 ? "default" : "warning"

  return (
    <div className={cn("p-6 bg-white rounded-xl shadow-sm border border-[var(--border)]", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <StyledIcon icon={Droplets} variant="info" size="md" />
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            Hidratação Diária
          </h3>
        </div>
        <div className="text-sm text-[var(--foreground-muted)]">
          <AnimatedCounter value={current} duration={1000} /> / {goal} ml
        </div>
      </div>

      <div className="flex items-center gap-6 mb-6">
        <AnimatedCircularProgress
          value={percentage}
          size={100}
          variant={variant}
          showLabel
          glow
        />
        <div className="flex-1">
          <AnimatedProgress
            value={percentage}
            variant={variant}
            size="lg"
            showLabel
            striped={percentage < 100}
            stripedAnimated={percentage < 100}
          />
          <p className="text-sm text-[var(--foreground-muted)] mt-2">
            {percentage >= 100
              ? "Meta alcançada! Excelente hidratação."
              : percentage >= 70
                ? "Bom progresso! Continue hidratando."
                : "Atenção: aumente a ingestão de líquidos."}
          </p>
        </div>
      </div>

      {percentage >= 100 && (
        <div className="flex justify-center">
          <SuccessAnimation size={60} confetti variant="success" />
        </div>
      )}
    </div>
  )
}

export function HydrationScheduleCard() {
  const [checkedItems, setCheckedItems] = React.useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newSet = new Set(checkedItems)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      newSet.add(index)
    }
    setCheckedItems(newSet)
  }

  const totalConsumed = hydrationSchedule
    .filter((_, i) => checkedItems.has(i))
    .reduce((acc, item) => acc + item.amount, 0)

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-[var(--border)]">
      <div className="flex items-center gap-3 mb-4">
        <StyledIcon icon={Calendar} variant="info" size="md" />
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Distribuição Diária de Líquidos
        </h3>
      </div>

      <HydrationTracker current={totalConsumed} className="mb-6 border-0 shadow-none p-0" />

      <FadeInStagger staggerDelay={50}>
        <div className="space-y-2">
          {hydrationSchedule.map((item, i) => (
            <FadeInView key={i} direction="right">
              <div
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg transition-colors cursor-pointer",
                  checkedItems.has(i)
                    ? "bg-[var(--success)]/10 border border-[var(--success)]/30"
                    : "bg-[var(--background-subtle)] hover:bg-[var(--background-subtle)]/80"
                )}
                onClick={() => toggleItem(i)}
              >
                <AnimatedCheckbox
                  checked={checkedItems.has(i)}
                  onCheckedChange={() => toggleItem(i)}
                  size="md"
                  variant="success"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{item.time}</span>
                    <span className="text-sm text-[var(--primary)] font-semibold">
                      {item.amount} ml
                    </span>
                  </div>
                  <span className="text-xs text-[var(--foreground-muted)]">{item.tip}</span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </FadeInStagger>
    </div>
  )
}

// ============================================
// NUTRITION TRACKER
// ============================================
const nutrients = [
  { name: "Vitamina D", icon: Sun, variant: 'warning' as const, description: "Exposição ao sol + peixes, ovos" },
  { name: "Proteína", icon: Activity, variant: 'error' as const, description: "1,2-1,5g por kg de peso/dia" },
  { name: "Vitamina C", icon: Heart, variant: 'success' as const, description: "Acerola, caju, laranja, brócolis" },
  { name: "Zinco", icon: ShieldCheck, variant: 'info' as const, description: "Carnes, sementes, castanha-do-pará" },
  { name: "Ômega-3", icon: Droplets, variant: 'primary' as const, description: "Sardinha, salmão, linhaça, chia" },
]

const nutrientValues: Record<string, number> = {
  "Vitamina D": 45,
  "Proteína": 72,
  "Vitamina C": 88,
  "Zinco": 35,
  "Ômega-3": 60,
}

export function NutritionTracker() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-[var(--border)]">
      <div className="flex items-center gap-3 mb-4">
        <StyledIcon icon={Salad} variant="success" size="md" />
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Nutrientes-Chave para Imunidade
        </h3>
      </div>

      <FadeInStagger staggerDelay={100}>
        <div className="space-y-4">
          {nutrients.map((nutrient, i) => {
            const value = nutrientValues[nutrient.name] || 0
            const progressVariant = value >= 80 ? "success" : value >= 50 ? "warning" : "error"

            return (
              <FadeInView key={nutrient.name} direction="right" delay={i * 100}>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StyledIcon icon={nutrient.icon} variant={nutrient.variant} size="sm" />
                      <span className="font-medium text-sm">{nutrient.name}</span>
                    </div>
                    <span className="text-sm font-semibold">
                      <AnimatedPercentage value={value} duration={1000} delay={i * 100} />
                    </span>
                  </div>
                  <AnimatedProgress
                    value={value}
                    variant={progressVariant}
                    size="sm"
                    glow={value >= 80}
                  />
                  <p className="text-xs text-[var(--foreground-muted)]">
                    {nutrient.description}
                  </p>
                </div>
              </FadeInView>
            )
          })}
        </div>
      </FadeInStagger>
    </div>
  )
}

// ============================================
// EXERCISE TRACKER
// ============================================
const exercises = [
  { name: "Caminhada em casa", duration: 5, level: "Fácil", benefit: "Circulação + equilíbrio" },
  { name: "Elevação de calcanhares", duration: 2, level: "Fácil", benefit: "Força panturrilha" },
  { name: "Sentar e levantar", duration: 2, level: "Médio", benefit: "Força de pernas" },
  { name: "Rotação de ombros", duration: 1, level: "Fácil", benefit: "Mobilidade" },
  { name: "Força de braços", duration: 2, level: "Médio", benefit: "Força membros sup." },
  { name: "Respiração profunda", duration: 3, level: "Fácil", benefit: "Capacidade pulmonar" },
]

export function ExerciseTracker() {
  const [completed, setCompleted] = React.useState<Set<number>>(new Set())
  const [celebrating, setCelebrating] = React.useState(false)

  const totalMinutes = exercises.reduce((acc, ex) => acc + ex.duration, 0)
  const completedMinutes = exercises
    .filter((_, i) => completed.has(i))
    .reduce((acc, ex) => acc + ex.duration, 0)

  const allDone = completed.size === exercises.length

  const handleToggle = (index: number) => {
    const newSet = new Set(completed)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      newSet.add(index)
      if (newSet.size === exercises.length) {
        setCelebrating(true)
      }
    }
    setCompleted(newSet)
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-[var(--border)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <StyledIcon icon={Footprints} variant="accent" size="md" />
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            Protocolo de 15 Minutos
          </h3>
        </div>
        <div className="text-sm text-[var(--foreground-muted)]">
          <AnimatedCounter value={completedMinutes} duration={500} /> / {totalMinutes} min
        </div>
      </div>

      <AnimatedProgress
        value={(completedMinutes / totalMinutes) * 100}
        variant={allDone ? "success" : "default"}
        size="lg"
        showLabel
        striped={!allDone}
        stripedAnimated={!allDone}
        className="mb-4"
      />

      {allDone && celebrating && (
        <div className="flex flex-col items-center py-4">
          <SuccessAnimation size={80} confetti />
          <p className="text-lg font-semibold text-[var(--success)] mt-4">
            Exercícios do dia concluídos!
          </p>
        </div>
      )}

      <AnimatedCheckboxGroup>
        {exercises.map((ex, i) => (
          <AnimatedCheckbox
            key={i}
            checked={completed.has(i)}
            onCheckedChange={() => handleToggle(i)}
            label={ex.name}
            description={`${ex.duration} min • ${ex.level} • ${ex.benefit}`}
            variant="success"
          />
        ))}
      </AnimatedCheckboxGroup>
    </div>
  )
}

// ============================================
// VACCINATION CARD
// ============================================
const vaccines = [
  { name: "Influenza (gripe)", when: "Março-abril", where: "UBS gratuita", period: "Anual", urgent: true },
  { name: "Pneumocócica", when: "Qualquer época", where: "UBS gratuita", period: "Reforço em 5 anos", urgent: false },
  { name: "Covid-19", when: "Conforme campanha", where: "UBS gratuita", period: "Conforme ANVISA", urgent: false },
  { name: "Herpes-zóster", when: "60+ anos", where: "Rede privada", period: "Dose única", urgent: false },
  { name: "dTpa", when: "A cada 10 anos", where: "UBS gratuita", period: "A cada 10 anos", urgent: false },
]

export function VaccinationCard() {
  const [checked, setChecked] = React.useState<Set<number>>(new Set())

  const handleToggle = (index: number) => {
    const newSet = new Set(checked)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      newSet.add(index)
    }
    setChecked(newSet)
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-[var(--border)]">
      <div className="flex items-center gap-3 mb-4">
        <StyledIcon icon={Syringe} variant="info" size="md" />
        <h3 className="text-lg font-semibold text-[var(--foreground)]">
          Calendário de Vacinas Essenciais
        </h3>
      </div>

      <FadeInStagger staggerDelay={100}>
        <div className="space-y-3">
          {vaccines.map((vaccine, i) => (
            <FadeInView key={i} direction="right">
              <div
                className={cn(
                  "p-4 rounded-lg border transition-all cursor-pointer",
                  checked.has(i)
                    ? "bg-[var(--success)]/10 border-[var(--success)]"
                    : vaccine.urgent
                      ? "bg-[var(--warning)]/10 border-[var(--warning)]"
                      : "bg-[var(--background-subtle)] border-[var(--border)]"
                )}
                onClick={() => handleToggle(i)}
              >
                <div className="flex items-start gap-3">
                  {vaccine.urgent && !checked.has(i) && (
                    <PulseView variant="glow" className="flex-shrink-0">
                      <StyledIcon icon={AlertTriangle} variant="warning" size="sm" />
                    </PulseView>
                  )}
                  {checked.has(i) && (
                    <SuccessAnimation size={32} duration={400} />
                  )}
                  {!vaccine.urgent && !checked.has(i) && (
                    <StyledIcon icon={Syringe} variant="info" size="sm" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{vaccine.name}</span>
                      {vaccine.urgent && !checked.has(i) && (
                        <span className="text-xs font-semibold text-[var(--warning)] bg-[var(--warning)]/20 px-2 py-0.5 rounded">
                          AGORA!
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-[var(--foreground-muted)] mt-1">
                      {vaccine.when} • {vaccine.where}
                    </div>
                    <div className="text-xs text-[var(--foreground-muted)]">
                      Periodicidade: {vaccine.period}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </FadeInStagger>
    </div>
  )
}

// ============================================
// SAFETY CHECKLIST
// ============================================
const safetyItems = [
  { room: "Banheiro", risk: "Piso molhado + sem apoio", solution: "Tapete antiderrapante + barra de apoio" },
  { room: "Quarto", risk: "Caminho escuro à noite", solution: "Luz noturna automática no corredor" },
  { room: "Cozinha", risk: "Tapetes soltos + chão liso", solution: "Remover tapetes ou fixar com fita" },
  { room: "Sala", risk: "Fios soltos + móveis baixos", solution: "Organizar fiação + retirar obstáculos" },
  { room: "Corredor", risk: "Iluminação baixa", solution: "Interruptores em ambas extremidades" },
  { room: "Calçados", risk: "Meias escorregadias", solution: "Calçados fechados antiderrapantes" },
]

export function SafetyChecklist() {
  const [checked, setChecked] = React.useState<Set<number>>(new Set())
  const allDone = checked.size === safetyItems.length
  const progress = (checked.size / safetyItems.length) * 100

  const handleToggle = (index: number) => {
    const newSet = new Set(checked)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      newSet.add(index)
    }
    setChecked(newSet)
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-[var(--border)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <StyledIcon icon={Home} variant="primary" size="md" />
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            Auditoria de Segurança Domiciliar
          </h3>
        </div>
        <div className="text-sm font-semibold">
          <AnimatedPercentage value={progress} duration={500} /> completo
        </div>
      </div>

      <AnimatedProgress
        value={progress}
        variant={allDone ? "success" : progress > 50 ? "warning" : "error"}
        size="md"
        className="mb-4"
        glow={allDone}
      />

      {allDone && (
        <div className="flex flex-col items-center py-4 mb-4">
          <SuccessAnimation size={60} confetti variant="success" />
          <p className="text-lg font-semibold text-[var(--success)] mt-2">
            Casa segura para o inverno!
          </p>
        </div>
      )}

      <AnimatedCheckboxGroup>
        {safetyItems.map((item, i) => (
          <AnimatedCheckbox
            key={i}
            checked={checked.has(i)}
            onCheckedChange={() => handleToggle(i)}
            label={item.room}
            description={`${item.risk} → ${item.solution}`}
            variant="success"
          />
        ))}
      </AnimatedCheckboxGroup>
    </div>
  )
}

// ============================================
// 30-DAY PLAN
// ============================================
const weeklyPlans = [
  {
    week: 1,
    title: "Avaliação",
    color: "from-blue-400 to-blue-600",
    icon: Activity,
    tasks: [
      "Localizar caderneta de vacinas",
      "Observar hidratação atual",
      "Listar medicamentos em uso",
      "Auditoria de segurança domiciliar",
      "Conversar sobre plano preventivo",
    ],
  },
  {
    week: 2,
    title: "Ajustes",
    color: "from-orange-400 to-orange-600",
    icon: Clock,
    tasks: [
      "Rotina de 6 ofertas de líquido",
      "Protocolo de 15 min de movimento",
      "Trocas alimentares do outono",
      "Organizar porta-comprimidos",
      "Instalar luz noturna",
    ],
  },
  {
    week: 3,
    title: "Proteção",
    color: "from-teal-400 to-teal-600",
    icon: ShieldCheck,
    tasks: [
      "Vacinas pendentes (gripe é prioridade!)",
      "Revisão de medicamentos",
      "Solicitar exame vitamina D",
      "Registrar sinais vitais basais",
      "Salvar histórico vacinal",
    ],
  },
  {
    week: 4,
    title: "Monitoramento",
    color: "from-purple-400 to-purple-600",
    icon: Heart,
    tasks: [
      "Check semanal dos 5 protocolos",
      "Registrar sintomas novos",
      "Avaliar hidratação pela urina",
      "Checar manutenção dos exercícios",
      "Preparar-se para o inverno",
    ],
  },
]

export function ThirtyDayPlan() {
  const [completedTasks, setCompletedTasks] = React.useState<Record<number, Set<number>>>({
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
  })

  const toggleTask = (week: number, taskIndex: number) => {
    const newTasks = { ...completedTasks }
    const weekTasks = new Set(newTasks[week])
    if (weekTasks.has(taskIndex)) {
      weekTasks.delete(taskIndex)
    } else {
      weekTasks.add(taskIndex)
    }
    newTasks[week] = weekTasks
    setCompletedTasks(newTasks)
  }

  const getWeekProgress = (week: number) => {
    const plan = weeklyPlans.find(p => p.week === week)
    if (!plan) return 0
    return (completedTasks[week].size / plan.tasks.length) * 100
  }

  const totalProgress = weeklyPlans.reduce((acc, plan) => {
    return acc + completedTasks[plan.week].size
  }, 0)
  const totalTasks = weeklyPlans.reduce((acc, plan) => acc + plan.tasks.length, 0)
  const overallProgress = (totalProgress / totalTasks) * 100

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-[var(--border)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <StyledIcon icon={Calendar} variant="primary" size="md" />
          <h3 className="text-lg font-semibold text-[var(--foreground)]">
            Plano de 30 Dias do Personal Senior
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <AnimatedCircularProgress
            value={overallProgress}
            size={50}
            strokeWidth={4}
            variant={overallProgress >= 100 ? "success" : "default"}
            showLabel
          />
        </div>
      </div>

      {overallProgress >= 100 && (
        <div className="flex flex-col items-center py-6 mb-6 bg-[var(--success)]/10 rounded-xl">
          <SuccessAnimation size={80} confetti />
          <p className="text-xl font-semibold text-[var(--success)] mt-4">
            Parabéns! Plano completo!
          </p>
          <p className="text-sm text-[var(--foreground-muted)] mt-1">
            Você se tornou um cuidador estratégico.
          </p>
        </div>
      )}

      <FadeInStagger staggerDelay={150}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weeklyPlans.map((plan) => {
            const progress = getWeekProgress(plan.week)
            const isComplete = progress >= 100

            return (
              <FadeInView key={plan.week} direction="up">
                <div className="border border-[var(--border)] rounded-xl overflow-hidden">
                  <div className={cn("p-4 text-white bg-gradient-to-r", plan.color)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Icon icon={plan.icon} size="lg" color="inverse" />
                        </div>
                        <div>
                          <div className="text-sm opacity-80">Semana {plan.week}</div>
                          <div className="font-semibold">{plan.title}</div>
                        </div>
                      </div>
                      {isComplete ? (
                        <SuccessAnimation size={32} duration={400} variant="primary" />
                      ) : (
                        <AnimatedCircularProgress
                          value={progress}
                          size={40}
                          strokeWidth={3}
                          variant="default"
                          showLabel
                        />
                      )}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    {plan.tasks.map((task, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                          completedTasks[plan.week].has(i)
                            ? "bg-[var(--success)]/10"
                            : "hover:bg-[var(--background-subtle)]"
                        )}
                        onClick={() => toggleTask(plan.week, i)}
                      >
                        <AnimatedCheckbox
                          checked={completedTasks[plan.week].has(i)}
                          onCheckedChange={() => toggleTask(plan.week, i)}
                          size="sm"
                          variant="success"
                        />
                        <span className={cn(
                          "text-sm",
                          completedTasks[plan.week].has(i) && "line-through text-[var(--foreground-muted)]"
                        )}>
                          {task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            )
          })}
        </div>
      </FadeInStagger>
    </div>
  )
}

// ============================================
// EMERGENCY ALERT
// ============================================
export function EmergencyAlert() {
  return (
    <AttentionView type="shake" className="inline-block w-full">
      <div className="p-4 bg-[var(--error)]/10 border border-[var(--error)] rounded-xl">
        <div className="flex items-center gap-4">
          <PulseView variant="glow">
            <StyledIcon icon={Ambulance} variant="error" size="lg" />
          </PulseView>
          <div>
            <div className="font-semibold text-[var(--error)] text-lg">
              Confusão mental súbita = EMERGÊNCIA
            </div>
            <div className="flex items-center gap-2 mt-1">
              <Icon icon={Phone} size="sm" color="error" />
              <span className="text-[var(--foreground)]">
                Chame o SAMU imediatamente: <span className="font-bold text-lg">192</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </AttentionView>
  )
}

// ============================================
// PROTOCOL SUMMARY
// ============================================
const protocols = [
  { icon: Droplets, name: "Hidratação", description: "6 ofertas diárias. Meta: 1,5-2 L/dia.", variant: 'info' as const },
  { icon: Salad, name: "Nutrição", description: "Proteína + vitaminas + minerais.", variant: 'success' as const },
  { icon: Footprints, name: "Movimento", description: "15 minutos diários.", variant: 'accent' as const },
  { icon: Syringe, name: "Vacinação", description: "Gripe, pneumo e Covid em dia.", variant: 'warning' as const },
  { icon: Home, name: "Segurança", description: "Ambiente livre de riscos.", variant: 'primary' as const },
]

export function ProtocolSummary() {
  return (
    <div className="p-6 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--success)]/10 rounded-xl border border-[var(--border)]">
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6 text-center">
        Os 5 Protocolos Essenciais
      </h3>

      <FadeInStagger staggerDelay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {protocols.map((protocol, i) => (
            <FadeInView key={i} direction="up" delay={i * 150}>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-3">
                  <StyledIcon icon={protocol.icon} variant={protocol.variant} size="lg" />
                </div>
                <div className="font-semibold text-[var(--foreground)]">{protocol.name}</div>
                <div className="text-xs text-[var(--foreground-muted)] mt-1">
                  {protocol.description}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </FadeInStagger>
    </div>
  )
}

// ============================================
// MAIN GUIDE COMPONENT
// ============================================
export interface OutotonoSeguroGuideProps {
  className?: string
}

export function OutotonoSeguroGuide({ className }: OutotonoSeguroGuideProps) {
  return (
    <div className={cn("space-y-8 max-w-4xl mx-auto p-4", className)}>
      {/* Header */}
      <FadeInView direction="down">
        <div className="text-center py-8">
          <div className="flex justify-center mb-4">
            <StyledIcon icon={ShieldCheck} variant="primary" size="xl" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--primary)]">Outono Seguro</h1>
          <p className="text-[var(--foreground-muted)] mt-2">
            O guia preventivo do personal senior para proteger o familiar idoso
          </p>
        </div>
      </FadeInView>

      {/* Hero Stats */}
      <HeroStatsGrid />

      {/* Emergency Alert */}
      <EmergencyAlert />

      {/* Hydration */}
      <HydrationScheduleCard />

      {/* Nutrition */}
      <NutritionTracker />

      {/* Exercise */}
      <ExerciseTracker />

      {/* Vaccination */}
      <VaccinationCard />

      {/* Safety */}
      <SafetyChecklist />

      {/* 30-Day Plan */}
      <ThirtyDayPlan />

      {/* Protocol Summary */}
      <ProtocolSummary />

      {/* Footer */}
      <FadeInView direction="up" delay={500}>
        <div className="text-center py-8 text-sm text-[var(--foreground-muted)]">
          <p>SmartSenior • Longevidade ativa, autonomia e bem-estar.</p>
          <p className="mt-2">
            Este material foi produzido com base em evidências científicas.
            Não substitui consulta médica.
          </p>
        </div>
      </FadeInView>
    </div>
  )
}

export default OutotonoSeguroGuide
