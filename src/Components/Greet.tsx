
type Props = {
    name: string,
    messageCount: number, 
    isLogIn: boolean
}

const Greet = ({name, messageCount, isLogIn} : Props) => {
  return (
    <div>
        <h2>
            {
                isLogIn ? `Welcome ${name}! You have ${messageCount} unread messages` : `pls login to view messages`
            }
        </h2>
    </div>
  )
}

export default Greet
