import React from "react";
import "../Styles/projects.css";
import { useState } from "react";

const Card = ({ image, description, github, shortdescription ,title}) => {
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
            <div className="projectDescription">{title}</div>
          </div>
          <div className="card-back">
            <span>{shortdescription}</span>
            <div className="projectDescription">{description}</div>
            <button class="btnproject"> code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
