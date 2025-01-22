function makeBackground() {
    console.log('Interval running....')
    document.body.style.backgroundColor = 'tomato'
}

let interval;

// stop our interval
function stop() {
   clearInterval(interval)
}


// start our interval
function start() {
    interval = setInterval(makeBackground, 1000)
}



// let interval2 = setInterval(makeBackground, 1000)

// setTimeout(() => {
//     clearInterval(interval2)
// }, 5000)