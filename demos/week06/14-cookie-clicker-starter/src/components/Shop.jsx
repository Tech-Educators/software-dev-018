import {useEffect, useState} from "react"

export default function Shop({setCPS, cps}) {
    // console.log('running shop')
    const [upgrades, setUpgrades] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
            const data = await res.json()
            setUpgrades(data)
        }
        fetchData()
    },[])

    return (
        <section>
            {upgrades.map((upgrade) => (
                <div key={upgrade.id}>
                    <p>{upgrade.name}</p>
                    <button onClick={() => {setCPS(cps + 1); console.log(cps)}}>CPS</button>
                </div>
            ))}
        </section>
    )
}