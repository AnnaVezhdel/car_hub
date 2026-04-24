"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

export default function Navbar() {
  const handleScroll = () => {
    const element = document.getElementById("cars-section");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="w-full absolute  z-10">
      <nav className="max-w-360 mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          handleClick={handleScroll}
          title="Submit"
          btnType="button"
          containerStyles="text-blue-600 font-bold py-2 rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}
