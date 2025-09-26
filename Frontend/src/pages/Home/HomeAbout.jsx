import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from '../../assets/about/pattern-11.png';
import image1 from '../../assets/Apron.jpg';
import { Link } from 'react-router-dom';
import { FaUserMd } from 'react-icons/fa';
import Container from '../../utlis/Container';

const AboutClinic = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });

        // Handle scroll refresh
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative overflow-hidden bg-white py-10 md:py-14 ">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: `url(${p1})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'left',
                    opacity: 0.5,
                    width: '40%',
                    left: '0',
                }}
            ></div>

            {/* Main Content */}
            <div className='max-w-7xl mx-auto px-4'>
            <div className="relative flex flex-col lg:flex-row justify-items-start container  w-full lg:gap-[5rem] gap-10 mx-auto ">
  
                {/* Left Side: Text Content */}
                <div className="flex-1  space-y-2  lg:flex-grow" data-aos="fade-right">
                    <div className='flex flex-col gap-1'>
                        <h2>About Dr. Manas Aggarwal</h2>
                        <h1 className="font-bold text-gray-800">
                            Best Gastrosurgeon, GI Cancer Surgeon and Pancreas Specialist in Lucknow
                        </h1>
                    </div>

                    <p className="text-base text-gray-600 leading-relaxed text-justify">
                        Dr. Manas is a proficient Gastrointestinal and Hepato-biliary-pancreatic surgeon with experience of 100 varieties of surgical procedures. A modern-day surgeon performs more than 90 percent of surgeries through minimally invasive techniques (laparoscopic or keyhole surgery). He has been performing laparoscopic surgeries on a consistent basis and recently has started performing robotic surgeries as well. Having trained from highly esteemed medical schools of India, Dr. Aggarwal knows the utter importance of receiving structured and quality education. Tutoring subordinates in the operating room and beyond was a part of his training as well, which made him more sensitive and patient.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed text-justify">
                        Dr. Aggarwal likes to keep the overall well-being of his patients as a top priority, which extends from helping them to get rid of their bodily ailments, patient aural reception to their problems, helping them gain insight into the treatment, and eventually complete cure. He maintains high standards of patient care and sterility. If you happen to have an ailment which requires a gastrosurgeon’s opinion, Dr. Manas Aggarwal emerges as an excellent choice.
                    </p>

                    {/* Call to Action Button */}
                    <div className="justify-end items-end">
                        <Link to={"/about-dr-manas-aggarwal"}>
                            <button className="button">Know More</button>
                        </Link>
                    </div>
                </div>

                {/* Right Side: Image & Doctor Info */}
                <div className="flex-none  flex flex-col items-center lg:items-start lg:w-fit " data-aos="fade-left">
                    <div className="relative">
                        <img
                            src={image1}
                            alt="Dr. Manas Aggarwal"
                            className="w-full lg:w-[450px] h-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                        />

                        {/* Doctor's Information Above Image */}
                        <div className="absolute bottom-0 bg-white bg-opacity-90 rounded-lg shadow-lg px-2 py-2 text-start lg:text-left w-[80%] justify-center flex flex-col items-center md:ml-[1rem] ml-[0.5rem] mb-[1rem]">
                            <div className='flex items-start justify-center gap-4'>
                                <FaUserMd className="text-[#4A6F8F] lg:text-[4rem] text-[4rem]" />
                                <div className="flex flex-col items-start justify-start">
                                    <p className="md:text-2xl sm:text-xl text-sm font-semibold text-gray-900">Dr. Manas Aggarwal</p>
                                    <p className="mt-2 text-xl text-gray-600 lg:text-left font-bold">
                                       14+ Years Experience
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            </div>
        </div>
    );
};

export default AboutClinic;
