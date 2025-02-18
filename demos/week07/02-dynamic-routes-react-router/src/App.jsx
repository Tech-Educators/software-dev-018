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
        {/* we are going to have a nested route */}
        
        <Route path={`/plants/:id`} element={<IndividualPlant />}>
          {/* /plants/id/edit */}
          {/* /plants/id/photos */}
          {/* in the parent component (individualPlant) we need to add an <Outlet> component */}
          <Route path='edit' element={<p>Edit this plant!</p>} />
          <Route path='photos' element={<p>Lots of cool pictures</p>} />
        </Route>

      </Routes>
    </div>
  )
}