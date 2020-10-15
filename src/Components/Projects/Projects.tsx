import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import { projects } from "../../data/Projects";

function Projects() {
  let dir_counter = 0,
    direction: "row" | "row-reverse" = "row";
  return (
    <section id="portfolio">
      <div className="main-div">
        <h1
          className="header"
          style={{
            color: "whitesmoke",
            fontSize: "30px",
          }}
        >
          My Projects
        </h1>
        {projects.map((project) => {
          dir_counter++;
          if (dir_counter % 2 === 0) direction = "row-reverse";
          else direction = "row";
          return (
            <ProjectCard {...project} direction={direction} key={dir_counter} />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
