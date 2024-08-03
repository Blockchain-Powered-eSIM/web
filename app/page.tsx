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
      <div className="relative">
        <div className="h-[472px] w-full">
          <Image
            src={PyramidTransition}
            alt="Transition lines between the setup sections and features section"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="-mt-1 flex flex-col items-center gap-[680px] bg-pyramid-mobile bg-cover bg-center bg-no-repeat custom-400:gap-[880px] md:gap-[1560px] md:bg-pyramid-tablet lg:gap-[820px] lg:bg-pyramid-desktop">
        <Features />
        <div className="flex flex-col gap-10">
          <Faqs />
          <RoadMap />
        </div>
      </div>
    </main>
  );
}
