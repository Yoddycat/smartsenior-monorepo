import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './file-upload'

const meta: Meta<typeof FileUpload> = {
  title: 'Components/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: {},
}

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
  },
}

export const Multiple: Story = {
  args: {
    multiple: true,
    maxFiles: 5,
  },
}

export const PDFOnly: Story = {
  args: {
    accept: '.pdf',
  },
}

export const SmallSize: Story = {
  args: {
    maxSize: 1 * 1024 * 1024, // 1MB
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithCallbacks: Story = {
  args: {
    onFilesSelected: (files) => console.log('Arquivos selecionados:', files),
    onError: (error) => console.log('Erro:', error),
  },
}
