"use client"; // If using Next.js App Router

import React, { useState } from "react";
import { Drawer, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation"; // Correct import for App Router

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleScroll = (content) => {
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  const handleNavigation = (path) => {
    router.push(path);
    setOpen(false);
  };

  const menuItems = [
    { label: "Home", path: "home", type: "scroll" },
    { label: "Service", path: "service", type: "scroll" },
    { label: "Construction", path: "/construction", type: "navigate" },
    { label: "Contact", path: "contact", type: "scroll" },
  ];

  return (
    <>
      {/* Button with Menu Icon */}
      <div className="">
        <button onClick={() => setOpen(true)} className="focus:outline-none">
          <MenuIcon sx={{ color: "#FFFFFF", fontSize: 40 }} />
        </button>
      </div>

      {/* Drawer (Popup Window) */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box className="w-72 p-5 bg-white">
          <div className="grid grid-flow-row gap-4">
            {/* Close Button */}
            <CloseIcon onClick={() => setOpen(false)} className="cursor-pointer" />

            {/* Menu Items */}
            {menuItems.map((item, index) => (
              <Typography
                key={index}
                className="text-lg font-poppins cursor-pointer hover:text-blue-500"
                onClick={() =>
                  item.type === "scroll" ? handleScroll(item.path) : handleNavigation(item.path)
                }
              >
                {item.label}
              </Typography>
            ))}
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
