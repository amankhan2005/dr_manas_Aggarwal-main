import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { submitInquiry } from "../../redux/Slice/Parent.slice";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import BreadCrumbs from "../../Component/BreadCums";

const ContactForm = () => {

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


  // State for form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch=useDispatch()

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us' },
];

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
     setIsLoading(true)
    const response=await dispatch(submitInquiry(formData))

    console.log(response);
    setIsLoading(false)

    // Reset the form
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: ""
    });
  };


     // Scroll to top on component mount
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
      useEffect(() => {
        if (location.pathname === '/about') {
          window.scrollTo(0, 0);
        }
      }, [location]);

  return (
    <section>
               <BreadCrumbs headText={"Contact Us"} items={breadcrumbItems} />
    <div className="relative w-full  flex items-center justify-center p-8 bg-gray-100 overflow-hidden">

    <div className="absolute w-[500px] h-[500px] bg-gradient-to-b from-teal-500 to-teal-600 rounded-full transform translate-x-[40%] translate-y-[40%] opacity-30"></div>
  
    <div className="grid md:grid-cols-2 w-full bg-white rounded-lg shadow-lg overflow-hidden max-w-7xl">
      {/* Contact Info Section */}
      <div className="max-w-[34rem] px-4 md:max-w-[35rem] flex pt-6">
        <div>
          <h1 className="sora-600 leading-[3rem]  text-xl sm:text-2xl lg:text-2xl text-black mb-6">
          Get In Touch With Us
          </h1>
      
          <div className="space-y-6">
  
            <div className="flex items-start space-x-4">
              <a 
                 href="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1f708e] p-3 rounded-md"
              >
                <FaLocationDot className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#1f708e] text-[1.3rem] sora-600">Address</h2>
                <a 
                     href="https://www.google.com/maps/dir//Dr+Manas+Aggarwal+-+Best+Gastroenterologist+Gomti+Nagar+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                 Chandan Hospital, Faizabad Rd, Gomti Nagar, Lucknow
                </a>
              </div>
            </div>
  
            <div className="flex items-start space-x-4">
              <a 
                href="tel:8318208837" 
                className="bg-[#1f708e] p-3 rounded-md"
              >
                <MdContactPhone className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#1f708e] text-[1.3rem] sora-600">Call for Help</h2>
                <a 
                  href="tel:8318208837" 
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                  +91-8318208837
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <a 
                href="tel:+917570018529" 
                className="bg-[#1f708e] p-3 rounded-md"
              >
                <IoMdTime className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#1f708e] text-[1.3rem] sora-600">Clinic Opening Hours</h2>
                <a 
                  href="tel:918318208837" 
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                9 AM to 5 PM
                </a>
              </div>
            </div>
  
            <div className="flex items-start space-x-4">
              <a 
                href="mailto:saumya.751983@gmail.com" 
                className="bg-[#1f708e] p-3 rounded-md"
              >
                <MdEmail className="text-[1.4rem] text-white" />
              </a>
              <div>
                <h2 className="text-[#1f708e] text-[1.3rem] sora-600">Mail for Information</h2>
                <a 
                  href="mailto:aggarwal.manas@gmail.com" 
                  className="sora-400 text-[1rem] text-[#535760] no-underline"
                >
                 aggarwal.manas@gmail.com
                </a>
              </div>
            </div>

            <div className=" flex flex-row space-x-4 mt-20 " style={{ zIndex: 1000 }}>
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
      </div>
  
      {/* Form Section */}
      <div className="p-4 bg-[#1f708e] text-white relative shadow-md rounded-lg mt-4 lg:mt-0">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="lg:text-3xl text-xl sm:text-2xl font-semibold">Contact Us</h3>
  
          <div className="relative">
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none pr-2 focus:border-teal-300 placeholder-white" 
              placeholder="Name" 
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 pr-2 outline-none focus:border-teal-300 placeholder-white" 
              placeholder="Email" 
              required 
            />
          </div>
          <div className="relative">
            <input 
              type="tel" 
              name="phoneNumber" 
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2  pr-2 outline-none focus:border-teal-300 placeholder-white" 
              placeholder="Phone" 
              required 
            />
          </div>
          <div className="relative">
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-white py-2 outline-none focus:border-teal-300 placeholder-white resize-none" 
              rows="4" 
              placeholder="Message" 
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-white text-[#1f708e] font-semibold rounded-full hover:bg-teal-300 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 border-2 border-t-white border-[#1A466D] rounded-full"
                  viewBox="0 0 24 24"
                ></svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  </div>
  </section>
  
  
  );
};

export default ContactForm;
