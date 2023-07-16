import React from "react";
import Cards from "../Pages/Cards";

const Projects = () => {

const projectMain = {
  backgroundColor:"#000031",
  width:"100%",
  height:"500px"
}
const projectHeading={
  paddingTop: "10px",
  fontWeight: "700"
}

  return (
    <div className="app" style={projectMain}>
      <h2 style={projectHeading}><i className="bi bi-code-slash"></i>&nbsp;Project <span style={{color:"#FFE600"}}>Made</span></h2>
      <div style={{display:"flex"}} className="card-container">
        <Cards
          image="/images/edc.jpg"
          title="Reactjs project"
          description="EDC Incubation web App"
          shortdescription="A comprehensive platform for entrepreneurs to register their ideas, seek funding opportunities, and connect with mentors and investors"
          github="https://github.com/Horizon-tech-india/EDC-Front-End"
        />
        <Cards
          image="/images/ecommerce.jpg"
          title="Reactjs project"
          description="E-Commerce Web-App"
          shortdescription="An e-commerce web application using React.js with advanced functionalities including category-based item search, price-based item sorting, seamless cart management."
          github="https://github.com/Horizon-tech-india/EDC-Front-End"
        />
        <Cards
          image="/images/calculator.png"
          title="Javascript project"
          description="Loan Emi calculator"
          shortdescription="a Loan EMI Calculator using JavaScript, HTML/CSS to accurately calculate and display the monthly EMI, along with a graphical chart for visual representation"
          github="https://github.com/Horizon-tech-india/EDC-Front-End"
        />
        <Cards image="path/to/image4.jpg" description="Card 4 description" />
      </div>
    </div>
  );
};

export default Projects;
