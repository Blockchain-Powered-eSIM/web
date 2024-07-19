import React from "react";
import Image from "next/image";

import BeachBall from "@/assets/beach-ball.svg";

const setupData = [
	{
		title: "Download Our App and Choose a Plan",
		description:
			"Easily download our app and select from over 200 destinations worldwide.",
	},
	{
		title: "Pay and Activate the eSIM",
		description:
			"We support various payment methods including credit cards and cryptocurrencies. Just pay and activate your eSIM to start enjoying mobile connectivity instantly.",
	},
	{
		title: "Turn Your Phone Into a Crypto Wallet",
		description:
			"Activate your eSIM and optionally enable the eSIM crypto wallet that also functions as a digital ID.",
	},
];

const Setup = () => {
	return (
		<section className="z-20 overflow-hidden -mt-1">
			<div className="container flex flex-col text-center gap-28 bg-ocean py-10 -my-1">
				<h2 className="text-5xl font-bold">Simple Setup, Fun Trip Ahead.</h2>
				<div className="relative h-48 w-full object-cover">
					<Image src={BeachBall} alt="Beach ball and bucket" fill />
				</div>
				<dl className="flex flex-col gap-20 px-8">
					{setupData.map((setup) => (
						<div key={setup.title} className="flex flex-col gap-4">
							<dt className="text-4xl font-bold">{setup.title}</dt>
							<dd className="text-xl font-light">{setup.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
};
Setup.displayName = "Setup";
export { Setup };
