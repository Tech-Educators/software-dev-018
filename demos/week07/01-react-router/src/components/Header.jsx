
// the cooler anchor tag
import { Link } from "react-router-dom"

export default function Header() {
    return (
        // using the Link component instead of the anchor tag allows react-router to just swap out the html instead of refreshing the page.
        <nav>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/about'>About us</Link>
            <br />
            <Link to='/contact'>Contact us</Link>
            <br />
        </nav>
    )
}