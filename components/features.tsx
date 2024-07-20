import React from "react";
import Image from "next/image";

import Relax from "@/assets/icons/relax.svg";
import Meditate from "@/assets/icons/meditate.svg";
import Wallet from "@/assets/icons/wallet.svg";
import Shield from "@/assets/icons/shield.svg";
import ThumbsUp from "@/assets/icons/thumbs-up.svg";
import PyramidTransition from "@/assets/transition2.svg";

const featuresData = [
	{
		icon: Relax,
		title: "Simple",
		description:
			"Set up your mobile plan quickly and easily with our new technology. Speed up the process even more by provisioning your new secure eSIM device wallet.",
	},
	{
		icon: Meditate,
		title: "Private",
		description:
			"We never ask for personal information, so there’s no way for us to collect or store it. Enjoy complete peace of mind on your vacations.",
	},
	{
		icon: Wallet,
		title: "eSIM Wallet",
		description:
			"When you purchase your first Kokio travel data bundle, a secure eSIM crypto wallet is created. Not ready for crypto? No worries—the eSIM wallet is optional and can be activated whenever you choose.",
	},
	{
		icon: Shield,
		title: "Secure",
		description:
			"Our app ensures top-notch security and privacy, utilizing biometrics and Zero Knowledge Proof technology.",
	},
	{
		icon: ThumbsUp,
		title: "Quick Pay",
		description:
			"Enjoy flexible payment options including credit cards, Apple Pay, Google Pay, and PayPal. You can fund your eSIM wallet and check out even faster!",
	},
];

const Features = () => {
	return (
		<section className="flex flex-col text-esim-black-50 -mt-1 bg-night-purple-600">
			<div className="relative h-[116px] w-full overflow-hidden">
				<Image
					src={PyramidTransition}
					alt="Transition lines separating features"
					fill
					className="object-cover"
				/>
			</div>
			<div className="container flex flex-col text-center gap-20">
				{featuresData.map((feature) => (
					<div
						key={feature.title}
						className="flex flex-col items-center px-8 gap-6"
					>
						<div className="relative h-16 w-16">
							<Image
								src={feature.icon}
								alt={feature.title}
								width={200}
								height={200}
							/>
						</div>
						<div className="flex flex-col gap-4">
							<h3 className="text-4xl font-bold">{feature.title}</h3>
							<p className="text-lg font-light">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
Features.displayName = "Features";

export { Features };
