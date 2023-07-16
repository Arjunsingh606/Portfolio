import React, { useState } from "react";
import "../Styles/projects.css";

const Card = ({ image, description, github, shortdescription, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div className="project">
      <div className="main-cards">
        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-front">
            <img src={image} alt="Card" />
            <div className="projectTitle">{title}</div>
          </div>
          <div className="card-back">
            <div className="projectShortDesc">{shortdescription}</div>
            <div className="projectDesc">{description}</div>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btnproject">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
