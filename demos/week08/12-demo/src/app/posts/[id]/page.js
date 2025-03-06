import DeleteButton from "@/components/DeleteButton"
export default async function Page() {
// this page would display all posts and the comments for that post
    const comments = []
    async function deleteComment(id) {
        'use server'
        const db = new pg.Pool({connectionString: process.env.db})
        await db.query(`DELETE FROM comments WHERE id = $1`, id)
        // whatever else you awant to do 
    }

    return (
        <section>
            {/* post stuff */}
            {comments.map(comment => (
                <div>
                    <p>{comment.content}</p>
                    <DeleteButton id={comment.id} deleteFunction={deleteComment} />
                </div>
            ))}
        </section>
    )
}