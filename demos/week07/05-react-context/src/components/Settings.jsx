import { ThemeContext } from "../ThemeContext"
import { useContext } from "react"

export default function Settings() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    console.log(theme)
    return (
        <div>
            <p> {theme}</p>
            <br/>
            <button onClick={toggleTheme}>change theme</button>
        </div>
    )
}