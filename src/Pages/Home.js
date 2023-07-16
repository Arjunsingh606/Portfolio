import React from "react";
import "../Styles/home.scss";
import "../Styles/home.css"

const Home = () => {
  return (
    <>
      <div className="background">
        <div id="mainHome"   className="row mb-2">
          <div className="col-md-6 ">
              <div className="mainTitle">
                
                <h3 className="hometitle">Hi There</h3>
                <h3 className="hometitle">I'm Ajun singh</h3>
                <h4 className="hometitle">Frontend Developer</h4>
                <button id="btnresume" className="title">Resume</button> 
              </div>
              <div className="SocialIcon">
                  <div className="icon"><i id="ln" className="bi bi-linkedin"></i></div>
                  <div className="icon"><i id="gth" className="bi bi-github"></i></div>
                  <div className="icon"><i id="ins" className="bi bi-instagram"></i></div>
                  <div className="icon"><i id="gmail" className="bi bi-envelope-at-fill"></i></div>
                  <div className="icon"><i id="dev" className="bi bi-code-slash"></i></div>
              </div>
              
            
          </div>
          <div className="col-md-6">
            <div className="col p-4 d-flex flex-column position-static">
              <img src="/images/avatar.png" alt="loading" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
