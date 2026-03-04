import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './calendar'
import * as React from 'react'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  args: {},
}

export const WithSelectedDate: Story = {
  args: {
    defaultValue: new Date(),
  },
}

export const WithMinMaxDate: Story = {
  args: {
    minDate: new Date(),
    maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
  },
}

export const WithDisabledDates: Story = {
  args: {
    disabledDates: [
      new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      new Date(Date.now() + 8 * 24 * 60 * 60 * 1000),
    ],
  },
}

export const WithHighlightedDates: Story = {
  args: {
    highlightedDates: [
      new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    ],
  },
}

export const MondayStart: Story = {
  args: {
    weekStartsOn: 1,
  },
}

export const EnglishLocale: Story = {
  args: {
    locale: 'en-US',
  },
}

export const HideOutsideDays: Story = {
  args: {
    showOutsideDays: false,
  },
}

export const Controlled: Story = {
  render: function ControlledCalendar() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <div className="space-y-4">
        <Calendar value={date} onChange={setDate} />
        <p className="text-center text-sm text-[var(--foreground-muted)]">
          Data selecionada: {date?.toLocaleDateString('pt-BR') || 'Nenhuma'}
        </p>
      </div>
    )
  },
}

export const DateRangePicker: Story = {
  render: function DateRange() {
    const [startDate, setStartDate] = React.useState<Date | undefined>()
    const [endDate, setEndDate] = React.useState<Date | undefined>()
    const [selecting, setSelecting] = React.useState<'start' | 'end'>('start')

    const handleDateChange = (date: Date) => {
      if (selecting === 'start') {
        setStartDate(date)
        setEndDate(undefined)
        setSelecting('end')
      } else {
        if (startDate && date >= startDate) {
          setEndDate(date)
          setSelecting('start')
        } else {
          setStartDate(date)
          setEndDate(undefined)
        }
      }
    }

    const getHighlightedDates = () => {
      if (!startDate || !endDate) return startDate ? [startDate] : []
      const dates: Date[] = []
      const current = new Date(startDate)
      while (current <= endDate) {
        dates.push(new Date(current))
        current.setDate(current.getDate() + 1)
      }
      return dates
    }

    return (
      <div className="space-y-4">
        <Calendar
          value={selecting === 'start' ? startDate : endDate}
          onChange={handleDateChange}
          highlightedDates={getHighlightedDates()}
        />
        <div className="text-center text-sm text-[var(--foreground-muted)] space-y-1">
          <p>Início: {startDate?.toLocaleDateString('pt-BR') || 'Selecione'}</p>
          <p>Fim: {endDate?.toLocaleDateString('pt-BR') || 'Selecione'}</p>
        </div>
      </div>
    )
  },
}

export const EventCalendar: Story = {
  render: function EventCalendar() {
    const events = [
      { date: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), title: 'Reunião de equipe' },
      { date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), title: 'Consulta médica' },
      { date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), title: 'Aniversário' },
      { date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), title: 'Dentista' },
    ]

    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>()

    const selectedEvent = selectedDate
      ? events.find(
          (e) =>
            e.date.getDate() === selectedDate.getDate() &&
            e.date.getMonth() === selectedDate.getMonth()
        )
      : undefined

    return (
      <div className="space-y-4">
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          highlightedDates={events.map((e) => e.date)}
        />
        {selectedEvent ? (
          <div className="p-3 bg-[var(--accent)] rounded-lg text-center">
            <p className="text-sm font-medium text-[var(--foreground)]">
              {selectedEvent.title}
            </p>
            <p className="text-xs text-[var(--foreground-muted)]">
              {selectedEvent.date.toLocaleDateString('pt-BR')}
            </p>
          </div>
        ) : (
          <p className="text-center text-sm text-[var(--foreground-muted)]">
            Selecione uma data com evento (destacada)
          </p>
        )}
      </div>
    )
  },
}
