

const movieInfo = {
    name: 'Star Wars',
    year: 1977,
    director: 'George Lucas',
    actors: 'Mark Hamill'
}

// const movieINfo2 = {
//     name: 'Star Wars 2',
//     year: 1980,
//     director: 'George Lucas',
//     actors: 'Mark Hamill'
// }

// we can use the spread opator to 'copy' information from one object into a new object

const movieInfo2 = {
    ...movieInfo,
    year: 1980,
    name: 'Star Wars 2',
    rating: 5
}

console.log(movieInfo2)


let cookieInfo = {
    cookies : 0,
    cps: 1,
    purchases: []
}

function buySomething() {
    // if statement to check if I can buy

    cookieInfo = {
        ...cookieInfo,
        purchases: purchases.push('new item')
    }


    // in react

    const setState = () => {}

    setState(prevState => (
        {
            ...prevState,
            cookies: cookies + 1
        }
    ))
}
