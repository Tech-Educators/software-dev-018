// dynamic route for all users
import { connect } from "@/utils/connect"
import { notFound } from "next/navigation"

export default async function Page({params}) {
    const {id} = await params

    const db = connect()

    // check if the user id is in our database
    const userInfo = await db.query(`SELECT * FROM user_account WHERE id = $1`, [id])


    console.log(userInfo)
    if (userInfo.rowCount == 0) {
        notFound()
    }
    // if not in the database, show the UserForm component

    // if in the database, show user data.
    return (
        <div>
            <p>Welcome to {userInfo.rows[0].username}'s page</p>
        </div>
    )
}