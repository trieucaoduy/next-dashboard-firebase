import React, { useContext } from 'react'

interface ILoadingContext {
  isLoading: boolean
}

const initialState = {
  isLoading: false
}

export const LoadingContext = React.createContext<ILoadingContext>(initialState)

export const useLoading = () => useContext(LoadingContext)
