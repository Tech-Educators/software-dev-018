import { connect } from "@/utils/connect"
import { auth } from "@clerk/nextjs/server"

//:TODO: Massive joiN!
export default async function Page({params}) {
    const {userId} = await auth()
    const {id} = await params
    const db = connect()
    const data = (await db.query(`
                    SELECT books.*, authors.name, authors.id as author_id
                    FROM books
                    LEFT JOIN books_authors ON books.id = books_authors.book_id
                    LEFT JOIN authors ON books_authors.author_id = authors.id
                    WHERE books.id = $1;`, 
                [id])).rows[0]

    return (
        <div>
            <BookDetail book={data} />
            {userId ? <p className="text-gray-600">rate</p> : <p>sign in to rate</p>}
        </div>
    )
}

function BookDetail({book}) {
    return (
      <div className="min-h-screen flex justify-center items-center p-10">
        <div className="max-w-5xl w-ful p-8 rounded-lg flex gap-8">
          {/* Book Cover */}
          <div className="w-48 h-64 bg-green-50 rounded-md"></div>
          
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <p className="text-gray-700">{new Date(book.published_date).toISOString().split('T')[0]} | {book.name}</p>
            <p className="text-gray-800">{book.description}</p>
            <div>
              <h2 className="text-lg font-semibold">Popular Reviews</h2>
              <p className="text-gray-600">Foo bar</p>
            </div>
          </div>
          
          <div className="flex flex-col items-end">
            <h2 className="text-lg font-semibold">Rating</h2>
            <p className="text-2xl font-bold">3.1</p>
          </div>
        </div>
      </div>
    );
  }
  

  [
    {
      "id": 13,
      "title": "House of Leaves",
      "isbn": "9780375703768",
      "published_date": "2000-03-07",
      "description": "A postmodern horror story presented as a found manuscript.",
      "cover_image_url": null,
      "main_language": "English",
      "page_count": 709,
      "publisher": "Pantheon",
      "average_rating": "4.2",
      "rating_count": 0,
      "likes_count": 0,
      "views_count": 0,
      "comments_count": 0,
      "page_cover_img_url": null,
      "name": "Mark Z. Danielewski",
      "author_id": 12
    }
  ]