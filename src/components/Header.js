import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <header id='headerMain' className="d-flex bg-dark  flex-wrap justify-content-center py-3  border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-4 text-warning">Arjun singh</span>
      </a>
        <ul className="nav nav-pills">
          <li>
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/about">About</Link>
            
          </li>
          <li>
            <Link className="nav-link text-white" to="/skills">Skills</Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/projects">Projects</Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/Education">Education</Link>
          </li>
          <li>
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>
        </ul>
    </header>
  );
}

export default Header;