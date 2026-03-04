import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectOption } from './select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  render: () => (
    <Select placeholder="Selecione uma opção" style={{ width: '250px' }}>
      <SelectOption value="option1">Opção 1</SelectOption>
      <SelectOption value="option2">Opção 2</SelectOption>
      <SelectOption value="option3">Opção 3</SelectOption>
    </Select>
  ),
}

export const WithValue: Story = {
  render: () => (
    <Select defaultValue="option2" style={{ width: '250px' }}>
      <SelectOption value="option1">Opção 1</SelectOption>
      <SelectOption value="option2">Opção 2</SelectOption>
      <SelectOption value="option3">Opção 3</SelectOption>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled defaultValue="option1" style={{ width: '250px' }}>
      <SelectOption value="option1">Opção 1</SelectOption>
      <SelectOption value="option2">Opção 2</SelectOption>
    </Select>
  ),
}

export const Error: Story = {
  render: () => (
    <Select error placeholder="Selecione um estado" style={{ width: '250px' }}>
      <SelectOption value="">Selecione...</SelectOption>
      <SelectOption value="sp">São Paulo</SelectOption>
      <SelectOption value="rj">Rio de Janeiro</SelectOption>
    </Select>
  ),
}

export const States: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
        Estado
      </label>
      <Select placeholder="Selecione seu estado">
        <SelectOption value="ac">Acre</SelectOption>
        <SelectOption value="al">Alagoas</SelectOption>
        <SelectOption value="ap">Amapá</SelectOption>
        <SelectOption value="am">Amazonas</SelectOption>
        <SelectOption value="ba">Bahia</SelectOption>
        <SelectOption value="ce">Ceará</SelectOption>
        <SelectOption value="df">Distrito Federal</SelectOption>
        <SelectOption value="es">Espírito Santo</SelectOption>
        <SelectOption value="go">Goiás</SelectOption>
        <SelectOption value="ma">Maranhão</SelectOption>
        <SelectOption value="mg">Minas Gerais</SelectOption>
        <SelectOption value="ms">Mato Grosso do Sul</SelectOption>
        <SelectOption value="mt">Mato Grosso</SelectOption>
        <SelectOption value="pa">Pará</SelectOption>
        <SelectOption value="pb">Paraíba</SelectOption>
        <SelectOption value="pe">Pernambuco</SelectOption>
        <SelectOption value="pi">Piauí</SelectOption>
        <SelectOption value="pr">Paraná</SelectOption>
        <SelectOption value="rj">Rio de Janeiro</SelectOption>
        <SelectOption value="rn">Rio Grande do Norte</SelectOption>
        <SelectOption value="ro">Rondônia</SelectOption>
        <SelectOption value="rr">Roraima</SelectOption>
        <SelectOption value="rs">Rio Grande do Sul</SelectOption>
        <SelectOption value="sc">Santa Catarina</SelectOption>
        <SelectOption value="se">Sergipe</SelectOption>
        <SelectOption value="sp">São Paulo</SelectOption>
        <SelectOption value="to">Tocantins</SelectOption>
      </Select>
    </div>
  ),
}
