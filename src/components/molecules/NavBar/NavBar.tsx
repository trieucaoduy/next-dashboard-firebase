import * as React from 'react'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { DrawerStyled, DrawerHeaderStyled } from './styles'
import NavbarMenuItem from '@/components/atoms/NavbarMenuItem'
import { BookIcon, DataIcon, EditIcon, HomeIcon } from '@/components/atoms/Icons'

const propsIcon = {
  width: '1.5em',
  height: '1.5em'
}

const listMenuItem = [
  { label: 'Home', icon: <HomeIcon {...propsIcon} />, path: '/' },
  { label: 'Create', icon: <EditIcon {...propsIcon} />, path: '/create' },
  { label: 'Practice', icon: <BookIcon {...propsIcon} />, path: '/practice' },
  { label: 'Collection', icon: <DataIcon {...propsIcon} />, path: '/collection' }
]

export const Navbar = (props: any) => {
  const { handleDrawerClose, open, theme } = props

  return (
    <DrawerStyled variant='permanent' open={open}>
      <DrawerHeaderStyled>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeaderStyled>
      <Divider />
      <List>
        {listMenuItem.map((item) => (
          <NavbarMenuItem label={item.label} url={item.path} icon={item.icon} open={open} />
        ))}
      </List>
    </DrawerStyled>
  )
}
