import { AuthUser } from '../../types'
import { useContext, createContext, useState, Dispatch, SetStateAction } from 'react' 


type contextProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null 
    setUser: Dispatch<SetStateAction<AuthUser | null>>
}

 
export const UserContext = createContext<UserContextType | null>({} as AuthUser)

const UserProvider = ({children}: contextProps) => {
       const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider 


export const useUserContext = () => {
    
    return useContext(UserContext)
}




