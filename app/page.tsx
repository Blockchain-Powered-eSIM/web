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
			<div className="flex flex-col items-center bg-pyramid-mobile bg-center bg-cover bg-no-repeat md:bg-pyramid-tablet lg:bg-pyramid-desktop h-[6259px] w-full md:h-[6129px] lg:h-[4603px] gap-[950px] md:gap-[110rem]">
				<Features />
				<div className="flex flex-col gap-10">
					<Faqs />
					<RoadMap />
				</div>
			</div>
		</main>
	);
}
