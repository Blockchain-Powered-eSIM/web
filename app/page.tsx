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
		<main className="flex flex-col z-30">
			<Hero />
			<div className="flex flex-col -mt-60 lg:-mt-[90rem]">
				<Image
					src={BeachTransition}
					alt="Beach"
					sizes="100vw"
					className="object-cover"
				/>
			</div>
			<Setup />
			<div className="flex flex-col -mt-1">
				<Image
					src={PyramidTransition}
					alt="Transition lines separating features"
					sizes="100vw"
					className="object-cover"
				/>
			</div>
			<div className="bg-night-purple-800 -z-20">
				<div className="relative flex flex-col bg-esim-black-950/25 -z-10 md:overflow-hidden">
					<Features />
					<Image
						src={Pyramids}
						alt="Person taking picture of Pyramids with phone"
						sizes="100vw"
						className="w-full -mt-[54rem] md:-mt-[114rem] lg:-mt-[240rem] h-auto"
					/>
					<div className="-mt-[104rem] md:-mt-[214rem] lg:-mt-[500rem]">
						<Faqs />
						<RoadMap />
					</div>
				</div>
			</div>
		</main>
	);
}
