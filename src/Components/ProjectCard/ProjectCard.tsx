import React from "react";
import "./ProjectCard.css";
import Tilt from "react-tilt";
import { projectType } from "../../interfaces/Project";
import DevIcons from "../DevIcons/DevIcons";

function ProjectCard({
  title,
  content,
  link,
  image,
  direction,
  stack,
}: projectType) {
  return (
    <div className="main" style={{ flexDirection: direction }}>
      <div className="description">
        <div className="cardText">
          <h1 style={{ color: "whitesmoke" }}>{title}</h1>
          <h3 style={{ color: "wheat" }}>{content}</h3>
          <DevIcons className="devicon" stacks={stack} />
          <br />
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button>See Live</button>
          </a>
        </div>
      </div>
      <div className="image">
        <Tilt className="Tilt" options={{ max: 10, scale: 1 }}>
          <div className="Tilt-inner">
            <div className="cardImageDiv">
              <img
                src={require(`../../images/${image}`)}
                alt=""
                className="cardImage"
              />
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default ProjectCard;
