import React, {useState} from "react";
import "../Styles/skills.css";
import { SkillSet } from "./SkillData";


const Skills = () => {

  const [skill, setSkill] = useState(SkillSet);

const UpdateSkills = (e)=>{
  setSkill(e.taregt.value)
}


  return (
    <>
      <div className="skills">
        <h2><i className="bi bi-code-slash"></i>&nbsp;Skill & <span style={{color:"yellow"}}>Ability</span></h2>

      {
        skill.map(element=>{
          return (
            <div className="card-wrapper">
              <div className="cardSkill" onChange={()=>UpdateSkills}>
            <img
              src={element.link}
              className="card-img-top"
              alt="react"
            />
            <div className="card-body">
              <h3 className="title">{element.title}</h3>
            </div>
          </div>
        
          
        </div>
          )

        }
        
        
        )

        
      }
      

        
      </div>
    </>
  );
};

export default Skills;
