import pg from "pg"
import Image from "next/image"

export default async function Page({params}) {
    // await params returns an object like this: {id : 2}
    // destructuring the id out. 
    const {id} = await params 

    const db = new pg.Pool({connectionString: process.env.DB_CONN})
    const res = await db.query(`SELECT * FROM books WHERE id = $1`, [id])
    const book = res.rows[0]

    console.log(res)
    return (
        <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
             <Image height={500} width={350} alt={book.title} src={book.img_url}/>
             <p>{book.description}</p>
        </div>
    )
}

// All page.js file get an object with {params: '', searchParams: ''}