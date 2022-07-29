import { createContext,useContext } from 'react'
import {theme} from './Theme'

type Props = {
    children: React.ReactNode
}

const ThemeContext = createContext(theme)


const ThemeProvider = ({children}: Props) => {
  return (
      <ThemeContext.Provider value={theme}>
          {children}
      </ThemeContext.Provider>
  )
}

export default ThemeProvider


export const useGlobalContext = ()=>{
    return useContext(ThemeContext)
}
