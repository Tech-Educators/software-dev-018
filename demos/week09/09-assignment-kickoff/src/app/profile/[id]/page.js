// dynamic route for all users
import { connect } from "@/utils/connect"
import { notFound } from "next/navigation"
import { clerkClient } from "@clerk/nextjs/server"

export default async function Page({params}) {
    const {id} = await params

    const db = connect()

    // check if the user id is in our database
    const userInfo = await db.query(`SELECT * FROM user_accounts WHERE id = $1`, [id])

    console.log('DATABASE', userInfo)
    let user;
    try {
        const client = await clerkClient()
        user = await client.users.getUser(userInfo.rows[0].clerk_id);

        console.log("Clerk User:", user);
    } catch (e) {
        console.error("Error fetching user from Clerk:", e);
        user = null;
    }

    if (userInfo.rowCount == 0) {
        notFound()
    }
    // if not in the database, show the UserForm component

    // if in the database, show user data.
    return (
        <div>
            <p>Welcome to {userInfo.rows[0].username}'s page</p>
            <img src={user.imageUrl} />
        </div>
    )
}