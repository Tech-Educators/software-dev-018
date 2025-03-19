import { connect } from "@/utils/connect"

export async function GET(request) {
    try {
        const searchParams = request.nextUrl.searchParams
        const query = searchParams.get('query')

        const db = connect() 
        // i like means case insensitive
        // %q% wildcards on either side 
        const results = await db.query(`SELECT * FROM books WHERE title ILIKE $1`, [`%${query}%`])
        console.log(results)
        return Response.json({books: results.rows})
    } catch (e) {
        return Response.json({error: e})
    }
}