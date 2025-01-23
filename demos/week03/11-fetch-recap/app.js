console.log('Hello')


async function fetchData() {
    // await says 'no i really want to wait for our response 'headers' to come back
    const unicorns = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // step 2 -> we're not done 
    const flowers = await unicorns.json()
    // generateUI(flowers)
    generateUI(flowers)
}

fetchData()

function generateUI(dataToRender) {
  
    for (let i = 0; i < dataToRender.length; i++) {
        // 1. create the element(s) (the ptag) we want
        const containerElem = document.createElement('div')
        const titleElem = document.createElement('h2')
        const pElem = document.createElement('p')

        // 2. Put the info we need in them.
        titleElem.innerText = dataToRender[i].title
        pElem.innerText = dataToRender[i].body

        containerElem.setAttribute('class', 'post')

        // 3. append the title and ptag to the container we made
        containerElem.appendChild(titleElem)
        containerElem.appendChild(pElem)

        const contentDiv = document.getElementById('content')
        contentDiv.appendChild(containerElem)
    }

    dataToRender.forEach((post) => {
           // 1. create the element(s) (the ptag) we want
           const containerElem = document.createElement('div')
           const titleElem = document.createElement('h2')
           const pElem = document.createElement('p')
   
           // 2. Put the info we need in them.
           titleElem.innerText = post.title
           pElem.innerText = post.body
   
           containerElem.setAttribute('class', 'coolerPost')
   
           // 3. append the title and ptag to the container we made
           containerElem.appendChild(titleElem)
           containerElem.appendChild(pElem)
   
           const contentDiv = document.getElementById('content')
           contentDiv.appendChild(containerElem)
    })
}
