import { UserProvider } from "./UserContex"
import ProfilePage from "./components/ProfilePage"

export default function App() {
  return (
    <div>
      <UserProvider>
      <RendersChildren> 
        <h2>Hello, this is a child element</h2>
        <ProfilePage />
      </RendersChildren>
      </UserProvider>
    </div>
  )
}

function RendersChildren({children}) {
  console.log(children)
  return (
    <div className="flex">
      {children}
    </div>
  )
}


// <Context Provider> App -> ProfilePage -> ProfileInformation </ContextProvider>