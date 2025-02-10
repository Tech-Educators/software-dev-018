// React components need to be Uppercase letters
import Otter from "./Otter"

import ButtonList from "./ButtonList"
export default function Card() {
    // normal functions that you've written inside should still follow the camelCase syntax.
    async function fetchData() {
        // if i was fetchign some data
    }

    // adding ()'s in your return allows you to returns across multiple lines.
    return (
        <div>
            <p>This is my OtterInfo!</p>
            <Otter />
            <ButtonList />
        </div>
    )
}

// `otter.js`
// `Otter.js`
// `otter.jsx`


// `Otter.jsx`