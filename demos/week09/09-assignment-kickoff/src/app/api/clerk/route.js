import { clerkClient } from '@clerk/nextjs/server'

export async function GET(request) {
    console.log('hit api endpoint')
    try {
        // const searchParams = request.nextUrl.searchParams
        // const query = searchParams.get('user_id')

        // const userList = await client.users.getUserList()
        const results = await clerkClient.users.getUsers(`user_2uDFVmq7PwxrhEo2bxbduWoZX4p`)
        console.log('hmm', results)
        return Response.json(results)
    } catch (e) {
        return Response.json({error: e})
    }
}