
// retrive the DOM node (element) I'd like to work with.

let myPTag = document.querySelector('p')

console.log(myPTag.textContent)

// this will show you all the possible properties you can change
console.dir(myPTag)

// there are many many 'properties' that we can change about the p tag. 
myPTag.textContent = `I'm a wizard of javascript!`

// we can even use javascript to completely change the type of the element!
myPTag.outerHTML = `<h1>This is now an h1 </h1>`


// LETS create a brand new HTML element!


// tell it what element to make 
// just feed it whatevr tag you want to make, in the form of a string
let myNewPTag = document.createElement('p')

// we call this dot notation - to modify the textContent property. 
myNewPTag.textContent = 'You guys are smart'

document.body.appendChild(myNewPTag)




let userName = prompt('What is your name?')

// created the element
let userGreeting = document.createElement('marquee')

if (userName === 'Sam') {
    userGreeting.textContent = 'Hellooo Sam, nice to see you!!!'
    // directly modify css rules
    userGreeting.style.color = 'blue'
    // or add a class to the element, then write the class in your css. 
    userGreeting.classList.add('fancy')
} else {
    userGreeting.textContent = `You shouldnt be here! This is my website no other people allowed`

    userGreeting.style.color = 'red'

    userGreeting.style.fontSize = `64px`
}


// add elemnt to html 

document.body.appendChild(userGreeting)


// we can also get an element by it's id 

const removeMe = document.getElementById('remove-me')

// removeMe.remove()