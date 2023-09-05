import Loading from '@/components/atoms/Loading'
import { ReactNode, Suspense } from 'react'

type TLayoutProps = {
  children: ReactNode
}

const BasicLayout = ({ children }: TLayoutProps) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default BasicLayout
