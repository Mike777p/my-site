
import React from 'react';
import Wrapper from "../Assets/Wrappers/NavBarWrapper"
import { toast } from 'react-toastify';


const NavBar = () => {

  const handleAlertClick = (e) => {
    e.preventDefault();
    toast('Coming soon, email me to be notified when available \n ComputerPlaywright@tutanota.com');
  };

  return (
    <Wrapper>
    <nav className="navbar">
      <div className="logo">Σ</div>
      <h1>Michael Perryment</h1>
      <h1>Junior Software Engineer</h1>
      <ul className="nav-links">
      <li>
          <a href="/#">Software Engineering</a>
          <ul className="dropdown">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#work-experience">Work-Experience</a></li>
            <li><a href="/#" onClick={handleAlertClick}>Technical Blog</a></li>
          </ul>
        </li>
        <li>
          <a href="/#">Travel</a>
          <ul className="dropdown">
            <li><a href="/#" onClick={handleAlertClick}>Blog</a></li>
            <li><a href="/#" onClick={handleAlertClick}>Gallery</a></li>
            <li><a href="/#" onClick={handleAlertClick}>Page</a></li>
          </ul>
        </li>
        <li>
          <a href="/#">Personal</a>
          <ul className="dropdown">
            <li><a href=".#" onClick={handleAlertClick}>Blog</a></li>
            <li><a href=".#" onClick={handleAlertClick}>Gallery</a></li>
            <li><a href="/#" onClick={handleAlertClick}>Page</a></li>
          </ul>
        </li>
       
      </ul>
    </nav>
    </Wrapper>
  );
};

export default NavBar;
