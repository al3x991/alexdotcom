// components/Portfolio/Web.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import Script from "next/script";

const UIUX = () => {
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
      <section id="portfolio" className="relative z-10 h-full max-h-screen">
        <div className="slider">
          <div className="list">
            <div className="item active">
              <Image
                width={250}
                height={180}
                alt="bg_image"
                src="/images/img1.jpg"
              />
              <div className="overlay absolute left-0 top-0 z-0 h-full w-full bg-black opacity-[0.9]"></div>

              <div className="content">
                <p>design</p>
                <h2>Web 01</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
                <span className="mt-4 flex flex-col items-center justify-start gap-4 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
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

              <div className="content">
                <p>design</p>
                <h2>Web 02</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, neque? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum, ex.
                </p>
                <span className="mt-4 flex flex-col items-center justify-start gap-4 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
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
          <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
          </div>
          <div className="thumbnail">
            <div className="item active">
              <Image
                width={250}
                height={180}
                alt="bg_image"
                src="/images/img1.jpg"
              />
              <div className="content">Name Slider</div>
            </div>
            <div className="item">
              <Image
                width={250}
                height={180}
                alt="bg_image"
                src="/images/img2.jpg"
              />
              <div className="content">Name Slider</div>
            </div>
            {/* Additional thumbnails */}
          </div>
        </div>
      </section>
      <Script strategy="beforeInteractive" src="./scripts/app.js" />
    </>
  );
};

export default UIUX;
