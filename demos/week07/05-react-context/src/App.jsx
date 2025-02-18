import { UserProvider } from "./UserContex"
import ProfilePage from "./components/ProfilePage"
import NavBar from "./components/NavBar"
import { ThemeProvider } from "./ThemeContext"
import Settings from "./components/Settings"

export default function App() {
  return (
    <div>
      <UserProvider>
      <ThemeProvider>
        <RendersChildren> 
          <NavBar />
          <Settings />
          <h2 className="text-cyan-500">Hello, this is a child element</h2>
          <ProfilePage />
        </RendersChildren>
      </ThemeProvider>
      </UserProvider>
    </div>
  )
}

function RendersChildren({children}) {
  console.log(children)
  return (
    <div className="flex flex-col">
      {children}
    </div>
  )
}


// <Context Provider> App -> ProfilePage -> ProfileInformation </ContextProvider>