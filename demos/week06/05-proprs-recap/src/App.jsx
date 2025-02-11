import Painting from "./components/Painting"

export default function App() {
  return (
    // these are called fragments - 
    <>
      <h2>This is my page!</h2>
      <p>This is how to pass props</p>
      <p>We pass props like we write html attributes</p>
      <Painting painting="https://miro.medium.com/v2/resize:fit:584/1*58vziXRx1l8pQBSQVeHABg.jpeg" alt_text="alt text"/>
      <p>This is a p tag seprating our component calls</p>
      <Painting />
      <Painting />
      <Painting />
      <Painting />
      <Painting />
      <Painting />
      <Painting />
    </>
  )
}

// Painting({painting: "http", alt_text: 'alt text'})


// sum({firstNumber: 45, secondNumber: 64})