export default function Button() {
    // passing aruguments to the cbf

    function handleClick(user) {
        console.log(`hello, ${user}`)
    }

    // if our handleClick function takes an arugment, we need to wrap it in an anon function so it doesn't invoke immediatly. 
    return (
        <button onClick={() => {
            handleClick('Sam')
        }}>
            Click me!
        </button>
    )
}

// in vanilla
/// document.getElementByID - get our element
// element.addEventlistener('click', callbackFunction)

// a callback function is a function we pass as an arugment to another function.

// an event to listen for and the function to run when the event happens.


// in react
// we use onClick / onSubmit / onChange
// and we give it the function we want it to run!