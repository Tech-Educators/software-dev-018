const form = document.getElementById('form')

const form2 = document.getElementById('form2')
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


function selectNextImage() {
    2 +                            0
    currentImageIndex = (currentImageIndex + 1) % images.length
}

function lastNextImage() {

    2// currentImageIndex
    2 // last index
    3 // length of images
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length
}

4 % 5  // 4

5 % 10 // 5

6 % 10 // 6 0 r6

// 4 left over
10 % 6 // 4 1r4

10 % 8 // 2
