import React from "react";
import "./contact.css";
import { Element } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
const Contact = () => {
  let emailAddress = "nitinsingh734020@gmail.com";
  return (
    <Element name="contact">
      <div className="contact-container-div">
        <div className="contact-content-div">
          <h1>Contact Me</h1>
          <div className="contact-details">
            <div>
              <FaPhoneAlt size={25} /> <h3>Phone Number : 8005763715 </h3>
            </div>
            <div>
              <BiLogoGmail size={25} /> <h3>Gmail : {emailAddress}</h3>
            </div>
            <div>
              <IoLogoLinkedin size={27} />{" "}
              <h3>
                linkedin :{" "}
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/nitin-singh-723395237/"
                >
                  mylinkedin
                </Link>
              </h3>
            </div>
            <div>
              <IoLogoGithub size={28} />{" "}
              <h3>
                Github :{" "}
                <Link target="_blank" to="https://github.com/NitinSingh912">
                  myGithub
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
