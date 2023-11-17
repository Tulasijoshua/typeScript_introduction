import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Input from './components/Input'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Practice from './components/Practice'
import Practice2 from './components/Practice2'
import Status from './components/Status'
import Counter from './components/state/Counter'
import LoggedIn from './components/state/LoggedIn'
import User from './components/state/User'

function App() {
  const personName = {
    first: 'Joshua',
    last: 'Tulasi',
  }

  const nameList = [
    {
      first: 'Emmanuel',
      last: 'Tulasi',
    },
    {
      first: 'Isaac',
      last: 'Hottor',
    },
    {
      first: 'Matilda',
      last: 'Donkor',
    },
  ]

  const myNameList = [
    {
      firstName: 'Joshua',
      lastName: "Mbawini"
    },
    {
      firstName: 'Isaac',
      lastName: "Kofi"
    },
    {
      firstName: 'Job',
      lastName: "Boahen"
    },
    {
      firstName: 'Nuru',
      lastName: "Musah"
    },
  ]

  return (
    <>
      {/* <Greet name="Adjei" messageCount={20} isLoggedIn={true} /> */}
      <Person name={personName} />
      {/* <PersonList names={nameList} />  */}
      <Practice first='Joshua' last='Tulasi' />
      {/* <Status status='success' /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar> */}
      {/* <Greet name='Joshua' isLoggedIn={true} /> */}
      {/* <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }} /> */}
      {/* <Input value='' handleChange={event => console.log(event)} /> */}
      {/* <Container styles={{ border: '1px solid black', padding: '1rem'}} /> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}
    </>
  )
}

export default App
