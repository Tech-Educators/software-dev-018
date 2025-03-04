import Button from "@/components/Button";
import Example from "@/components/Example";
import ServerComponent from "@/components/ServerComponent";


export default function Page() {
  return (
    <div>
      <h2>Welcome to my cool clicker site!!</h2>
      <p>not a cookie clicker</p>
      {/* by default all things in nextjs are srver componnets, and you can import client components into servrs just fine and use them. This page is still rendered on the server. */}
      {/* Button is rendered on the client. */}
      <Button>
        {/* this server component still runs on the server! */}
        {/* its only IMPORTING a component into a client component that will cause the type to change */}
        <ServerComponent />
      </Button>
      <Example />
    </div>
  )
}