import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './file-upload'

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: { style: { width: '400px' } },
}

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
    style: { width: '400px' },
  },
}

export const Multiple: Story = {
  args: {
    multiple: true,
    maxFiles: 5,
    style: { width: '400px' },
  },
}

export const PDFOnly: Story = {
  args: {
    accept: '.pdf',
    style: { width: '400px' },
  },
}

export const SmallSize: Story = {
  args: {
    maxSize: 1 * 1024 * 1024, // 1MB
    style: { width: '400px' },
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    style: { width: '400px' },
  },
}

export const WithCallbacks: Story = {
  args: {
    onFilesSelected: (files) => console.log('Arquivos selecionados:', files),
    onError: (error) => console.log('Erro:', error),
    style: { width: '400px' },
  },
}
