"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/Components/ui/dialog";

export interface DataType {
  icon: string;
  heading: string;
  description: string;
  paragraph: string;
  bestfor: string;
}
function TypesOfWaterproofingBox({
  icon,
  heading,
  description,
  paragraph,
  bestfor,
}: {
  icon: string;
  heading: string;
  description: string;
  paragraph: string;
  bestfor: string;
}) {
  return (
    <>
      <div className="bg-[#EEEEEE] h-[380px] w-80 md:h-[450px] md:w-[380px] rounded-lg mb-10 md:mb-0 mx-auto p-[10px]">
        <Image
          src={icon}
          width={250}
          height={250}
          alt="TypesOfWaterproofing"
          className="h-[70%] mb-4 w-full mt-2"
        />
        <div className="px-4 pb-4 h-1/3 flex-col items-center">
          <h1>{heading}</h1>
          <p>{description}</p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="cursor-pointer text-[#FC9713] mt-4">
                View Details &gt;
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[750px] bg-white text-black w-full rounded-lg h-[375px] p-0 m-0">
              <div className="h-full w-full flex gap-x-6">
                <Image
                  src={icon}
                  width={100}
                  height={100}
                  alt="image"
                  className="h-full w-[40%]"
                />
                <div className="pt-4 font-medium pr-4">
                  <h1 className="text-lg">{heading}</h1>
                  <h2 className="text-[#737373] text-base mt-1">
                    ₹ 270 Per Sq. Metre
                  </h2>
                  <p className="text-base my-4 text-[#6F6F6F]">{paragraph}</p>
                  <p className="text-base text-[#6F6F6F]">{bestfor}</p>
                  <button className="bg-[#0D5CF1] text-white px-4 py-1 rounded-md mt-2">
                    Get waterproofed
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default TypesOfWaterproofingBox;
