import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import navStyles from '../styles/nav.modules.css';

// Corrija a sintaxe da função de seta
const Nav = ({ contentItems, loading }) => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" >
          <ul className="navbar-nav ml-auto" id={navStyles.navBarNav}>
              <li className={navStyles.navItem}>
                <a className={navStyles.Link} href="/">Sobre</a>
              </li>
              <li className={navStyles.navItem}>
                <a className={navStyles.Link} href="/projetos">Projetos</a>
              </li>
              <li className={navStyles.navItem}>
                <a className={navStyles.Link} href="/contact">Contato</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>  
  );
}

export default Nav;
