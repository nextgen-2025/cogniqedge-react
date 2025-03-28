import React from 'react';
import Marquee from 'react-fast-marquee';

const FeedbackMarquee = () => {
  const testimonials = [
    {
      title: "Edge Computing Solutions",
      feedback: "Transformed our data processing with edge computing solutions, reducing latency by 60% and improving user experience significantly.",
      company: "Tech Innovation Corp"
    },
    {
      title: "Data Center Services",
      feedback: "Their data center services have been instrumental in our digital transformation journey. Exceptional uptime and support.",
      company: "Global Systems Ltd"
    },
    {
      title: "Cloud Integration",
      feedback: "Seamless cloud integration and edge computing solutions that helped us scale our operations efficiently.",
      company: "Digital Ventures Inc"
    },
    {
      title: "Infrastructure Management",
      feedback: "Outstanding infrastructure management services. Their team's expertise has been invaluable to our operations.",
      company: "Enterprise Solutions"
    },
    {
      title: "Security Solutions",
      feedback: "Best-in-class security solutions and compliance management. Helped us achieve our regulatory requirements easily.",
      company: "FinTech Leaders"
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      
      <div className="relative -mx-6">
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
        >
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="mx-6 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50
                         w-[320px] h-[180px] flex flex-col justify-between
                         transform transition-all duration-300 hover:z-10
                          hover:bg-gray-700/70 hover:border-purple-500/50
                         hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                             bg-clip-text text-transparent truncate mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 line-clamp-2 text-sm mb-3">
                  {item.feedback}
                </p>
              </div>
              <p className="text-purple-400 text-sm font-semibold">
                {item.company}
              </p>
            </div>
          ))}
        </Marquee>

        <Marquee
          speed={40}
          gradient={false}
          direction="right"
          pauseOnHover={true}
          className="mt-12"
        >
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="mx-6 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50
                         w-[320px] h-[180px] flex flex-col justify-between
                         transform transition-all duration-300 hover:z-10
                          hover:bg-gray-700/70 hover:border-purple-500/50
                         hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                             bg-clip-text text-transparent truncate mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 line-clamp-2 text-sm mb-3">
                  {item.feedback}
                </p>
              </div>
              <p className="text-purple-400 text-sm font-semibold">
                {item.company}
              </p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default FeedbackMarquee;
