// tpyes out

const myName = 'string'
const myNumber = 54
const myBool = true;

const myArray = []
const myObject = {}

// typscript is about striclty defining what types our varibles can be.

const myName2: string = 'sam'
const myNumber2: number = 54
const myBool2: boolean = true;

// telling the array it can have string elements
let myArray2: string[] = []
myArray2 = ['Sam', 'Tim']

let myArray2WithNumbers: number[] = []
myArray2WithNumbers = [42, 32]

// my array never has anything inside it. It has to be empty. 
let myArray3: Array<never> = []

// this array only accepts strings and numbers using |
let myArrayWithStrings: Array<string | number> = ['Sam', 43]


// we can also do it with the other synatax
let myArrayWithStrings2: (number | string)[] = ['Angelica', 341]


// we can also type our object properties
const myObject2: {
    userName: string,
    age: number,
    is_cool: boolean
} = {
    userName: 'somethign',
    age: 42234,
    is_cool: true
}

// we can create a 'type' when we need to type a lot of the same object structure

export type petInfo = {
    name: string,
    age: number,
    cute: boolean,
    colour: string,
    // adding an optional proeprty to our type
    img_url?: string
}

const pets: petInfo[] = [
    {
        name: 'Darcy',
        age: 7,
        cute: true,
        colour: 'Brown',
        img_url: 'https://cutedog.jpg'
    },
    {
        name: 'Darcy',
        age: 7,
        cute: true,
        colour: 'Brown'
    },
    {
        name: 'Darcy',
        age: 7,
        cute: true,
        colour: 'Brown'
    }
]

// you dont need to tell it everything 

// you can be a number or a string
let myHometown: (number | string )= 'Mossel bay'
myHometown = 43



// Functions 

function sum(a: number, b: number):number {
    return a + b
}


// union types

type uniClasses = 'physics' | 'art' | 'history'

// my course has to be on of the options in uniClasses
const myCourse: uniClasses = 'art'

type treeTypes = {
    treeType: 'fir' | 'oak' | 'willow' | 'cherry' | 'maple',
    evergreen: boolean,
    age: number,
    img_url?: string,
}

const myArrayOfTrees: treeTypes[] = [
    {
        treeType: 'fir',
        evergreen: true,
        age: 34,
        img_url: 'hi'
    }
]

console.log(myArrayOfTrees)