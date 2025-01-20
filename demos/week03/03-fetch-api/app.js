const img = document.getElementById('img')

async function fetchData() {
    // fetch on its own just reutrns a promise
    const response = await fetch('https://randomfox.ca/floof/')
     // I need to tell my code how to read the Response.body (in this case Data.body)
     console.log(response)
     // this says 'parse the incoming data *as* json' -> it will automatically be turned into normal js.
    const data = await response.json()
    // Meta info about the request
    console.log(Object.fromEntries(response.headers))
     console.log(data)

     img.src = data.image
}

fetchData()