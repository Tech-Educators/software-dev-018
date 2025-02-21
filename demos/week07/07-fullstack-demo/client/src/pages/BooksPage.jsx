import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import "./BooksPage.css"

export default function BooksPage() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:7070/books`)
            const data = await res.json()
            setBooks(data)
        }
        fetchData()
    }, [])
    return (
        <div className="books-container">
            {books.map(book => (
                <div key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <img src={book.img_url} />
                    </Link>
                </div>
            ))}
        </div>
    )
}