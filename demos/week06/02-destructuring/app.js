// destructuring assingment.

// automatically going to create variables that have a value of the matching key in an objects key:value pair.

let myInfo = {
    name: 'Sam',
    age: 25,
    games: 'CS2'
}

const username = myInfo.name // boring!!!

// we can add curly brackets to the left, in the curly brackets, we have to name the variable we make the same name as the property name

let {age ,name ,games} = {
    name: 'Sam',
    age: 26,
    games: 'Deadlock'
}

console.log(games)

// we're going to say that this function always takes an object as its argument
// and that that object has a 'city' paramater

// we can destructure the incomming paramater, by putting the property name in curly brackets in our parenthesis.
function takesObjectAsAnArgument({city, water}) {
    console.log(city)
    console.log(`Does it have water? `, water)
}

let myCity = {
    city: 'Liverpool',
    water: true
}

takesObjectAsAnArgument(myCity)



let myData = {
    number1: 34,
    number2: 4231
}

function sumWithObject({number1, number2}, param2) {
    console.log(`Number1: ${number1}, number2: ${number2}`)
    console.log(`${param2} is param 2`)

}

sumWithObject(myData, 3)


function sumWithObjectWithoutDestructuring(a, b) {
    console.log(a.number1)
}

sumWithObjectWithoutDestructuring(myData, 3)