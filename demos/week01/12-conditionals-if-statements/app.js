// Do this at the beginning of your file to verify you've set everything up correctly 
console.log('Hello world!')


// syntax 

// Syntax for an if statement

/*

if (condition) {
    // do something in here
}
*/

// if - a keyword in javascript 

const yes = `It's true`
// if the condition is true, it will run the code inside the curly brackets!
if (10 < 11) {
    console.log(yes)
}

// if the condition is false, it does not run the code in the curly brackets
if (10 < 5) {
    console.log(`Wow, really?!?!?!?`)
}


const number1 = 0
const number2 = 1
const number3 = 2


if (number1 === 0) {
    console.log('Yeah, thats right') // this will console log
}

if (number2 === '1') {
    console.log(`I love programming`) // will not console log because they have different data types
}

if (number3 != 2) {
    console.log(`My brain hurts`) // this will not log because the number3 is equal to 2
}

// allows us to get user info
let time = prompt(`What is the hour (0-23)?`)

console.log(`Time is ` + time)

// if the time is 11, it will only run the first if statemne,t , and 'exits' the rest of the statement. It doesn't keep going. 

if (time < 12) {
    console.log(`Back to bed!`)
} else if (time < 13) {
    console.log(`It's lunch time!`)
} else if (time < 24) {
    console.log(`Dinner soon, i hope`)
} else {
    // if none of the other conditions are true, it hits this else statment
    console.log('That is not a time!')
}