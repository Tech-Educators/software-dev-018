import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import BooksPage from "./pages/BooksPage"
import IndividualBooksPage from "./pages/IndividualBooksPage"
import NewBookForm from "./components/BookForm"
export default function App() {
  return (
    <main>
      <NavBar />
      <NewBookForm />
      <Routes>
        <Route path={'/'} element={<p>Home</p>}></Route>
        <Route path={'/books'} element={<BooksPage />}></Route>
        <Route path={'/books/:id'} element={<IndividualBooksPage />}></Route>
      </Routes>
    </main>
  )
}