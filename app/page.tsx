import { Faqs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { RoadMap } from "@/components/road-map";
import { Setup } from "@/components/setup";

export default function Home() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Setup />
			<Features />
			<div className="bg-night-purple-800">
				<Faqs />
				<RoadMap />
			</div>
		</main>
	);
}
