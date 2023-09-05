import { NextRouter } from 'next/router'

export const checkMatchesRoute = (router: NextRouter, routes: string | string[]) => {
  const ROOT_PATH = router.pathname.split('/')[1] || ''
  console.log({ ROOT_PATH, routes })
  return routes.includes(`/${ROOT_PATH}`)
}

export const handleLocalStorage = (type: string, itemName: string, data?: any) => {
  switch (type) {
    case 'GET':
      const getItem = localStorage.getItem(itemName)
      return getItem ? JSON.parse(getItem) : null
    case 'SET':
      return localStorage.setItem(itemName, JSON.stringify(data))
    case 'REMOVE':
      return localStorage.removeItem(itemName)
  }
}
