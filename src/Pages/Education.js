import React from "react";
import "../Styles/education.css";
import EducationCard from "./EducationCard";

const Education = () => {
  const educationData = [
    {
      image: "/images/aktuu.jpg",
      title: "Bachelor Of Technology In Mechanical Engineering",
      description: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
      time: "2016-2020 | Completed",
    },
    {
      image: "/images/udemy1.jpg",
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      description: "Udemy | March 2023 - May 2023 | Completed",
      time: "",
    },
    {
      image: "/images/udemy1.jpg",
      title: "The Complete Web Development Bootcamp",
      description: "Udemy | Feb 2022 – May 2022 | Completed",
      time: "",
    },
  ];

  return (
    <div className="MainEducation">
      <h2 className="EducationCertification">
        <i className="bi bi-mortarboard"></i>&nbsp;My Education &{" "}
        <span style={{ color: "#ffffff" }}> Certifications</span>
      </h2>
      <p style={{ color: "#ffffff" }}>
        Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.
      </p>
      <div className="contentImage">
        {educationData.map((item, index) => (
          <EducationCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};


export default Education;
