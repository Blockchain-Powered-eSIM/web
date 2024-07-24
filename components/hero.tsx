import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import Beach from "@/assets/beach-scene.svg";
import SignUpDialog from "./sign-up-dialog";
import SignUpButton from "./sign-up-button";

const Hero = () => {
	return (
		<section className="pt-14 flex flex-col">
			<div className="container flex flex-col text-center items-center gap-16 pb-12">
				<div className="flex flex-col gap-4">
					<h1 className="text-5xl md:text-6xl font-bold">
						Experience the Future of Global Connectivity
					</h1>
					<p className="text-xl">
						Travel with confidence with Kokio’s travel data plans. Unlike
						traditional eSIM providers, Kokio leverages cutting-edge blockchain
						technology for enhanced security, privacy, and ease of use. Enjoy
						seamless connectivity across over 200 destinations worldwide.
					</p>
				</div>
				<SignUpButton />
			</div>
			<Image
				src={Beach}
				alt="Cartoon hand holding a mobile phone looking at the beach"
				sizes="100vw"
				className="w-full h-auto"
			/>
		</section>
	);
};
Hero.displayName = "Hero";

export { Hero };
