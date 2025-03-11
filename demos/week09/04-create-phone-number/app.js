function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6).join('')}`
  }
  console.log (createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))


  function createPhoneNumber([a, b, c, d, e, f, g, h, i, j]) {
    console.log((`(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`))
  }

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  createPhoneNumber(numbers)


  function createPhoneNumber(numbers) {
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

console.log(createPhoneNumber([0,1,2,3,4,5,6,7,8,9]))

// if index = 0 || index < 3 {


if (weather < 9) {
    return `🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪`
} else if (weather < 8) {
    return `🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪⚪`
}



// [0,1,2,3,4,5,6,7,8,9]
function createPhoneNumber(arr) {
    let mask = '(xxx) xxx-xxxx';

    arr.forEach(item => {
        mask = mask.replace('x', item);
    });

    return mask;
}

// (0xx) xxx-xxxx
// (01x) xxx-xxxx


createPhoneNumber([0,1,2,3,4,5,6,7,8,9])
const createPhoneNumber = (arr) => arr.reduce((accumulated, currentItem) => accumulated.replace('x', currentItem), '(xxx) xxx-xxxx')

'(0xx) xxx-xxxx'
'(01x) xxx-xxxx'
'(012) xxx-xxxx'
'(012) 3xx-xxxx'

// reduce is an array method
// first argument is a callback function // (accumlated, currentItem) => accumlated.replace('x', currentItem)
// second argument is an intial value for accumalted - '(xxx) xxx-xxxx'


// reduce, filter, map
// join, split
// reverse