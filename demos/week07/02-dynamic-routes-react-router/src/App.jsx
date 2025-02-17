import {Routes, Route} from "react-router-dom"
import Plants from "./pages/Plants"
import IndividualPlant from "./pages/IndividualPlant"

export default function App() {
  return (
    <div>
      <h2>Sams plant app</h2>
      <Routes>
        {/* all plants */}
        <Route path={'/plants'} element={<Plants />} />
        {/* route for individual plants */}
        <Route path={`/plants/:id`} element={<IndividualPlant />} />
      </Routes>
    </div>
  )
}