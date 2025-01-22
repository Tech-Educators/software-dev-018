const countDisplay = document.getElementById('count')
const button = document.getElementById('button')

// if the user has used my app before, localstorage will return a value and we store that in 'count'
// if they havn't use used it, getItem returns null, so we set count to have a value of 0;
// get the value by giving the key as an argument
let count = localStorage.getItem('count') || 0;

countDisplay.textContent = count

button.addEventListener('click', () => {
    count++
    countDisplay.textContent = count
    // store the key value pair
    localStorage.setItem('count', count)
})