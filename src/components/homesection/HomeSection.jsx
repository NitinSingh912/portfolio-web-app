import React from "react";
import "./homesection.css";
import { PiHandWavingBold } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { IoLogoReact } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import { Element } from "react-scroll";
import { BiLogoJquery } from "react-icons/bi";  
const HomeSection = () => {
  return (
    <Element name="home" >

    <div className="container-div">
      <div className="content-div">
        <div className="details-div-img-div">
          <div className="details-div">
            <h1>
              Front-End Developer{" "}
              <span>
                <PiHandWavingBold />
              </span>
            </h1>
            <h4>
              Greetings, I'm Nitin Singh, an enthusiastic front-end developer
              hailing from Rajasthan, India.
            </h4>
            <div className="social-media">
              <div className="linkdin">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/nitin-singh-723395237/"
                  >
                  <FaLinkedin size={30} />
                </Link>
              </div>
              <div className="github">
                <Link to="https://github.com/NitinSingh912">
                  {" "}
                  <FaGithub size={30} />
                </Link>
              </div>
            </div>
          </div>
          <div className="img-div">
            <img
              src="https://i.ibb.co/9VjVm0w/IMG-20231207-173729-Photo-Room-png-Photo-Room.png"
              alt="myPhoto"
              />
          </div>
        </div>
        <div className="skills-div">
          <div className="skill-text">
            <h4>SKILLS</h4>
            <h5>|</h5>
          </div>
          <div className="skills-name">
            <h5>
              <IoLogoHtml5 size={33} />
            </h5>
            <h5>
              <IoLogoCss3 size={33} />
            </h5>
            <h5>
              <BiLogoJavascript size={36} />
            </h5>
            <h5>
            <BiLogoJquery size={33} />
            </h5>
            <h5>
              <IoLogoReact size={33} />
            </h5>
            <h5>
              <SiRedux size={33} />
            </h5>
          </div>
        </div>
      </div>
    </div>
              </Element>
  );
};

export default HomeSection;
