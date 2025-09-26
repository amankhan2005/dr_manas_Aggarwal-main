// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function CallbackModal({ classes }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     fname: "",
//     lname: "",
//     phone: "",
//     // email: "",
//     patientType: "",
//     reason: "",
//     // description: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [errors, setErrors] = useState({});
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   // Phone validation function
//   const validatePhone = (phone) => {
//     const phoneRegex = /^[6-9]\d{9}$/;
//     return phoneRegex.test(phone);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Handle phone validation on change
//     if (name === "phone") {
//       const numericValue = value.replace(/\D/g, ""); // Remove non-digits

//       // Limit to 10 digits
//       const limitedValue = numericValue.slice(0, 10);

//       setFormData((prev) => ({ ...prev, [name]: limitedValue }));

//       // Real-time validation
//       if (limitedValue.length > 0) {
//         if (limitedValue.length < 10) {
//           setErrors((prev) => ({
//             ...prev,
//             phone: "Phone number must be 10 digits",
//           }));
//         } else if (!validatePhone(limitedValue)) {
//           setErrors((prev) => ({
//             ...prev,
//             phone: "Phone number must start with 6, 7, 8, or 9",
//           }));
//         } else {
//           setErrors((prev) => ({ ...prev, phone: "" }));
//         }
//       } else {
//         setErrors((prev) => ({ ...prev, phone: "" }));
//       }
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate phone before submission
//     // if (formData.phone && !validatePhone(formData.phone)) {
//     //   setErrors((prev) => ({ ...prev, phone: "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9" }));
//     //   return;
//     // }

//     setLoading(true);
//     setMessage("");
//     setErrors({});

//     try {
//       const res = await axios.post(
//         "https://db.drmanasaggarwal.com/api/v1/appointement",
//         // "http://localhost:5004/api/v1/appointement",
//         formData
//       );

//       if (res.status === 200 || res.status === 201) {
//         setMessage(
//           "✅ Appointment request submitted successfully! We will contact you soon."
//         );
//         setFormData({
//           fname: "",
//           lname: "",
//           phone: "",
//           // email: "",
//           patientType: "",
//           reason: "",
//           // description: "",
//         });

//         // Close modal after 2 seconds
//         setTimeout(() => {
//           setIsOpen(false);
//           setMessage("");
//         }, 2000);
//       }
//     } catch (error) {
//       console.error("Submission error:", error);

//       if (error.response) {
//         // Server responded with error status
//         const status = error.response.status;
//         if (status === 400) {
//           setMessage("❌ Please check your information and try again.");
//         } else if (status === 500) {
//           setMessage("❌ Server error. Please try again later.");
//         } else {
//           setMessage("❌ Something went wrong. Please try again.");
//         }
//       } else if (error.request) {
//         // Network error
//         setMessage(
//           "❌ Network error. Please check your connection and try again."
//         );
//       } else {
//         // Other error
//         setMessage(
//           "❌ Failed to submit appointment request. Please try again."
//         );
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="">
//       {/* Button to open modal */}
//       <button onClick={() => setIsOpen(true)} className={`${classes}  button`}>
//         Request a Callback
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed text-base font-normal inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white mx-2 rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
//             {/* Close button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-semibold text-[#5ca397] text-center mb-6">
//               Request a Callback
//             </h2>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="fname"
//                   value={formData.fname}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   required
//                   className="border-b placeholder-gray-900 border-gray-900 p-2 focus:outline-none focus:border-[#5ca397]"
//                 />

//                 <div className="relative">
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="Phone (10 digits, starts with 6-9)"
//                     className={`border-b placeholder-gray-900 p-2 focus:outline-none w-full ${
//                       errors.phone
//                         ? "border-red-500"
//                         : "border-gray-400 focus:border-[#5ca397]"
//                     }`}
//                   />
//                   {errors.phone && (
//                     <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//                   )}
//                 </div>
//                 {/* <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="border-b placeholder-gray-900 border-gray-400 p-2 focus:outline-none focus:border-[#5ca397]"
//                 /> */}
//                 <select
//                   name="patientType"
//                   value={formData.patientType}
//                   onChange={handleChange}
//                   className="border-b placeholder-gray-900 border-gray-400 p-2 focus:outline-none focus:border-[#5ca397]"
//                 >
//                   <option value="">Are you a new or existing patient?</option>
//                   <option value="new">New</option>
//                   <option value="existing">Existing</option>
//                 </select>
//                 <select
//                   name="reason"
//                   value={formData.reason}
//                   onChange={handleChange}
//                   className="border-b placeholder-gray-900 border-gray-400 p-2 focus:outline-none focus:border-[#5ca397]"
//                 >
//                   <option value="">Select reason for call</option>
//                   <option value="appointment">Appointment</option>
//                   <option value="billing">Billing</option>
//                   <option value="other">Other</option>
//                 </select>
//                 {/* <textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="Brief Detail to Reason for Call"
//                   rows="1"
//                   className="w-full border-b placeholder-gray-900 border-gray-400 p-2 focus:outline-none focus:border-[#5ca397]"
//                 ></textarea> */}
//               </div>

