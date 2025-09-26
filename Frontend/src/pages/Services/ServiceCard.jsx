import React, { useEffect } from 'react';
import Slider from 'react-slick';

import image1 from '../../assets/service/hineria.png';
import image2 from '../../assets/service/liver_.png';
import image3 from '../../assets/service/pancreas.png';
import image4 from '../../assets/service/stomach-cancer.png';
import image5 from '../../assets/service/gallbladder.png';
import image6 from '../../assets/service/Antireflux1.png';
import image7 from '../../assets/service/digestive-system.png';
import image8 from '../../assets/service/colorrecutm1.png';
import image9 from '../../assets/service/instenstine.jpg';
import image10 from '../../assets/service/servicephoto/ch.jpeg';
import image11 from '../../assets/service/servicephoto/gbd.jpeg';
import image12 from '../../assets/service/servicephoto/livc.jpeg';
import image13 from '../../assets/service/servicephoto/livmas.jpg';
import image14 from '../../assets/service/servicephoto/panc.webp';
import image15 from '../../assets/service/servicephoto/psto.jpeg';
import image16 from '../../assets/service/servicephoto/sc.jpeg';
import image17 from '../../assets/service/servicephoto/uh.jpeg';

import Container from '../../utlis/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  { title: "Hernia Treatment in Lucknow", img: image1, description: "Get expert hernia treatment in Lucknow with advanced surgical techniques for minimal recovery time.", link: "/treatment/hernia/Inguinalhernial" },
  { title: "Liver Care Specialist", img: image2, description: "Expert liver care services, including diagnosis, treatment, and management of liver diseases in Lucknow.", link: "/treatment/liver/livercancer" },
  { title: "Pancreas Disease Treatment", img: image3, description: "Specialized pancreas treatment with customized plans for effective management of pancreatic disorders.", link: "/treatment/pancreas/pancreaticcancer" },
  { title: "Stomach Cancer Treatment", img: image4, description: "Comprehensive stomach cancer treatment in Lucknow, including chemotherapy, surgery, and advanced therapies.", link: "/treatment/stomach-cancer/cancer" },
  { title: "Gallbladder Surgery Expert", img: image5, description: "Best gallbladder surgery in Lucknow with minimally invasive laparoscopic techniques for quick recovery.", link: "/treatment/gallbladder/gallbladderstones" },
  { title: "Antireflux Surgery in Lucknow", img: image6, description: "Effective antireflux surgery for acid reflux relief, performed by top specialists.", link: "/treatment/antireflux-procedure/antireflux" },
  { title: "Digestive Health Clinic", img: image7, description: "Advanced digestive system care in Lucknow, providing diagnostics, treatments, and long-term support.", link: "/treatment/digestive-system" },
  { title: "Colorectal Surgery Experts", img: image8, description: "Get the best colorectal surgery for conditions like colon cancer and inflammatory bowel disease.", link: "/treatment/colon-rectum/rectumcancer" },
  { title: "Intestinal Disorders Treatment", img: image9, description: "Advanced treatment for intestinal disorders, focusing on gut health and long-term wellness.", link: "/treatment/intestine/instestinecancer" },
  { title: "Laparoscopic Cholecystectomy", img: image10, description: "Safe and effective gallbladder removal surgery with laparoscopic techniques in Lucknow.", link: "/treatment/gallbladder/gallbladderstones" },
  { title: "Gastric Bypass Surgery", img: image11, description: "Top gastric bypass surgery programs in Lucknow for sustainable weight loss.", link: "/treatment/weight-loss-surgery/weight-loss" },
  { title: "Liver Cirrhosis Treatment", img: image12, description: "Personalized liver cirrhosis care plans to improve patient quality of life.", link: "/treatment/liver/livercirrhosis" },
  { title: "Liver Mass Diagnosis & Treatment", img: image13, description: "Advanced diagnostic and treatment solutions for liver masses in Lucknow.", link: "/treatment/liver/livermass" },
  { title: "Pancreatitis Treatment Center", img: image14, description: "Specialized pancreatitis care in Lucknow, focusing on dietary support and pain relief.", link: "/treatment/pancreas/pancreatitis" },
  { title: "Postoperative Recovery Support", img: image15, description: "Comprehensive postoperative care services to ensure a smooth recovery after surgery.", link: "/treatment/postoperative-care" },
  { title: "Expert Surgical Care", img: image16, description: "Trusted surgical care services in Lucknow, ensuring safe and effective treatment outcomes.", link: "/treatment/surgical-care" },
  { title: "Diagnostic Ultrasound Services", img: image17, description: "Advanced ultrasound services in Lucknow for accurate diagnosis and treatment planning.", link: "/treatment/ultrasound-services" },
];

const ServiceCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="relative bg-gray-100 py-10 md:py-12 ">
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-start md:text-center flex flex-col md:items-center justify-center mb-2'>
          <h2 className='mb-1'>Our Healthcare Services</h2>
          <h1 className="font-bold mb-4 transition duration-300 transform">
          Providing High-Quality Healthcare Services
          </h1>

        </div>
        <Slider {...settings} className=''>
          {services.map((service, index) => (
            <div key={index} >
              <div className="card relative bg-white p-6 max-h-[40rem] rounded-lg shadow-lg group overflow-hidden border-l-4 border-[#1f708e] cursor-pointer  lg:w-[370px] w-full"
                data-aos="fade-up" data-aos-duration="500" data-aos-delay={index * 50}>
                <div className="absolute inset-0 bg-gradient-to-l from-[#1f708e] to-[#0f4558] transform -translate-x-full transition-transform duration-700 group-hover:translate-x-0"></div>
                <div className="relative z-10 flex flex-col items-start h-full">
                  <img src={service.img} alt={service.title} className="h-24 mb-4" />
                  <div className="text-lg text-[#1f708e] font-semibold mb-2 group-hover:text-white">{service.title}</div>
                  <p className="text-sm text-gray-600 group-hover:text-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceCard;