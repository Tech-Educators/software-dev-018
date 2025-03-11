// how to type page params
/// all page files get an object like this 
type pageParams = {
    params: {id: string}
}

export default async function Page({params} : pageParams) {
    // how do I know what pet I'm looking at? 

    const {id} = await params

    console.log(id)
    return (
        <div>
            <h2>This is the pets page!</h2>
        </div>
    )
}

// OR DO THIS 

// export default async function Page({params} : {params: {id: string}}) {
//     // how do I know what pet I'm looking at? 

//     const {id} = await params

//     console.log(id)
//     return (
//         <div>
//             <h2>This is the pets page!</h2>
//         </div>
//     )
// }