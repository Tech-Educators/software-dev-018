import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"

// instastiate my app 
const app = express()

// do my 'use'
// allow incomming requests from other people 
app.use(cors())
// read incomming json
app.use(express.json())

// goes and looks for a .env file and pulls those environment variables into our node process
dotenv.config()

// a pool is a way for our express app to connect to our database
// I'll give it a connnection string so that I can connect to *my* database
const db = new pg.Pool({
    connectionString: process.env.DB_CONN
})





app.get('/', (req, res) => res.json(`HellooOO (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧`))

app.get('/jokes', async (req, res) => {
    // want fetch my jokes from my SQL TABLE
    // result is a big JSON object that has a bunch of data on it
    const result = await db.query(`SELECT * FROM jokes`)
    // we only care about the 'rows' part of the result
    const jokes = result.rows
    res.json(jokes)
})

app.delete('/jokes/:id', async (req, res) => {
    console.log(req.params.id)
    const deleted = await db.query(`DELETE FROM jokes WHERE id = $1`, [req.params.id])
    res.send(req.params.id)
})

app.put('/jokes/:id', async (req, res) => {
    console.log(req.params.id, req.body)
    const update = await db.query(`
        UPDATE jokes 
        SET 
        joke = $1, 
        punchline = $2 
        WHERE id = $3`, 
        [req.body.joke, req.body.punchline, req.params.id]
    )

    res.json({params:  req.params.id, body: req.body})
})
// now a route so I can add a new joke to my database
// post route
// i can get the recieved data from the client on the request.body
// I can use an INSERT statement to insert into my PG database

app.post('/jokes', async (req, res) => {
    // I need to get the information the client sent me 
    // req object contains information about the request from the client

    const body = req.body
    console.log(body)

    const jokeFromClient = req.body.joke
    const punchLineFromClient = req.body.punchline

    const data = await db.query(`INSERT INTO jokes (joke, punchline) VALUES ('${jokeFromClient}', '${punchLineFromClient}')`)

    // const dataSafer = await db.query(`INSERT INTO jokes (joke, punchline) VALUES ($1, $2)`, [jokeFromClient, punchLineFromClient])

    res.json(data)
})


app.listen('4242', () => {
    console.log(`App running on http://localhost:4242`)
})