const app = document.getElementById("app");
const API_URL = "https://book-mono-repo-server.onrender.com";

// make a fetch to our server
async function getBooks() {
  const response = await fetch(`${API_URL}/books`);
  const data = await response.json();
  console.log(data);

  data.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = `${book.name} - ${book.year}`;
    app.appendChild(p);
  });
}

getBooks();

// put the information from the fetch onto the page

// deploy both client and server to render

// fix the issue where the client doesn't work properly on render
