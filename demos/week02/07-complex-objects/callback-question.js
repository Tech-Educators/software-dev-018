

// // closure 
// function wrapper(func, param1) {
//     // memory: func: f , param: 1
//     func(param1)
//     return function() {
//         console.log(param1)
//     }
// }




// let x = wrapper(function (param) {
//     console.log(param)
// }, 1)


// x()


// // generates functions for us
// function generator() {

// }


let myNumber = two(times(seven())) // 14
//seven(times(two()))

function two(param) {
    console.log(param)

    if (param) {
        return param(2)
    }
    return 2
}

function seven(param) {
    if (param) {
        return param(7)
    }
    return 7
}

function times(number1) {

    // number1 = 7
    return function(number2) {
        // number2 = 1

        console.log(number1, number2)
        return number1 * number2
    }
}


console.log(myNumber)