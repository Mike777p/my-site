import React from 'react';
import Wrapper from "../Assets/Wrappers/FooterWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <Wrapper>
             <div className="social-icons">
        <a href="https://www.instagram.com/computerplaywright7" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.youtube.com/channel/your_channel_id" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faYoutube} size="2x" />
        </a>
        <a href="https://twitter.com/MikePlaywright?s=09" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faTwitter} size="2x" />
        </a>
        <a href="https://github.com/mike777p" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/michael-p7" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} size="2x" />
        </a>
      </div>
      <div className="footer-links">
          <a className="footer-link" href="mailto:computerplaywright@tutanota.com">CONNECT WITH ME - ComputerPlaywright@Tutanota.com</a>
        </div>
        </Wrapper>
    );
  };
  
  export default Footer;
