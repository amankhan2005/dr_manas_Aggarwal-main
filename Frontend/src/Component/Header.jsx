import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { Link, useLocation, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";
import { FiMenu, FiX, FiMinus } from "react-icons/fi";
import CallbackModal from "../Component/BookApointement";

import { FiPlus } from "react-icons/fi";

import BookApointement from "../Component/BookApointement";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(); // Added reference for dropdown

  const [activeSubDropDown, setActiveSubDropDown] = useState(null);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);
  const navigate = useNavigate();

  const [toogleTreatment, setToogleTreatment] = useState(false);
  const [sideDrop, setSideDrop] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropMobiledown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close if the same dropdown is clicked again
    } else {
      setOpenDropdown(index); // Open the clicked dropdown
    }
  };

  const toggleTreatmentDropdown = (isActive) => {
    console.log("i am toogle tratment");

    setActiveDropdown(isActive);
  };

  const toggleTreatmentSubDropdown = (item) => {
    setActiveSubDropDown(activeSubDropDown === item ? null : item);
  };

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
    setActiveSubDropDown(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toogleSideDropDown = () => {
    setSideDrop(true);
  };

  const handletoogleTreatment = () => {
    setToogleTreatment(!toogleTreatment);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the click is outside the menu and the dropdown
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu
        setActiveDropdown(null); // Reset active dropdown
        setActiveSubDropDown(null); // Reset active sub-dropdown
      }
    };

    // Only add the event listener if the menu is open
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    // Clean up the event listener
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const treatments = [
    {
      name: "Gallbladder",
      hasSubItems: true,
      subItems: [
        {
          name: "Gallstones",
          path: "/treatment/gallbladder/gallbladderstones",
        },
        {
          name: "Gallbladder Cancer",
          path: "/treatment/gallbladder/gallbladdercancer",
        },
        {
          name: "Bile Duct Injury",
          path: "/treatment/gallbladder/Bileductinjury",
        },
      ],
    },
    {
      name: "Hernia",
      hasSubItems: true,
      subItems: [
        { name: "Inguinal Hernia", path: "/treatment/hernia/Inguinalhernial" },
        {
          name: "Ventral/Incisional Hernia",
          path: "/treatment/hernia/Ventralhernia",
        },
        { name: "Umbilical Hernia", path: "/treatment/hernia/Umbilicalhernia" },
      ],
    },
    {
      name: "Stomach Cancer",
      hasSubItems: true,
      subItems: [
        { name: "Polyps", path: "/treatment/stomach-cancer/polyps" },
        { name: "Stomach Cancer", path: "/treatment/stomach-cancer/cancer" },
      ],
    },
    {
      name: "Pancreas",
      hasSubItems: true,
      subItems: [
        {
          name: "Pancreatic Stones",
          path: "/treatment/pancreas/pancreaticestones",
        },
        {
          name: "Pancreatic Cancer",
          path: "/treatment/pancreas/pancreaticcancer",
        },
        { name: "Whipple Surgery", path: "/treatment/pancreas/whipple" },
      ],
    },
    {
      name: "Proctology",
      hasSubItems: true,
      subItems: [
        { name: "Haemorrhoids", path: "/treatment/proctology/hemorrhoids" },
        { name: "Fissure", path: "/treatment/proctology/fisures" },
        { name: "Fistula", path: "/treatment/proctology/fistulas" },
      ],
    },
    {
      name: "Intestine",
      hasSubItems: true,
      subItems: [
        {
          name: "Obstruction / Strictures",
          path: "/treatment/intestine/obstruction",
        },
        { name: "Perforation", path: "/treatment/intestine/perforation" },
        {
          name: "Intestinal Cancer",
          path: "/treatment/intestine/instestinecancer",
        },
      ],
    },
    {
      name: "Colon Rectum",
      hasSubItems: true,
      subItems: [
        { name: "Polyps", path: "/treatment/colon-rectum/rectumpolyps" },
        // { name: 'Inflammatory Bowel Diseases', path: '/treatment/colon-rectum/inflammatoryboweldiseases`' },
        {
          name: "Colon/Rectal Cancer",
          path: "/treatment/colon-rectum/rectumcancer",
        },
      ],
    },
    {
      name: "Liver",
      hasSubItems: true,
      subItems: [
        { name: "Cysts / Hydatid Cysts", path: "/treatment/liver/livercysts" },
        { name: "Liver Cancer", path: "/treatment/liver/livercancer" },
        { name: "Liver Mass", path: "/treatment/liver/livermass" },
      ],
    },
    {
      name: "Whipple Surgery",
      hasSubItems: false,
      // No subItems, lead directly to the page
      path: "/treatment/whipple/whilesurgery",
    },
    {
      name: "Antireflux Procedure",
      hasSubItems: false,
      path: "/treatment/antireflux-procedure/antireflux",
    },
    {
      name: "Weight loss surgery",
      hasSubItems: false,
      path: "/treatment/weight-loss-surgery/weightlosssurgery",
    },
    {
      name: "Robotic GI Surgery",
      hasSubItems: false,
      path: "/treatment/robotic-gi-surgery/roboticsurgery",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00072c] opacity-70 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <header className="bg-white text-gray-900  sticky top-0  font-[500] shadow-lg z-50 items-center justify-center">
        <div className="relative w-full flex justify-between max-w-7xl mx-auto px-4 items-center ">
          <Link to="/">
            <img
              src={logo}
              alt="Dr Manas logo"
              className="w-[18rem] lg:w-[15rem] h-auto object-cover "
            />
          </Link>

          {/* Desktop Menu */}
          <nav
            className="hidden relative lg:flex  lg:text-[1rem] text-[1.1rem] xl:text-[1rem] items-center px-2 lg:justify-around lg:gap-8"
            aria-label="Main Navigation"
          >
            <Link
              to="/"
              className={`relative transition-all duration-300 hover:text-primary ${
                location.pathname === "/" ? "text-primary" : ""
              }`}
            >
              Home
              {location.pathname === "/" && (
                <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>
              )}
            </Link>

            <Link
              to="/about-dr-manas-aggarwal"
              className={`relative flex items-center gap-1 transition-all duration-300 hover:text-primary ${
                location.pathname.startsWith("/about") ? "text-primary" : ""
              }`}
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("treatments")}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setActiveSubDropdown(null);
              }}
            >
              <button
                className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${
                  activeDropdown ? "text-primary" : ""
                }`}
                style={{ whiteSpace: "nowrap" }}
              >
                Our Treatments
                {activeDropdown === null ? (
                  <IoMdArrowDropdown />
                ) : (
                  <MdArrowDropUp />
                )}
              </button>

              {activeDropdown === "treatments" && (
                <div className="absolute left-0 bg-white shadow-lg text-[0.9rem] rounded-lg w-[18rem] py-2 z-50 border border-gray-300 transition-transform duration-300 ease-in-out transform-gpu">
                  {treatments.map((treatment) => (
                    <div
                      key={treatment.name}
                      className="border-b relative"
                      onMouseEnter={() => setActiveSubDropdown(treatment.name)}
                      onMouseLeave={() => setActiveSubDropdown(null)}
                    >
                      <button
                        className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          if (treatment.hasSubItems) {
                            setActiveSubDropdown(treatment.name); // Show sub-items if available
                          } else {
                            // Navigate to the treatment page directly if no sub-items
                            window.location.href = treatment.path; // Or use history.push if using react-router
                          }
                        }}
                      >
                        {treatment.name}
                        {treatment.hasSubItems && <IoMdArrowDropright />}{" "}
                        {/* Only show icon if there are sub-items */}
                      </button>

                      {activeSubDropdown === treatment.name &&
                        treatment.hasSubItems && (
                          <div className="absolute left-full top-0 bg-white shadow-lg rounded-lg w-48 z-50">
                            {treatment.subItems.map((subItem, index) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className={`block px-4 py-2 hover:bg-gray-200 ${
                                  index !== treatment.subItems.length - 1
                                    ? "border-b border-gray-300"
                                    : ""
                                }`}
                                onClick={() => {
                                  setActiveDropdown(null); // Close main dropdown on click
                                  setActiveSubDropdown(null); // Close sub-dropdown on click
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/cases"
              className={`relative transition-all duration-300 hover:text-primary ${
                location.pathname === "/cases" ? "text-primary" : ""
              }`}
            >
              Cases
              {location.pathname === "/cases" && (
                <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>
              )}
            </Link>

            <Link
              to="/blog"
              className={`relative transition-all duration-300 hover:text-primary ${
                location.pathname === "/blog" ? "text-primary" : ""
              }`}
            >
              Blog
              {location.pathname === "/blog" && (
                <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>
              )}
            </Link>

            {/* <Link to="/testonomial" className={`relative transition-all duration-300 hover:text-primary ${location.pathname === '/testimonial' ? 'text-primary' : ''}`}>
              Testimonial
              {location.pathname === '/testimonial' && <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>}
            </Link> */}

            <Link
              to="/contact"
              className={`relative transition-all duration-300 hover:text-primary ${
                location.pathname === "/contact" ? "text-primary" : ""
              }`}
              style={{ whiteSpace: "nowrap" }}
            >
              Contact Us
              {location.pathname === "/contact" && (
                <span className="absolute left-0 right-0 bottom-[-3px] h-[2px] bg-primary"></span>
              )}
            </Link>
            <button className="hidden md:block">
              <BookApointement classes="text-white" />
            </button>
          </nav>

          <div className="lg:hidden">
            <button onClick={toggleMenu} aria-label="Open Menu">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Book Appointmen/request callback for mobile */}
        <div className=" flex items-center justify-center py-1">
          <button className="block md:hidden ">
            <BookApointement classes="text-white" />
          </button>
        </div>

        {sideDrop && (
          <div
            className="fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity duration-300"
            onClick={toogleSideDropDown}
            aria-hidden={!isOpen}
          />
        )}

        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed left-0 top-0 h-full w-64 bg-white z-50 shadow-lg transition-transform duration-300 ease-in-out`}
          style={{ overflowY: "auto" }} // Enable sidebar scrolling
        >
          <div className="flex justify-between items-center p-5 border-b">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={toggleMenu}
              aria-label="Open Menu"
              className="text-gray-700 focus:outline-none"
            >
              <FiX className="w-8 h-8" />
            </button>
          </div>
          <div className="p-6 space-y-6 text-lg font-medium text-gray-700">
            <NavLink
              to="/"
              className="block hover:text-teal-600"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-dr-manas-aggarwal"
              className="block hover:text-teal-600"
              onClick={toggleMenu}
            >
              About Us
            </NavLink>

            <div>
              <button
                className={`flex items-center gap-1 transition-all duration-300 hover:text-primary ${
                  activeDropdown ? "text-primary" : ""
                }`}
                style={{ whiteSpace: "nowrap" }}
                onClick={() => handletoogleTreatment()}
              >
                Our Treatments <IoMdArrowDropdown />
              </button>
            </div>

            {toogleTreatment && (
              <div className="space-y-4">
                {treatments.map((treatment, index) => (
                  <div key={treatment.name} className="border-b pb-2">
                    <button
                      onClick={() => {
                        // If treatment has no subItems, navigate directly to its path
                        if (!treatment.hasSubItems) {
                          navigate(treatment.path); // Replace with your navigation method
                        } else {
                          toggleDropMobiledown(index); // Toggle dropdown if it has subItems
                        }
                      }}
                      className="w-full text-left  hover:text-teal-600 flex items-center justify-between"
                    >
                      <span>{treatment.name}</span>
                      {/* Show plus/minus sign only for items with subItems */}
                      {treatment.hasSubItems && (
                        <>
                          {openDropdown === index ? (
                            <FiMinus className="ml-2" />
                          ) : (
                            <FiPlus className="ml-2" />
                          )}
                        </>
                      )}
                    </button>

                    {/* Submenu */}
                    {openDropdown === index && treatment.hasSubItems && (
                      <div className="ml-4 space-y-2 mt-2">
                        {treatment.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            className="block hover:text-teal-600"
                            onClick={toggleMenu}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <NavLink
              to="/cases"
              className="block hover:text-teal-600"
              onClick={toggleMenu}
            >
              Cases
            </NavLink>
            <NavLink
              to="/blog"
              className="block hover:text-teal-600"
              onClick={toggleMenu}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              className="block hover:text-teal-600"
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
