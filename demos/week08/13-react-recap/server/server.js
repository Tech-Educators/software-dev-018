// we're using express
// as our webframeworks
import express from "express"
// read our environment variables
// so I can reference variables in my .env file.
import dotenv from "dotenv"
// import pg - it lets us connect to our postres database
import pg from "pg"
// import cors
import cors from "cors"

// setup dotenv so we can read our environment variables
dotenv.config()

// set up my postgres connection
// this allows us to talk to our database on supabase
const db = new pg.Pool({connectionString: process.env.DB_CONN})


// to start building the app, I'll 'instansiate' a new varible to store my express object in
const app = express()

// tell my seerver how to read JSON. 
app.use(express.json())

// I need to tell my app what to listen for -
// listen for a get request to '/posts' i;ll run a function
app.get('/posts', async (request, response) => {
    // send them data from my databae
    const posts = await db.query(`SELECT * FROM posts`)
    // posts itself has a bunch of data in it, but the client only wants the rows
    console.log(posts)

    const finalPostData = posts.rows
    // my server has asked the database for the post infromation 
    // we'll send it to the client
    // i'll response by sending the client JSON
    // response.json(posts)
    response.json(finalPostData)
})


// what if the client wants to make a new post?
// they'll send a POST request
app.post('/posts', async (request, response) => {
    // I need some extra information from the client about the post they want to maek
    // I can acess infromation the clident has sent me through the req.body
    console.log(request.body)
    // now we have the infromation from the client, we can make a request to the database to insert the information
    await db.query(`INSERT INTO posts (title, author, content, image) VALUES ($1, $2, $3, $4)`, [request.body.title, request.body.author, request.body.content, request.body.image])
    response.send('Hi')
})


// starting our app on our local computuer
// telling my app to listen for requests on my local port 8080
app.listen('8080', () => console.log('Server is running'))

// a method is just a function on an object. 
const sam = {
    name: 'Sam',
    location: 'Liverpool',
    teach: function() {
        console.log('I am teaching')
    }
}