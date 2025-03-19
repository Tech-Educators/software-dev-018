// listen for a get request to localhost:30001/api/pets

const pets = [
    {
        id:1,
        name: 'Darcy',
        breed: 'Chihuahua'
    },{
        id: 2,
        name: 'Snowy',
        breed: 'Wild cat'
    }
]

export async function GET() {
    // fetch from database
    // const user = await db.query('select * from users').rows
    return Response.json({petsInfo: pets})
}


export async function POST(request) {
    // if you want the metadata of the requst
    console.log(request)
    // get the body of the request. (Don't be alarmed that the body doesn't show up on the request object, it's async.)
    const requestInfo = await request.json()
    console.log(requestInfo)

    // now you can insert into your database ect.
    return Response.json('Added pet')
}

