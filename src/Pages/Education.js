import React from "react";
import "../Styles/education.css";

const Education = () => {
  return (
    <div className="MainEducation">
      <h2 className="getInTouch">
        <i className="bi bi-mortarboard"></i>&nbsp;My Education &{" "}
        <span style={{ color: "#7303A7" }}> Certifcations</span>
      </h2>
      <p style={{ color: "black" }}>
        Education Is Not The Learning Of Facts, But The Training Of The Mind To
        Think.
      </p>
      <div className="contentImage">
        <div id="EducationBtech" className="col-md-10">
          <div className="row g-0 border rounded overflow-hidden flex-md-row  shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <img id="EducationId" src="/images/aktuu.jpg" alt="loading" />
            </div>
            <div id="BtechBackground" className="col d-flex flex-column position-static">
              <strong
                id="Btech"
                className="d-inline-block mb-2 text-primary-emphasis"
              >
                Bachelor Of Technology In Mechanical Engineering
              </strong>
              <p className="card-text mb-auto">
                Dr. A. P. J. Abdul Kalam Technical University, Lucknow
              </p>
              <p id="TimeBtech">2016-2020 | completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="contentImage">
        <div id="EducationBtech" className="col-md-10">
          <div className="row g-0 border rounded overflow-hidden flex-md-row  shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <img id="EducationId" src="/images/udemy1.jpg" alt="loading" />
            </div>
            <div id="BtechBackground" className="col d-flex flex-column position-static">
              <strong
                id="Btech"
                className="d-inline-block mb-2 text-primary-emphasis"
              >
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </strong>
              <p id="TimeBtech"  className="card-text mb-auto">
                Udemy | March 2023 -May 2023 | Completed
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="contentImage">
        <div id="EducationBtech" className="col-md-10">
          <div className="row g-0 border rounded overflow-hidden flex-md-row  shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <img id="EducationId" src="/images/udemy1.jpg" alt="loading" />
            </div>
            <div id="BtechBackground" className="col d-flex flex-column position-static">
              <strong
                id="Btech"
                className="d-inline-block mb-2 text-primary-emphasis"
              >
                The Complete Web Development Bootcamp
              </strong>
              <p id="TimeBtech" className="card-text mb-auto">Udemy | Feb 2022 – May 2022 | completed</p>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Education;
