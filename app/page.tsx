import Image from "next/image";
import { Faqs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { RoadMap } from "@/components/road-map";
import { Setup } from "@/components/setup";

import BeachTransition from "@/assets/transition1.svg";
import Pyramids from "@/assets/pyramids.svg";

export default function Home() {
	return (
		<main className="flex flex-col">
			<Hero />
			<div className="flex flex-col -mt-60">
				<Image
					src={BeachTransition}
					alt="Beach"
					sizes="100vw"
					className="object-cover"
				/>
			</div>
			<Setup />
			<div className="bg-night-purple-800 -z-20">
				<div className="relative flex flex-col bg-esim-black-950/25 -z-10">
					<div className="z-10">
						<Features />
					</div>
					<Image
						src={Pyramids}
						alt="Person taking picture of Pyramids with phone"
						sizes="100vw"
						className="w-full -mt-[54rem] h-auto"
					/>
					<div className="-mt-[102rem]">
						<Faqs />
						<RoadMap />
					</div>
				</div>
			</div>
		</main>
	);
}
