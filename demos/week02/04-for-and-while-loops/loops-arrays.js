
// Looping over arrays

let container = document.getElementById('animal-container')

let animals = ['fox', 'dog', 'panda', 'cat', 'possum', 'axyplotle', 'rhino', 'worm']

for (let i = 0; i < animals.length; i++) {

    const pTag = document.createElement('p')
    pTag.textContent = animals[i]
    container.appendChild(pTag)


    console.log('index is ', i)
    console.log(animals[i])
}




// Just an easier syntax
let fav_movies = ['Primer', 'Thin Red line', 'Iron Man 3', 'Snatch' , 'Lord of the Rings', 'Perfect Blue']

for (let movie of fav_movies) {
    console.log('movie is currently', movie)
}


let numbers = [1,2,3,4]

for (let number of numbers) {
    console.log(number * 2)
}


// Another way using a function


let places_to_visit = ['Malta', 'Greece', 'New York', 'Paris']

// for each is a (function) method that comes with javascript 
// takes a function as an arguemnt

function logPlaces(place) {
    console.log(place)
}

places_to_visit.forEach(logPlaces)