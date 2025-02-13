import Animal from "./Animal";

export default function AnimalList() {
    return (
        <section>
            {/* I write props like html attributes */}
            <Animal animal={'Lizard'} fav={false}/>
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
