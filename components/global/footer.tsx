import React from "react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";
import LogoMark from "@/assets/logomark.svg";

import Discord from "@/assets/icons/discord.svg";
import GitHub from "@/assets/icons/github.svg";
import Docs from "@/assets/icons/docs.svg";
import SignUpDialog from "../sign-up-dialog";

export const socialLinks = [
	{
		icon: Discord,
		title: "Discord",
		href: "#",
	},
	{
		icon: GitHub,
		title: "GitHub",
		href: "#",
	},
	{
		icon: Docs,
		title: "Docs",
		href: "#",
	},
];

const Footer = () => {
	return (
		<footer className="container bg-esim-black-950 text-esim-black-50 pt-20 pb-6">
			<div className="flex flex-col items-center gap-10">
				<Image src={Logo} alt="Kokio Logo" width={200} height={200} />
				<ul className="flex flex-wrap gap-8 justify-center">
					{socialLinks.map((footer) => (
						<li key={footer.title} className="flex items-center gap-2">
							<div className=" relative h-10 w-10 text-white">
								<Image
									src={footer.icon}
									alt={footer.title}
									fill
									className="fill-current"
								/>
							</div>
							<a href={footer.href} className="text-lg font-light">
								{footer.title}
							</a>
						</li>
					))}
				</ul>
				<SignUpDialog />
				<div className="text-sm flex items-center gap-2">
					<small>Copyright ©</small>
					<Image src={LogoMark} alt="Logo Mark for Kokio" />
					<small>Kokio 2024</small>
				</div>
			</div>
		</footer>
	);
};
Footer.displayName = "Footer";

export { Footer };
