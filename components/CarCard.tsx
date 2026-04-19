"use client";

import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { fuel_type, drive, make, model, transmission, year, cylinders } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent(cylinders, year);

  return (
    <>
      <div className="group flex flex-col p-6 justify-center items-start text-black-100 bg-blue-50 hover:bg-white hover:shadow-md rounded-3xl">
        <div className="w-full flex justify-between items-start gap-2">
          <h2 className="text-[22px] leading-6.5 font-bold capitalize">
            {make} {model}
          </h2>
        </div>
        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>
        <div className="relative w-full h-40 my-3  object-contain">
          <Image
            src={generateCarImageUrl(car)}
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="tire" />
              <p className="text-[14px]">{drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" width={20} height={20} alt="gas" />
              <p className="text-[14px]">{fuel_type}</p>
            </div>
          </div>

          <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 w-full z-10 transition-all duration-300">
            <CustomButton
              title="View More"
              containerStyles="w-full py-[16px] flex rounded-full bg-blue-500 focus:outline-none"
              textStyles="text-white text-[16px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => {
                setIsOpen(true);
              }}
            />
          </div>
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </>
  );
};

export default CarCard;
