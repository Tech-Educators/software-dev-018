import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import {
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
  } from '@clerk/nextjs'
import { federo } from "@/stores/fonts";
import Link from "next/link";


const NavBar = ({username}) => {
	return (
		<NavigationMenu.Root className="relative z-10 flex w-screen justify-center">
			<NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white p-1 shadow-[0_2px_10px] shadow-blackA4">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
						books{" "}
						<CaretDownIcon
							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
						<ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
							<ListItem
								title="books"
								href="/books"
							>
								search for books
							</ListItem>
							<ListItem
								title="popular"
								href="/books?sortBy=activity"
							>
								view whats popular. poser!
							</ListItem>
							<ListItem
								title="reviews"
								href="/book-reviews"
							>
								view the latest book reviews
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
                <NavigationMenu.Item>
					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
						authors{" "}
						<CaretDownIcon
							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
						<ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
							<ListItem
								title="books"
								href="/authors"
							>
								view authors
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>
                <NavigationMenu.Item>
					<NavigationMenu.Link
						className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
						href="/blog"
					>
						
					</NavigationMenu.Link>
				</NavigationMenu.Item>
				<NavigationMenu.Item>
					<NavigationMenu.Link
						className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
						href="/profile"
					>
						{username}
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
					<div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm bg-white" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
				<NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
			</div>
		</NavigationMenu.Root>
	);
};

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames(
						"block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
						className,
					)}
					{...props}
					ref={forwardedRef}
				>
					<div className="mb-[5px] font-medium leading-[1.2] text-violet12">
						{title}
					</div>
					<p className="leading-[1.4] text-mauve11">{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);


export default function  Navigation() {
    return (
        <nav className=" bg-[#2e5c73] flex justify-center items-center p-4 gap-4 w-full bg-white-400 bg-clip-padding max-h-[9.67vh]">
			<h2 className={`${federo.className} text-2xl md:text-3xl text-white mt-2 p-2 w-auto`}><Link href='/'>Ok Reads</Link></h2>
			<NavBar username={'wormking'}/>
			<div className='flex md:flex-row md:gap-10'>
				<SignedOut>
					<SignInButton />
					<SignUpButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
        </nav>
    )
}
