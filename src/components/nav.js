import React from 'react';
import Logo from '../assets/Logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="/"><img scr={Logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
  );

}

export default Nav;
