// we're going to write a 'controlled' form vs an uncontrolled form.

import { useState } from "react"

export default function SimpleForm() {
    const [userName, setUserName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        // do some sort of POST request ect
        console.log(userName)
    }

    function handleChange(event) {
        console.log(event.target.value)
        setUserName(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id='username' name='userName' type='text' onChange={handleChange}/>
            <button type='submit'>submit name!</button>
        </form>
    )
}


// 1. create a simple form.
// 2. on the input element, put an on change event listner in, and write a handleChange function
// (all callback function given to an event listenr get the 'event' object.)
// 3. we'll have a state variable to hold the user input
// 4. we'll update the state every time the user types

// 6. We'll add an even listener to the form element that listens for submit