// we'll need useState to hold our formdata

import {useState} from "react"

export default function NewBookForm() {
    const [bookData, setBookData] = useState({})

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const result = await fetch(`http://localhost:7070/books`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookData)
            })
            const message = await result.json()
            console.log(message)
        } catch (error) {
            throw new Error('Something went wrong')
        }
    }

    function handleChange(event) {
        // update my state variable
        // console.log({[event.target.name]: event.target.value})
        setBookData({...bookData, [event.target.name]: event.target.value})
        console.log(bookData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="title" onChange={handleChange} required />
            <input name="author" placeholder="author" onChange={handleChange} required />
            <input name="description" placeholder="desc" onChange={handleChange} required />
            <input name="quote" placeholder="quote" onChange={handleChange} required />
            <input name="released" placeholder="released" onChange={handleChange} required />
            <input name="img_url" placeholder="img_url" onChange={handleChange} required />
            <button type="submit">submit</button>
        </form>
    )
}



// 1. run handle change everyime the user writes something in the input
// 2. handleChange will spread the previous data of the form and add in the new input field
// 3. handleSubmti will submit/POST the final formData object to our server