"use client";

import Link from "next/link";
import Image from "next/image";
import { init } from "ityped";
import Circle from "@/components/AnimCircle/Circle";
import { useEffect, useRef, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const useCountUp = (endValue) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // duration of the animation in milliseconds
    const increment = endValue / (duration / 10); // calculate the increment

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 10); // update every 10ms

    return () => clearInterval(counter);
  }, [endValue]);

  return count;
};

const Hero = () => {
  const textRef = useRef();
  const yearsOfExperience = useCountUp(6);
  const projectsCompleted = useCountUp(21);
  const technologiesMastered = useCountUp(7);
  const codeCommits = useCountUp(307);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Development.", "Mobile Development."],
    });
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 max-h-screen pt-[160px] md:overflow-y-hidden md:pt-[120px] "
      >
        <div className="container">
          <div className="mx-4  flex flex-wrap">
            <div className="flex flex-col justify-between w-full gap-12 px-4 lg:flex-row">
              <div
                className="wow fadeInUp order-2 flex max-w-[620px] flex-col justify-evenly lg:order-1"
                data-wow-delay=".2s"
              >
                <span className="pb-3 text-sm leading-[30px] opacity-[0.7]">
                  Full Stack Developer{" "}
                </span>
                <h1 className="mb-2  flex flex-col items-start justify-start gap-1 text-[54px] font-bold leading-[50px]  text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Hello I&apos;m{" "}
                  <span className=" text-lime">Alexander Omoruyi</span>
                </h1>
                <p className="text-md mb-6 font-light !leading-relaxed text-body-color dark:text-white dark:opacity-90">
                  I excel at developing software solutions that transform
                  business needs into efficient applications. Reliable and
                  communicative, I am passionate about advancing{" "}
                  <span ref={textRef}></span>
                </p>
                <div className="flex flex-col items-center justify-start gap-10 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/assets/file/cv.pdf"
                    className="secondary_btn flex"
                  >
                    Download CV{" "}
                    <MdOutlineFileDownload className=" text-xl font-bold text-lime" />
                  </Link>
                  <Link
                    href="https://github.com/al3x991"
                    className="flex items-center gap-5 rounded-full bg-black/20 px-8 py-4 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    My GitHub{" "}
                    <FaGithub className=" text-[26px] font-bold text-white" />
                  </Link>
                </div>
              </div>

              <div className="relative order-1 mx-auto h-56 w-56 rounded-full lg:order-2 lg:mx-0 lg:ml-[30px] lg:h-64 lg:w-64">
                {/* <Image
                  className="rounded-full"
                  fill
                  src="/images/hero/alex.jpg"
                  alt="image description"
                />  */}

                <Circle />
              </div>
            </div>
            <div className="ites-center mx-4 mb-12 mt-12 grid w-full  max-w-[900px] grid-cols-1 justify-between gap-4 md:grid-cols-2  md:gap-0 lg:grid-cols-4">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="text-[44px] font-bold text-white">
                  {yearsOfExperience}
                </h2>
                <span className="w-[80px] text-base font-normal leading-[16px] text-white opacity-[0.7]">
                  Years of experience
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="text-[44px] font-bold text-white">
                  {projectsCompleted}
                </h2>
                <span className="w-[80px] text-base font-normal leading-[16px] text-white opacity-[0.7]">
                  Projects Completed
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="text-[44px] font-bold text-white">
                  {technologiesMastered}
                </h2>
                <span className="w-[80px] text-base font-normal leading-[16px] text-white opacity-[0.7]">
                  Technologies mastered
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <h2 className="text-[44px] font-bold text-white">
                  {codeCommits}
                </h2>
                <span className="w-[80px] text-base font-normal leading-[16px] text-white opacity-[0.7]">
                  Code commits
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
