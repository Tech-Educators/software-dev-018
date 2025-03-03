import Link from "next/link"
export default function NavBar() {
    return (
        <nav>
            {/* causes the page to refresh */}
            {/* <a href='/about'>a tag</a> */}
            {/* doesn't cause the page to refresh */}
            <Link href={'/'}>Home</Link>
            <br />
            <Link href={'/about'}>About</Link>
            <br />
            <Link href='/pets'>pets</Link>

        </nav>
    )
}