import Card from "./components/Card"
import Button from "./components/Button"
import Footer from "./components/Footer"


export default function App() {
  return (
    <div className="coolDiv">
        <Button />
      <h2>This is my first react application!</h2>
      <p>I can keep adding more tags!!!</p>
      <Card />
      <Footer />
    </div>
  )
}

// A 'componenent' is a function that returns JSX. (FAKE HTML)