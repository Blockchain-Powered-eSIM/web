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
        <div className="w-full h-[472px]">
          <Image
            src={PyramidTransition}
            alt="Transition lines between the setup sections and features section"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col items-center bg-pyramid-mobile bg-center bg-cover bg-no-repeat md:bg-pyramid-tablet lg:bg-pyramid-desktop -mt-1 gap-[680px] custom-400:gap-[880px] md:gap-[1560px] lg:gap-[820px]">
        <Features />
        <div className="flex flex-col gap-10">
          <Faqs />
          <RoadMap />
        </div>
      </div>
    </main>
  );
}
