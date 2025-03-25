import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const buttons = [
    "Modualr Data Centers",
    "Private 5G Network solutions",
    "Smart Surveillance and Digital Solutions"
  ];

  return (
   <section className='headline-section'>
    {/* headline with gradeint color */}
    <h1 className='headline-gradient'>
        Powering the world's best ideas
    </h1>

    {/* sub headline */}
    <p className='headline-paragraph'>
        CogniqEdge is a powering national digital infrastructure providing innovative digital solutions in consumer and Enterprise segments.
    </p>
    {/* Three button */}
    <div className='button-group'>
        {buttons.map((text, index) => (
            <button key={index}>{text}</button>
        ))}
    </div>
   </section>
  )
}

export default HeroSection;