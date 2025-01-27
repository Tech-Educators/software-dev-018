import express from "express"

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    response.json(`Youre looking at my root route!`)
})

app.listen('8080', () => {
    console.log('Running on port 8080')
})