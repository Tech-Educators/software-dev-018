import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

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
  response.json("Woahay! Its working!");
});

app.get("/books", (request, response) => {
  response.json(books);
});

app.listen(8080, () => console.log("Woop! App is running in 8080!"));
