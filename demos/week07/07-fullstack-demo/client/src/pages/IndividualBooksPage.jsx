import {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
export default function IndividualBooksPage() {
    const [bookInfo, setBookInfo] = useState('')
    
    // get the route parameters
    const {id} = useParams()

    useEffect(() => {
        async function fetchBook() {
            const res = await fetch(`http://localhost:7070/books/${id}?includes_genres=true`)
            const data = await res.json()
            setBookInfo(data)
        }
        fetchBook()
    }, []) 

    return (
        <div>
            <p>individual book</p>
            <h2>{bookInfo.title}</h2>
            <img src={bookInfo.img_url} />
            <p>{bookInfo.author} ||</p>
            <p>{bookInfo.description}</p>
        </div>
    )
}