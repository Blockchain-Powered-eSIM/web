import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className="container flex flex-col text-center gap-16">
			<div className="flex flex-col gap-4">
				<h1 className="text-5xl font-bold">
					Experience the Future of Global Connectivity
				</h1>
				<p className="text-xl">
					Travel with confidence with Kokio’s travel data plans. Unlike
					traditional eSIM providers, Kokio leverages cutting-edge blockchain
					technology for enhanced security, privacy, and ease of use. Enjoy
					seamless connectivity across over 200 destinations worldwide.
				</p>
			</div>
			<Button>Sign Up For beta</Button>
		</section>
	);
};
Hero.displayName = "Hero";

export { Hero };
