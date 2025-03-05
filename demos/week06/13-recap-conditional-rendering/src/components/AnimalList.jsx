import Animal from "./Animal";
import { useState } from "react";

export default function AnimalList() {
    const [number, setNumber] = useState(0)
    return (
        <section>
            {/* I write props like html attributes */}
            {/* just an example of passing state down to a component - in this case I'm not actually using number or updateNumber, so you don't need to add them. */}
            <Animal animal={'Lizard'} fav={false} number={number} updateNumber={setNumber}/>
            <Animal animal={'Panther'} fav={true}/>
        </section>
    )
}

// Animal({animal: 'Lizard', fav: fasle})


// Animal List => Animal 

// Make up your two own list of things 
// for example
// BookList => Book 

// Pass different prop names for both lists you make
