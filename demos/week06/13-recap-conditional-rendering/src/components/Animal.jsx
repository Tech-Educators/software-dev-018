export default function Animal({animal, fav}) {

    // more useful if there is a significant change in the whole component based on a condition. 
    // if (fav) {
    //     return (
    //         <div>
    //             <p>I love {animal}</p>
    //             <h2>Fooo</h2>
    //         </div>
    //     )
    // } else {
    //     return <p>I dont care for {animal}</p>
    // }

    // 
    return (
        <>
            <h2>{animal}</h2>
            {/* fav is true? do this : otherside do this */}
            <p>{fav ? '❤️' : ''}</p>

            {/* or we could use the AND logical operator */}
            <p>{fav && 'I love this animal a lot'}</p>
        </>
    )
}


// function sum(a) {
//     if (a) {
//         return a + 10
//     }
//     return 1 + 10
// }

// const hi = sum(4) // 14

// const bye = sum() // 11


// const hello = if (x) {console.log('hi')}