import { useState } from "react"

// use state is a function provided by react
// it takes as its argument what we want the intial value of the varaible to be

export default function App() {
  console.log('Component rendering....')
  
  // use state will *always* return an array with two things inside it -> a variable, and a function to update that variable.
  let [count, setCount] = useState(0)

  // we should never directly modify the 'count' value - if we want to change it, we have to use the provided 'set' function.

  function handleClick() {
    setCount(count + 1)
    console.log(count)
  }
  return (
    <main>
      <button onClick={handleClick}>{count}</button>
    </main>
  )
}





// let [myFav, myOtherFav] = ['Darcy', 'Charlie']