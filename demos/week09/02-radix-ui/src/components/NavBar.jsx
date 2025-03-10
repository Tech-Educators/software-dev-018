import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "./NavBar.module.css"

export const NavigationBar = () => {
	return (
		<NavigationMenu.Root className={styles.Root}>
			<NavigationMenu.List className={styles.MenuList}>
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={styles.Trigger}>
						Learn <CaretDownIcon className={styles.CaretDown} aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className={styles.Content}>
						<ul className={`${styles.List} one`}>
							<li style={{ gridRow: "span 3" }}>
								<NavigationMenu.Link asChild>
                                    <p>This is on the left of the trigger</p>
								</NavigationMenu.Link>
							</li>

							<ListItem href="https://stitches.dev/" title="Sam">
								Fall asleep to a radix lesson
							</ListItem>
							<ListItem href="/colors" title="Angelica">
								Marks your work with gusto
							</ListItem>
							<ListItem href="https://icons.radix-ui.com/" title="Tim">
								Where is tim!?
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Trigger className={styles.Trigger}>
						Overview <CaretDownIcon className={styles.CaretDown} aria-hidden />
					</NavigationMenu.Trigger>
					<NavigationMenu.Content className={styles.Content}>
						<ul className={`${styles.List} two`}>
							<ListItem
								title="Introduction"
								href="/primitives/docs/overview/introduction"
							>
								Build high-quality, accessible design systems and web apps.
							</ListItem>
							<ListItem
								title="Getting started"
								href="/primitives/docs/overview/getting-started"
							>
								A quick tutorial to get you up and running with Radix
								Primitives.
							</ListItem>
							<ListItem title="Styling" href="/primitives/docs/guides/styling">
								Unstyled and compatible with any styling solution.
							</ListItem>
							<ListItem
								title="Animation"
								href="/primitives/docs/guides/animation"
							>
								Use CSS keyframes or any animation library of your choice.
							</ListItem>
							<ListItem
								title="Accessibility"
								href="/primitives/docs/overview/accessibility"
							>
								Tested in a range of browsers and assistive technologies.
							</ListItem>
							<ListItem
								title="Releases"
								href="/primitives/docs/overview/releases"
							>
								Radix Primitives releases and their changelogs.
							</ListItem>
						</ul>
					</NavigationMenu.Content>
				</NavigationMenu.Item>

				<NavigationMenu.Item>
					<NavigationMenu.Link
						className={styles.Link}
						href="https://github.com/radix-ui"
					>
						Github
					</NavigationMenu.Link>
				</NavigationMenu.Item>

				<NavigationMenu.Indicator className={styles.Indicator}>
					<div className={styles.Arrow} />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>

			<div className={styles.ViewportPosition}>
				<NavigationMenu.Viewport className={styles.Viewport} />
			</div>
		</NavigationMenu.Root>
	);
};

// .Item for each of the actual items in your list
// .Trigger for items that will a box dropdown.

const ListItem = React.forwardRef(
	({ className, children, title, ...props }, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<a
					className={classNames(styles.ListItemLink, className)}
					{...props}
					ref={forwardedRef}
				>
					<div className={styles.ListItemHeading}>{title}</div>
					<p className={styles.ListItemText}>{children}</p>
				</a>
			</NavigationMenu.Link>
		</li>
	),
);

export default NavigationMenu;
