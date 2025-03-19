export default async function Page() {

    const res = await fetch(`http://localhost:3001/api/pets`)
    const pets = (await res.json()).petsInfo

    return (
        <div>
            <h2>Pets page: </h2>
            {pets.map(pet => (
                <p>{pet.name}</p>
            ))}
        </div>
    )
}