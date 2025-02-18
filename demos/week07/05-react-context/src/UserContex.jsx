import {createContext} from "react"

// 1) create a context using createContext!
// if the component that 'consumes/uses' our context cannot find a provider, it will default back to using 'Sam' as the user context. 
// It's just a fallback
export const UserContext = createContext('Sam')

// 2. set up a Provider
// use the .Provider function from the UserContext we created as the first step, and pass in a value
export function UserProvider({children}) {
    
    return (
        <UserContext.Provider value={'Something else'}>
            {children}
        </UserContext.Provider>
    )
}

// 3. wrap the parts of the application that need to know the context in the Provider. For the purposes of this demo, I'll do it it in my App.jsx
