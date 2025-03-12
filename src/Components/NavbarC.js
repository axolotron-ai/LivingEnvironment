import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import NextLink from "next/link";
import HamburgerIcon from "@/components/HamburgerIcon";

function Navbar({ bg }) {
  return (
    <div
      className={`${bg === "white" ? "bg-white text-black" : "bg-black text-white"
        } h-fit py-4 px-10 flex justify-between items-center`}
    >
      <Image src="/logo.png" width={140} height={140} alt="logo" />

      <div className="gap-x-8 items-center hidden md:flex">
        <Link to="home" smooth={true} duration={500}>Home</Link>
        <Link to="services" smooth={true} duration={500}>Services</Link>
        <NextLink href="/blog">Blogs</NextLink>
        <Link to="/construction" smooth={true} duration={500} className="underline decoration-2 decoration-white">
          Construction
        </Link>
        <button className="bg-[#5033E2] text-white px-4 py-1 rounded-md">
          Free Consultation
        </button>
      </div>

      <div className="md:hidden">
        <HamburgerIcon />
      </div>
    </div>
  );
}

export default Navbar;
