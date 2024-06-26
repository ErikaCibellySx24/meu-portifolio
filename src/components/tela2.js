import React from "react";
import tela2 from "../styles/tela2.modules.css";
import Projetos from "../components/carouselProjetos.js";
import Curso from "../components/carouselCursos.js";
import logo from "../assets/favicon.svg";


function Tela2(){
    return(
        <>
       
        <div className={tela2.body}>
            <div id="projetos" className="carrossel-projetos">
                <div className="linha">
                    <div className="bolinha"></div>
                    <div className="nome">Projetos</div>
                    <div className="bolinha"></div>
                </div>
                <Projetos />
            </div>
            <div className="carrossel-cursos">
            
            <div className="linha">
                    <div className="bolinha"></div>
                    <div className="nome">Curso</div>
                    <div className="bolinha"></div>
                </div>
                <Curso />
            </div>
            <footer className="footer"> 
                <div class="blurBackground"></div>  
                <div className="container-footer">             
                    <text className="textCitacao">
                        "Special cases are not special enough to break the rules." The Zen of Python, by Tim Peters."
                    </text>
                    <h4 className={tela2.copy}>
                        <a href="http://localhost:3000/">
                            © 2024 Cibelly Santos
                        </a>
                    </h4>
                    
                    <div className="navFooter">
                        <ul className="footerNav">
                            <li className="itens"><img src={logo} alt="" className="logo"/></li>
                            <li className="itens"><a href="#sobre">sobre</a></li>
                            <li className="itens"><a href="#projetos">projetos</a></li>
                            <li className="itens"><a href="mailto:erikacibelly034@gmail.com">contato</a></li>
                        </ul>
                    </div>
                    
                </div>
            </footer>
        </div>
        </>
    );
}

export default Tela2;