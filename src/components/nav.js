import React from 'react';
import Logo from '../assets/Logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import nav from '../styles/nav.modules.css';

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
              <li className={nav.navItem}>
                <a className={nav.Link} href="/">Sobre</a>
              </li>
              <li className={nav.navItem}>
                <a className={nav.Link} href="/projetos">Projetos</a>
              </li>
              <li className={nav.navItem}>
                <a className={nav.Link} href="/contact">Contact</a>
              </li>
              
          </ul>
        </div>
      </div>
    </nav>  
  );

}

export default Nav;
