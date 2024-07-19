import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.svg";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogHeader,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { siteConfig } from "@/config/site";
import { DialogDescription } from "@radix-ui/react-dialog";

const NavBar = () => {
	return (
		<div className="container w-full pt-6 ">
			<nav className="flex justify-between items-center bg-ship-cove-50 rounded-full p-6">
				<Link href="/" legacyBehavior passHref>
					<Image src={Logo} alt="Logo" width={100} height={100} />
				</Link>
				<Dialog>
					<DialogTrigger>
						<Menu />
					</DialogTrigger>
					<DialogContent className="bg-ship-cove-50 rounded-3xl w-10/12 top-[23%]">
						<DialogHeader className="flex">
							<DialogTitle className="flex justify-start -mt-2">
								<Image src={Logo} alt="Logo" width={100} height={100} />
							</DialogTitle>
							<DialogDescription className="flex flex-col gap-6 pt-4">
								{siteConfig.socials.map((social) => (
									<a
										key={social.title}
										href={social.href}
										className="flex items-center gap-1"
									>
										<div className="relative h-8 w-8">
											<Image src={social.icon} alt={social.title} fill />
										</div>
										<span className="text-lg font-light">{social.title}</span>
									</a>
								))}
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</nav>
		</div>
	);
};
NavBar.displayName = "Nav";

export { NavBar };
