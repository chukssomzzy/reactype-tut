import Login from './Login'
import { ProfileProps } from './Profile.tsx'

type PrivateProps = {
    isLoggedIn: boolean 
    Component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, Component }: PrivateProps) => {

    if (isLoggedIn) {
        return <Component name='somzzy'/>
    } 
    return <Login />
}
