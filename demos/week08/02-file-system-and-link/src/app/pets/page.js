import Link from "next/link"

export default function Page() {
    const pets = [
        {
            id: 0,
            name: 'Archer',
            type: 'Husky'
        }, {
            id: 1,
            name: 'Maisie',
            type: 'Lurcher'
        }, {
            id: 2,
            name: 'Bella',
            type: 'Cocker Spaniel'
        }, {
            id: 3,
            name: 'Elsa',
            type: 'Lurcher'
        }
    ]
    return (
        <div>
            {pets.map(pet => (
                <div key={pet.id}>
                    <br />
                    <Link href={`/pets/${pet.id}`}>{pet.name}</Link>
                </div>
            ))}
        </div>
    )
}