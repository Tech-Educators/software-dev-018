import { plants } from "../stores/plantsInfo"
import { Link } from "react-router-dom"

export default function Plants() {
    return (
        <section>
            {plants.map((plant) => (
                <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
            ))}
        </section>
    )
}