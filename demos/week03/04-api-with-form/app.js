const form = document.getElementById('form')
const displayElem = document.getElementById('holdUi')

form.addEventListener('submit', function(event) {
    // stops our browser refreshing when submitted
    event.preventDefault()
    const result = new FormData(form)
    // turning my FormData object into a normal object
    const searchTerm = Object.fromEntries(result)
    console.log(searchTerm.query)
    fetchWordDef(searchTerm.query)
})


async function fetchWordDef(word) {
    // get my response object
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    // parse the response.body as JSON
    const data = await response.json()
    generateUI(data[0])
}   



function generateUI(data) {
    displayElem.innerHTML = ''
    console.log(data.meanings[0].definitions[0].definition)

    displayElem.innerText = data.meanings[0].definitions[0].definition
}