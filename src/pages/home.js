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
import home from '../styles/home.module.css';
import tela2 from '../styles/tela2.modules.css';

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
        link.href = process.env.PUBLIC_URL + "/CV - ERIKA C G SANTOS.pdf"; 
        link.download = "CV - Erika C G Santos.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

        return (
        <>   
            <Nav contentItems={contentItems} loading={loading} />
            <div id="sobre" className={home.aboutMe}>
                <div className={home.containerSobreMim}>
                    <div className={home.container1}>
                        <text className='welcome'>
                        <h2><span className={home.saudacao}>Olá</span>,<br></br> 
                            Me chamo <span className={home.meuNome}>Erika Cibelly</span>.</h2>
                        <hr></hr>
                        <span className='link'><a href='https://www.linkedin.com/in/erika-cibelly-santos-2072751a9/'><img src={linkedin} alt=""></img></a></span>
                        <span className='git'><a href='https://github.com/ErikaCibellySx24?tab=repositories'><img src={git} alt=""></img></a></span> 
                        
                    </text>
                    </div>
                    <div className={home.container2}>
                        <div className='foto'>
                            <img src={Foto} alt="minha foto"/>
                        </div>
                        <button className={home.botaoDownload} onClick={handleDownloadClick}>Download CV</button>
                    </div>
        
                </div>
            </div> 
           < Tela2 />
        </>
    );
}

export default Home;

