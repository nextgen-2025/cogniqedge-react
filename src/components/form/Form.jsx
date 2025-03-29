import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';
import './form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Our Location",
      details: "Navi Mumbai, Maharashtra, India"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email Us",
      details: "info@cogniedge.in"
    }
    // {
    //   icon: <FaPhone className="w-5 h-5" />,
    //   title: "Call Us",
    //   details: "+91 XXX XXX XXXX"
    // },
    // {
    //   icon: <FaClock className="w-5 h-5" />,
    //   title: "Working Hours",
    //   details: "Mon - Fri: 9:00 AM - 6:00 PM"
    // }
  ];

  return (
    <div className="rounded bg-gradient-to-r from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[1200px]"> {/* Increased max width */}
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-gray-400">
            Have questions? We'd love to hear from you.
          </p>
        </div>

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
                    <h3 className="text-lg text-white font-semibold truncate">{detail.title}</h3>
                    <p className="text-gray-400 mt-2 text-base">{detail.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="w-full">
            <form onSubmit={handleSubmit} 
                  className="space-y-6 bg-gray-800/50 backdrop-blur-sm p-8 lg:p-10 rounded-xl 
                           border border-gray-700/50 shadow-xl">
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${errors.name ? 'border-red-500' : 'border-gray-600'} 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${errors.email ? 'border-red-500' : 'border-gray-600'} 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${errors.subject ? 'border-red-500' : 'border-gray-600'} 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="4"
                    className={`w-full px-4 py-2.5 bg-gray-700/50 border 
                               ${errors.message ? 'border-red-500' : 'border-gray-600'} 
                               rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 
                               text-white placeholder-gray-400 transition-all duration-300`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white rounded-lg font-semibold transform
                         hover:from-blue-600 hover:to-purple-600 
                         focus:outline-none focus:ring-2 focus:ring-purple-500/50
                         transition-all duration-300 hover:scale-[1.02]
                         shadow-lg hover:shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;