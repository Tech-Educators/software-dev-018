// listen for a get request to localhost:3000/api
export function GET() {
    return Response.json({message: 'Server is running on /api'})
}