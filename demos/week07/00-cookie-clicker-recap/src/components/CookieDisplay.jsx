export default function CookieDisplay({state, setState}) {

    function handleCookieClick() {
        // we're setting state to be a new object (and copying in the old 'currentState' object, and only modifying the cookies property.)
        setState(currentState => (
            {
                ...currentState,
                cookies: currentState.cookies + 1
            }
        
        )) 
    }
    return (
        <section>
            <p>{state.cookies}</p>
            <p>{state.cps}</p>
            <img src="https://png.pngtree.com/png-clipart/20221208/ourmid/pngtree-cartoon-cookies-png-image_6516299.png" alt="cookie" onClick={handleCookieClick}/>
        </section>
    )
}