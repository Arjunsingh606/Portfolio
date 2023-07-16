import React from 'react'
import '../Styles/education.css'

const EducationCard = ({ image, title, description, time }) => {


  return (
    <div className="educationCard">
      <img className="educationImage" src={image} alt="loading" />
      <div className="educationContent">
        <strong className="educationTitle">{title}</strong>
        <p className="educationDescription">{description}</p>
        {time && <p className="educationTime">{time}</p>}
      </div>
    </div>
  );
};


export default EducationCard
