import express from "express"
import cors from "cors"

// make our app
const app = express()

// we need to tell our server to read incoming JSON
app.use(express.json())
// tell our server to accept incoming requests from random clients
app.use(cors())

app.get('/books', (req, res) => {
    const books = [
        {
            name: "name of the wind",
            year: 2001
        }, 
        {
            name: 'A court of thorns and roses',
            year: 2015
        }, 
        {
            name: 'The three body problem',
            year: 2006
        },
        {
            name: 'Hunger games',
            year: 2008
        },
        {
            name: 'Horrid Henry',
            year: 200
        }
    ]

    res.status(200).json(books)
})

// recieve book info from a client

app.post('/books', (req, res) => {
    // req(uest) - is incoming from the client
    // res(ponse) - outgoing from the server
    console.log(`This is the request body`, req.body)
    res.json({your_sent_me_this_from_the_client: req.body})
    // this data will end up in a database when we learn them!
})

app.listen(6060, () => {
    console.log(`Running on port 6060`)
})