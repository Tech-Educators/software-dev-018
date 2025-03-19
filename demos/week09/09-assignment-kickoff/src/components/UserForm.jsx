import {auth} from "@clerk/nextjs/server"
import { connect } from "@/utils/connect"

export default async function UserForm() {
    // get user id from clerk
    const {userId} = await auth()

    // server action to update my database
    async function handleSubmit(formData) {
        'use server'
        // turning form data into a normal object and destructuring into variables
        const {username, bio} = Object.fromEntries(formData)
        
        const db = connect()
        db.query(`INSERT INTO user_accounts (username, bio, clerk_id) VALUES ($1, $2, $3)`, [username, bio, userId])

    }

    return (
        <form action={handleSubmit}>
            <input name='username' placeholder="enter a username"/>
            <input name='bio' placeholder="enter a bio"/>
            <button type="submit">submit</button>
        </form>
    )
}

// inserting a new post:
// call auth() to get clerk's id for the currently logged in user
// run a db query to get the YOUR id for the currently logged in user - remember clerk_id and your user table database ID are different
// on form submit, submit the form content along with the YOUR user id. 