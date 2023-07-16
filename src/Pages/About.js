import React from "react";
import "../Styles/about.css";


const About = () => {
  return (
    <div className="about-main">
      <div className="container">
        <h2 className="section-heading">
          <i className="bi bi-person-fill"></i> &nbsp;About{" "}
          <span className="highlight-text">Me</span>
        </h2>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-image">
              <img
                src="/images/arjunsingh.jpg"
                className="img-fluid"
                alt="Arjun Singh"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h1 className="display-5 fw-bold">I'm Arjun</h1>
              <h3>Front-end developer</h3>
              <p className="about-para">
                I am a Front-end developer based in Delhi, India. I am a B.Tech
                graduate from AKTU Lucknow. I am passionate about improving my
                coding skills and developing applications and websites. I build
                WebApps and Websites using Frontend technologies. Love to create
                user-friendly and responsive interfaces.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                <i className="bi bi-envelope-fill"></i>
                  <span>singharjun.u@gmail.com</span>
                </div>
                <div className="contact-item">
                <i className="bi bi-telephone-fill"></i>
                  <span>9506181907, 9520211509</span>
                </div>
                <div className="contact-item">
                <i className="bi bi-geo-alt-fill"></i>
                  <span>Delhi, Pin - 110045</span>
                </div>
              </div>
              <div className="btn-container">
                <button className="btn btn-primary">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
