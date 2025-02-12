import {useState, useEffect, use} from "react"

export default function App() {
  const [posts, setPosts] = useState([])

  // we set up our effect, that we only fetch data the first time the component runs

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
      const data = await res.json()
      setPosts(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

// i'll want to store my data in use state, so my component displays the data when its finished fetching 

// your 'effects' run after the intial render of the code, so we put the data in state, so the component automatically re-renders when we're done fetching

// I dont watn to fetch evrytime state changes, so i'll fetch inside a useEffect.

// I'll then map through the data that i got back from my api.