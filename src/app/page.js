"use client"
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import blogPost from "../../Databases/blog-post.json";
import waterProof from "../../Databases/why-to-waterproof.json";
import tWaterProof from "../../Databases/types-of-waterproofing.json";
import clientSays from "../../Databases/client-says.json";
import MenuIcon from '@mui/icons-material/Menu';
import HamburgerMenu from "@/Components/HamburgerMenu";
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from "next/link";
import BlogSection from "@/Components/BlogSection";
import WaterProof from "@/Components/WaterProof";

export default function Home() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  async function handleScroll(content) {
    const element = await document.getElementById(content);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className="flex bg-[#3E3E3E] px-4 py-4 h-[73px] w-full">
        <div className="w-full h-12 flex items-center justify-between">
          <Image src="/logo.png" alt="logo" width={115} height={60} quality={100} />
          <div className="sm:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-[20px] py-[30px] sm:hidden" id="home">
        <p className="font-poppins text-[#424242] text-[22px] font-semibold leading-[30px] w-[275px] h-[98px]">
          Say Goodbye to Leaks <br />
          with Hassle-free <span className="bg-gradient-to-r from-[#EDAB52] to-[#FA9818] bg-clip-text text-transparent">waterproofing</span>
        </p>
        <button className="font-inter text-[#000] font-semibold text-[17px] w-[209px] h-[39px] bg-[#F1AC51] border-none rounded-[7px] mt-[10px]">
          Free Consultation
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative flex justify-center w-full h-[341px] px-[20px] overflow-hidden mb-[20px]">
        <Image src="/front-img.png" alt="image" fill quality={100} className="object-cover" />
      </div>
      {/*Why to waterproof*/}
      <div className="px-[10px] sm:px-[40px] my-[20px]">
        <div className="w-full h-[0.5px] bg-[#989898]" />
      </div>
      <div className="pb-[20px]" >
        <div className="text-center p-[30px]">
          <p className="text-[#000] font-poppins font-semibold text-[24px] p-4 text-center sm:ml-[100px] sm:text-[26px]">Why to <span className="text-[#F1AC51]">waterproof</span></p>
        </div>
        <div className="grid grid-flow-row px-[40px] justify-center sm:grid-flow-col sm:h-[400px] sm:justify-center gap-[15px]" id="why-to-waterproof">
          {waterProof.map((data) => (
            <div className={`sm:flex sm:${data.place}`}>
              <div className="border-[1px] rounded-[9px] bg-[#FFF] border-[#000000] p-[18px] h-[185px] w-[275px]">
                <Image src={data.icon} alt="cont" height={35} width={35} quality={100} />
                <p className="font-poppins font-semibold text-[15px] leading-[28px]">{data.name}</p>
                <p className="font-poppins text-[12px] leading-[18.004px]">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*Water Proofing Section*/}
      <div className="px-[10px] sm:px-[40px] my-[20px]">
        <div className="w-full h-[0.5px] bg-[#989898]" />
      </div>
      <WaterProof waterProof={tWaterProof} />
      {/*Recent updates and Blog Post*/}
      <div className="px-[10px] sm:px-[40px] my-[20px]">
        <div className="w-full h-[0.5px] bg-[#989898]" />
      </div>
      <div className="grid grid-flow-row items-center justify-center py-[20px]">
        <p className="text-center font-inter font-bold text-[24px] leading-[29.05px] py-[20px] mt-[20px] sm:text-[26px] sm:text-centre">Recent Updates &amp; <span className="bg-gradient-to-r from-[#EFAF5C] to-[#FC9713] bg-clip-text text-transparent">Blog post</span></p>
        <p className="font-inter text-center px-[15px] text-[16px] pb-[30px]">We bring you the latest trends and expert opinions all in one place, helping you stay ahead and make informed decisions.</p>
      </div>
      <BlogSection blogPost={blogPost} />
      <div className="flex justify-center items-center py-[15px]">
        <button className="font-inter font-semibold text-[18px] leading-[24px] h-[50px] w-[180px] bg-[#FC9713] rounded-[8px]">More Articles</button>
      </div>
      {/* What our Client Says */}
      <div className="px-[10px] sm:px-[40px] my-[28px]">
        <div className="w-full h-[1px] bg-[#989898]" />
      </div>
      <div>
        <p className="font-poppins text-[24px] font-semibold text-center">What our <span className="text-[#F1AC51]">client says</span></p>
        <p className="font-inter text-[16px] font-medium text-center pb-[20px]">Hear from our happy customers <br /> about their experience</p>
      </div>
      <div className="pb-[40px]">
        <div className="grid grid-flow-row px-[40px] gap-[20px] justify-center md:grid-flow-col md:h-[350px] md:justify-center">
          {clientSays.map((data) => (
            <div className={`sm:flex sm:${data.place}`}>
              <div className={`border-none rounded-[9px] border-[#000000] p-[18px] h-[220px] w-[245px] grid grid-flow-row bg-[${data.color}]`}>
                <Image src={data.icon} alt="cont" height={35} width={35} quality={100} />
                <p className="font-poppins text-[12px] leading-[18.004px]">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[10px] sm:px-[40px] my-[28px]">
        <div className="w-full h-[0.5px] bg-[#989898]" />
      </div>
      {/* Free Consultation section */}
      <div id="contact">
        <div className="sm:hidden block">
          <p className="font-poppins text-[24px] font-semibold px-[20px]">Have a <span className="bg-gradient-to-r from-[#EFAF5C] to-[#FC9713] bg-clip-text text-transparent">free consultation</span><br />from experts</p>
          <p className="font-inter text-[18px] leading-[28px] px-[20px] text-[#667085] pt-[5px] pb-[35px]">You can reach us anytime via <span className="text-[#000] font-medium">admin@livingenvironmentt.com</span></p>
          <div className="grid grid-flow-row items-center justify-center">
            <label className="pl-[20] font-inter text-[#344054] text-[14px]">Name</label>
            <input className="border-[1px] mx-[20px] h-[48px] w-[310px] rounded-[8px] pl-2 mb-[20px]" type="text" name="name" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />

            <label className="pl-[20] font-inter text-[#344054] text-[14px]" for="phone">Phone number</label>
            <input className="border-[1px] mx-[20px] h-[48px] w-[310px] rounded-[8px] pl-2 mb-[15px]" type="tel" id="phone" name="phone" required value={number} onChange={(e) => setNumber(e.target.value)} placeholder="" />

            <label className="pl-[20] font-inter text-[#344054] text-[14px]">Email</label>
            <input className="border-[1px] mx-[20px] h-[48px] w-[310px] rounded-[8px] pl-2 mb-[15px]" type="text" name="name" placeholder="you@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />

            <label className="pl-[20] font-inter text-[#344054] text-[14px]">Service</label>
            <textarea className="border-[1px] mx-[20px] h-[150px] w-[310px] rounded-[8px] p-2 mb-[15px]" type="text" name="name" required value={service} onChange={(e) => setService(e.target.value)} />

            <button className="font-inter font-semibold text-[16px] text-white border-none rounded-[8px] bg-gradient-to-r from-[#F1AC51] to-[#FC9713] mx-[20px] h-[48px] w-[310px] mb-[25px]">Send message</button>
          </div>
        </div>
        <div className="hidden sm:block py-[50px] pb-[70px]">
          <div className="grid grid-flow-col justify-evenly">
            <div className="grid grid-flow-row grid-rows-5">
              <p className="row-span-1 font-poppins text-[24px] font-semibold px-[20px]">Have a <span className="bg-gradient-to-r from-[#EFAF5C] to-[#FC9713] bg-clip-text text-transparent">free consultation</span><br />from experts</p>
              <div className="row-span-4 items-end grid">
                <div className="font-inter px-[20px] font-medium">
                  <p>Ph.no: 91+ 90355 06450</p>
                  <p>Email: admin@livingenvironmentt.com</p>
                  <p>Address: Hanumanth Nagar, Billishivale, <br /> Bangalore, KA 560077</p>
                </div>
              </div>
            </div>
            <div className="grid items-center justify-center">
              <div className="bg-[#ECECEC] p-[20px] rounded-[15px] h-[400px] sm:w-full lg:w-[550px]">
                <p className="font-inter text-[#575757] text-[20px] pb-[10px]">Contact us</p>
                <div className="grid gap-[35px]">
                  <input placeholder="Name" className="bg-[#ECECEC] border-b-[1px] h-[35px] focus:outline-none px-[2px] mr-[10px] border-[#909090]" />
                  <input placeholder="Ph.no" className="bg-[#ECECEC] border-b-[1px] h-[35px] focus:outline-none px-[2px] border-[#909090]" />
                  <input placeholder="Email Address" className="bg-[#ECECEC] border-b-[1px] h-[35px] focus:outline-none px-[2px] w-full border-[#909090]" />
                  <input placeholder="Service" className="bg-[#ECECEC] border-b-[1px] h-[35px] focus:outline-none px-[2px] w-full border-[#909090]" />
                </div>
                <div className="pt-[20px]">
                  <button className="w-full h-[38px] bg-[#5033E2] font-inter text-white font-semibold rounded-[10px]">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Final Section*/}
      <div className="sm:hidden block">
        <div className="bg-[#3E3E3E] p-[20px] grid grid-flow-row items-center justify-center text-center">
          <div className="flex items-center justify-center">
            <Image src="/logo.png" alt="logo" width={115.54} height={35} quality={100} />
          </div>
          <p className="font-poppins font-semibold text-[16px] text-white py-[15px]">
            Phone No <br />
            <span className="text-[14px] leading-[21px] font-light">+91 90355 06450</span>
          </p>
          <p className="font-poppins font-semibold text-[16px] text-white pb-[15px]">
            Email <br />
            <span className="text-[14px] leading-[21px] font-light">admin@livingenvironmentt.com</span>
          </p>
          <p className="font-poppins font-semibold text-[16px] text-white">
            Address <br />
            <span className="text-[14px] leading-[21px] font-light">
              Hanumanth Nagar, Billishivale, Bangalore, KA <br />560077
            </span>
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#3B3B3B] via-[#CFCFCF] to-[#3B3B3B]" />
        <div className="bg-[#3E3E3E] grid grid-flow-col justify-center gap-[20px] pt-[20px]">
          <a href="https://" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-[#9C9C9C]" /></a>
          <a href="https://" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-[#9C9C9C]" /></a>
          <a href="https://" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-[#9C9C9C]" /></a>
        </div>
        <div className="bg-[#3E3E3E] h-[50px] text-[#A2A2A2] font-thin text-center text-[12px] pt-[20px]">
          <p className="font-poppins">All Rights Reserved @LivingEnvironment</p>
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="bg-[#202020] h-[230px]">
          <div className="grid grid-cols-6 h-[180px]">
            <div className="col-span-2 grid grid-flow-row">
              <div className="flex items-end justify-center">
                <Image src="/logo.png" alt="logo" width={180} height={83} quality={100} />
              </div>
              <div className="grid grid-flow-col justify-center gap-[20px] pt-[20px]">
                <a href="https://" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-[#9C9C9C] bg-[#414141] rounded-full h-[29px] w-[30px]" /></a>
                <a href="https://" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-[#9C9C9C] h-[29px] w-[30px]" /></a>
                <a href="https://" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="text-[#9C9C9C] h-[29px] w-[30px]" /></a>
              </div>
            </div>
            <div className="col-span-4 pt-[50px]">
              <div className="grid grid-flow-col gap-[20px] items-center justify-center">
                <p className="font-poppins font-semibold text-[16px] text-white py-[15px]">
                  Phone No <br />
                  <span className="text-[14px] leading-[21px] font-light text-[#9D9D9D]">+91 90355 06450</span>
                </p>
                <p className="font-poppins font-semibold text-[16px] text-white pb-[15px] pt-[10px]">
                  Email <br />
                  <span className="text-[14px] leading-[21px] font-light text-[#9D9D9D]">admin@livingenvironmentt.com</span>
                </p>
                <p className="font-poppins font-semibold text-[16px] text-white pt-[15px]">
                  Address <br />
                  <span className="text-[14px] leading-[21px] font-light text-[#9D9D9D]">
                    Hanumanth Nagar, Billishivale, Bangalore, KA <br />560077
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-[10px]">
            <div className="w-full h-[1px] bg-[#4B4B4B]" />
          </div>
          <div className="h-[50px] text-[#A2A2A2] font-thin text-center text-[12px] pt-[20px]">
            <p className="font-poppins">All Rights Reserved @LivingEnvironment</p>
          </div>
        </div>
      </div>
    </>
  );
}
