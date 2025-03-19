export async function GET(request, {params}) {
    const {id} = await params

    return Response.json(id)
}

// localhost:3001/api/pets/3


// equvilant of doing 
// app.get('/pets/:id/, (req,res) => {})