import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Form = () => {

  const [status, setStatus] = useState(undefined);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setIsLoading(false);
          setStatus("success");
          // alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setIsLoading(false);
          // alert("Error sending message: " + data.error);
          setStatus("error" + data.error);
        }
      } catch (error) {
        setIsLoading(false);
        alert("Failed to send message. Please try again later.");
      }
    } else{
      setIsLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Our Location",
      details: "Mumbai, Maharashtra, India",
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email Us",
      details: "info@cogniedge.in",
    },
  ];

  const API_BASE_URL = import.meta.env.REACT_APP_URL;

  fetch(`${API_BASE_URL}/api/data`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[1200px]">
        {" "}
        {/* Increased max width */}
        {/* Two Column Layout with increased width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-full">
          {/* Left Column - Contact Details */}
          <div className="w-full h-56 p-8 lg:p-10 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50">
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="text-purple-400 mt-1 flex-shrink-0">
                    {React.cloneElement(detail.icon, { className: "w-6 h-6" })}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg text-white font-semibold truncate">
                      {detail.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-base">
                      {detail.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-xl 
                           border border-gray-700/50 shadow-xl"
            >
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${
                                 errors.name
                                   ? "border-red-500"
                                   : "border-gray-600"
                               } 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>
                {/* Organisation */}
                {/* <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name of Organisation
                  </label>
                  <input
                    type="text"
                    id="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Name of Organisation"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${
                                 errors.name
                                   ? "border-red-500"
                                   : "border-gray-600"
                               } 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div> */}
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${
                                 errors.email
                                   ? "border-red-500"
                                   : "border-gray-600"
                               } 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Designation Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Designation"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${
                                 errors.subject
                                   ? "border-red-500"
                                   : "border-gray-600"
                               } 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here"
                    rows="4"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${
                                 errors.message
                                   ? "border-red-500"
                                   : "border-gray-600"
                               } 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white rounded-lg font-semibold transform
                         hover:from-blue-600 hover:to-purple-600 
                         focus:outline-none focus:ring-2 focus:ring-purple-500/50
                         transition-all duration-300 hover:scale-[1.02]
                         shadow-lg hover:shadow-purple-500/25"
              >
                 {isLoading ? "Submitting..." : "Send Message"} {/* Show loading text */}
              </button>
              {
                status === "success" && (
                  <p className="text-green-500 text-center">
                    Message sent successfully!
                  </p>
                )}
              {
                status === "error" && (
                  <p className="text-red-500 text-center">
                    Error sending message. Please try again.
                  </p>
                )
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
