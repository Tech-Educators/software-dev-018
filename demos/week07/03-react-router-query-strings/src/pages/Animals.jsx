import { Link, useSearchParams } from "react-router-dom";

export default function Animals() {
    // useSearchParams returns an array, we're destructuing the first element out of the array.

    const [query, updateSearchParams] = useSearchParams()

    // query is now a special object type called URLSearchParams (kind of like FormData) 
    // we need to call .get() on it to get the actual value
    console.log(`The query is`, query.get('sort'))

    const animals = [
        "Pigeon",
        "Frog",
        "Cat",
        "Honeybadger",
        "Monkey",
        "Panda",
        "Elephant",
        "Dog",
        "Lion",
        "Tiger",
        "Eagle",
        "Guinea Pig",
        "Possum",
      ];

    // to find the value of sort in our query string:
    const sort = query.get('sort')

    if (sort === 'asc') {
        // works find for most stirngs
        animals.sort()
    } else if (sort === 'desc') {
        animals.sort().reverse()
    }
    
    // this is ONLY for doing the form. 
    function handleSort(event) {
        console.log('form changed')
        console.log(event.target.value)
        // takes an object of what you want the search params to be 
        // calling updateSearchParams causes the client to 'navigate'
        updateSearchParams({sort: event.target.value})
    }
    return (
        <section>

            <form>
                {/* set the default value on the select tag */}
                <select onChange={handleSort} value={query.get('sort') || ''}>
                    <option value="">select..</option>
                    <option value="asc">asc</option>
                    <option value="desc">desc</option>
                </select>
            </form>

            {/* if you use the below, you dont need to do the form stuff! */}
            <h2>The animals page!</h2>
            {/* ill make fake buttons that are actually just links */}
            <Link to='/animals'>Don't sort</Link>
            <br />
            <Link to='/animals?sort=asc'>sort by asc</Link>
            <br />
            <Link to='/animals?sort=desc'>sort by desc</Link>

            <ul>
                {animals.map(animal => (
                    <li key={animal}>{animal}</li>
                ))}
            </ul>
        </section>
    )
}