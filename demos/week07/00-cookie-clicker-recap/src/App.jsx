import './App.css'
import { useState, useEffect} from 'react'
import CookieDisplay from './components/CookieDisplay'
import Shop from './components/Shop'

const defaultState = {
  cookies: 1000,
  cps: 1,
  purchasedItems: []
}

export default function App() {
  // use State always returns an array of two thigns
  // the value and a function to update the value
  // so we are destructuring the returned array and assigning those two things to variables.
  const [state, setState ] = useState(defaultState)

  // Update our cookie count each second

  // use Effect takes a funciton as it's first argument
  // it takes a dependency array as the second argument.

  // if the array is empty the effect will run the first time the component loads
  // if it has a variable insdie it, the effect will run whenever the variables changes
  // if you don't provide an array, the effect will run whenever the component re-renders
  useEffect(() => {

    const interval = setInterval(() => {

      // I need to update my state every second
      // note the brackets carefully here
      // im using ()'s to return across multiple lines
      // and I am returning an object {} // line 33
      // I'm giving setState a function to run so we always have the most uptodate value for currentState
      setState((currentState) => (
        // copying the fields of the state object
        // and only updateing the properties we want to
        {
          ...currentState,
          cookies: currentState.cookies + currentState.cps
        }
      ))

    }, 1000) 

    // this will run when our component un=mounts
    return () => {
      clearInterval(interval)
    }

  }, []) 

 
  return (
    <section>
      <h2>Cookie Clickr</h2>
      <CookieDisplay state={state} setState={setState}/>
      <Shop state={state} setState={setState} />
    </section>
  )
}


// 1. we'll start with setting up our cookies so they're available.
// 2. Set up our interval aswell

// learned about the spread operator
// and using an object as state