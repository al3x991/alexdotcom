"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    severity: 'success',
  });
  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    setAlert({ ...alert, open: false });
  
        setNotification({
          open: true,
          message: 'Message sent successfully!',
          severity: 'success',
        });
  setEmail('');
  setSubject('');
  setMessage('');
  };

  return (
    <>
      <section className="relative z-10 max-h-screen pt-[160px] md:overflow-y-hidden md:pt-[120px] ">
        <div className=" flex flex-col md:flex-row py-8 lg:py-16 px-4 md:px-20 mx-auto justify-between gap-20">
          <div className="max-w-screen-md px-4 flex flex-col justify-start ">
          <h2 className="text-gray-900 mb-4  text-4xl font-extrabold tracking-tight dark:text-white">
            Contact Us
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-light sm:text-xl lg:mb-16">
          Get in touch! I'lld like to hear from you
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-light sm:text-xl lg:mb-16">
           Email: 
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-light sm:text-xl lg:mb-16">
           Phone: 
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-8 font-light sm:text-xl lg:mb-16">
           Address: 
          </p>
          </div>
          <div className=" px-4 w-full max-w-xl">
          <form onSubmit={handleRegistration} className="space-y-8 w-full">
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
                placeholder="Email"
                value={email}
            onChange={(e) => setEmail(e.target.value)}
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
                placeholder="How can i help you"
                value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
                value={message}
            onChange={(e) => setMessage(e.target.value)}
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
        </div>
      </section>
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={handleCloseNotification}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={notification.severity}
          onClose={handleCloseNotification}
        >
          {notification.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default Contact;
