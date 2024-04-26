import React from 'react'; 
import Nav from "../components/nav"; 
import Foto from '../assets/foto.svg';

function Home() {
    return (
        <>   
        <Nav />
        <div className="about-me">
            <text className='welcome'>
               <h2>Hello, Im Erika Cibelly.</h2>
            </text>
            <div className='foto'>
                <img src={Foto} alt="minha foto"/>
            </div>
            <h3>Hi, i have 23 years old. I course Analyse and Development of Systems in Faculdade Senac de Pernambuco.</h3>
    
    
        </div> 
        </>
    );
}

export default Home;
