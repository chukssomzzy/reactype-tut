 import { useState } from 'react'

type Props = {}

const Loggin = (props: Props) => {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const  handleLogin = ()=> setIsLoggedIn(true)
   const handleLogout = () => setIsLoggedIn(false)

  return (
    <div>
        <button type="button" onClick={handleLogin}>Log in</button>
        <button type="button" onClick={handleLogout}>Log out</button>
        {
            isLoggedIn ? " You are logged" : "you are logout"  
        }
    </div>
  )
}

export default Loggin
