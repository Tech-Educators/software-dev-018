'use client'

export default function Error({error, reset}) {
    // console.error(error.message)
    return (
        <>
          <h2>Something went wrong! </h2>
          <button onClick={() => reset()}>try again</button>
        </>
    )
}
