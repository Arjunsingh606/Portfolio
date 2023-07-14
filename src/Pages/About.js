import React from "react";
import '../Styles/about.css'

const About = () => {
  return (
    <>
      <div className="about-main">
        <h2><i class="bi bi-person-fill"></i> &nbsp;About <span style={{color:"#7303A7"}}>Me</span></h2>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              I'm Arjun
            </h1>
            <h3>Front-end developer</h3>
            <p className="about-para">
              I am a Front-end developer based in Delhi, India. I am a B.Tech
              graduate from AKTU Lucknow. I am very passionate about improving
              my coding skills & developing applications & websites. I build
              WebApps and Websites using Frontend tech. Working for myself to
              improve my skills. Love to build Frontent of Websites.
            </p>
            <span><span>E-Mail : </span> singharjun.u@gmail.com</span><br></br>
            <span><span>Mob : </span> 9506181907, 9520211509</span><br></br>
            <span><span>Place : </span>Delhi , pin - 110045</span><br></br>
            

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Resume
              </button>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-5">
            <img
              src="/images/arjunsingh.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="loading"
              width="300"
              height="500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
