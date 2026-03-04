import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
  },
}

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(15)
    return <Pagination currentPage={page} totalPages={50} onPageChange={setPage} />
  },
}

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    return <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
  },
}

export const NoFirstLast: Story = {
  render: () => {
    const [page, setPage] = useState(5)
    return (
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={setPage}
        showFirstLast={false}
      />
    )
  },
}

export const MoreSiblings: Story = {
  render: () => {
    const [page, setPage] = useState(10)
    return (
      <Pagination
        currentPage={page}
        totalPages={20}
        onPageChange={setPage}
        siblingCount={2}
      />
    )
  },
}
