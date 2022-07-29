import './App.css';
/*import Greet from './Components/Greet'
import Person from './Components/person'
import PersonList from './Components/PersonList'
 import Status from './Components/Status'
 import Heading from './Components/Heading'
 import Somzzy from './Components/Somzzy'
 import Button from './Components/Button'
 import Input from './Components/Input'  */
/* import  ThemeProvider from './Components/Context/ThemeContext'
 import Box from './Components/Context/Box'
 import UserProvider from './Components/Context/UserContext'
 import Users from './Components/Context/Users'
 import { Private } from './Components/Auth/Private'
 import Profile from './Components/Auth/Profile';
 import List from './Components/Generics/lists'
 import RandomNumber from './Components/Restriction/RandomNumber'
  import Toast from './Components/TemplateLiterals/Toast'
  import CustomButton from './Components/Html/Button'
  import Input from './Components/Html/Input'  */
 import Text from './Components/Polymorphic/Text'
function App() {

    /*const personName = {
        first: 'Bruce',
        name: 'Wayne'
    }   

     const nameList = [
        {
            first: 'somzzy',
            last: 'chukssomzzy'
        },
        {
            first: 'Bruce',
            last: 'wayne'
        }, 
        {
            first: 'Crake',
            last: 'Kent'
        }
    ]

    const status = 'loading'
    const handleClick = (e) =>{
         console.log(e)
    }
                         
    iiconst handleChange = (e) =>{
           console.log(e)
           }  */
  return (
    <div >
          <Text as='h1' size="md">Heading</Text>
          <Text as='p' size="lg">Paragraph </Text>
          <Text as='label' size="sm" color='secondary' >Label</Text>
        {/* <Toast position='center'/>
        <CustomButton variant='primary' onClick={()=> console.log('primary')} > 
        click
        </CustomButton>
        <Input type='text'>
            Js is fun typescript us mad
            </Input>
         <List items={['somzzy','chukssomzzy','Emmanuel']}
              onClick={(item)=>console.log(item)}
        />
           <ThemeProvider>
                <Box />
            </ThemeProvider>
        <UserProvider>
            <Users />
        </UserProvider>
        <Private isLoggedIn={true} Component={Profile}/>
        <RandomNumber value={10} isPositive />
        <Container />
        <Button handleClick={handleClick}/>
          <Input value=' ' handleChange={handleChange} />
        <Status status= {status}/>
        <Heading>Placeholder text</Heading>
        <Somzzy>
        <Heading>Somzzy is more talented than leonardo Dicpario</Heading>
        </Somzzy>
        <Greet name="somzzy" messageCount={10} isLogIn={false}/>
        <Person personName={personName}/>
        <PersonList  names={nameList}/>  */}
    </div>
  );
}                    

export default App;
