import Button from "./components/Button"
import FancyButton from "./components/FancyButton"

export default function App() {
  
  function sayHello() {
      console.log('Hello')
  }

  function sayGoodbye() {
    console.log('Goodbye')
  }

  return (
    <main>
      <FancyButton theFunctionToRun={sayHello} text='I say hello!' />

      <FancyButton theFunctionToRun={sayGoodbye} text={'I say goodbye'} />
      
      <Button />
    </main>
  )
}

