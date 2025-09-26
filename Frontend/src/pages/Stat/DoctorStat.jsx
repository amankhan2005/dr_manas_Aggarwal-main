import React, { useEffect } from "react";
import {
  FaUserMd,
  FaClinicMedical,
  FaRegSmile,
  FaSyringe,
  FaClipboardList,
} from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import image from "../../assets/counter-curve.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "../../utlis/Container";
import a1 from "../../assets/stats/best-customer-experience.png";
import a2 from "../../assets/stats/case-study.png";
import a3 from "../../assets/stats/healthy.png";
import a4 from "../../assets/stats/surgery-room.png";
const stats = [
  {
    id: 1,
    title: "Happy Patients",
    count: "12000",
    // icon: <FaUserMd className="text-[#1f708e] h-16 w-16" />,
    icon: a1,
    backgroundImage: image,
  },
  {
    id: 2,
    title: "Years Experience",
    count: "17",
    // icon: <MdOutlineDateRange className="text-[#1f708e] h-16 w-16" />,
    icon: a2,
    backgroundImage: image,
  },
  {
    id: 3,
    title: "Total Cases Solved",
    count: "3200", // Example number; adjust as needed
    // icon: <PiSuitcaseSimpleFill className="text-[#1f708e] h-16 w-16" />, // Clipboard list for procedures,
    icon: a3,
    backgroundImage: image,
  },
  {
    id: 4,
    title: "Successfully Surgeries",
    count: "1600",
    // icon: <FaSyringe className="text-[#1f708e] h-16 w-16" />, // Using a medical icon
    icon: a4,
    backgroundImage: image, // Add your image import here
  },
];

const ClinicStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // animations trigger only once
    });
  }, []);

  return (
    <section className="py-10 md:py-12 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="mb-2 flex flex-col items-center ">
          <h2 className="text-start md:text-center w-full md:w-auto">
            Our Track Record of Success
          </h2>
          <h1 className="mb-1 text-start md:text-center  leading-tight w-full sm:w-11/12 md:w-3/2 lg:w-full">
            Thousands of happy patients and years of trusted surgical experience.
          </h1>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center p-5"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{
                backgroundImage: `url(${stat.backgroundImage})`,
                backgroundSize: "auto 70px",
                backgroundPosition: "top right",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-full bg-[#e6f3f6] mb-3">
                <img src={stat?.icon} className="" />
              </div>

              {/* Count */}
              <h4 className="text-2xl font-bold text-[#1f708e]">{`+${stat.count}`}</h4>

              {/* Title */}
              <p className="text-sm text-gray-600 mt-1 font-medium">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicStats;
