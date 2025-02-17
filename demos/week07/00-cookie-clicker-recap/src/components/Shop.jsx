import { useState, useEffect } from "react"

export default function Shop({state, setState}) {
    const [upgrades, setUpgrades] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://cookie-upgrade-api.vercel.app/api/upgrades`)
            const data = await res.json()
            setUpgrades(data)
        }

        fetchData()

    }, []) 

    // figure out if the user can buy something
    function handlePurchase(upgrade) {
        // the user has enough cookies to buy the upgrades
        if (state.cookies >= upgrade.cost) {
            setState((currentState) => (
                {
                    ...currentState,
                    cookies: currentState.cookies - upgrade.cost,
                    cps: currentState.cps + upgrade.increase,
                    purchasedItems: [...currentState.purchasedItems, upgrade]
                }
            ))
        }
        console.log(state)
    }

     // a small function to find out how many of each items I've bought

  function findAmount(upgradeID) {
    return state.purchasedItems.filter(upgrade => upgrade.id === upgradeID).length
  }


    return (
        <div>
            {upgrades.map((item) => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Times Purchased: {findAmount(item.id)}</p>
                    <p>COSTS: {item.cost} | Increases CPS: {item.increase}</p>
                    <button onClick={() => {
                        handlePurchase(item)
                    }}>Buy Item</button>
                </div>
            ))}
        </div>
    )
}

// 1. fetch data from our api

// 2. map through the data to get it on the page.
