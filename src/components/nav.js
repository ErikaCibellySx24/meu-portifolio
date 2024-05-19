import React from 'react';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import navStyles from '../styles/nav.modules.css';


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
                <Link className="Link" to="sobre" smooth={true} duration={200}>Sobre</Link>
              </li>
              <li className={navStyles.navItem}>  
                <Link className="Link" to="projetos" smooth={true} duration={150}>Projetos</Link>
              </li>
              <li className={navStyles.navItem}>
                <a className="Link" href="mailto:erikacibelly034@gmail.com">Contato</a>
              </li>
          </ul>
        </div>
      </div>
    </nav>  
  );
}

export default Nav;
