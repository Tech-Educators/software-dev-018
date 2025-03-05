let name = 'Sam'
const myCool = true;

// Array 
const myPets = ['Darcy', 'Charlie' , 'Tulip'] // 3 

console.log(myPets[0]) // Darcy
myPets[2] // Tulip

myPets[myPets.length - 1] // Tulip

let x = 0
myPets[x] // 'Darcy' 


// for (let counter = 0; counter < 5; counter++) {
//     console.log(counter)
// }

// for (let i = 0; i < array.length; i++) {
//     // do some code
//     console.log(array[i])
// }

// for each is an array 'method' - what we mean by that is it's a function that available to all arrays, can it comes with javascript. 


// we give forEach a function as its argument - and it runs that function on each of the elemnts in the array one by one.
// array.forEach()



function findsValueOfY(x) {
    let y = x + 10
    console.log(y)
}
// ive been given an arugment of 5
findsValueOfY(5) // 15
findsValueOfY(3) // 13

// multiple parameters, seperated by commas
function greetUser(userName, greeting) {
    console.log(userName + greeting)
}

// multiple arguments. 
greetUser('Eddy', ' Whoop whoop ')
greetUser('Sam', ' hiya!')
// write a function that says goodbye to the user - it should have 3 paramaters - one for the useName, one for the goodbyeMessage, and come for a specialCharacter (like !!!'s)
if (true) {}

let array = [1,2,3,4,5] // array length is 5 - the last index is 4

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
}



// .forEach is an array 'method' 
// 'a method is function that is a property of an object' 

// we have to use square bracks for arrays.
let myGames = ['Elden Ring', 'Cyberpunk', 'CS2', 'Dota']

// for each is a function we can call on arrays that takes an argument of a function we want to run on each element of the array
function logGame(game) {
    console.log(game)
}

myGames.forEach(logGame)

// anon function

myGames.forEach(function(game) {
    console.log(game)
})

// arrow function
myGames.forEach(game => {
    console.log(game)
})

// objects are a collection of key:value pairs
// we call the 'keys' properties
let myInfo = {
    firstName: 'Sam', 
    lastName: 'Louloudis',
    age: 25,
    pets: ['Darcy', 'Charlie'],
    job: {
        title: 'Course Instructor',
        wage: 1000000
    }
}

myInfo.age // 25
myInfo.pets[1] // Charlie
myInfo.job.wage //1000000

// writing forms.
// looping through arrays of object and putting them on the page.
// event handling

const movies = [
{
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: ["Sci-Fi", "Action"],
    rating: 8.8
},
{
    title: "Parasite",
    director: "Bong Joon-ho",
    year: 2019,
    genre: ["Thriller", "Drama"],
    rating: 8.6
},
{
    title: "The Grand Budapest Hotel",
    director: "Wes Anderson",
    year: 2014,
    genre: ["Comedy", "Drama"],
    rating: 8.1
},
{
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    year: 2017,
    genre: ["Sci-Fi", "Mystery"],
    rating: 8.0
},
{
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    genre: ["Sci-Fi", "Action"],
    rating: 8.7
},
{
    title: "Whiplash",
    director: "Damien Chazelle",
    year: 2014,
    genre: ["Drama", "Music"],
    rating: 8.5
},
{
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: ["Crime", "Drama"],
    rating: 9.2
},
{
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    year: 2001,
    genre: ["Animation", "Fantasy"],
    rating: 8.6
},
{
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    genre: ["Drama", "Thriller"],
    rating: 8.8
},
{
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    genre: ["Sci-Fi", "Adventure"],
    rating: 8.7
}
];


const sunshineAnDUnicorns = document.getElementById('movie-container')


// console.log(movies[3]) // blade runner object


movies.forEach(movie => {
    // create my element
    const movieTitleTag = document.createElement('h3')
    console.dir(movieTitleTag)

    // I need to tell the elemnt I made to have some content. 
    movieTitleTag.innerText = movie.title

    // 3 going to use append child to say - hey add all the movieTitlesTags to the dive i  have in my html 
    sunshineAnDUnicorns.appendChild(movieTitleTag)
})