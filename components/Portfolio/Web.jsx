// components/Portfolio/Web.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import "./styles.css";

const Web = () => {
  useEffect(() => {
    // Slider script initialization
    let items = document.querySelectorAll(".slider .list .item");
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let thumbnails = document.querySelectorAll(".thumbnail .item");

    let countItem = items.length;
    let itemActive = 0;
    let refreshInterval = null;

    function showSlider() {
      let itemActiveOld = document.querySelector(".slider .list .item.active");
      let thumbnailActiveOld = document.querySelector(
        ".thumbnail .item.active"
      );
      itemActiveOld.classList.remove("active");
      thumbnailActiveOld.classList.remove("active");

      items[itemActive].classList.add("active");
      thumbnails[itemActive].classList.add("active");

      clearInterval(refreshInterval);
      refreshInterval = setInterval(() => {
        next.click();
      }, 5000);
    }

    next.onclick = function () {
      itemActive = itemActive + 1;
      if (itemActive >= countItem) {
        itemActive = 0;
      }
      showSlider();
    };

    prev.onclick = function () {
      itemActive = itemActive - 1;
      if (itemActive < 0) {
        itemActive = countItem - 1;
      }
      showSlider();
    };

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        itemActive = index;
        showSlider();
      });
    });

    // Initial auto run slider
    refreshInterval = setInterval(() => {
      next.click();
    }, 10000);

    // Cleanup on component unmount
    return () => {
      clearInterval(refreshInterval);
      next.onclick = null;
      prev.onclick = null;
      thumbnails.forEach((thumbnail, index) => {
        thumbnail.removeEventListener("click", () => {
          itemActive = index;
          showSlider();
        });
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <section id="portfolio" className="relative z-10 h-full lg:max-h-screen">
        <div className="slider mb-[50px] mt-[0px] h-screen md:mb-[0px] md:mt-[-150px]">
          <div className="list">
            <div className="item active">
              <Image
                width={250}
                height={180}
                alt="bg_image"
                src="/images/img1.jpg"
              />
              <div className="overlay absolute left-0 top-0 z-0 h-full w-full bg-black opacity-[0.9]"></div>

              <div className="content top-[23%] scale-90  md:top-[45.5%]  md:max-w-[80%] lg:left-[6.5%] lg:top-[49%] lg:w-[500px] lg:scale-100">
                <p>Web Development</p>
                <h2>Website 01</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
                <span className="mt-4 flex items-center justify-start gap-4 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/assets/file/cv.pdf"
                    className="rounded-full bg-lime px-3 py-2 text-[16px] font-semibold text-white hover:opacity-[0.9]"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="https://github.com/al3x991"
                    className="flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-[16px] font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Github Repo
                    <FaGithub className="text-[16px] font-bold text-white" />
                  </Link>
                </span>
              </div>
            </div>
            <div className="item">
              <Image
                width={250}
                height={180}
                alt="bg_image"
                src="/images/img2.jpg"
              />
              <div className="overlay absolute left-0 top-0 z-0 h-full w-full bg-black opacity-[0.9]"></div>

              <div className="content top-[23%] scale-90  md:top-[45.5%]  md:max-w-[80%] lg:left-[6.5%] lg:top-[49%] lg:w-[500px] lg:scale-100">
                <p>Web Development</p>
                <h2>Website 02</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
                <span className="mt-4 flex  items-center justify-start gap-4 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/assets/file/cv.pdf"
                    className="rounded-full bg-lime px-3 py-2 text-[16px] font-semibold text-white hover:opacity-[0.9]"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href="https://github.com/al3x991"
                    className="flex items-center gap-2 rounded-full bg-black/20 px-3 py-2 text-[16px] font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Github Repo
                    <FaGithub className="text-[16px] font-bold text-white" />
                  </Link>
                </span>
              </div>
            </div>
            {/* Additional slider items */}
          </div>
          <div className="arrows absolute bottom-[3%] right-[38%] md:bottom-[10%] md:right-[50px] ">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
          </div>
          <div className="thumbnail absolute bottom-[-329px] flex flex-col items-center justify-center gap-x-[30px] gap-y-[30px] overflow-y-scroll pb-[80px] md:bottom-[-265px] md:flex-row md:items-baseline lg:flex-wrap lg:justify-start lg:pb-[0px] ">
            <div className="item active md:h-[120px] md:max-h-[70%] md:w-[156px] md:max-w-[70%] ">
              <Image
                width={250}
                height={180}
                alt="bg_image"
                src="/images/img1.jpg"
              />
              <div className="content font-bold text-[#816816]">
                Name Slider
              </div>
            </div>
            <div className="item md:h-[120px] md:max-h-[70%] md:w-[156px] md:max-w-[70%] ">
              <Image
                width={250}
                height={180}
                alt="bg_image"
                src="/images/img2.jpg"
              />
              <div className="content font-bold text-[#816816]">
                Name Slider
              </div>
            </div>
            {/* Additional thumbnails */}
          </div>
        </div>
      </section>
      <Script strategy="beforeInteractive" src="./scripts/app.js" />
    </>
  );
};

export default Web;
