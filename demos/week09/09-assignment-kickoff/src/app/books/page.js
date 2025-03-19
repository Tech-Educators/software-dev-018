import SearchBar from "@/components/SearchBar"
import Link from "next/link"
import { federo } from "@/stores/fonts"
import { connect } from "@/utils/connect"
import Image from "next/image"

export default async function Page() {
    const db = connect()

    const books = (await db.query(`SELECT * FROM books`)).rows
    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className={`text-3xl mt-3 ${federo.className}`}>
                Search for your next read...
            </h2>
            <p>
                This search bar is just me having fun. It uses a library at {" "}
                    <Link className="text-blue-500" href={`https://usehooks.com/usedebounce`}>
                        this page!
                    </Link>
            </p>
            <SearchBar />
            <h2 className={`text-2xl mt-3 ${federo.className}`}>Or pick one of our books here:</h2>
            <div className="flex flex-row flex-wrap gap-5">
            {books.map(book => {
                return book.cover_image_url ?  <Image className={"p-4 hover:scale-110"}src={book.cover_image_url} width={200} height={300} alt={book.title} /> : ''
})}
            </div>
        </section>
    )
}