// setTimeout 

// run a function after a certain amount of time has passed
// comes with javascript 

// takes two arguments 
// ( callback ) function
// a amount of time in MS 1000ms is 1 second
setTimeout(function() {}, 1000)

setTimeout(() => {
    console.log('Long have i awaited....')
}, 7000)


function greet() {
    console.log('Sorry I was distracted... how can I help?')
}

setTimeout(greet, 3000)

// setInterval

// running a function over and over again periodically.

setInterval(function() {}, 1000) // do nothing (because the function is empty) every second

setInterval(() => {
    console.log('Echo..')
}, 1000)
// cummulative layout shift


function buttIn() {
    console.log('Yes, but...')
}

setInterval(buttIn, 500)
// coolerSetTimeout(1000, () => {})
// function coolerSetTimeout(function, timeInMS) {
//     function()
//     // 
// }