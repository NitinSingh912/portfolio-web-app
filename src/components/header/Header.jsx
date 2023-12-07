import React from "react";
import "./header.css";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="header-css">
      <div>
        <Link to="home" smooth={true} duration={500} >Nitin.dev</Link>
      </div>
      <div className="direct-links">
        <Link to="home" smooth={true} duration={500} >Home</Link>
        <Link to="about" smooth={true} duration={500} >About</Link>
        <Link to="projects" smooth={true} duration={500} >Projects</Link>
        <Link to="contact" smooth={true} duration={500} >Contact</Link>
      </div>
    </div>
  );
};

export default Header;
