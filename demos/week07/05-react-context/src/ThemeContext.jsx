import { createContext, useEffect } from "react";
import {useState} from "react"
// 1. create my context

export const ThemeContext = createContext('light-theme')

//2. Create my provider

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light')

    // I'll use a useEffect to run a side effect -> changing the document.body class when the theme state variable changes. 
    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme'
    }, [theme])

    // this function toggles the value of our theme to light or dark.
    function toggleTheme() {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}