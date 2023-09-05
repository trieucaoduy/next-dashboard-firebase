import { LocalLibrary } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'

const NavbarMenuItem = (props: any) => {
  const { icon, label, url, open } = props
  const router = useRouter()

  const goTo = (url: string) => {
    router.push(url)
  }

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5
        }}
        onClick={() => goTo(url)}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center'
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}

export default NavbarMenuItem
