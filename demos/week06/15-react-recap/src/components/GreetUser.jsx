
// I need to tell this GreetUser component that it will get props
export default function GreetUser({name, userLocation, handleClick}) {

    // destructuing is just a more elegany way of doing what the code below does.
    // const name = infoFromProps.name // Sam
    // const userLocation = infoFromProps.userLocation // ;Liverpool'
    return (
       <>
       <p>{name}, {userLocation}</p>
       <button onClick={handleClick}>Click me!</button>
       </>
    )
}