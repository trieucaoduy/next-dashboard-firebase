import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBarStyled } from './styles'
import { Avatar, Box, Menu, MenuItem, Tooltip } from '@mui/material'

const pannels = ['Profile', 'Account', 'Dashboard', 'Logout']

export const Header = (props: any) => {
  const { open, handleDrawerOpen, onLogout } = props
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const userAvatar = 'https://mui.com/static/images/avatar/2.jpg'

  return (
    <AppBarStyled position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' })
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1 }}>
          VOCABU APP
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='User pannels'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='Remy Sharp' src={userAvatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem>
              <Typography textAlign='center'>Profile</Typography>
            </MenuItem>
            <MenuItem onClick={onLogout}>
              <Typography textAlign='center'>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBarStyled>
  )
}
