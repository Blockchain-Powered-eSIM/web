import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.svg";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
	return (
		<div className="container w-full">
			<NavigationMenu className="rounded-full p-6 bg-esim-black-50">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink>
								<Image src={Logo} alt="Logo" width={100} height={100} />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem> Hamburger</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
};
NavBar.displayName = "Nav";

export { NavBar };
