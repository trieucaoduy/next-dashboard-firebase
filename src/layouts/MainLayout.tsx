import { STORAGE_KEY } from '@/common/constants'
import { TLayoutProps } from '@/common/types'
import Loading from '@/components/atoms/Loading'
import { Header } from '@/components/molecules/Header/Header'
import HeaderV2 from '@/components/molecules/Header/HeaderV2'
import { Navbar } from '@/components/molecules/NavBar/NavBar'
import NavbarV2 from '@/components/molecules/NavBar/NavbarV2'
import { auth } from '@/libs/firebase'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { Suspense, useCallback, useState } from 'react'

const MainLayout = ({ children }: TLayoutProps) => {
  const [open, setOpen] = useState(true)
  const theme = useTheme()
  const router = useRouter()

  const handleDrawerOpen = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const handleDrawerClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const logout = useCallback(() => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem(STORAGE_KEY.AUTH_TOKEN)
        router.push('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }, [router])

  return (
    <div className='container mx-auto min-h-screen'>
      {/* <Header open={open} handleDrawerOpen={handleDrawerOpen} onLogout={logout} /> */}
      <HeaderV2 />
      <div style={{ display: 'flex', minHeight: '80vh', gap: '20px' }}>
        {/* <Navbar open={open} handleDrawerClose={handleDrawerClose} theme={theme} /> */}
        <NavbarV2 />
        <BodyStyled>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </BodyStyled>
      </div>
    </div>
  )
}

const BodyStyled = styled.div`
  padding: 16px;
  width: 100%;
  background: #f3f5fc;
  border-radius: 25px;
`

export default MainLayout
