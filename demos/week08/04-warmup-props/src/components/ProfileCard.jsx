// destructuing the incoming arguments.
// settign default props
// if I pass a name, it'll use that name, if I don't pass a name prop it'll default to angelica
export default function ProfileCard({age, name = 'Angelica', location}) {
    return (
        <div>
            <h2>{name}</h2>
            {age ? <p>Age:  {age}</p> : <p>Age not provided!</p>}
            {location ? <p>Location - {location}</p> : <p>location not provided!</p>}
        </div>
    )
}

// using our component - giving it arguments
{/* <Profile age={25} name='sam' location='liverpool' /> */}