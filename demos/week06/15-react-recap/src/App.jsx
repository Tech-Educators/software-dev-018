// its a library for building UI's

import GreetUser from "./components/GreetUser"

// in react we create special functions call 'components'

// a component is a function that returns jsx. Components should be named with capital letters

// jsx is fake html (javascript sytax extension) 

// JSX expressions must have one parent element.

function ExampleComponent() {
  // we uses the parenthesis to return across multiple lines
  return (
    <div></div>
  )
}


// lets talk about props

export default function App() {

  function handleClick() {
    console.log('Ive been clicked!')
  }
  return (
    <main>
      {/* here I'll give GreetUser props like I give a regular function arguments */}
      {/* we pass arguments in the same way that we wrote attributes in HTML */}
      <GreetUser name='Sam' userLocation='Liverpool' handleClick={handleClick}/>
    </main>
  )
}

// how to setup passing props. 

// function App2() {
//   // calling greet and giving it an argument of {name: 'Sam'}
//   Greet({name: 'Sam'})
//   return `Hello`
// }
// giving greet a parameter 
// im giving green an argument of an object
// so i can destructure that incoming argument in my function parenthesis
// function Greet({name}) {
//   console.log(`Hello ${name}`)
// }
