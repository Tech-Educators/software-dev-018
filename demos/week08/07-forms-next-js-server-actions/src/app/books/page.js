import Link from "next/link"
import Image from "next/image"
import pg from "pg"

export default async function Page() {
    const db = new pg.Pool({connectionString: process.env.DB_CONN})
    
    const data = await db.query(`SELECT * FROM books`)
    const books = data.rows

    // console.log(books)
    return (
        <div>
            <h2>This is the Books route!</h2>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {books.map((book) => (
                <div key={book.id}>
                    <Link href={`/books/${book.id}`}>
                        <Image height={500} width={350} alt={book.title} src={book.img_url}/>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}