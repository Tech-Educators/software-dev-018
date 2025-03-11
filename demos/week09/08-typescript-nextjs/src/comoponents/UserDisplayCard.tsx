import Image from "next/image"

export function UserDisplayCard({user, image} : {user: {name: string, location: string}, image: string}) {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.location}</p>
            <Image src={image} height={400} width={500} alt="sam" />
        </div>
    )
}

export function UserPage() {
    return (
        <div>
            <UserDisplayCard user={{name: 'Sam', location: 'liverpool'}} image='https://seoloafrica.co.za/wp-content/uploads/2023/10/Seolo-Blogs.png'/>
        </div>
    ) 
}