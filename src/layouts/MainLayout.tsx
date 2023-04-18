import { TLayoutProps } from '@/common/types';
import { Header } from '@/components/Layouts/Header/Header'
import { Navbar } from '@/components/Layouts/NavBar/NavBar';
import { useTheme } from '@emotion/react'
import { useCallback, useState } from 'react'

export default function MainLayout({ children }: TLayoutProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme()

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen])

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, [setOpen])

  return (
    <>
      <Header 
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Navbar
        open={open}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
      />
      {children}
    </>
  )
}
