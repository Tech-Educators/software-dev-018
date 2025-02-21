import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import Post from './pages/Post'
import IndividualPosts from './pages/IndividualPosts'
export default function App() {
  return (
    <div>
      <div>
        <Link to={'/posts'}>posts</Link>
        <br />
        <Link to={'/'}>home</Link>
      </div>
      <Routes>
        <Route path={'/'} element={<p>Home page</p>} />
        <Route path={'/posts'} element={<Post />} />
        {/* dynamic route  */}
        <Route path={'/posts/:id'} element={<IndividualPosts />} />
      </Routes>
    </div>
  )
}