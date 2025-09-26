import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../utlis/Container';

const TopHeader = () => {
  return (
    <div className="text-black py-1 bg-[#CAEDE7] hidden md:block">
      
      <div className="flex max-w-7xl mx-auto px-4 flex-col lg:flex-row lg:justify-around justify-center  text-center lg:text-left">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full justify-center lg:justify-around items-center lg:items-start">
          <div className="flex items-center justify-center">
            <FaPhoneAlt className="mr-2" />
            <a href="tel:+918318208837" className="text-sm sm:text-lg lg:text-[0.8rem] xl:text-base">
              +91-8318208837
            </a>
          </div>
          <div className="flex items-center justify-center">
            <FaEnvelope className="mr-2" />
            <a href="mailto:aggarwal.manas@gmail.com" className="text-sm sm:text-lg lg:text-[0.8rem] xl:text-base">
              aggarwal.manas@gmail.com
            </a>
          </div>
          <div className="flex items-start justify-center   gap-2">
            <FaMapMarkerAlt className="mt-2" />
            <Link to="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow" target="_blank">
              <span className="text-sm sm:text-lg lg:text-[0.8rem] xl:text-base break-words">
                Chandan Hospital, Vijayant Khand, Gomti Nagar, Lucknow, Uttar Pradesh- 226010
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
