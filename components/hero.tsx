import React from "react";
import Image from "next/image";

import Beach from "@/assets/beach-scene.svg";
import BeachTransition from "@/assets/transition1.svg";

import SignUpButton from "@/components/sign-up-button";

const Hero = () => {
	return (
		<section className="relative pt-14 flex flex-col text-center items-center gap-16 pb-32">
			<div className="container px-4 flex flex-col gap-4">
				<h1 className="text-5xl text-outer-space-950 md:text-6xl font-bold">
					Experience the Future of Global Connectivity
				</h1>
				<p className="text-xl font-light">
					Travel with confidence with Kokio’s travel data plans. Unlike
					traditional eSIM providers, Kokio leverages cutting-edge blockchain
					technology for enhanced security, privacy, and ease of use. Enjoy
					seamless connectivity across over 200 destinations worldwide.
				</p>
			</div>
			<div className="flex w-full px-4">
				<SignUpButton />
			</div>
			<Image
				src={Beach}
				alt="Cartoon hand holding a mobile phone looking at the beach"
				sizes="100vw"
				className="w-full h-auto"
			/>
			<div className="absolute bottom-0 left-0 w-full h-[530px]">
				<Image
					src={BeachTransition}
					alt="Beach"
					fill
					className="object-cover"
				/>
			</div>
		</section>
	);
};
Hero.displayName = "Hero";

export { Hero };
