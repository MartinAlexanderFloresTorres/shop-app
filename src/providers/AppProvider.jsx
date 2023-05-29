import { useLocation } from 'react-router-dom'
import { createContext, useEffect } from 'react'

export const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

export default AppProvider
