import express from "express";

const app = express();

// pretend we are getting information from a database
const books = [
  { name: "The Hobbit", year: 1937 },
  { name: "Dune", year: 1965 },
  { name: "Harry Potter", year: 1997 },
  { name: "The BFG", year: 1982 },
  { name: "Charlie and the Chocolate Factory", year: 1964 },
  { name: "The Secret Garden", year: 1911 },
  { name: "Cold Mountain", year: 1997 },
];

app.get("/", (request, response) => {
  console.log("Test");
  response.json("You are looking at my root route. How roude!");
});

app.get("/books", (request, response) => {
  console.log(request.query);

  const filteredBooks = books.filter((book) => book.year == request.query.year);

  // same thing, but with a normal function
  //   const filteredBooks = books.filter(function(book){
  //     return book.year == 1997
  //   });

  response.json(filteredBooks);
});

app.listen(8080, () => console.log("App is running on PORT 8080"));
