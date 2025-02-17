// react router comes with a hook we can use called 'useParams' that allow us to read route parameters

import { Link, useParams } from "react-router-dom"
import { findPlant } from "../stores/plantsInfo"


export default function IndividualPlant() {
    // how do we know which plant the user clicked on!
    const params = useParams()
    console.log(params)
    // we'll call findPlant and give it the id of the route paramater
    // then we'll have the current plants infromation

    // this findPlant function is something we wrote to take an id from useParams and return the plant object with the matching ID. 
    const plantInfo = findPlant(params.id)

    console.log(plantInfo)
    return (
        <section>
            <Link to='/plants'>back to plants</Link>
            <h2>This is the individual plant page!</h2>
            <img src={plantInfo.image} />
            <h2>{plantInfo.name}</h2>
            <p>{plantInfo.description}</p>
        </section>
    )
}