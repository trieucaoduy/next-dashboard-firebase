import { Logo } from '@/components/atoms/Icons'
import { Box, Tooltip, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'

const HeaderV2 = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const userAvatar = 'https://mui.com/static/images/avatar/2.jpg'

  const onLogout = () => {}

  return (
    <div className='pt-5'>
      <div className='c-header__wrapper flex mb-5 p-3'>
        <div className='flex items-center w-1/5'>
          <div className='rounded-full p-3' style={{ boxShadow: '0 5px 25px 1px #ddd' }}>
            <Logo />
          </div>
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex-1'></div>
          <Box>
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
        </div>
      </div>
    </div>
  )
}

export default HeaderV2
