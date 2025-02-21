import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Post() {
    const [posts, setPosts] = useState([])
    
    // empty dep array - on component mount, run the effect
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
            const data = await res.json()
            setPosts(data)
        }

        fetchData()
    }, [])
    return (
        <section>
            {posts.map(post => (
                <Link to={`/posts/${post.id}`}>{`${post.title.slice(0, 8)}...`}</Link>
            ))}
        </section>
    )
}

// how to fetch data:
// 1. 