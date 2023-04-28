// NavBar.js
import React from 'react';
import Wrapper from "../Assets/Wrappers/NavBarWrapper"

const NavBar = () => {
  return (
    <Wrapper>
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <h1>Junior Software Engineer</h1>
      <ul className="nav-links">
        <li>
          <a href="#">Travel</a>
          <ul className="dropdown">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Page</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Personal</a>
          <ul className="dropdown">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Page</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Software Engineer</a>
          <ul className="dropdown">
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Certifications</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Achievements</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    </Wrapper>
  );
};

export default NavBar;
