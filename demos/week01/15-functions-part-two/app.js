// // 1. Get our tag

// // If we have multiple it will select the first one it finds
// // document.querySelector('p')
// // document.querySelectorAll('.cool-text')
// // store it in a variable
const myPTag = document.getElementById('myPTag')



// a function declaration
// written my spell
function sayItsFriday() {
    console.log('Its friday!')
}

// here's how we invoke it
// name of the function folled by parenthesis
sayItsFriday()

console.log()

// let myNumber = 1
// let myNumber2 = 2


// I've declared by function with a parameter of 'myNumber' -> 'myNumber' represents/is a standin/placeholder for whatever number I want to times 1 by.
function timesBy1(myNumber) {
    console.log(1 * myNumber)
}

// arguments give a value to the function parameters
timesBy1(1)

timesBy1(123)

timesBy1(-14)



function greetUser(theUser) {
    // when I make a variable inside a function block, that variable is only 'visable' in that function
    const result = theUser + ' welcome to the website'
    // I want to ship back out the 'result' variable to the rest of my code
    return result
}

// I want to decalre a new variable - it's value should be the result of whatever greetUser returns
// 'Sam is my arugment to the function
// theUser - has a value of Sam
const userGreetString = greetUser('Sam')

console.log(userGreetString)
console.log(greetUser('Aishah'))



let myMathsResult = 5 + 5