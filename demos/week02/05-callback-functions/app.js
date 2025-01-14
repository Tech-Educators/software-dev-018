//1 - get elements in my js 

const buttonCounter = document.getElementById('updateCounter')
const display = document.getElementById('counterDisplay')

// 2 listen for event
// the event
// the function to run when the event happns


// anon function given to addEventListner
buttonCounter.addEventListener('click', function() {
    console.log('Click')
})


function handleClick() {
    console.log('Handle click!')
}

// both function run when the event happens
buttonCounter.addEventListener('click', handleClick)