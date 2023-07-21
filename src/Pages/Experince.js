import React from 'react';
import '../Styles/experince.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Horizon Tech India ',
      duration: 'May 2023 - present',
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Stirring Minds/Careerguide.com',
      duration: 'oct 2021 - March 2023',
    },
    {
      title: 'Web developer Internship',
      company: 'Stirring Minds/Careerguide.com',
      duration: 'July 2022 - Oct 2023',
    },
  ];

  return (
    <div className="roadmap-container">
      <h2 className="roadmap-heading">Roadmap for Experience</h2>

      <div className="roadmap-timeline">

        {experiences.map((experience, index) => (
          <div className="roadmap-item" key={index}>
            <div className="roadmap-dot"></div>
            <div className="roadmap-content">
              <h3 className="roadmap-title">{experience.title}</h3>
              <p className="roadmap-company">{experience.company}</p>
              <p className="roadmap-duration">{experience.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;