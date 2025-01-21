//1. Get my element into my javascript?
const form = document.getElementById('form')


// // the event object is automatically passed to the callback function of addEventListner
// function handleSubmit(event) {
//     // prevent the default behaviour of a form
//     event.preventDefault()
//     console.dir(event.target[0].value) // Sam
//     console.dir(event.target)
//     // event.target[name attribute of the input is].value
//     console.log(event.target.userName.value) // Sam
// }

// form.addEventListener('submit', handleSubmit)



// listening for the submit event to happen - user clicks the submit button or hits return.
// any callback function given to addEventListner will always get the event Object
form.addEventListener('submit', function(event) {
    // prevents the page from refreshing
    event.preventDefault()
    console.dir(event)
    console.log(event.target.userName.value)
    console.log(event.target.userPassword.value)
})


// function handleSubmit(event) {
//     event.preventDefault()
//     console.log('Hi')
// }

// form.addEventListener('submit', handleSubmit)