import React from 'react';
import '../Styles/experince.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Junior Developer',
      company: 'ABC Company',
      duration: 'Jan 2020 - Dec 2020',
    },
    {
      title: 'Software Engineer',
      company: 'XYZ Solutions',
      duration: 'Jan 2021 - Present',
    },
    {
      title: 'Senior Developer',
      company: '123 Tech',
      duration: 'Jan 2022 - Future',
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
