import './App.css'
// import two more things
import {Route, Routes} from "react-router-dom"
import Contact from './pages/Contact'
import Header from './components/Header'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <section>
      <Header />
      <h2>my cool app</h2>
      {/* We wrap all of our Route elements in the Routes element */}
      <Routes>
          <Route path={'/'} element={<p>Home page</p>} />
          <Route path={'/about'} element={<p>welcome to about page</p>} />
          {/* we can also give components as the element */}
          <Route path={'/contact'} element={<Contact/>} />
          {/* catchall * */}
          <Route path={'*'} element={<NotFound />} />
      </Routes>
    </section>
  )
}