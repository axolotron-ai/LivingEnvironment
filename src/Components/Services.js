import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div id="services">
      <div className="font-inter grid grid-flow-row text-center mx-[20px] md:mx-0">
        <p className="text-[28px] md:text-[40px] font-bold pb-[10px]">Most Our <span className="bg-gradient-to-r from-[#EFAF5C] to-[#FC9713] bg-clip-text text-transparent">Popular Service</span></p>
        <p className="text-[#000000B3] text-[20px] sm:block hidden">Our recent projects reflect our dedication to building with precision and excellence, ensuring that <br /> every structure is durable, functional, and crafted to the highest standards.</p>
        <p className="text-[#000000B3] text-[18px] sm:hidden">Our recent projects reflect our dedication to building with precision and excellence.</p>
      </div>
      <div className="md:flex md:justify-evenly grid grid-flow-row gap-[25px] md:gap-0 py-[50px] items-center justify-center">
        <div className="grid grid-flow-row font-inter h-[410px] w-[300px] md:h-[500px] md:w-[390px] bg-[#EEEEEE] gap-[15px] p-[25px] rounded-[10px]">
          <Image src="/c-service-1.png" alt="Building Renovation" height={100} width={100} quality={100} className="h-[200px] w-[350px] md:h-[280px] md:w-[340px] rounded-[10px]" />
          <p className="font-semibold text-[18px] md:text-[22px]">1. Building renovation</p>
          <p className="text-[#000000B3] text-[15px] md:text-[17px]">We specialize in quality building renovations with precision and innovation....</p>
          <button className="text-[#FC9713] text-start text-[18px] md:text-xl cursor-pointer font-semibold">View Details &gt;</button>
        </div>
        <div className="grid grid-flow-row font-inter h-[410px] w-[300px] md:h-[500px] md:w-[390px] bg-[#EEEEEE] gap-[15px] p-[25px] rounded-[10px]">
          <Image src="/c-service-2.png" alt="Building Renovation" height={100} width={100} quality={100} className="h-[200px] w-[350px] md:h-[280px] md:w-[340px] rounded-[10px]" />
          <p className="font-semibold text-[18px] md:text-[22px]">2. Architecture Design</p>
          <p className="text-[#000000B3] text-[15px] md:text-[17px]">We specialize in quality building renovations with precision and innovation....</p>
          <button className="text-[#FC9713] text-start text-[18px] md:text-xl cursor-pointer font-semibold">View Details &gt;</button>
        </div>
        <div className="grid grid-flow-row font-inter h-[410px] w-[300px] md:h-[500px] md:w-[390px] bg-[#EEEEEE] gap-[15px] p-[25px] rounded-[10px]">
          <Image src="/c-service-3.png" alt="Building Renovation" height={100} width={100} quality={100} className="h-[200px] w-[350px] md:h-[280px] md:w-[340px] rounded-[10px]" />
          <p className="font-semibold text-[18px] md:text-[22px]">3. General Contracting</p>
          <p className="text-[#000000B3] text-[15px] md:text-[17px]">We specialize in quality building renovations with precision and innovation....</p>
          <button className="text-[#FC9713] text-start text-[18px] md:text-xl cursor-pointer font-semibold">View Details &gt;</button>
        </div>
      </div>
      <div className="pb-[40px] md:py-[15px] flex items-center justify-center">
        <button className="bg-[#FC9713] font-bold h-[50px] w-[220px] font-inter rounded-[5px] cursor-pointer text-[22px]">Read More</button>
      </div>
      <div className="border-[0.5px] border-[#D9D9D9] md:mx-[80px] md:mt-[50px] mx-[30px] mb-[50px]" />
    </div>
  )
}