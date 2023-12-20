import React from "react";
import { Link } from "react-router-dom";

const imgData = [
  {
    name: "Christian Family House",
    description: "150 Tyrant Street",
    image: "images/room1.jpg",
    index: 1,
  },
  {
    name: "Jimmy & Christy Apartment",
    description: "150 Tyrant Street",
    image: "images/room2.webp",
    index: 2,
  },
  {
    name: "Bobby Apartment",
    description: "150 Tyrant Street",
    image: "images/room3.avif",
    index: 3,
  },
];

const serviceData = [
  {
    num: "01",
    description: "Plan on Development",
  },
  {
    num: "02",
    description: "Architectural & Interior",
  },
  {
    num: "03",
    description: "Building Management",
  },
  {
    num: "04",
    description: "Mainatainance & Management",
  },
];

function Project() {
  const projectData = imgData;
  const servData = serviceData;

  return (
    <div className="project-section">
      <div className="project-head">
        <h2>latest Projects</h2>
        <div>
          <Link to="/">&larr;</Link>
          <Link to="/">&rarr;</Link>
        </div>
      </div>
      <div className="project-content">
        {projectData.map((project) => (
          <ProjectProp projectObj={project} key={project.name} />
        ))}
      </div>
      <div className="services-section">
        <h6>Our Services</h6>
        <div className="services">
          {servData.map((serv) => (
            <Services servObj={serv} key={serv.description} />
          ))}
        </div>
      </div>
      <div className="section-design">
        <div className="design-text">
          <h4>
            Neat and <br />
            Comfortable Design
          </h4>
          <div className="des">
            <p>
              We believe that a beautiful space start with a functional design.
              Every budget finds elegance in our innovative and inclusive
              interior journey
            </p>
            <Link to="/">Learn more &rarr;</Link>
          </div>
        </div>
        <div className="design-img">
          <img src="images/design.jpg" alt="Design Img" />
        </div>
      </div>
    </div>
  );
}

function Services({ servObj }) {
  return (
    <div className="service">
      <div className="serv-num">
        <span>&mdash;&mdash;&mdash;</span>
        <span>{servObj.num}</span>
      </div>
      <p>{servObj.description}</p>
      {servObj.description === "Plan on Development" ? (
        <Link to="/">&#8599;</Link>
      ) : (
        <Link to="/">&rarr;</Link>
      )}
    </div>
  );
}

function ProjectProp({ projectObj }) {
  return (
    <div className="project-image">
      <div className="proj-img">
        <img src={projectObj.image} alt={projectObj.name} />
      </div>
      <div className="proj-content">
        <span>0{projectObj.index}</span>
        <div className="project-name">
          <p>{projectObj.name}</p>
          <span>{projectObj.description}</span>
        </div>
        <Link to="/">&rarr;</Link>
      </div>
    </div>
  );
}

export default Project;
