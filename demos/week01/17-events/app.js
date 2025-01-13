// Events are actions the user might take while using your website

// for example, the might click on an image or a button -> they could hover over some text, or they could scroll the webpage.

// Javascript allows us to 'listen' for these events to happen.


// we need to get the elmeent we want to listen for the event happening on.

// store my button information
const button = document.querySelector('button')

// 2. all html elements have a function avaible to them called 'addEventListener'

// addEventListener is a function that takes two arguments 

// first argument - What even do we want to listen for, in the form of a string.

// second argument - a function
// a function we want to run when that click happens

function handleClick() {
    console.log('Hello, I was clicked!')
}

// what to listen for, what to do when the event happens.
// correct
// make sure not to add parenthesis at the end.
button.addEventListener('click', handleClick)

// incorrect
// button.addEventListener('click', handleClick())


// more complext example

const colorButton = document.getElementById(`color-button`)

// the event - click 
// the function we want to hapen that event occurs

function changeBackground(color) {
    document.body.style.backgroundColor = color
}

// I'm going to give the event listner an anonymous function as its second argument
function wrapper() {
    changeBackground('red')
}

colorButton.addEventListener('click', wrapper)


colorButton.addEventListener('click', function() {
    changeBackground('red')
})

