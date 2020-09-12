import React from "react";
import TextLoop from "react-text-loop";
import "antd/dist/antd.css";
import "./Home.css";
const Home = () => {
  return (
    <div className="profileCard">
      <div className="profileText">
        <h1>
          <span className="hello">Hello</span>
          <br />
          My name is Parth...
        </h1>
        <h2>I'm a student at IIIT Gwalior</h2>
        <h2>
          and a{" "}
          <TextLoop>
            <span style={{ color: "#ff8906" }}>Web Developer</span>
            <span style={{ color: "#eebbc3" }}>Video Editor</span>
          </TextLoop>{" "}
        </h2>
      </div>
    </div>
  );
};
export default Home;
