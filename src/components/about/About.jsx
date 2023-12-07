import React from "react";
import "./about.css";
import { Element } from "react-scroll";
const About = () => {
  return (
    <Element name="about" >

    <div className="about-container-div">
      <div className="about-content-div">
        <div className="about-img-div">
          <img
            src="https://goodstock.photos/wp-content/uploads/laptop-journal-book-coffee.jpg"
            alt="laptop in desk"
            />
        </div>
        <div className="about-aboutMe-div">
          <h3>About Me</h3>
          <h2>A dedicated Front-End Developer !</h2>
          <p>
            Hello! I'm Nitin Singh, a front-end developer from Rajasthan, India.
            I love making websites look cool and work smoothly. I'm good at
            using HTML, CSS, and JavaScript, which are like the building blocks
            of the web. I also know React and Redux, which help me create
            interactive and awesome websites. I believe that a website should
            not only look good but also be easy for people to use. I'm always
            learning and keeping up with the latest trends to make sure I create
            the best experiences for users. Let's team up and build something
            fantastic together!
          </p>
        </div>
      </div>
    </div>
            </Element>
  );
};

export default About;
