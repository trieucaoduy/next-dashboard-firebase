import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactNode } from 'react'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'

export type TLayoutProps = {
  children: ReactNode
}

export type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout
}

export type TNextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode
}

export interface IAppBarProps extends MuiAppBarProps {
  open?: boolean
}
