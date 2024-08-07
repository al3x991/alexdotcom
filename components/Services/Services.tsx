"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { GoArrowDownRight, GoArrowRight } from "react-icons/go";
import Circle from '@/components/AnimCircle/Circle';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    { title: "Web Development", id: "01", description: "Creating responsive and robust websites tailored to your business needs." },
    { title: "Mobile Development - (In View)", id: "02", description: "Building user-friendly mobile applications for both Android and iOS platforms." },
    { title: "UI/UX Design", id: "03", description: "Designing intuitive and engaging user interfaces for a seamless user experience." },
    { title: "SEO", id: "04", description: "Optimizing your website to rank higher on search engines and attract more traffic." },
  ];

  return (
    <section
      id="about"
      className="relative z-10 max-h-screen pt-[160px] md:overflow-y-hidden md:pt-[120px]"
    >
      <div className="container">
        <div className="mx-4 flex flex-col items-center justify-between gap-20 pb-80 md:flex-row  md:pb-[0px]">
          <div className=" flex flex-col items-center justify-center">
            <div className=" mb-12 flex flex-col items-center justify-center">
              <h2 className=" text-2xl font-bold leading-[40px] text-white">
                My Services
              </h2>
              <span className=" text-sm text-white opacity-[0.7]">
                What I Offer
              </span>
            </div>
            <div className="relative order-1 mx-auto h-56 w-56 rounded-full lg:order-2 lg:mx-0 lg:h-64 lg:w-64">
              <Circle />
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {services.map((service, index) => (
                <Link
                  href="/portfolio?cat=web"
                  key={index}
                  className={`mb-5 border-b-2 border-white border-opacity-30 ${
                    hoveredIndex === index ? "cursor-pointer" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h1
                      className={`text-3xl font-bold  opacity-[0.6] transition-all duration-700 ease-in-out  ${
                        hoveredIndex === index ? "text-lime" : "text-white"
                      }`}
                    >
                      {service.id}
                    </h1>

                    <div
                      className={`flex items-center justify-center rounded-full p-3 transition-all duration-700 ease-in-out  ${
                        hoveredIndex === index ? "bg-lime" : "bg-white"
                      }`}
                    >
                      {hoveredIndex === index ? (
                        <GoArrowRight className="text-xl font-bold text-white opacity-[0.6] transition-all duration-700 ease-in-out " />
                      ) : (
                        <GoArrowDownRight className="text-xl font-bold text-black opacity-[0.6] transition-all duration-700 ease-in-out " />
                      )}
                    </div>
                  </div>
                  <h2
                    className={`mb-2 text-2xl font-bold transition-all duration-700 ease-in-out  ${
                      hoveredIndex === index ? "text-lime" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h2>
                  <p className="text-normal mb-4 text-white opacity-70">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
