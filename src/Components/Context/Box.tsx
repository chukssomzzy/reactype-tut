import { useGlobalContext } from './ThemeContext'


const Box = () => {
 const theme = useGlobalContext() 
  return (
      <div style={{backgroundColor:theme.primary.main, color:theme.primary.text}}>Box Theme</div>
  )
}

export default Box
