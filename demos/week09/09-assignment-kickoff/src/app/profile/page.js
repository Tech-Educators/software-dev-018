// this one will be for the currently logged in user
import {auth} from "@clerk/nextjs/server"
import { connect } from "@/utils/connect"
import UserForm from "@/components/UserForm"
export default async function Page() {
    const {userId, redirectToSignIn} = await auth()

    const db = connect()

    // check if the user id is in our database
    const userInfo = await db.query(`SELECT * FROM user_account WHERE clerk_id = $1`, [userId])

    if (!userId) return redirectToSignIn()

    console.log(userInfo)
    if (userInfo.rowCount == 0) {
        return (
            <div>
                <UserForm />
            </div>
        )
    }
    // if not in the database, show the UserForm component

    // if in the database, show user data.
    return (
        <div>
            <p>Hello, {userInfo.rows[0].username}</p>
        </div>
    )
}