import Animal from "./Animal";
import { useState } from "react";

export default function AnimalList() {
    const [number, setNumber] = useState(0)
    return (
        <section>
            {/* I write props like html attributes */}
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
