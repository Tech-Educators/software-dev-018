// set up parameters
function sum(a) {
    console.log(a) // 5
}

// providing my parameters an value by passing an argument
sum(5) // a = 5



// we would say that 'sayHelloToTheWorld' 'takes' a callback function as a parameter, and executes it.


// this function is going to take the function it should run as an argument
function sayHelloToTheWorld(theFuncToRun) {
    console.log(theFuncToRun)
    // of course, because the parameter *is* the anon function we passed in, we can execute it like any other function. It just has a different name.
    theFuncToRun()
}

// the anon function is not being invoked, we created it
sayHelloToTheWorld(function() {
    console.log(`Helllo!  I'm being run by another function!`)
})


// 'goobye'
// undefined

let sayGoodbye = function () {
    console.log('goodbye')
    return 'Sam'
}

console.log(sayGoodbye())


let number = 5
let string = 'string'
let boolean = true

let array = [1,2,3]
let object = {}

let functionHello = function() {

}





function calculate(a, b, func) {
    let result = func(a, b)
    // result has a value of 15
    console.log(result)
}

function sum(a,b) {
    return a + b
}

calculate(10, 5, sum)


function divide(a, b) {
    return a / b
}


calculate(20, 5, divide)