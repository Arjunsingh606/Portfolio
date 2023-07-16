
import React, { useState } from "react";
import "../Styles/skills.css";
import { SkillSet } from "./SkillData";

const Skills = () => {
  const [skills, setSkills] = useState(SkillSet);

  const updateSkills = (e) => {
    setSkills(e.target.value);
  };

  return (
    <div className="skills">
      <h2>
        <i className="bi bi-code-slash"></i>&nbsp;Skill &{" "}
        <span style={{ color: "#6F11F5" }}>Ability</span>
      </h2>
      <div className="skills-container">
        {skills.map((element, index) => (
          <div className="card-wrapper" key={index}>
            <div className="cardSkill" onChange={updateSkills}>
              <img src={element.link} className="card-img-top" alt={element.title} />
              <div className="card-body">
                <h3 className="Skilltitle">{element.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
