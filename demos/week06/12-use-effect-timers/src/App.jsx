import {useState, useEffect} from "react"

export default function App() {
  const [cookies, setCookies] = useState(100)


  // interval needs to be inside a useEffect, sp it's only set up one.
  useEffect(() => {
    console.log('Effect runnning...')
    const id = setInterval(() => {
      console.log('Running intervall....')
      // if the state variable relys on the previous value of that state variable, use the functional update
      setCookies(cookies => cookies + 1)

      // if it doessn't, like when we fetch data, there is no nead for the state update.
    },1000) 

    // this returned function from the useEffect is run when the component 'unmounts' 
    return () => {
      clearInterval(id)
    }
  },[]) 

  return (
    <p>{cookies}</p>
  )
}