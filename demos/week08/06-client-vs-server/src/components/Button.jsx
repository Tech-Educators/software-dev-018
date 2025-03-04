'use client'
import {useState} from "react"
import Example from "./Example"

export default function Button({children}) {
    const [count, setCount] = useState(0)

    console.log(count)
    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+ 1</button>
            <p>{count}</p>
            {children}
            {/* if we import a server component into a client component, it becomes a client component aswell. */}
            <Example />
        </div>
    )
}