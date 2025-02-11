import {useState} from 'react'

export default function App() {
  console.log('App is rendering...')
  // we are destructuring an array.
  // useState returns an array of two things
  // - the variable
  // - the 'set'/update function
  const [showModal, setShowModal] = useState(false)

  function handleClick() {
    setShowModal(!showModal)
  }

  return (
    <main>
        <button onClick={handleClick}>toggle modal!</button>
        {/* conditional rendering! */}
        {showModal && <p>This is my modal</p>}

        {/* we can alos use something called a ternary operator */}

        {showModal ? <p>>:)</p> : <h2>This is the edit area. Modal not showing</h2>}
    </main>
  )
}

