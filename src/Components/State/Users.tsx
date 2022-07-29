
 import { useState } from 'react'
  import { AuthUser } from '../../types'


type Props = {
    user: AuthUser
}

const Loggin = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
   const  handleLogin = ()=> setIsLoggedIn({
       name: 'somzzy',
       email: 'chukssomzzy19@gmail.com'
   })
   const handleLogout = () => setIsLoggedIn(null)

  return (
    <div>
        <button type="button" onClick={handleLogin}>Log in</button>
        <button type="button" onClick={handleLogout}>Log out</button>
        <div>{user?.name}</div>
        <div>{user?.email}</div>
    </div>
  )
}

export default Loggin
