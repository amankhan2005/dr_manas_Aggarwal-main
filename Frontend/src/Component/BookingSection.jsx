import React, { useEffect } from 'react';
import { FaHospital } from 'react-icons/fa'; // Importing hospital icon
import backgroundImage from '../assets/about/pattern-12.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Container from '../utlis/Container';
import BookApointement from './BookApointement'
const BookNowSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  return (
    <>
    
 
    <section className="relative py-10  bg-[#1f708e] ">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8, // Adjust the opacity for a subtle background
        }}
      ></div>

      {/* Content Wrapper */}
      <div className='max-w-7xl mx-auto px-4 flex md:flex-row flex-col justify-center items-center'>
      <div className="relative z-10 px-2  flex flex-col lg:flex-row items-center justify-center md:gap-[4rem] gap-2 md:mb-0 mb-4">
        {/* Hospital Icon */}
        <FaHospital
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white"
          data-aos="fade-up"
        />

        {/* Text and Button Section */}
        <div
          className="flex flex-col items-center   text-center md:text-left "
          data-aos="fade-left"
        >
   

          {/* Heading and Button Wrapper */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Heading */}
            <h1 className=" text-white lg:text-start text-center md:w-2/3">
            Book Your Consultation With Best  GI Surgeon Today
            </h1>
           
          </div>
        </div>
      </div>
 <BookApointement classes='bg-white hover:bg-gray-200' />
      </div>
    </section>
    </>
  );
};

export default BookNowSection;
