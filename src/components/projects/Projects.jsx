import React from "react";
import "./project.css";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { MdQuiz } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { TbHandClick } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
const Projects = () => {
  return (
    <Element name="projects">
      <div className="project-container-div">
        <div className="project-content-div">
          <div className="portfolio-detail">
            <h3>PORTFOLIO</h3>
            <h4>Take a look at what I've created – these are my projects!</h4>
          </div>
          <div className="projects-div">
            <div className="first-project">
              <div className="website">
                <Link
                  target="_blank"
                  to="https://nitinsingh912.github.io/quiz-app/"
                >
                  <img
                    src="https://i.ibb.co/RYtFmvf/Screenshot-658.png"
                    alt="webpage"
                  />
                </Link>
              </div>
              <div className="website-details">
                <h3>
                  QUIZ <MdQuiz />
                </h3>
                <p>
                  Check out my quiz website! I've got five cool quizzes for you
                  to try. More fun stuff is on the way! Soon, you'll even be
                  able to make your own quizzes. Stay tuned for more updates and
                  enjoy the quizzes! In this quiz I used technologies like HTML
                  , CSS and Js .
                </p>
                <div className="languages-used">
                  <h4>CSS</h4>
                  <h4>JS</h4>
                </div>
                <div className="links">
                  <h5>
                    <Link
                      target="_blank"
                      to="https://github.com/NitinSingh912/quiz-app"
                    >
                      <span>Code</span>
                      <IoLogoGithub size={23} />
                    </Link>
                    <Link
                      to="https://nitinsingh912.github.io/quiz-app/"
                      target="_blank"
                    >
                      <span>Live Demo</span>
                      <TbHandClick size={23} />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* added from here  */}

        <div className="project-content-div">
          <div className="projects-div">
            <div className="second-project">
              <div className="website-details">
                <h3>
                  Amazon <FaShoppingBag />
                </h3>
                <p>
                  Check out my shopping app! Built with HTML, CSS, and
                  JavaScript, it lets you browse and add products to your cart.
                  Note that the checkout feature is under development. Stay
                  tuned for updates and more features!
                </p>
                <div className="languages-used">
                  <h4>CSS</h4>
                  <h4>JS</h4>
                </div>
                <div className="links">
                  <h5>
                    <Link
                      target="_blank"
                      to="https://github.com/NitinSingh912/shoping-app"
                    >
                      <span>Code</span>
                      <IoLogoGithub size={23} />
                    </Link>
                    <Link
                      to="https://nitinsingh912.github.io/shoping-app/"
                      target="_blank"
                    >
                      <span>Live Demo</span>
                      <TbHandClick size={23} />
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="website">
                <Link
                  target="_blank"
                  to="https://nitinsingh912.github.io/shoping-app/"
                >
                  <img
                    src="https://i.ibb.co/Ss8Kkg5/Screenshot-659.png"
                    alt="webpage"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* again added from here */}
        <div className="project-content-div">
          <div className="projects-div">
            <div className="third-project">
              <div className="website">
                <Link
                  target="_blank"
                  to="https://nitinsingh912.github.io/AnimeX-app/"
                >
                  <img
                    src="https://i.ibb.co/pb3y9hp/Screenshot-660.png"
                    alt="webpage"
                  />
                </Link>
              </div>
              <div className="website-details">
                <h3>
                  AnimeX <RiMovieFill size={22}/>
                </h3>
                <p>
                  Welcome to my anime streaming app, a unique space dedicated
                  entirely to anime enthusiasts! Using React, I've created a platform where you can dive into a
                  world of captivating anime content.  I'm excited to bring more features to enhance your anime
                  streaming experience.  Happy streaming .
                </p>
                <div className="languages-used">
                 
                 <h4>React</h4>
                </div>
                <div className="links">
                  <h5>
                    <Link
                      target="_blank"
                      to="https://github.com/NitinSingh912/AnimeX-app"
                    >
                      <span>Code</span>
                      <IoLogoGithub size={23} />
                    </Link>
                    <Link
                      to="https://github.com/NitinSingh912/portfolio-web-app"
                      target="_blank"
                    >
                      <span>Live Demo</span>
                      <TbHandClick size={23} />
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
