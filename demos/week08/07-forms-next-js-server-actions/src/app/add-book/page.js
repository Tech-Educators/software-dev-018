import { revalidatePath } from "next/cache"
// easy to use the wrong import here
import { redirect } from "next/navigation"

import pg from "pg"
export default function Page() {

    async function handleSubmit(formData) {
        // when you have a server action, like handleSubmit
        // you have to use the 'use server' directive in the function
        "use server"
        console.log('running on the server after submit')
        const db = new pg.Pool({
            connectionString: process.env.DB_CONN
        })
        
        // turning formData into a normal object
        const data = Object.fromEntries(formData)
        // destructuing the properties out of the 'data' variable
        const {title, author, description, quote, released, img_url} = data

        await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])

        console.log(data)
        // make sure the books route is up to date
        revalidatePath('/books')
        // moves the user to the books page after form submission
        redirect('/books')
    }

    return (
        // the callback we give to action always get formData
        <form action={handleSubmit}>
            <label htmlFor="title01">title</label>
            <input name='title' placeholder="title" required id="title01" />
            <input name='author' placeholder="author" required />
            <input name='description' placeholder="description" required />
            <input name='quote' placeholder="quote" required />
            <input type='date' name='released' placeholder="released" required />
            <input name='img_url' placeholder="img_url" required />
            <button type="submit">submit</button>
        </form>
    )
}

// after form submission
// we wnat an object
// keys are generated based on the name attribute on the input element
// {
//     title: 'Something',
//     author: 'Foo',
//     description: 'Baz'
//     // ect
// }