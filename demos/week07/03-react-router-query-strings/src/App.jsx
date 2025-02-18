import { Link, Route, Routes } from "react-router-dom";
import Animals from "./pages/Animals";

export default function App() {
  return (
    <div>
      <Link to='/'>home</Link>
      <Link to="/animals">animals</Link>
      <Routes>
        <Route path="/animals" element={<Animals /> } />
      </Routes>
    </div>
  )
}