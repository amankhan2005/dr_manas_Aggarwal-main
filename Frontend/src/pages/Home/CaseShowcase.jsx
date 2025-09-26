import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../../assets/cases/case2.jpeg";
import img2 from "../../assets/cases/case3.jpeg";
import img3 from "../../assets/cases/case4.jpeg";
import img4 from "../../assets/cases/case5.jpeg";
import img5 from "../../assets/cases/case6.jpeg";
import img6 from "../../assets/cases/case7.jpeg";
import img7 from "../../assets/cases/case8.jpeg";
import img8 from "../../assets/cases/case9.jpeg";
import img9 from "../../assets/cases/case10.jpeg";
import img10 from "../../assets/cases/case11.jpeg";
import img11 from "../../assets/cases/case12.jpeg";
import img0 from "../../assets/cases/case0.jpeg";
import img12 from "../../assets/cases/case15.jpg";
import BreadCrumbs from "../../Component/BreadCums";
import "aos/dist/aos.css";
import AOS from "aos";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaPlus } from "react-icons/fa";
import Container from "../../utlis/Container";
import SectionWrapper from "../../utlis/SectionWrapper";

const Cases = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  const cases = [
    {
      id: 0,
      name: "Stomach polyp",
      desc: "Excision of a stomach polyp.          ",
      image: img0,
    },
    {
      id: 1,
      name: "Stomach polyp",
      desc: "Excision of a stomach polyp.          ",
      image: img1,
    },
    {
      id: 2,
      name: "Sigmoid colon cancer",
      desc: "Surgery: sigmoidectomy procedure done.  ",
      image: img2,
    },
    {
      id: 3,
      name: "Small intestine diverticulae",
      desc: "Management of diverticulae in intestine. ",
      image: img3,
    },
    {
      id: 4,
      name: "Road Traffic Accident",
      desc: "Management of pancreatic injury after accident.",
      image: img4,
    },
    {
      id: 5,
      name: "Colon cancer",
      desc: "Surgery: right hemicolectomy performed.  ",
      image: img5,
    },
    {
      id: 6,
      name: "Large incisional hernia",
      desc: "Surgery: open hernia repair procedure done.",
      image: img6,
    },
    {
      id: 7,
      name: "Laparoscopic hernia repair",
      desc: "Repairing two hernias in a single surgery. ",
      image: img7,
    },
    {
      id: 8,
      name: "Gall bladder stones",
      desc: "Laparoscopic cholecystectomy performed.    ",
      image: img8,
    },
    {
      id: 9,
      name: "Stones in small intestine",
      desc: "Management of stones in the small intestine.",
      image: img9,
    },
    {
      id: 10,
      name: "Gall Bladder",
      desc: "Laparoscopic cholecystectomy for gall bladder.",
      image: img10,
    },
    {
      id: 11,
      name: "Pancreatic trauma",
      desc: "Management of pancreatic trauma from accident.",
      image: img11,
    },
  ];

  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Cases" }];

  // Slider settings for slick carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 600 });
    window.scrollTo(0, 0);
  }, []);

  const handleOpenModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  return (
    <div className="bg-gray-100 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-2 flex flex-col items-center ">
          <h2 className="text-start md:text-center w-full md:w-auto">
           Healing With Care, Treating With Expertise
          </h2>
          <h1 className=" text-start md:text-center  leading-tight w-full sm:w-11/12 md:w-3/2 lg:w-full">
           Trusted solutions for stomach, colon, and digestive disorders in Lucknow.
          </h1>
        </div>

        <Slider {...settings} className="relative">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="relative group p-4 flex justify-center"
            >
              <div className="relative cursor-pointer bg-white  shadow-lg overflow-hidden flex flex-col h-full w-full lg:w-[370px] transition-transform transform group-hover:scale-105 group-hover:shadow-2xl max-h-[320px]">
                {/* Image Section */}
                <div className="overflow-hidden flex items-center justify-center relative h-60">
                  <img
                    src={caseItem.image}
                    alt={`${caseItem.name} - Successful Case Study`}
                    className="w-full h-full object-cover"
                  />

                  {/* Plus Icon visible on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                    <FaPlus
                      className="text-[#0196cc] text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => handleOpenModal(index)}
                    />
                  </div>
                </div>

                {/* Text Section with name and description */}
                <div className="p-4 bg-[#0196cc] text-white  flex-grow flex flex-col justify-between">
                  <h3 className="text-lg capitalize font-semibold">{caseItem.name}</h3>
                  <p className="text-sm  flex-grow">{caseItem.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal Logic */}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
          <div className="bg-white rounded-lg p-0 max-w-3xl w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-lg font-bold bg-black text-white px-2 py-2 rounded-full"
            >
              X
            </button>
            <img
              src={cases[selectedIndex].image}
              alt={cases[selectedIndex].name}
              className="w-full h-[80vh] object-cover rounded"
            />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold">
                {cases[selectedIndex].name}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cases;
