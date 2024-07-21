"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Contact = () => {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="text-gray-900 mb-4 text-center text-4xl font-extrabold tracking-tight dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 text-center font-light sm:text-xl lg:mb-16">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="email"
                className="text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border p-2.5 text-sm shadow-sm dark:text-white"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border p-3 text-sm shadow-sm dark:text-white"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="text-gray-900 dark:text-gray-400 mb-2 block text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border p-2.5 text-sm shadow-sm dark:text-white"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
