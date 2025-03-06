import Link from "next/link"
// all page.js files get an object 
// of searchParams and params

export default async function Page({searchParams}) {
    // just like params, serach params are async 
    const search = await searchParams

    // if the url is: http://localhost:3000/users?name=sam&sortby=asc
    // the search is this: {name: 'sam', sortby: 'asc'}
    console.log(search)

    // getting our data.
    const res = await fetch(`https://dummyjson.com/users`)
    const data = await res.json()
    const users = data.users

    // if the sort === asc 
        // we'll sort by alphabetical order 
    // else if sort == dec
        // we'll sort by alphabetical order (reversed)

    if (search.sortby === 'desc') {
        // so a and b are two objects in our users array
        users.sort((a, b) => {
            console.log(a.firstName, b.firstName)
            // I'm calling localeCompare on the firstnames of a and b 
            // it will return a positive or negative number
            // which tells sort to either swap them or not.
            return b.firstName.localeCompare(a.firstName)
        })
    } else if (search.sortby === 'asc') {
        users.sort((a,b) => {
            // this will do th reverse of what we did on the first sort.
            return a.firstName.localeCompare(b.firstName)
        })
    }
    // if no sort
        // default order


    console.log(users)
    return (
      <>
        <div className="flex gap-10">
            <Link href='/users'>dont sort</Link>
            <Link href='/users?sortby=asc'>asc</Link>
            <Link href='/users?sortby=desc'>desc</Link>
        </div>
        <div className="flex flex-wrap">
            {users.map((user) => (
                <div key={user.id} className="m-8 bg-white  shadow-xl text-black w-fit p-5">
                    <p>{user.firstName} {user.lastName}</p>
                    <p>{user.birthDate}</p>
                    <p>{user.address.city}</p>
                </div>
            ))}
        </div>
      </>
    )
}


// I want a page (route) with all my users listed on it. 
// devs have provided me with an api to fetch my users from
// https://dummyjson.com/users
// display them on the page

// we don't need to display indivdual users at this time 