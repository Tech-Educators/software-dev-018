console.log('Hello')


async function fetchData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const posts = await res.json()
  displayData(posts)
}

function displayData(dataToDisplay) {
  dataToDisplay.forEach(element => {
    const pTag = document.createElement('p')

    pTag.innerText = element.title

    document.getElementById('display').appendChild(pTag)
  })
}

fetchData()