// fetch an element

const colorInput = document.getElementById('color-input')

// I want to know when an event happens on the color input
// we'll listen for a change event

// how do I listen for an event? addEventListener()

// the event type in a string
// the function to to run when the event happens


//1 declare a function

function handleChange() {
    console.log('The change happened')
    console.dir(colorInput.value)
    // change the background color of the body element
    //to make the colorInput value from the user
    document.body.style.backgroundColor = colorInput.value
}

// we want to reference the function to run, not invoke it

colorInput.addEventListener('change', handleChange)
