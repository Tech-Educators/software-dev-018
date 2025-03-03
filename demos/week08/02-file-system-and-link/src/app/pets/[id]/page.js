// if we're using params, our component needs to be aasync
// all PAGE.JS files get this object {params: Promise, searchParams: Promise}
// so we're desctruting the params
// params are async so we need to await the id
export default async function Page({params}) {
    // getting params 
    // we are destructing the id property out of params.
    // its id, because that's what I named the dynamic route segement [id]
    const {id} = await params
    console.log(id)
    return (
        <div>
            <h2>This is my dynamic route</h2>
            <p>The current ID is: {id}</p>
        </div>
    )
}

/** 
 * 
 * /pets/sam
 * /pets/0
 * /pets/2
 */

// in react router we used:
// useParams() to find out the value of our dynamic route 


// in Next.js, we don't need to call a function
// in your page, just destructure params ({params})
// params are async, so make sure to make your pages that use params async
// so you can await the pararms.
// ALL PAGE.JS get an object that has params and searchParams properties