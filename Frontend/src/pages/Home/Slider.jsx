import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import s1 from '../../assets/slider/gastro.jpg';
import s2 from '../../assets/slider/s1.jpeg';
import slider1 from '../../assets/slider-rename/appointment-1.png';
import slider2 from '../../assets/slider-rename/diets.png';
import slider3 from '../../assets/slider-rename/doctor-1.png';
import pattern from '../../assets/whywechoose.png';
import Container from '../../utlis/Container';
import BookApointement from '../../Component/BookApointement'
const HomeSlider = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { arrows: false } },
      { breakpoint: 600, settings: { arrows: false } },
      { breakpoint: 480, settings: { dots: false, arrows: false } },
    ],
  };

  return (
    <div className="relative w-full  mx-auto h-fit">

     
      {/* Slider */}
      <Slider {...settings} className="relative h-fit ">
        <div className="relative">
          <img
            src={s1}
            alt="Gastroenterology Specialist - Book Your Appointment"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative">
          <img
            src={s2}
            alt="Advanced Medical Treatments - Consult Our Experts"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] object-cover"
            loading="lazy"
          />
        </div>
      </Slider>

      {/* Cards Positioned Below the Slider */}
      <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 sm:items-center sm:justify-center gap-2 relative z-10 mt-[-8px] lg:mt-[-50px]  justify-items-center">
        {/* First Card */}
        <a className='hidden lg:block' href="https://chandanhospital.in/BookAppoinment/Appointment?DoctorId=DR00157" target="_blank">
          <div className="bg-white relative shadow-lg rounded-md p-4 text-center flex-1 w-full max-w-[370px] lg:max-w-[280px] xl:max-w-[400px]">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'contain', backgroundPosition: 'center', opacity: 0.6, zIndex: 0 }}></div>
            <div className="relative z-10 flex items-start justify-center w-full gap-3 lg:gap-4">
              <div className="flex justify-center">
                <img src={slider1} alt="Book Appointment Icon" loading="lazy" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-lg lg:text-xl text-left leading-snug">Book Appointment</h3>
                <p className="text-gray-600 text-sm lg:text-base text-left leading-relaxed">Easily schedule your visit online and manage your health.</p>
              </div>
            </div>
          </div>
        </a>
        <div className='hidden   my-4'>

<BookApointement/>
        </div>
        {/* Second Card */}
        <Link to="/cases">
          <div className="bg-white relative shadow-lg rounded-md p-4 text-center flex-1 w-full max-w-[370px] lg:max-w-[280px] xl:max-w-[400px]">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'contain', backgroundPosition: 'center', opacity: 0.6, zIndex: 0 }}></div>
            <div className="relative z-10 flex items-start justify-center w-full gap-3 lg:gap-4">
              <div className="flex justify-center">
                <img src={slider2} alt="Explore Patient Cases" loading="lazy" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-lg lg:text-xl text-left leading-snug">Explore Our Cases</h3>
                <p className="text-gray-600 text-sm lg:text-base text-left leading-relaxed">Discover how we help our patients with personalized treatments.</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Third Card */}
        <Link to="/contact">
          <div className="bg-white relative shadow-lg rounded-md p-4 text-center flex-1 w-full max-w-[370px] lg:max-w-[280px] xl:max-w-[400px]">
            <div className="absolute inset-0" style={{ backgroundImage: `url(${pattern})`, backgroundSize: 'contain', backgroundPosition: 'center', opacity: 0.6, zIndex: 0 }}></div>
            <div className="relative z-10 flex items-start justify-center w-full gap-3 lg:gap-4">
              <div className="flex justify-center">
                <img src={slider3} alt="Contact Our Medical Team" loading="lazy" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-lg lg:text-xl text-left leading-snug">Contact Us</h3>
                <p className="text-gray-600 text-sm lg:text-base text-left leading-relaxed">Get in touch with our team for immediate assistance.</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 right-24 transform -translate-y-1/2 bg-[#1f708e] text-white rounded-full p-3 cursor-pointer hover:bg-[#1f708e] z-10" onClick={onClick}>
    <FaArrowRight size={20} />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-[#1f708e] text-white rounded-full p-3 cursor-pointer hover:bg-[#1f708e] z-10" onClick={onClick}>
    <FaArrowLeft size={20} />
  </div>
);

export default HomeSlider;
