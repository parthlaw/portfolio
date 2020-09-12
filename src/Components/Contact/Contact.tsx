import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <br />
      <div className="SocialMedia">
        <a
          className="social-link"
          href="https://www.github.com/parthlaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../images/github.png")} alt="" width="48px" />
        </a>
        <a
          className="social-link"
          href="https://www.facebook.com/profile.php?id=100011939047095"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../images/facebook.png")} alt="" width="50px" />
        </a>
        <a
          className="social-link"
          href="https://www.instagram.com/the_killer_hulk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../images/instagram.png")}
            alt=""
            width="50px"
          />
        </a>
        <a
          className="social-link"
          href="https://www.linkedin.com/in/parth-lawania-614004194/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require("../../images/linkedin.png")} alt="" width="50px" />
        </a>
      </div>
    </div>
  );
};
export default Contact;
