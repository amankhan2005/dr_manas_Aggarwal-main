import React, { useEffect } from 'react';
import { FaMicroscope, FaHeartbeat, FaShieldAlt, FaVials, FaRegCheckCircle, FaDiagnoses } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import doctorimg from '../../assets/doctor.png';
import pattern from '../../assets/whywechoose.png';
import Container from '../../utlis/Container';

const WhyChooseUs = () => {
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


  const cards = [
    {
      id: 1,
      icon: <FaMicroscope size={30} className="text-white" />,
      title: 'Expert Knowledge',
      description: 'Specializing in digestive health and offering a deep understanding of GI conditions.',
    },
    {
      id: 2,
      icon: <FaHeartbeat size={30} className="text-white" />,
      title: 'Diagnostic Precision',
      description: 'Performing essential tests for accurate diagnoses and precise treatment plans.',
    },
    {
      id: 3,
      icon: <FaShieldAlt size={30} className="text-white" />,
      title: 'Preventive Focus',
      description: 'Prioritizing early detection to ensure long-term health and well-being.',
    },
    {
      id: 4,
      icon: <FaVials size={30} className="text-white" />,
      title: 'Cutting-edge Technology',
      description: 'Utilizing the latest technology for superior care and accurate diagnosis.',
    },
    {
      id: 5,
      icon: <FaRegCheckCircle size={30} className="text-white" />,
      title: 'Comprehensive Care',
      description: 'Delivering holistic, patient-centered treatment plans tailored to you.',
    },
    {
      id: 6,
      icon: <FaDiagnoses size={30} className="text-white" />,
      title: 'Precise Diagnoses',
      description: 'Focusing on accuracy and timely diagnoses for your overall well-being.',
    },
  ];



  return (
    <section className='py-10 md:py-12 '>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Heading */}
        <div className="mb-2 flex flex-col items-center ">
          <h2 className="text-start md:text-center w-full md:w-auto">
           Leading Surgical Gastroenterologist in Lucknow
          </h2>
          <h1 className=" text-start md:text-center  leading-tight w-full sm:w-11/12 md:w-3/2 lg:w-full">
          Specialized care for stomach, liver, pancreas & GI disorders with proven success.
          </h1>
        </div>


        {/* Cards Layout */}
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards?.map((card) => (
              <div
                key={card.id}
                className="relative flex items-start bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105  border cursor-pointer  hover:border-[#1f708e]"
                data-aos="fade-right" // Apply AOS animation
              >
                {/* Pattern Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    opacity: 0.6, // Keep the original opacity to maintain the pattern visibility
                    zIndex: 0, // Ensure it stays behind the card content
                  }}
                ></div>

                {/* Icon Section */}
                <div className="z-10 flex-shrink-0 rounded-full bg-[#1f708e] p-4">
                  <p className="text-white text-3xl">{card.icon}</p>
                </div>

                {/* Content Section */}
                <div className="ml-6 z-10">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>

                {/* Decorative Border Effect */}
                <div className="absolute top-0 left-0 w-full h-full rounded-lg border-2 border-transparent hover:border-[#1f708e] transition duration-300"></div>
              </div>

            ))}
          </div>

          {/* Doctor Image in Center on Large Screens */}
          {/* <div className="flex justify-center items-start">
            <img
              src={doctorimg}
              alt="Dr. Manas Aggarwal - Surgical Gastroenterologist"
              className="lg:w-96 w-full h-auto object-cover"
              data-aos="zoom-in" // Apply zoom-in animation to the image
            />
          </div> */}

          {/* Right Side Cards */}
          {/* <div className="space-y-6">
            {cards.slice(3).map((card) => (
              <div
                key={card.id}
                className="relative flex items-start bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl border cursor-pointer  hover:border-[#1f708e] transition-transform duration-300 hover:scale-105"
                data-aos="fade-left" // Apply AOS animation
              >
               
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${pattern})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    opacity: 0.8, // Keep the original opacity to maintain the pattern visibility
                    zIndex: 0, // Ensure it stays behind the card content
                  }}
                ></div>

                
                <div className="z-10 flex-shrink-0 rounded-full bg-[#1f708e] p-4">
                  <p className="text-white text-3xl">{card.icon}</p>
                </div>

             
                <div className="ml-6 z-10">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>

                
                <div className="absolute top-0 right-0 w-full h-full rounded-lg border-2 border-transparent transition duration-300"></div>
              </div>
            ))}
          </div> */}

      </div>
    </section>
  );
};

export default WhyChooseUs;
