import { ROUTER } from '@/common/constants'
import { TAppPropsWithLayout } from '@/common/types'
import BasicLayout from '@/layouts/BasicLayout'
import MainLayout from '@/layouts/MainLayout'
import { checkMatchesRoute, handleLocalStorage } from '@/utils'
import { useRouter } from 'next/router'
import '@/styles/globals.scss'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/libs/firebase'

const App = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  const isAuthPage = checkMatchesRoute(router, ROUTER.AUTH)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        handleLocalStorage('SET', 'user-data', user);
        console.log(user)
        router.push('/')
      } else {
        router.push('/auth/signin')
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const Layout = () => {
    return isAuthPage ? (
      <BasicLayout>{getLayout(<Component {...pageProps} />)}</BasicLayout>
    ) : (
      <MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
    )
  }

  return (
    <main>
      <Layout />
    </main>
  )
}

export default App
