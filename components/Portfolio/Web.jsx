"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import "./styles.css";

const Web = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      src: "/images/web01.webp",
      title: "TitanTTrade",
      description: "A full-stack web3 crypto trading platform with KYC, 2FA, user roles, authentication, and secure trading capabilities. Built on Next.js, this platform offers a seamless trading experience for Bitcoin, Ethereum, and Solana users.",
      demoLink: "https://block-app-psi.vercel.app/",
      repoLink: "https://github.com/al3x991/Titanttrade",
    },
    {
      src: "/images/web5.webp",
      title: "The Burger Place",
      description: "A visually engaging frontend design for a burger restaurant, capturing the essence of the brand with a user-friendly interface and vibrant aesthetics.",
      demoLink: "https://theburgerplace.vercel.app/",
      repoLink: "https://github.com/al3x991/TheBurgerPlace",
    },
    {
      src: "/images/web2.webp",
      title: "EthosMatrix",
      description: "A professional website for a construction company, featuring a blog and content management system to keep clients informed and engaged.",
      demoLink: "https://ethosmatrix.com",
      repoLink: "https://github.com/al3x991/EthosMatrixWebsite",
    },
    {
      src: "/images/web3.webp",
      title: "Movie (UI CLONE)",
      description: "A UI clone of Netflix's web app, offering a polished and immersive experience for discovering and streaming movies and TV shows.",
      demoLink: "https://vibrant-kirch-c658a7.netlify.app/",
      repoLink: "https://github.com/al3x991/TheMovieApp",
    },
    {
      src: "/images/web4.webp",
      title: "ShopNow",
      description: "A sleek UI/UX design for an ecommerce store specializing in clothing, with an intuitive shopping experience and modern design.",
      demoLink: "https://sad-tereshkova-ee89e8.netlify.app/",
      repoLink: "https://github.com/al3x991/ShopNow/tree/master",
    },
  ];
  

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`slide ${currentIndex === index ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={slide.src}
              layout="fill"
              objectFit="cover"
              fill
              alt={`Slide ${index}`}
            />
            <div className="overlay"></div>
            <div className="content top-[23%] max-w-[385px] scale-90 left-[3vw]  sm:left-[10vw] text-center md:text-start py-0 px-[30px] md:left-[6vw]   md:top-[30.5%]  md:max-w-[45%]  lg:left-[7vw] lg:top-[35vh]  lg:scale-100">
              <h2>{slide.title}</h2>
              <span>{slide.description}</span>
              <div className="mt-4 flex items-center justify-start gap-4 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link href={slide.demoLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-lime px-3 py-2 text-[16px] font-semibold text-white hover:opacity-[0.9]">Live Demo</Link>
                <Link href={slide.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-[16px] font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/3">Github Repo <FaGithub className="text-[16px] font-bold text-white" /></Link>
              </div>
            </div>
          </motion.div>
        ))}
        <button className="prev" onClick={handlePrev}>&lt;</button>
        <button className="next" onClick={handleNext}>&gt;</button>
      </div>
      <div className="thumbnail-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={slide.src}
              width={150}
              height={100}
              alt={`Thumbnail ${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Web;
