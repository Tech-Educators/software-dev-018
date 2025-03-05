import pg from "pg"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export default function Page() {

    // two rules for server acitons: 
    // they HAVE to have the 'use server' directive at the top of the function
    // they HAVE to be async

    // you do need to tell your function about it getting formdata in the paramaters
    async function handleSubmit(formData) {
        'use server'
        // this is now a server action and will run on our server after form submission
        console.log(formData)

        // destructing the properies out of the object we made using Object.fromEntries
        // turing FormData into a normal plain js object and storing in the 'data' variable
        const data = Object.fromEntries(formData)
        // destructuting the 'data' variable to make a new variable for each of it's properties.
        const {title, author, description, quote, released, img_url} = data

        // i'll connect to my database. 
        const db = new pg.Pool({connectionString: process.env.DB_CONN})
        await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])

        // go fetch all the information on the books route again
        revalidatePath('/books')
        // redirects the user to the books route
        redirect('/books')
    }

    return (
        // write out a form as normal
        // give it an action to run
        // the action is your server action
        // the function passed as the server action will always recieve formData as an argument. (you dont need to pass form data, nextjs does this automatically)
        <form style={{display: 'flex', flexDirection: 'column', width: '200px', alignSelf: 'center'}}
        action={handleSubmit}
        >
            <input name="title" placeholder="title" required />
            <input name="author" placeholder="author" required />
            <input name="description" placeholder="description" required />
            <input name="quote" placeholder="quote" required />
            <input name="released" placeholder="released" required type="date"/>
            <input name="img_url" placeholder="img_url" required />
            <button type="submit">Submit</button>
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

// await db.query(`INSERT INTO books (title, author, description, quote, released, img_url) VALUES ($1, $2, $3, $4, $5, $6)`, [title, author, description, quote, released, img_url])