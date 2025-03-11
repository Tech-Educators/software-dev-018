"use strict";
// tpyes out
Object.defineProperty(exports, "__esModule", { value: true });
var myName = 'string';
var myNumber = 54;
var myBool = true;
var myArray = [];
var myObject = {};
// typscript is about striclty defining what types our varibles can be.
var myName2 = 'sam';
var myNumber2 = 54;
var myBool2 = true;
// telling the array it can have string elements
var myArray2 = [];
myArray2 = ['Sam', 'Tim'];
var myArray2WithNumbers = [];
myArray2WithNumbers = [42, 32];
// my array never has anything inside it. It has to be empty. 
var myArray3 = [];
// this array only accepts strings and numbers using |
var myArrayWithStrings = ['Sam', 43];
// we can also do it with the other synatax
var myArrayWithStrings2 = ['Angelica', 341];
// we can also type our object properties
var myObject2 = {
    userName: 'somethign',
    age: 42234,
    is_cool: true
};
var pets = [
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
];
// you dont need to tell it everything 
// you can be a number or a string
var myHometown = 'Mossel bay';
myHometown = 43;
// Functions 
function sum(a, b) {
    return a + b;
}
// my course has to be on of the options in uniClasses
var myCourse = 'art';
var myArrayOfTrees = [
    {
        treeType: 'fir',
        evergreen: true,
        age: 34,
        img_url: 'hi'
    }
];
console.log(myArrayOfTrees);
