import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className="">
			<h1>Experience the Future of Global Connectivity</h1>
			<p>
				Travel with confidence with Kokio’s travel data plans. Unlike
				traditional eSIM providers, Kokio leverages cutting-edge blockchain
				technology for enhanced security, privacy, and ease of use. Enjoy
				seamless connectivity across over 200 destinations worldwide.
			</p>
			<Button>Sign Up For beta</Button>
		</section>
	);
};
Hero.displayName = "Hero";

export { Hero };
