import Link from "next/link"

export default async function Page() {

    const res = await fetch(`https://dummyjson.com/users`)
    const data = await res.json()
    const users = data.users
    
    console.log(users)
    return (
        <section>
            < br />
            {users.map(user => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        <h2>{user.firstName}</h2>
                        <p>{user.university}</p>
                    </Link>
                </div>
            ))}
            < br />
        </section>
    )
}