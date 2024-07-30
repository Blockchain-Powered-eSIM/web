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
			<div className="relative flex flex-col items-center bg-pyramid-mobile bg-center bg-cover bg-no-repeat md:bg-pyramid-tablet lg:bg-pyramid-desktop h-[6459px] w-full md:h-[6129px] lg:h-[4403px] gap-[44rem] md:gap-[85rem] -mt-1 py-[24rem]">
				<div className="absolute top-0 left-0 w-full h-[472px] pt-40 ">
					<Image
						src={PyramidTransition}
						alt="Transition lines between the setup sections and features section"
						fill
						className="object-cover"
					/>
				</div>
				<Features />
				<div className="flex flex-col gap-10">
					<Faqs />
					<RoadMap />
				</div>
			</div>
		</main>
	);
}
