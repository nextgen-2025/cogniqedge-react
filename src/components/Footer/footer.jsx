import React from 'react';
import './footer.css';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaCopyright,
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';

function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaTwitter />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" }
  ];

  const shortLinks = [
    { text: "About us", url: "#" },
    { text: "Our Services", url: "#" },
    { text: "Our Projects", url: "#" },
    { text: "Latest Blog", url: "#" }
  ];

  const helpLinks = [
    { text: "Terms Of Use", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Help", url: "#" },
    { text: "FAQs", url: "#" },
    { text: "Contact", url: "#" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Navi Mumbai" },
    { icon: <FaPhone />, text: "+123 456 7890" },
    { icon: <FaEnvelope />, text: "info@cogniedge.in" }
  ];

  return (
    <div className="footer">
      <div className="footer-left">
        <h2 className="footer-logo">CogniEdge</h2>
        <p className="footer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Sulla facere delectus qui placeat inventore consectetur 
          repellendus cupiditate delectus.
        </p>
        <div className="footer-social-icons">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              className="social-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-middle">
        <h4>Short Link</h4>
        <ul>
          {shortLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-middle">
        <h4>Help Link</h4>
        <ul>
          {helpLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h4>Contact Us</h4>
        {contactInfo.map((info, index) => (
          <p className='flex' key={index}>
            <span className="contact-icon">{info.icon}</span>
            <span className="contact-text">{info.text}</span>
          </p>
        ))}
      </div>

      <div className="footer-bottom">
      <span>
          <FaCopyright />
          </span>
        <p>NexGen Infratech Solutions LLP. All right reserved.</p>
      
      </div>
    </div>
  );
}

export default Footer;


