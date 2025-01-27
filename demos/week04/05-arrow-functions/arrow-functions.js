// declaring a function
function myFunc() {

}

// function expression
const myFuncExpression = async function(a,b) {
    return a + b
}
// also a function expression but written as an arrow function
const myArrowFunc = async (a,b) => {
    return a + b
}


// some cool things with arrow functions

const noParams = () => {}

// if you have one paramerer

const oneParam = x => {
    console.log(x)
}

// more than one param

const twoParam = (number1, number2) => {
    return number1 + number2
}


// you can still add brackets, it wont break anything 
const oneParamWithBrackets = (x) => {
    console.log(x)
}

// i can also return a value on one line.
const findArea = (a,b) => a * b

// the same as writing 
const findArea2 = (a,b) => { return a * b }



console.log(findArea(10,10))