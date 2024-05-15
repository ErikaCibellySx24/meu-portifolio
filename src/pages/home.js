import React from 'react'; 
import Nav from "../components/nav"; 
import Foto from '../assets/foto.svg';
import git from "../assets/icons8-github-48.svg";
import linkedin from "../assets/icons8-linkedin-48.svg";
import home from '../styles/home.module.css';


function Home() {
    return (
        <>   
        <Nav />
        <div className={home.aboutMe}>
            <div className={home.containerSobreMim}>
                <div className={home.container1}>
                    <text className='welcome'>
                    <h2><span className={home.saudacao}>Hello</span>,<br></br> 
                        I'm <span className={home.meuNome}>Erika Cibelly</span>.</h2>
                    <hr></hr>
                    <span className='link'><img src={linkedin} alt=""></img></span>
                    <span className='git'><img src={git} alt=""></img></span> 
                    
                </text>
                </div>
                <div className={home.container2}>
                    <div className='foto'>
                        <img src={Foto} alt="minha foto"/>
                    </div>
                    <button className={home.botaoDownload}>Download CV</button>
                </div>
    
            </div>
        </div> 
        </>
    );
}

export default Home;
