// Arrays are a list of values

let array = [1,2,3,5]

// this gets a bit cumbersom
let name1 = 'sam'
let name2 = 'tim'


const names = ['Sam', 'Tim', 'Angelica', 'Frankie']

// the array can contain other values
const mixedArray = ['Sam', 25, ['Darcy', 'Charlie', 'Tulip']]

// working with index
console.log(names)


console.log(names[0]) // Sam
names[1] // Tim

mixedArray[2][1] //  ['Darcy', 'Charlie', 'Tulip']


console.log(names.length) // 4 
// we know the names array has a length of 4, we can do -1 to always find the last element
console.log(names[4 - 1]) // Frankie

// This will work on any array ever
console.log(names[names.length - 1]) // names[3]

names[9000] // undefined


let myUserName = 2
names[myUserName]


let tvShows = ['The Penguin', 'Squid Game', 'Shogun', 'Friday Night Dinner', 'Electric Dreams']

// so now index 5 of my array is filled
tvShows[5] = 'The Bear'

// this would create a bunch of 'empty' indecises
tvShows[1000] = 'Secret Level'

// stick seinfeld in the middle
tvShows[tvShows.length / 2 - 0.5] = 'Seinfeld'

// will just add the entry to the end of the array
tvShows.push('Vikings')

// adds items to the beginnigs
tvShows.unshift('Friends')

// removes the last element of the array
tvShows.pop()

// tvShows[0] = 'BATMAN'

// fine
let versions = [1.24, 1234.1231, -1234.2403]


// sometimes it can be useful to swap eleemnts


//*** ****///


let swapped = ['Sam', 'Mas']


let temp = swapped[0] // 'Sam'
swapped[0] = swapped[1] // ['Mas', 'Mas']
swapped[1] = temp       

// swapped now == ['mas', 'sam']


