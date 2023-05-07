import React from 'react';
import Wrapper from "../Assets/Wrappers/FooterWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <Wrapper>
             <div className="social-icons">
        <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.youtube.com/channel/your_channel_id" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faYoutube} size="2x" />
        </a>
        <a href="https://twitter.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="footer-links">
        {/* ... */}
      </div>
        <div className="footer-links">
          <a className="footer-link" href="mailto:your-email@example.com">CONNECT WITH ME</a>
          <a className="footer-link" href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
        </Wrapper>
    );
  };
  
  export default Footer;
