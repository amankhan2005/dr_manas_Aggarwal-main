import React, { useEffect } from "react";
import { FaGraduationCap, FaBriefcase, FaStar } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import doctorimg from '../../assets/doctor.png'; // Your doctor image
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import FaqSection from "../../Component/FaqAccor";
import BreadCrumbs from "../../Component/BreadCums";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "../../utlis/Container";

import SectionWrapper from "../../utlis/SectionWrapper";

const DoctorAbout = () => {
  const location = useLocation();
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About Us' },
       
    ];
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true }); // AOS on repeat with 'mirror' for opposite scrolling
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (location.pathname === '/about') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const socialLinks = [
    {
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/drmanasaggarwal?mibextid=LQQJ4d&rdid=9uqGCQZ6y2xPH6el&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F5AShzHFdfS4VAe2b%2F%3Fmibextid%3DLQQJ4d",
        color: "bg-blue-600", // Facebook blue
    },
    {
        icon: <FaInstagram />,
        url: "https://www.instagram.com/drmanasaggarwal/?igsh=MWpmY2FzZWFpcGRpcQ%3D%3D&utm_source=qr",
        color: "bg-gradient-to-r from-pink-500 to-yellow-500", // Instagram gradient
    },
    {
        icon: <FaYoutube />,
        url: "https://www.youtube.com/@DrManasAggarwal",
        color: "bg-red-600", // YouTube red
    },
    {
        icon: <FaWhatsapp />,
        url: `https://wa.me/918318208837?text=${encodeURIComponent("Hello, I need help!")}`, // Replace with your WhatsApp number
        color: "bg-green-500", // WhatsApp green
    },
];

  return (
    <section>
         <BreadCrumbs headText={"About Dr. Manas Aggarwal"} items={breadcrumbItems} />
         <Helmet>
        <title>About Dr. Manas Aggarwal - Best Gastroenterology Surgeon in Lucknow</title>
        <meta name="description" content="Learn about Dr. Manas Aggarwal, an ethical and experienced gastroenterology surgeon specializing in holistic and evidence-based patient care." />
        <meta name="keywords" content="About Dr. Manas Aggarwal, Gastroenterology, Surgeon, Lucknow, Medical Professional" />
      </Helmet>
    <div className="max-w-7xl mx-auto px-4">
      
      {/* Doctor Introduction Section */}
      <div data-aos="fade-up" className="grid lg:grid-cols-2 gap-10  py-10">
        {/* Doctor Image */}
     

        {/* Doctor Info */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className=" text-start">About Dr. Manas Aggarwal</h1>
          <p className="text-lg text-gray-600 leading-relaxed justify-start text-justify">
          Dr Manas Aggarwal has more than 14 years of experience in this field and is trained in pancreatic disorders. He has acquired basic medical education from prestigious institutes in Delhi and moved to Lucknow for pursuing super specialist degree from the oldest super-specialist institute, SGPGIMS. Subsequently he spent his time in Medanta Hospital, Lucknow and moved on.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
          This venture has been created to provide ethical, modern, evidence based advise and necessary support to such patients. Although he is a well trained and certified surgeon, he believes in meditation, lifestyle modification and proper diet are key factors in treatment, with medications and surgery reserved for refractory cases only.
          </p>
        </div>

        {/* <div className="flex justify-center"> */}
          <img
            src={doctorimg}
            alt="Dr Manas Aggarwal"
           
      
          />
        {/* </div> */}
      </div>

      {/* About the Practice */}
      <div className="mt-12" data-aos="fade-right">
        <h2 className="text-3xl font-bold text-[#4A6F8F] inline-block pb-2 border-b-4 border-[#4A6F8F]">
          About the Practice
        </h2>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          The practice is focused on ethical, evidence-based treatment, using holistic methods and lifestyle changes, 
          with surgery and medications only when necessary.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12" data-aos="fade-left">
        <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-[#4A6F8F] inline-block pb-2">
          Skills
        </h2>
        <ul className="list-disc ml-6 mt-4 text-gray-600 text-lg space-y-2">
          <li>Expert planning and management for OPD patients</li>
          <li>Preoperative & postoperative care management</li>
          <li>Emergency triage and casualty management</li>
          <li>Proficient in laparoscopic & open surgical procedures</li>
        </ul>
      </div>

      {/* Professional Experience Section */}
      <div className="mt-12">
        <div className="flex items-center space-x-2">
          <FaBriefcase className="text-[#4A6F8F] text-2xl" />
          <h2 className="text-3xl font-bold text-gray-800">
            Professional Experience
          </h2>
        </div>
        <div className="space-y-6 mt-6">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md" data-aos="flip-up">
            <h3 className="text-xl font-semibold">Vice-Chairperson, Chandan Hospital, Lucknow (July 2023 - Present)</h3>
            <p className="text-gray-600 mt-2">
              Lead surgical teams and manage complex GI surgeries, working closely with specialists to ensure patient care quality.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md" data-aos="flip-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold">Consultant, Medanta Hospital, Lucknow (October 2019 - July 2023)</h3>
            <p className="text-gray-600 mt-2">
              Spearheaded the setup of the GI Surgery department, trained staff, and coordinated the team of surgeons.
            </p>
          </div>
        
          <div className="bg-blue-50 p-6 rounded-lg shadow-md" data-aos="flip-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold">Senior Resident, SGPGIMS, Lucknow (2016 - 2019)</h3>
            <p className="text-gray-600 mt-2">
             Learnt the complexities, spectrum and complications of each procedure.
            </p>
          </div>
      
          <div className="bg-blue-50 p-6 rounded-lg shadow-md" data-aos="flip-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold"> UCMS and Guru Teg Bahadur Hospital, Delhi (2012-2015)</h3>
            <p className="text-gray-600 mt-2">
            Focussed on learning the general surgical discipline.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow-md" data-aos="flip-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold">MAMC and Lok Nayak Hospital, Delhi</h3>
            <p className="text-gray-600 mt-2">
            Started his medical school as a bright undergraduate.
            </p>
          </div>
        </div>
      </div>

     
     {/* Contact Details */}

     <div className="mt-12 ">
  <div className="flex items-center space-x-2 mb-6">
    <FaBriefcase className="text-[#4A6F8F] text-2xl" />
    <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
  </div>

  {/* Contact Details Row */}
  <div className=" flex flex-col items-start">
  <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-6 md:space-y-0 text-lg">
    {/* Location */}
    <div className="flex items-center space-x-4">
      <FaMapMarkerAlt className="text-[#4A6F8F] text-2xl" />
      <div>
        <h3 className="font-semibold">Location</h3>
        <a
          href="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+https://www.google.com/maps/place/Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow+%7C+Gastroenterology+Cancer+Surgeon+Lucknow+%26+Piles+Specialist/@26.8738813,81.0226895,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfb781a8e1edf:0xbb68c9fe3bbab90b!8m2!3d26.8738813!4d81.0226895!16s%2Fg%2F11j0x8jvv3?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 leading-relaxed hover:underline"
        >
          <p>
            Chandan Hospital, Faizabad Rd, <br />
            Vijayant Khand, Gomti Nagar, <br />
            Lucknow
          </p>
        </a>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center space-x-4">
      <FaEnvelope className="text-[#4A6F8F] text-2xl" />
      <div>
        <h3 className="font-semibold">Email</h3>
        <a
          href="mailto:aggarwal.manas@gmail.com"
          className="text-[#2B6CB0] underline"
        >
          aggarwal.manas@gmail.com
        </a>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-4">
      <FaPhoneAlt className="text-[#4A6F8F] text-2xl" />
      <div>
        <h3 className="font-semibold">Phone</h3>
        <a href="tel:+918318208837" className="text-[#2B6CB0] underline">
          +91-8318208837
        </a>
      </div>
    </div>
  </div>

  </div>
    </div>


   {/* Social icons */}

   <div className="mt-12">
      <div className="flex items-center space-x-2">
        <FaBriefcase className="text-[#4A6F8F] text-2xl" />
        <h2 className="text-3xl font-bold text-gray-800">Social Icons</h2>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-8">
      {socialLinks.map((social, index) => (
                <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`flex items-center justify-center w-12 h-12 ${social.color} rounded-full shadow-lg transition-transform transform hover:scale-105 hover:opacity-80`}
                    style={{ transition: 'transform 0.2s' }}
                >
                    <div className="text-white text-2xl">
                        {social.icon}
                    </div>
                </a>
            ))}
      </div>
    </div>


      
     
    </div>
    <FaqSection/>
    </section>
  );
};

export default DoctorAbout;
