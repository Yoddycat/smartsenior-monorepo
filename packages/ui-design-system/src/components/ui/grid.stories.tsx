import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem } from './grid'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
}

export default meta
type Story = StoryObj<typeof Grid>

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '1rem', background: 'var(--background-muted)', borderRadius: '8px', textAlign: 'center' }}>
    {children}
  </div>
)

export const TwoColumns: Story = {
  args: {
    cols: 2,
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </>
    ),
  },
}

export const ThreeColumns: Story = {
  args: {
    cols: 3,
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </>
    ),
  },
}

export const FourColumns: Story = {
  args: {
    cols: 4,
    children: (
      <>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </>
    ),
  },
}

export const WithGaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>gap="sm"</p>
        <Grid cols={3} gap="sm">
          <Box>1</Box><Box>2</Box><Box>3</Box>
        </Grid>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>gap="md"</p>
        <Grid cols={3} gap="md">
          <Box>1</Box><Box>2</Box><Box>3</Box>
        </Grid>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem' }}>gap="lg"</p>
        <Grid cols={3} gap="lg">
          <Box>1</Box><Box>2</Box><Box>3</Box>
        </Grid>
      </div>
    </div>
  ),
}

export const WithSpans: Story = {
  render: () => (
    <Grid cols={4} gap="md">
      <GridItem colSpan={2}><Box>2 colunas</Box></GridItem>
      <Box>1</Box>
      <Box>1</Box>
      <Box>1</Box>
      <GridItem colSpan={3}><Box>3 colunas</Box></GridItem>
      <GridItem colSpan="full"><Box>Linha inteira</Box></GridItem>
    </Grid>
  ),
}
