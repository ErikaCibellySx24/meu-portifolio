import React from "react";
import tela2 from "../styles/tela2.modules.css";
import Projetos from "../components/carouselProjetos.js";
import Curso from "../components/carouselCursos.js";



function Tela2(){
    return(
        <>
       
        <div className={tela2.body}>
            <div className="carrossel-projetos">
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
                <text className="textCitacao">
                    "Special cases are not special enough to break the rules." The Zen of Python, by Tim Peters."
                </text>
                
                <div className="navFooter">
                    <ul className="footerNav">
                        <li><a href="#sobre">sobre</a></li>
                        <li><a href="#projetos">projetos</a></li>
                        <li><a href="#cursos">cursos</a></li>
                    </ul>
                </div>
                <h4 className={tela2.copy}>
                    © 2024 Cibelly Santos</h4>
            </footer>
        </div>
        </>
    );
}

export default Tela2;