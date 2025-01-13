

// 1) A function declartion

function sayHello() {
    console.log('Hello')
}

// Whatever is inbetween the curly brackets is the function body.

// 2) Function ivocation

// write the name of the funciton followed by parenthesis 

sayHello()
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()
sayHello()

// Functions are so powerful because - once you have a set of steps you need to repeart, you have that code stored and read to reuse. 



// functions can take things called 'parameters'

function sum(number1, number2) {
    console.log(number1 + number2)
}


// I'm giving the sum function 'arguments' of 5 and 5
sum(5,5) // 10

// I'm giving the sum function 'arguments' of 6 & 12
sum(6, 12) //18

sum(1,2)

sum(5,5)


// I'm giving the log function an arugment of 'Hello'
console.log('Hello')
// Im giving the log function an arugment of 'Goodbye' 
console.log('Goodbye')


function myCoolerConsoleLog(string) {
    console.log(string + " 😎")
}

myCoolerConsoleLog('Hello') // string == 'hello'
myCoolerConsoleLog('Goodbye') // string == 'goodbye'