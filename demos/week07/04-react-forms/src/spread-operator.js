// The spread operator


const string = 'sam'
let foo = [...string]
console.log(foo) // nice shorthand to quickly make an array out of a string

let theMatrix = {
    name: 'The Matrix',
    year: 1999,
    directors: 'Wachoski Sisters',
    lead_actors: 'Keanu Reeves',
    genre: 'Sci-Fi'
}

// we want to use the spread opeerator to 'copy' some of the information from the original object into a new one, and I want to replace some of the values like 'year' and 'name' 

let theMatrixReloaded = {
    ...theMatrix,
    year: 2003,
    name: 'The matrix reloaded',
    // we can also add new fields
    review: 'I havnt seen it yet'
}

console.log(theMatrixReloaded)

// we cant have duplicate property names, so whatever was set last is the one that goes through
let object = {name: 'foo', name: 'bar'}

console.log(object) // {name: 'bar'}


let bar = 'yearOfRelease'

let wizardOfOz = {
    name: 'The Wizard of Oz', 
    bar: 1939
}

console.log(wizardOfOz) // { name: 'The Wizard of Oz', bar: 1939 }

// I wanted it to read the varaible 'bar' and use it's value as the property name, but it has not. :(

let baz = 'yearOfRelease'

let enterTheDragon = {
    name: 'Enter the Dragon',
    // by using square brackets here, it will 'read' baz as a varaible and go find out what was actually stored in there.
    [baz]: 1973,
    ['This is a valid propery name']: 'Pink',
    ['Hello']: 'Hi'
}

// we can use bracket notation to access property names that have spaces
console.log(enterTheDragon["This is a valid propery name"])
console.log(enterTheDragon.Hello) // Hi


let braveheart = {
    name: "Braveheart",
    year: 1995,
    lead_actors: 'Mel Gibson',
    directors: 'Mel Gibson'
}



let combinedMovie = {...theMatrix, ...braveheart}
console.log(combinedMovie)