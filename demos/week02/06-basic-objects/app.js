let string = 'string'
let boolean = true
let number = 42.0

let novalue = null


// arrays are also a data type

let array = [1,2,3,4]

// we declare a new object with curly brackets
// objects are made up of key:value pairs
let object = {}

let hello = function() {
    console.log('hello')
}




const myInfo = {
    // my info has a 'property' named sam
    name: 'Sam',
    age: 25,
    favPet: 'Darcy',
    hobbies: ['Programming', 'Art', 'Gaming'],
    // we can also make key value pairs were the 'value' is a function
    greetStudents: function() {
        console.log(`Hello students! My name is ${myInfo.name}`)
    }
}

// WE USE 'DOT NOTATION' to access properties of an object.

console.log(myInfo.name) // 'Sam'
myInfo.favPet

console.log(myInfo.greetStudents) // would be the whole function

myInfo.greetStudents()

console.log(myInfo) // does have the value? quirk of chrome - remember js runs in order, so favNumber isn't really not

console.log(myInfo.favNumber) // comes back undefined
// We can add key:value pairs to objects after the fact

myInfo.favNumber = 42;

// we can also overwrite properties the same way
myInfo.favPet = 'Charlie'

// myINfo is a const = we cant change the type 
myInfo = 2 // error 

// but i can change the content of the object