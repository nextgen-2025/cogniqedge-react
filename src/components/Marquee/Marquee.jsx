import React from 'react';
import './Marquee.css';

const FeedbackMarquee = () => {
  // Array of feedback items including an optional title and a feedback message.
  const feedbackItems = [
    { title: "Microsoft", feedback: 'Great service and support!' },
    { title: "Paypal", feedback: 'Innovative solutions that work!' },
    { title: "Meta", feedback: 'Exceptional quality and professionalism.' },
    { title: "Ey", feedback: 'A reliable partner for our business.' },
    { title: "Google", feedback: 'Outstanding performance and results.' },
  ];

  // Duplicate the items for a seamless continuous scroll.
  const items = [...feedbackItems, ...feedbackItems];

  return (
    <div className="marquee-container">
      {/* First marquee (scrolls leftward as defined) */}
      <div className="feedback-marquee">
        <div className="feedback-marquee-content">
          {items.map((item, index) => (
            <div className="feedback-item" key={index}>
              {item.title && <h3 className="feedback-title">{item.title}</h3>}
              <p>{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second marquee (scrolls rightward using reverse animation) */}
      <div className="feedback-marquee feedback-marquee-reverse">
        <div className="feedback-marquee-content">
          {items.map((item, index) => (
            <div className="feedback-item" key={index}>
              {item.title && <h3 className="feedback-title">{item.title}</h3>}
              <p>{item.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackMarquee;
