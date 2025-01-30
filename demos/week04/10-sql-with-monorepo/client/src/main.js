const app = document.getElementById('app')

async function fetchData() {
  const res = await fetch(`http://localhost:4242/jokes`)
  const jokes = await res.json()

  displayJokes(jokes)
}

function displayJokes(param) {
  // clear the div before we add things 
  app.innerHTML = ''
  param.forEach(singleJoke => {
    const h3 = document.createElement('h3')
    const pTag = document.createElement('p')
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')

    h3.innerText = singleJoke.joke
    pTag.innerText = singleJoke.punchline
    deleteButton.innerText = 'X'

    deleteButton.addEventListener('click', function() {
      handleDelete(singleJoke.id)
    })

    div.appendChild(deleteButton)
    div.appendChild(h3)
    div.appendChild(pTag)

    app.appendChild(div)
  })
}

fetchData()

async function handleDelete(id) {
  const res = await fetch(`http://localhost:4242/jokes/${id}`, {
    method: 'DELETE'
  })
  if (res.ok) {
    fetchData()
  }
}