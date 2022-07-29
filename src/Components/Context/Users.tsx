
 import { useUserContext } from './UserContext'




const Loggin = () => {
    const { user, setUser} = useUserContext()
   const  handleLogin = ()=> {
       if(!user) {
         setUser({
             name: 'somzzy',
             email: 'chukssomzzy@gmail.com'
         })  
       }
   }
   const handleLogout = () => {
       if(user){
           setUser(null)
       }
   }

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
