
// this function has to be called generateMetadata
export async function generateMetadata({params}) {
    const {id} = await params

    const res = await fetch(`https://dummyjson.com/users/${id}`)
    const userData = await res.json()

    return {
        title: `${userData.firstName}'s page on User!`,
        description: `${userData.firstName} works as ${userData.company.department}`,
        openGraph: {
            title: `${userData.firstName}'s page on User! Join now!`,
            description: `${userData.firstName} is the most interesting user on Userz! Please don't call their phone number (${userData.phone})`
        }
    }
}

export default async function Page({params}) {
    const {id} = await params

    const res = await fetch(`https://dummyjson.com/users/${id}`)
    const userData = await res.json()

    console.log(id)
    return (
        <div>
            <h2>This is the current User: </h2>
            <p>{userData.firstName} {userData.lastName}</p>
            <p>Works for: {userData.company.department}</p>
        </div>
    )
}