//               <div className="flex items-start gap-2">
//                 <input type="checkbox" id="consent" className="mt-1" required />
//                 <label htmlFor="consent" className="text-sm text-gray-800">
//                   By completing this form, you are giving us permission to
//                   follow-up by phone, email or text.
//                 </label>
//               </div>

//               {message && (
//                 <div
//                   className={`text-center p-3 rounded ${
//                     message.includes("✅")
//                       ? "bg-green-50 text-green-700 border border-green-200"
//                       : "bg-red-50 text-red-700 border border-red-200"
//                   }`}
//                 >
//                   {message}
//                 </div>
//               )}

//               <button
//                 type="submit"
//                 disabled={loading || errors.phone}
//                 className="w-full py-2 bg-[#6caba0] text-white rounded-lg hover:bg-[#5ca397] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CallbackModal({ classes }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    // email: "",
    patientType: "",
    reason: "",
    // description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Phone validation function
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));

      if (numericValue.length > 0) {
        if (numericValue.length < 10) {
          setErrors((prev) => ({ ...prev, phone: "Phone number must be 10 digits" }));
        } else if (!validatePhone(numericValue)) {
          setErrors((prev) => ({
            ...prev,
            phone: "Phone number must start with 6, 7, 8, or 9",
          }));
        } else {
          setErrors((prev) => ({ ...prev, phone: "" }));
        }
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setErrors({});

    try {
      const res = await axios.post(
        "https://db.drmanasaggarwal.com/api/v1/appointement",
        formData
      );

      if (res.status === 200 || res.status === 201) {
        setMessage(
          "✅ Appointment request submitted successfully! We will contact you soon."
        );
        setFormData({
          fname: "",
          lname: "",
          phone: "",
          patientType: "",
          reason: "",
        });

        setTimeout(() => {
          setIsOpen(false);
          setMessage("");
        }, 2000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      if (error.response) {
        const status = error.response.status;
        if (status === 400) setMessage("❌ Please check your information and try again.");
        else if (status === 500) setMessage("❌ Server error. Please try again later.");
        else setMessage("❌ Something went wrong. Please try again.");
      } else if (error.request) {
        setMessage("❌ Network error. Please check your connection and try again.");
      } else {
        setMessage("❌ Failed to submit appointment request. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <button onClick={() => setIsOpen(true)} className={`${classes} button`}>
        Request a Callback
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)} // Click anywhere on screen closes modal
        >
          <div
            className="bg-white mx-2 rounded-lg shadow-lg w-full max-w-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()} // Click inside content does NOT close moda
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-[#5ca397] text-center mb-6">
              Request a Callback
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="border-b placeholder-gray-900 border-gray-900 p-2 focus:outline-none focus:border-[#5ca397]"
                />

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (10 digits, starts with 6-9)"
                    className={`border-b placeholder-gray-900 p-2 focus:outline-none w-full ${
                      errors.phone ? "border-red-500" : "border-gray-400 focus:border-[#5ca397]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <select
                  name="patientType"
                  value={formData.patientType}
                  onChange={handleChange}
                  className="border-b placeholder-gray-900 border-gray-400 p-2 focus:outline-none focus:border-[#5ca397]"
                >
                  <option value="">Are you a new or existing patient?</option>
                  <option value="new">New</option>
                  <option value="existing">Existing</option>
                </select>

                <select
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="border-b placeholder-gray-900 border-gray-400 p-2 focus:outline-none focus:border-[#5ca397]"
                >
                  <option value="">Select reason for call</option>
                  <option value="appointment">Appointment</option>
                  <option value="billing">Billing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-gray-800">
                  By completing this form, you are giving us permission to
                  follow-up by phone, email or text.
                </label>
              </div>

              {message && (
                <div
                  className={`text-center p-3 rounded ${
                    message.includes("✅")
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || errors.phone}
                className="w-full py-2 bg-[#6caba0] text-white rounded-lg hover:bg-[#5ca397] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
