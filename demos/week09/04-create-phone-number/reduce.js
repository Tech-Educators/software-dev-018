let array = [1,2,3,4] 


const result = array.reduce((accumulatedValue, currentIndexValue) => {
    console.log(`The overall value is ${accumulatedValue}`)
    console.log(`The current value in the array is ${currentIndexValue}`)
    return accumulatedValue + currentIndexValue
}, 0)

console.log(result)