import {useState, useEffect} from "react"

export default function App() {
  console.log('Component running')
  const [count, setCount] = useState(0)
  const [post, setPosts] = useState([])

  const [changeState, setChangeState] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

// we call the empty array the 'dependecy' array
// when the values in the dependecy array change, readct will re-run the effect (function) provided as the first arguemtn 

// giving it an empty array
// tells react to only run the provided effect (function) when the component first run & never again.
  useEffect(() => {
    console.log('I only run when the component loads for the first time')
    
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
      const data = await res.json()
      setPosts(data)
    }

    fetchData()

  }, [changeState])


  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={() => setChangeState(changeState + 1)}>{changeState} this one causes effect to run</button>
      {post.map(post => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  )
}
