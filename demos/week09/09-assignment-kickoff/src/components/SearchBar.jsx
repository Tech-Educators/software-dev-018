"use client"
import { useDebounce } from "@uidotdev/usehooks";
import {Suspense, useEffect, useState} from "react"
import BooksResults from "./BooksResults";

export default function SearchBar() {
    const [searchResults, setSearchResults] = useState([])
    const [q, setQ] = useState('')
    const debounced = useDebounce(q, 300)

    async function handleSearch(e) {
        setQ(e.target.value)
        console.log(e.target.value)
    }

    useEffect(() => {
        if (debounced) {
            async function fetchBooks() {
                console.log('searching..')
                const res = await fetch(`/api?query=${q}`)
                const data = await res.json()
                setSearchResults(data.books)
            }
            fetchBooks()
        }
    }, [debounced])

    return (
        <>
            <input onChange={handleSearch} className="border shadow-xl w-1/2 mt-2" placeholder=""/>
            <Suspense fallback={<p>...loading</p>}>
                {q === '' ? <p></p> : <BooksResults books={searchResults} /> }
            </Suspense>
        </>
    )
}