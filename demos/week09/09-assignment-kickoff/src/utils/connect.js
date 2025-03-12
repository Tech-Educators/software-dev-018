import pg from "pg"

export function connect() {
    let db; 
    if (!db) {
        db = new pg.Pool({connectionString: process.env.DB_CONN})
    }
    return db
}