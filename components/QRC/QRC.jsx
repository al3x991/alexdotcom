"use client";

import { useState } from "react";
import Image from "next/image";
import { PiQrCode } from "react-icons/pi";

export default function FloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(!isClicked);
    setIsHovered(!isClicked);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 flex items-center justify-center
        ${isHovered || isClicked ? "h-40 w-40" : "h-16 w-16"}
        ${isHovered || isClicked ? "rounded-lg" : "rounded-full"}
        z-50 cursor-pointer bg-white transition-all duration-300`}
      //   onMouseEnter={handleMouseEnter}
      //   onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isHovered || isClicked ? (
        <div className="z-[99999] text-center">
          <p className="font-bold text-black opacity-80">Scan me</p>
          <Image
            src="/images/qr-code.png"
            alt="QRC_image"
            width={100}
            height={100}
            className="mx-auto mt-2 h-[100] w-[100]"
          />
        </div>
      ) : (
        <p className="text-gray-800 font-bold">
          <PiQrCode className=" text-2xl font-bold text-black opacity-80" />
        </p>
      )}
    </div>
  );
}
