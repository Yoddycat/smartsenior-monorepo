import type { Meta, StoryObj } from '@storybook/react'
import { List, ListItem, ListItemIcon, ListItemContent, ListItemTitle, ListItemDescription, ListItemAction } from './list'
import { Button } from './button'

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
}

export default meta
type Story = StoryObj<typeof List>

export const Default: Story = {
  render: () => (
    <List style={{ width: '350px' }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 1</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 2</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 3</ListItemTitle>
        </ListItemContent>
      </ListItem>
    </List>
  ),
}

export const Bordered: Story = {
  render: () => (
    <List variant="bordered" style={{ width: '350px' }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 1</ListItemTitle>
          <ListItemDescription>Descrição do item 1</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 2</ListItemTitle>
          <ListItemDescription>Descrição do item 2</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Item 3</ListItemTitle>
          <ListItemDescription>Descrição do item 3</ListItemDescription>
        </ListItemContent>
      </ListItem>
    </List>
  ),
}

export const Divided: Story = {
  render: () => (
    <List variant="divided" style={{ width: '350px' }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Configurações</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Privacidade</ListItemTitle>
        </ListItemContent>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Notificações</ListItemTitle>
        </ListItemContent>
      </ListItem>
    </List>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <List variant="bordered" style={{ width: '350px' }}>
      <ListItem interactive>
        <ListItemIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>Perfil</ListItemTitle>
          <ListItemDescription>Gerencie suas informações</ListItemDescription>
        </ListItemContent>
      </ListItem>
      <ListItem interactive>
        <ListItemIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </ListItemIcon>
        <ListItemContent>
          <ListItemTitle>Configurações</ListItemTitle>
          <ListItemDescription>Preferências do sistema</ListItemDescription>
        </ListItemContent>
      </ListItem>
    </List>
  ),
}

export const WithActions: Story = {
  render: () => (
    <List variant="bordered" style={{ width: '400px' }}>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Documento.pdf</ListItemTitle>
          <ListItemDescription>2.4 MB • Enviado há 2 dias</ListItemDescription>
        </ListItemContent>
        <ListItemAction>
          <Button variant="ghost" size="sm">Download</Button>
        </ListItemAction>
      </ListItem>
      <ListItem>
        <ListItemContent>
          <ListItemTitle>Imagem.png</ListItemTitle>
          <ListItemDescription>1.2 MB • Enviado há 5 dias</ListItemDescription>
        </ListItemContent>
        <ListItemAction>
          <Button variant="ghost" size="sm">Download</Button>
        </ListItemAction>
      </ListItem>
    </List>
  ),
}
