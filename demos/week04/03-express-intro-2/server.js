import express from "express";



const items = [
    {
        name: 'fot'
    }, {
        name : 'sam'
    }, {
        name: 'jez'
    }
]

// i can call this whatever
// now app is a big object with a bunch of methods on its.
const app = express()

// middlware
// allows our server to read JSON
app.use(express.json())

// tell my server how to deal with an incomming get request to '/' 
// the callback function has to have two paramters 
// the first one will always be the 'request ojbect'
// the second will always be the response object
app.get('/', function(request, response) {
    response.json({"hello" : "You've reached the root route"})
})

app.get('/cats', function(request, response) {
    // go to a databse and ask for cat info
    // we wont do that just yet, but this would be where we did that.
    response.json({"cats": ['cat1', 'cat2', 'cat3']})
})

 
app.post('/cats', function(request, response) {
    console.log(request)
    response.json({"You send this to me" : items})
})  

// keep listening for incomming requests on port 8010
// you can think of it as us hosting our server on port 8080
app.listen('8010', () => {
    console.log('Server running')
})

