import {useState, useEffect} from "react"
import Shop from "./components/Shop"

export default function App() {
  const [cookies, setCookies] = useState(0)

  // use effect with an empty dep array says 'only run this code the *first* time the component runs, and don't run it again when the component re-renders (re-runs)
  useEffect(() => {
    const id = setInterval(() => {
      // functioncal state update means we make sure to get the current values of cookies not whatever it was when the interval was first set up (the problem with setCookies(cookies + 1 ))
      setCookies((prevCookies) => prevCookies + 1)
    }, 1000)

    // react runs our code twice in devleopment mode, so we nee dto tell it that when the component 'unmounts' (stopped running it) we need to clear the interval.
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <section>
      <div>
        <p>Cookies: {cookies}</p>
      </div>
      <img src="https://media.istockphoto.com/id/517109442/photo/chocolate-chip-cookie-isolated.jpg?s=612x612&w=0&k=20&c=RgZOYwzVRTXnIBy8zSkXK-wJfNBy9w023UGULkbH_VE=" alt="an expensive cookie" onClick={() => setCookies(cookies + 1)} />
      <Shop />
    </section>
  )
}


// get cookies on the page
// and have a button so when we click on the cookies it goes up by one

// i need to set up an interval so my cookies go up by one each second


// shop stuff worry about later.