
// After you've linked your index with your stylesheet and app.js, 
// try making a variable that stores your name, and log it in the console.

// camel case 
const myName = 'Sam'
const myCoolDog = 'Darcy'

let myCoolCohort = 'SD18'

// then open your website, and open the dev tools to look in the console to see that log.

console.log(myName)


// strings, numbers, booleans


let number1 = 10

// arithmatic
// console.log(number1 * 10)
// console.log(number1 / 10)
// console.log(number1 + 10)
// console.log(number1 - 10)


console.log(number1 != 10) // false 

// = - is assigning a value 


// *** Equality operators **** 
// we use == for comparing the value of number1 and 10
console.log(number1 == '10') // true

// we use ==='s for checking if the value and the data type are both the same
console.log(number1 === '10') // false



// ** Logical Operators ** 


const weather = 'Sunny'
const needSunscreen = true



// && - AND - both the left and the right operator need to be true

weather === 'Sunny' && needSunscreen // true
weather === 'Snowy' && needSunscreen // false


// || - OR - Either the left or right side need to be true - will resolve to true

weather === 'Snowy' || needSunscreen // true 
weather != 'Sunny' || !needSunscreen

false || false  // false 


// != - we're comparing two values to eachother 

// ! - we're saying want the opposite to whatever value that varible is.



// truthy && falsy - Javascript always does it's best to convert values

// !'Sam' - false, because it considers 'Sam' to be true. 

user == 'logged in' && admin == true



// ! - tries to make it a boolean

// but otherwise if don't covernt one of the values to a boolean, it will just return that value??

// the last value on the left is what is returned if the overstatement is true - so either 'true' or 5 for example 

10 < 10 && 9 != 0 || 5 == 5 && !5 // false
10 < 10 && 9 != 0 || 5 == 5 && 5 // 5
10 < 10 && 9 != 0 || 5 == 5 && 'Sam' // 'Sam'

5 && 10 <= 10 && 9 != 0 || 5 == 5



false && true // false 