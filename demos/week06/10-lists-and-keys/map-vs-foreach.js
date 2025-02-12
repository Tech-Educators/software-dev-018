
let ourFavNumbers = [42, 7, 36, 7, 19, 7, 7, 77, 28]

// forEach itself does not return anything. So even when we put a return statement in the callbackfunction, the 'parent' (forEach) cannot return anything , so words is undefined. 
const words = ourFavNumbers.forEach((currentNumber) => {
    return `Our fav number is ${currentNumber}`
})

console.log(words)


// const wordsWorking = 
console.log(ourFavNumbers.map((currentNumber) => {
    // return currentNumber * currentNumber
    return `<p>Our fav number is ${currentNumber}</p>`
})
)