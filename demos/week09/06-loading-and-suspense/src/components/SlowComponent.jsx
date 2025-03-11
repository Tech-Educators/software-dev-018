// this function takes 5 second to do nothing!
async function delay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
}

export default async function SlowComponent() {
    await delay()
    return (
        <p>I'm very slow, but I'm here at last! I made it! 💪</p>
    )
}