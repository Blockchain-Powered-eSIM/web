import React from "react";
import Image, { getImageProps } from "next/image";

import Beach from "@/assets/beach-scene.svg";
import BeachTransition from "@/assets/transition1.svg";

import SignUpButton from "@/components/sign-up-button";

const Hero = () => {
  return (
    <section className="relative pt-14 flex flex-col text-center items-center gap-16 pb-32 md:pb-10 bg-center bg-cover bg-no-repeat bg-beach-mobile md:bg-beach-tablet md:bg-top lg:bg-beach-desktop h-[1239px] w-full md:h-[1766px] lg:h-[2178px]">
      <div className="container px-4 md:px-8 flex flex-col gap-4 max-w-[1000px]">
        <h1 className="text-5xl text-outer-space-950 md:text-6xl font-bold">
          Experience the Future of Global Connectivity
        </h1>
        <p className="text-xl font-light lg:leading-7">
          Travel with confidence with Kokio’s travel data plans. Unlike
          traditional eSIM providers, Kokio leverages cutting-edge blockchain
          technology for enhanced security, privacy, and ease of use. Enjoy
          seamless connectivity across over 200 destinations worldwide.
        </p>
      </div>
      <SignUpButton />
      <div className="absolute -bottom-20 custom-400:-bottom-40 md:-bottom-20 left-0 w-full h-[530px] lg:-bottom-0">
        <Image
          src={BeachTransition}
          alt="Beach"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
Hero.displayName = "Hero";

export { Hero };
