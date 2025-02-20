import express from "express"
import dotenv from "dotenv"
import pg from "pg"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({connectionString: process.env.DB_URL})

app.get('/', (req, res) => res.send('Root route working'))

// get all books
app.get('/books', async (req, res) => {
    try {
        // fetch my books
        // this is like bidmas from school, we wrap the await in ()'s so it finishes doing that before trying to get .rows()
        const books = (await db.query(`SELECT * FROM books`)).rows
        res.status(200).json(books)
    } catch (err) {
        res.status(500).json(err)
    }
})

// get indvidual book
// /books/1 -> params are : {id: 1}
// /books/helllloo -> params are : {id: helllloo}
app.get('/books/:id', async (req, res) => {
    const {includes_genres} = req.query
    const {id} = req.params
    console.log(id)
    try {
        if (includes_genres == 'true') {
            const bookInfoWithGenres = (await db.query(`
                    SELECT books.*, array_agg(genres.name) AS genres
                    FROM books
                    LEFT JOIN 
                    book_genres ON books.id = book_genres.book_id
                    LEFT JOIN
                    genres ON book_genres.genre_id = genres.id
                    WHERE books.id = $1
                    GROUP BY books.id
                `, [id])).rows[0]
                res.status(200).json(bookInfoWithGenres)
                return;
        }

        const bookInfo = (await db.query(`SELECT * FROM books WHERE id = $1`, [id])).rows
        res.status(200).json(bookInfo)
    } catch (err) {
        console.log(err)
        res.status(500).send('Something went wrong')
    }
})

// INSERT A NEW BOOK:

app.post('/books', async (req, res) => {
    // we get all of the infromation about the book from the request.body
    const {title, author, description, quote, released, img_url} = req.body
    try {
        const data = await db.query(`
            INSERT INTO books 
            (title, author, description, quote, released, img_url)
            VALUES
            ($1, $2, $3, $4, $5, $6)
            `,
            [title, author, description, quote, released, img_url]
        )
        res.status(200).json(data)
    } catch (err) {
        res.status(500).send(err.message)
    }
})


// DELETE ROUTE
app.delete('/books/:id', async (req, res) => {
    try {
        // we can use the RETURNING * to get back the iniformation about the book we just deleted and send it to the client
        const deleteBook = await db.query(`DELETE FROM books WHERE id = $1 RETURNING *`, [req.params.id])
        // this can be useful for displaying notifications to the client containg information about the deleted book.
        res.status(200).json({message: 'Book deleted!', book: deleteBook.rows[0]})
    } catch (err) {
        res.status(500).send(err.message)
    }
})

app.get('/genres', async (req, res) => {
    try {
        const genres = (await db.query(`SELECT * FROM genres`)).rows
        res.status(200).json(genres)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// we learned about array_agg
// join statement for the genres of a book aswell
// all the books or all the books + the genres


app.listen(7070, () => console.log(`ヽ(｀Д´)⊃━☆ﾟ. * ･ ｡ﾟ, It's alive on PORT 7070`))