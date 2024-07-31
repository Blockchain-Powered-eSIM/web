import React from "react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";
import LogoMark from "@/assets/logomark.svg";

import Discord from "@/assets/icons/discord.svg";
import GitHub from "@/assets/icons/github.svg";
import Docs from "@/assets/icons/docs.svg";
import SignUpButton from "@/components/sign-up-button";

export const socialLinks = [
	{
		icon: Discord,
		title: "Discord",
		href: "https://discord.gg/KfQDsPNn5S",
	},
	{
		icon: GitHub,
		title: "GitHub",
		href: "https://github.com/Blockchain-Powered-eSIM",
	},
	{
		icon: Docs,
		title: "Docs",
		href: "https://docs.kokio.app/",
	},
];

const Footer = () => {
	return (
		<footer className="flex flex-col bg-esim-black-950 text-esim-black-50 pt-20 pb-6 -mt-1 gap-6">
			<div className="container flex flex-col items-center gap-10 lg:flex-row lg:justify-center">
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
				<SignUpButton />
			</div>
			<div className="flex justify-center text-sm items-center gap-2">
				<small>Copyright ©</small>
				<Image src={LogoMark} alt="Logo Mark for Kokio" />
				<small>Kokio 2024</small>
			</div>
		</footer>
	);
};
Footer.displayName = "Footer";

export { Footer };
