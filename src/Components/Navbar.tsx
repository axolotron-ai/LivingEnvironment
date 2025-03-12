import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar({ bg }: { bg: string }) {
  return (
    <div
      className={`${bg == "white" ? "bg-white text-black" : "bg-black text-white"
        } h-fit py-4 px-10 flex justify-between items-center`}
    >
      <Image
        src="/logo.png"
        width={140}
        height={140}
        alt="logo"
        className="p"
      />
      <div className="gap-x-8 items-center hidden md:flex">
        <Link href="#">Home</Link>
        <Link href="#">Services</Link>
        <Link href="/construction">Construction</Link>
        <button className="bg-[#5033E2] text-white px-4 py-1 rounded-md">
          Free Consultation
        </button>
      </div>
      <Image
        src="/menu.png"
        width={40}
        height={40}
        alt="menu"
        className="md:hidden"
      />
    </div>
  );
}

export default Navbar;
