import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pg from "pg"

// instastiate my express app
const app = express()

// anything inside app.use runs before our request hits the main handler
app.use(cors())
app.use(express.json())

// this middleware adds to the request.body the property sam. 
app.use((req, res, next) => {
    req.body.sam = 'Cool'
    next()
})

// HTTP METHODS: GET POST PUT DELETE PATCH 
// a lot like an event listener
// listening for a get request on the route '/' and when that happens run the cbf
app.get('/', (req, res) => {
    console.log(req.body.sam)
    try {
        // write your normal code
        
        // throwing an error to trigger the catch block.
        // throw new Error('This code sucks!')
        res.send('Hiii')
    } catch (error) {
        // something went wrong, send back an error
        res.status(500).send(error.message)
    }
})

app.get('/cats', (req, res) => {
    try {

        res.status(200).json({cat: `https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg`})
    } catch (err) {

    }
})

app.listen(8080, () => console.log(`ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ, It's alive on PORT 8080 `))