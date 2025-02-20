    SELECT books.*, array_agg(genres.name) AS genres
                    FROM books
                    LEFT JOIN 
                    book_genres ON books.id = book_genres.book_id
                    LEFT JOIN
                    genres ON book_genres.genre_id = genres.id
                    WHERE books.id = $1
                    GROUP BY books.id