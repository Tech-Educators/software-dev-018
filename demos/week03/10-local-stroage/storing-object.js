
const colors = {
    green: 0,
    blue: 0,
}

// 1. I have to turn my object into JSON first

const stringifiedColours = JSON.stringify(colors) // {"green" : 0, "blue": 0} 

//2.  store in local storage:
localStorage.setItem('coloursBAD', colors)
localStorage.setItem('colours', stringifiedColours)

// 3. get our colours - give getItem the key
const coloursFromLocalStorage = localStorage.getItem('colours')

console.log(coloursFromLocalStorage)

// 4. Turn the JSON bacck into a normal JS object
const coloursParsed = JSON.parse(coloursFromLocalStorage)

console.log(coloursParsed)


// stringify, setItem, getitem, parse