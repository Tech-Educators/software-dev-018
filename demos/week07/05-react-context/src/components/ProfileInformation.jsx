import { UserContext } from "../UserContex"
import { useContext } from "react"

export default function ProfileInformation() {
    // Profile Infromation is going to 'consume' the context we're providing/created earlier.

    const user = useContext(UserContext)
    console.log(user)
    return (
        <section>
            <h2>The users name is!: {user}</h2>
        </section>
    )
}