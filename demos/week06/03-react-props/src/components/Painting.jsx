// export default function Painting(props) {
//     console.log(props)
//     return (
//         <>
//             <p>Painting name</p>
//             <p>Userposted: {props.theUserName}</p>
//             <img src={props.img_src} />
//         </>
//     )
// }


export default function Painting({img_src, painterName}) {
    return (
        <>
            <p>Painting name</p>
            <p>Userposted: {painterName}</p>
            <img src={img_src} />
        </>
    )
}