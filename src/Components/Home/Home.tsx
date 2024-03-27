import React from "react";
import logo from "../../images/logo.png";
import resume from "./ParthResume.pdf"
const Home = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={logo}
            alt="Parth Lawania Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Experienced software developer proficient in Java, Golang, JavaScript, and more, with a strong focus on backend development and cloud infrastructure. Demonstrated expertise in building scalable solutions, optimizing system performance, and accelerating project delivery. Skilled in microservices architecture, real-time communication, and dynamic systems development. Known for innovative problem-solving and effective collaboration across teams. Passionate about leveraging cutting-edge technologies to deliver impactful solutions and continuously expanding skill set.
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Parth Lawania</span>
                <br />
                <span>
                  Bangalore
                </span>
                <br />
                <span>+916397847348</span>
                <br />
                <span>parthlaw24@gmail.com</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href='/resume.pdf' className="button" target="_blank">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
