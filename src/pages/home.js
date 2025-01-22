//imports react 
import React, { useState, useEffect } from 'react'; 

// componentes
import Nav from "../components/nav"; 
import Tela2 from '../components/tela2';

// img
import Foto from '../assets/foto.svg';
import git from "../assets/icons8-github 1.svg";
import linkedin from "../assets/icons8-linkedin-48.svg";


// styles
import home from '../styles/home.modules.css';



function Home() {
    const [contentItems, setContentItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMoreContent = () => {
        setLoading(true);
        setTimeout(() => {
            const newContent = Array.from({ length: 5 }, (_, index) => ({
                id: contentItems.length + index + 1,
                title: `Item ${contentItems.length + index + 1}`
            }));
            setContentItems(prevItems => [...prevItems, ...newContent]);
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        fetchMoreContent();
    }, [contentItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                fetchMoreContent(); 
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + "/CV - ERIKA CIBELLY GOMES SANTOS - AD.pdf"; 
        link.download = "CV - ERIKA CIBELLY GOMES SANTOS - AD.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

        return (
        <>   
            <div className='top-background'>
                
            </div>
            <Nav contentItems={contentItems} loading={loading} />
            <div id="sobre" className='aboutMe'>
                <div className='containerSobreMim'>
                    <div className='container1'>
                        <text className='welcome'>
                        <h2><span className='saudacao'>Olá</span>,<br></br> 
                            Me chamo <span className='meuNome'>Erika Cibelly</span>.</h2>
                        <hr></hr>
                        <span className='link'><a href='https://www.linkedin.com/in/erika-cibelly-santos-2072751a9/'><img src={linkedin} alt=""></img></a></span>
                        <span className='git'><a href='https://github.com/ErikaCibellySx24'><img src={git} alt=""></img></a></span> 
                        
                    </text>
                    </div>
                    <div className='container2'>
                        <div className='foto'>
                            <img src={Foto} alt="minha foto"/>
                        </div>
                        <button className='botaoDownload' onClick={handleDownloadClick}>Download CV</button>
                    </div>
        
                </div>
            </div> 
           < Tela2 />
        </>
    );
}

export default Home;

