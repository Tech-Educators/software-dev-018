const form = document.getElementById('form')


// listening for a submit event
// then the callback funciton
form.addEventListener('submit', function(event) {
    // to prevent the page refreshing
    event.preventDefault()
    // FormData is built into Javascript 
    // needs to take a formHTML node as it's argument
    // it's going to construct a new 'FormData' object for us.s
    const formData = new FormData(form)
    // transform it into a normal object

    // 'Hey please create me a normal object from the FormData' 
    const data = Object.fromEntries(formData)


    // our data is going to be a collection of key-value pairs
    // the key comes from the 'name' attribute on the input
    // the value is whatever the user typed in.
    console.log(data)
    // {
    //     userName: 'Sam',
    //     userPassword: 'hunter2'
    // }
}) 


// const array = new Array(3)
// const array2 = ['','','']