"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaLaravel } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

const Resume = () => {
  const [tabValue, setTabValue] = useState("Experience");

  const skills = [
    { name: "NodeJS", icon: FaNodeJs, level: 88 },
    { name: "ReactJS", icon: FaReact, level: 98 },
    { name: "NextJS", icon: RiNextjsFill, level: 96 },
    { name: "MongoDB", icon: BiLogoMongodb, level: 90 },
    { name: "ExpressJS", icon: SiExpress, level: 85 },
    { name: "HTML", icon: FaHtml5, level: 99 },
    { name: "PHP", icon: FaPhp, level: 90 },
    { name: "CSS", icon: FaCss3, level: 98 },
    { name: "JavaScript", icon: DiJavascript1, level: 85 },
    { name: "Laravel", icon: FaLaravel, level: 70 },
  ];

  const [percentages, setPercentages] = useState(Array(skills.length).fill(0));

  const loadSkillsAnimation = () => {
    skills.forEach((skill, index) => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setPercentages((prev) => {
            const newPercentages = [...prev];
            if (newPercentages[index] < skill.level) {
              newPercentages[index] += 1;
            } else {
              clearInterval(interval);
            }
            return newPercentages;
          });
        }, 10);
      }, index * 200); // Slight delay between each skill animation
    });
  };

  const handleTabSwitch = (tab) => {
    setTabValue(tab);
    if (tab === "Skills") {
      loadSkillsAnimation();
    }
  };

  return (
    <section
      id="resume"
      className="relative z-10 max-h-screen pt-[160px] md:overflow-y-hidden md:pt-[120px]"
    >
      <div className="container">
        <div className="mx-4 flex flex-col items-start justify-start gap-16 md:flex-row">
          <div className="flex w-full  flex-col items-start justify-start md:max-w-[360px]">
            <div className="mb-4 flex flex-col items-start justify-start">
              <h2 className="mb-5 text-2xl font-bold leading-[40px] text-white">
                Why Hire Me?
              </h2>
              <span className="max-w-md text-sm text-white opacity-[0.7]">
                I'm Passionate about developing software solutions to simplify and
                solve business problems.
              </span>
            </div>
            <div className="flex w-full flex-col justify-center gap-2">
              <div
                onClick={() => handleTabSwitch("Experience")}
                className={`w-full cursor-pointer rounded-md px-2 py-3 text-center transition-opacity duration-300 ${
                  tabValue === "Experience" ? "gold_bg" : "bg-dark2 opacity-70"
                } hover:bg-lime`}
              >
                <span className="text-white">Experience</span>
              </div>
              <div
                onClick={() => handleTabSwitch("Education")}
                className={`w-full cursor-pointer rounded-md px-2 py-3 text-center transition-opacity duration-300 ${
                  tabValue === "Education" ? "gold_bg" : "bg-dark2 opacity-70"
                } hover:bg-lime`}
              >
                <span className="text-white">Education</span>
              </div>
              <div
                onClick={() => handleTabSwitch("Skills")}
                className={`w-full cursor-pointer rounded-md px-2 py-3 text-center transition-opacity duration-300 ${
                  tabValue === "Skills" ? "gold_bg" : "bg-dark2 opacity-70"
                } hover:bg-lime`}
              >
                <span className="text-white">Skills</span>
              </div>
              <div
                onClick={() => handleTabSwitch("About")}
                className={`w-full cursor-pointer rounded-md px-2 py-3 text-center transition-opacity duration-300 ${
                  tabValue === "About" ? "gold_bg" : "bg-dark2 opacity-70"
                } hover:bg-lime`}
              >
                <span className="text-white">About Me</span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-1 flex-col items-start justify-start">
            {tabValue === "Experience" && (
              <div className="mb-12 flex flex-col items-start justify-start gap-2">
                <h2 className="mb-2 text-2xl font-bold leading-[20px] text-white">
                  Work Experience
                </h2>
                <span className="mb-3 max-w-xl text-sm text-white opacity-[0.7]">
                  Over 6 years of experience in professional and freelance roles.
                </span>
                <div className=" resume_scroll max-h-full w-full md:max-h-[216px] md:overflow-x-hidden md:overflow-y-scroll lg:max-h-[285px] xl:max-h-[480px] ">
                  <div className=" grid grid-cols-1 gap-4  lg:grid-cols-2">
                    <div className=" rounded-md  bg-dark2 px-3 py-4">
                      <div className=" mx-4 mb-5  flex flex-wrap justify-between">
                        <h2 className=" text-md text-lime ">Etranzact</h2>
                        <h2 className=" pb-5 text-sm text-white opacity-80">
                          Jul 2022 - Present
                        </h2>
                      </div>
                      <div className=" mx-4 text-xl leading-[28px] text-white opacity-80">
                        Analyst
                      </div>
                    </div>

                    <div className=" rounded-md  bg-dark2 px-3 py-4">
                      <div className=" mx-4 mb-5  flex flex-wrap justify-between">
                        <h2 className=" text-md text-lime ">Einstower</h2>
                        <h2 className=" pb-5 text-sm text-white opacity-80">
                          Feb 2019 - Jan 2022
                        </h2>
                      </div>
                      <div className=" mx-4 text-xl leading-[28px] text-white opacity-80">
                        Full-Stack Web Developer
                      </div>
                    </div>
                    <div className=" rounded-md  bg-dark2 px-3 py-4">
                      <div className=" mx-4 mb-5  flex flex-wrap justify-between">
                        <h2 className=" text-md text-lime ">OCreer</h2>
                        <h2 className=" pb-5 text-sm text-white opacity-80">
                          Feb 2019 - Nov 2019
                        </h2>
                      </div>
                      <div className=" mx-4 text-xl text-white opacity-80">
                        Front-End Web Developer
                      </div>
                    </div>
                    <div className=" rounded-md  bg-dark2 px-3 py-4">
                      <div className=" mx-4 mb-5  flex flex-wrap justify-between">
                        <h2 className=" text-md text-lime ">
                          Min.. Of Education
                        </h2>
                        <h2 className=" pb-5 text-sm text-white opacity-80">
                          Nov 2017 - Nov 2018
                        </h2>
                      </div>
                      <div className=" mx-4 text-xl text-white opacity-80">
                        IT Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tabValue === "Education" && (
              <div className="mb-12 flex flex-col items-start justify-start gap-2">
                <h2 className="mb-5 text-2xl font-bold leading-[40px] text-white">
                  My Education
                </h2>
                <span className="mb-3 max-w-md text-sm text-white opacity-[0.7]">
                  Detailed information about educational background.
                </span>
                <div className=" resume_scroll max-h-full md:max-h-[216px] md:overflow-x-hidden md:overflow-y-scroll lg:max-h-[285px] xl:max-h-[480px] ">
                  <div className=" grid grid-cols-1 gap-4  lg:grid-cols-2">
                    <div className=" rounded-md  bg-dark2 px-3 py-4">
                      <div className=" mx-4 mb-5  flex flex-wrap justify-between">
                        <h2 className=" text-md text-lime ">
                          University of Middlesex{" "}
                        </h2>
                        <h2 className=" pb-5 text-sm text-white opacity-80">
                          2016
                        </h2>
                      </div>
                      <div className=" mx-4 text-xl leading-[28px] text-white opacity-80">
                        MSc. Business Information’s Systems Management
                      </div>
                    </div>

                    <div className=" rounded-md  bg-dark2 px-3 py-4">
                      <div className=" mx-4 mb-5  flex flex-wrap justify-between">
                        <h2 className=" text-md text-lime ">
                          University of Surrey
                        </h2>
                        <h2 className=" pb-5 text-sm text-white opacity-80">
                          2015
                        </h2>
                      </div>
                      <div className=" mx-4 text-xl leading-[28px] text-white opacity-80">
                        BSc. Computer Science
                      </div>
                    </div>
                    <div className=" rounded-md  bg-dark2 px-3 py-4">
                      <div className=" mx-4 mb-5  flex flex-wrap justify-between">
                        <h2 className=" text-md text-lime ">
                          Global International College
                        </h2>
                        <h2 className=" pb-5 text-sm text-white opacity-80">
                          2011
                        </h2>
                      </div>
                      <div className=" mx-4 text-xl text-white opacity-80">
                        A Levels Program
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {tabValue === "Skills" && (
              <div className="mb-12 flex w-full flex-col items-start justify-start">
                <h2 className="mb-5 text-2xl font-bold leading-[40px] text-white">
                  My Skills
                </h2>
                <span className="max-w-md text-sm text-white opacity-[0.7]">
                  Detailed information about skills and expertise.
                </span>
                <div className="resume_scroll mt-5 grid max-h-full w-full grid-cols-2 items-start justify-between  gap-x-20 gap-y-10 md:max-h-[216px] md:overflow-x-hidden md:overflow-y-scroll lg:max-h-[285px] xl:max-h-[480px] lg:grid-cols-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="mb-6 ">
                      <div className=" mb-8 flex flex-col items-center justify-center gap-2">
                        <skill.icon className=" text-5xl text-white opacity-[0.7]" />
                      </div>
                      <div className="mb-1 flex justify-between">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-white">
                          {percentages[index]}%
                        </span>
                      </div>
                      <div className="h-2.5 w-full rounded-full bg-dark2">
                        <div
                          id={`bar-${index}`}
                          className="h-2.5 rounded-full bg-lime transition-all duration-1000 ease-in-out"
                          style={{ width: `${percentages[index]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tabValue === "About" && (
              <div className="mb-12 flex flex-col items-start justify-start">
                <h2 className="mb-5 text-2xl font-bold leading-[40px] text-white">
                  About Me
                </h2>
                <span className="w-full text-sm text-white opacity-[0.7]">
                <p className=" mb-3 w-full">My passion for software development is driven by a desire to create scalable, efficient, and user-friendly applications. Whether working as part of a team or individually, I strive to deliver and maintain a high standard of service. Excellent communication skills enable me to understand client requirements effectively, provide insightful opinions, and offer valuable advice.</p>

                <p className=" mb-3 w-full">Outside of coding, I enjoy drawing and spending time on the internet, exploring developer community sites like Stackoverflow and YouTube. Currently, I am delving into blockchain programming and its potential impact on the future of the internet, particularly in the context of "Web 3.0."</p>

                <p className=" mb-3 w-full">I am ambitious, adaptable, and committed to continuous learning and improvement in the ever-evolving field of software development.</p>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
