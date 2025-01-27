// import express
import express from "express"


const app = express()

// I'm gonna tell express that it should 'read' incoming JSON as a JS object
// this is something called 'middleware'
app.use(express.json())

// listening for a GET request on the root route '/'
// when I get a request to it, I'll response with some JSON of {name: 'Hello class'}

app.get('/', (request, response) => {
    response.json({name: 'Hello class'})
})

// listen for a 'get' request again

app.get('/cats', (request, response) => {
    // this could be a db call instead!
    const cats = {"cats" : ['Tulip', 'Archer', 'Else', 'Merlin', 'Bella']}
    response.json(cats) 
})

app.post('/cats', (request, response) => {
    // talk to databse and say 'hey add a new cat')
    const data = request.body
    console.log(data)
    response.status(404).json(data)
})

// listen for incoming requests on localhost 8080
app.listen('8090', () => {
    console.log(`Running server on port 8090`)
})
