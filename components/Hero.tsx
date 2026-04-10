"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Hero() {
  const handleScroll = () => {};

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-360 mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Find, book or rent a car - quickly and easily!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-600 font-semibold px-4 py-2 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-147.5 z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div
            className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 
    w-[150%] xl:h-screen h-147.5 
    bg-blue-600 
    [clip-path:polygon(35%_0%,60%_0%,100%_70%,5%_100%)] 
    rounded-bl-[120px] 
    -z-10"
          />
        </div>
      </div>
    </div>
  );
}
