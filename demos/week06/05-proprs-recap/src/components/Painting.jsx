
export default function Painting({painting, alt_text}) {
    console.log(painting)
    // using destructuring is the equlivant of doing this
    // let painting = props.painting
    // let alt_text = props.alt_text

    // props = {painting: "http", alt_text: 'alt text'}
    return (
        <img src={painting} alt={alt_text} className="painting"/>
    )
}

//replace Painting(props) and make it Painting({ painting, alt_text }) then you can use {painting} and {alt_text}


// function sum(a) {
//  // a = {firstNumber: 45, secondNumber: 64}
// }



// function Painting(props) {
//     console.log(props)
//     // props = {painting: "http", alt_text: 'alt text'}
// } 