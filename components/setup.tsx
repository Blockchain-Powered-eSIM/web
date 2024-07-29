import React from "react";
import Image from "next/image";

import BeachBall from "@/assets/beach-ball.svg";
import Transition2 from "@/assets/transition2-3.svg";

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
		<section className="relative bg-ocean flex justify-center overflow-x-hidden pb-[30rem] -mt-1">
			<div className="container px-4 flex flex-col items-center text-center gap-28 py-10 md:gap-12 md:px-8">
				<h2 className="text-5xl text-outer-space-950 font-bold md:text-6xl md:px-4 max-w-[637px]">
					Simple Setup, Fun Trip Ahead.
				</h2>
				<div className="relative h-48 w-full md:w-[452px] md:h-[452px] object-cover">
					<Image src={BeachBall} alt="Beach ball and bucket" fill />
				</div>
				<dl className="flex flex-col gap-20 px-8 md:px-28 lg:flex-row lg:justify-between lg:px-4">
					{setupData.map((setup) => (
						<div key={setup.title} className="flex flex-col gap-4 lg:flex-1">
							<dt className="text-4xl font-bold font-heading text-outer-space-950">
								{setup.title}
							</dt>
							<dd className="text-xl font-light">{setup.description}</dd>
						</div>
					))}
				</dl>
			</div>
			<div className="absolute bottom-0 w-full h-[472px] pt-40 ">
				<Image
					src={Transition2}
					alt="Transition lines between the setup sections and features section"
					fill
					className="object-cover"
				/>
			</div>
		</section>
	);
};
Setup.displayName = "Setup";
export { Setup };
