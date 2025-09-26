import React from "react";
import { MdCall, MdLocationOn, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Footer Background Design */}
      {/* <div className="relative w-full overflow-hidden bg-[#CAEDE7]">
        <svg className="absolute w-full h-32 text-[#1F708E]" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path
            fill="#1F708E"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,202.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}

      <div className="relative bg-[#1f708e] py-12 ">
        <div className="mx-auto max-w-7xl  flex flex-col lg:flex-row justify-between px-4 gap-6">
          {/* Contact Section with Semantic Markup */}
          <address className="w-full lg:w-1/4 mb-8 not-italic">
            <div className="text-xl font-semibold mb-4">Contact Us</div>
            <ul className=" space-y-2">
              <li className="flex items-center">
                <IoMdMail className="mr-2 text-2xl " />
                <a href="mailto:aggarwal.manas@gmail.com" className="hover:text-gray-800">
                  aggarwal.manas@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MdCall className="mr-2 text-2xl " />
                <a href="tel:+918318208837" className="hover:text-gray-800">
                  +91-8318208837
                </a>
              </li>
              <li className="flex items-center">
                <MdLocationOn className="mr-3 text-4xl lg:text-5xl" />
                <a
                  href="https://www.google.com/maps/dir//Dr+Manas+Aggarwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 transition-all duration-300"
                >
                  Chandan Hospital, Faizabad Rd, Gomti Nagar, Lucknow
                </a>
              </li>
              <li className="flex items-center">
                
                <a
                  href="https://admin.drmanasaggarwal.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-800 text-sm hover:bg-white border border-gray-300 px-4 py-2 rounded transition-all duration-300"
                >
                  Admin Login
                </a>
              </li>
            </ul>
          </address>

          {/* Treatment Section */}
          <nav className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]" aria-label="Our Treatments">
            <div className="text-xl font-semibold mb-4">Our Treatment</div>
            <ul className=" space-y-1">
              {[
                { path: "/treatment/gallbladder/gallbladderstones", label: "Gallbladder Stones" },
                { path: "/treatment/hernia/Inguinalhernial", label: "Hernia" },
                { path: "/treatment/stomach-cancer/polyps", label: "Stomach Cancer" },
                { path: "/treatment/pancreas/pancreaticcancer", label: "Pancreas Cancer" },
                { path: "/treatment/intestine/obstruction", label: "Intestinal Diseases" },
                { path: "/treatment/colon-rectum/inflammatoryboweldiseases", label: "Inflammatory Bowel Disease" },
                { path: "/treatment/liver/livercancer", label: "Liver Cancer" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="flex items-center hover:text-gray-800">
                    <MdKeyboardArrowRight className="mr-2" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick Links Section */}
          <nav className="w-full lg:w-1/4 mb-8 lg:ml-[4rem]" aria-label="Quick Links">
            <div className="text-xl font-semibold mb-4">Quick Links</div>
            <ul className=" space-y-1">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/cases", label: "Cases" },
                { path: "/testonomial", label: "Testimonials" },
                { path: "/blog", label: "Blog" },
                { path: "/contact", label: "Contact Us" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="flex items-center hover:text-gray-800">
                    <MdKeyboardArrowRight className="mr-2" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Map Section */}
          <div className="w-full lg:w-1/4">
            <div className="text-xl font-semibold mb-4">Find Us</div>
            <div className="h-48  w-full bg-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113885.84461201355!2d81.02269!3d26.873881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb781a8e1edf%3A0xbb68c9fe3bbab90b!2sDr%20Manas%20Aggarwal%20-%20Best%20Gastroenterologist%20Gomti%20Nagar%20Lucknow%20%7C%20Gastroenterology%20Cancer%20Surgeon%20Lucknow%20%26%20Piles%20Specialist!5e0!3m2!1sen!2sin!4v1741692066085!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. Manas Aggarwal",
          "url": "https://www.drmanasaggarwal.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Chandan Hospital, Faizabad Rd, Gomti Nagar",
            "addressLocality": "Lucknow",
            "addressCountry": "India"
          },
          "telephone": "+91-8318208837",
          "email": "aggarwal.manas@gmail.com"
        })}
      </script>
    </footer>
  );
};

export default Footer;
