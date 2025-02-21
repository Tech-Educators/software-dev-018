import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function IndividualPosts() {
    const [post, setPost] = useState('')
    // get the dynamic route parameters 
    // useParams reutnrs an object with our route infromation
    const {id} = useParams()
    
    useEffect(() => {
        async function fetchPost() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json()
            setPost(data)
        }
        fetchPost()
    }, [])
    return (
        <div>
            <h2>This is the individual post page!</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}