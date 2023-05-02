import { STORAGE_KEY } from '@/common/constants'
import { TLayoutProps } from '@/common/types'
import Loading from '@/components/Common/Loading'
import { Header } from '@/components/Layouts/Header/Header'
import { Navbar } from '@/components/Layouts/NavBar/NavBar'
import { auth } from '@/libs/firebase'
import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { Suspense, useCallback, useState } from 'react'

const MainLayout = ({ children }: TLayoutProps) => {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const router = useRouter()

  const handleDrawerOpen = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const handleDrawerClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const logout = useCallback(() => {
    signOut(auth).then(() => {
      sessionStorage.removeItem(STORAGE_KEY.AUTH_TOKEN);
      router.push('/')
    }).catch((error) => {
      console.error(error)
    })
  }, [router])

  return (
    <>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} onLogout={logout} />
      <div style={{ display: 'flex' }}>
        <Navbar open={open} handleDrawerClose={handleDrawerClose} theme={theme} />
        <BodyStyled>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </BodyStyled>
      </div>
    </>
  )
}

const BodyStyled = styled.div`
  margin-top: 65px;
  padding: 16px;
  width: 100%;
  min-height: 100vh;
`

export default MainLayout
