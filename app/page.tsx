import Image from "next/image";
import { Faqs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { RoadMap } from "@/components/road-map";
import { Setup } from "@/components/setup";

import BeachTransition from "@/assets/transition1.svg";
import PyramidTransition from "@/assets/transition2.svg";
import Pyramids from "@/assets/pyramids.svg";

export default function Home() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Setup />
			<div className="bg-night-purple-800 -mt-1">
				<div className="relative flex flex-col bg-esim-black-950/25 md:overflow-hidden">
					<Features />
					<Image
						src={Pyramids}
						alt="Person taking picture of Pyramids with phone"
						sizes="100vw"
						className="w-full h-auto"
					/>
					<div className="">
						<Faqs />
						<RoadMap />
					</div>
				</div>
			</div>
		</main>
	);
}
