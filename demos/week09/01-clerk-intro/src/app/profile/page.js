import {currentUser, auth} from "@clerk/nextjs/server"
import Image from "next/image"

export default async function Page() {
    const user = await currentUser()
    const currentAuth = await auth()

    if (!user) { 
        return <div>Not signed in</div>
    }

    console.log(user)
    console.log(currentAuth)
    return (
        <div>
            <div>
                Hello, {user.firstName}, welcome to my site!
                <Image height={500} width={500} alt='user profile avatar' src={user.imageUrl} />
            </div>
        </div>
    )
}