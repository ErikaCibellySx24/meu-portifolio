import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrosselStyle from "../styles/carousel.modules.css";

import projeto1 from "../assets/certificados/React escrevendo com Typescript - 12h_page-0001.jpg";
import projeto2 from "../assets/certificados/Formação A partir do zero_ HTML e CSS para projetos web - Alura - 52 h_page-0001.jpg";
import projeto3 from "../assets/certificados/Introdução ao  Git e ao GitHub - 3h_page-0001.jpg";
import projeto4 from "../assets/certificados/CERTIFICADO - HACKATHON DAS MANAS - 20H_page-0001.jpg";
import projeto5 from "../assets/certificados/Certificado_-_Nivelamento_-_Hacker_do_bem - 80h (1)_page-0001.jpg";



const CarrosselProjeto = () => {
    return (
        

        
        <div className="projetos">
            
            <Carousel 
            
            showThumbs={false} 
            autoPlay={false} 
            infiniteLoop={true} 
            showIndicators={true}  
            showStatus={false} 
            itemClass={carrosselStyle.carouselItem}  
        >
                <div className={carrosselStyle.slider}>
                    <img src={projeto1} alt="Slide 1" className="img" />
                    <p className={carrosselStyle.legend}></p>
                </div>
                <div className={carrosselStyle.slider}>
                    <img src={projeto2} alt="Slide 2" className="img" />
                    <p className={carrosselStyle.legend}></p>
                </div>
                <div className={carrosselStyle.slider}>
                    <img src={projeto3} alt="Slide 3" className="img" />
                    <p className={carrosselStyle.legend}></p>
                </div>
                <div className={carrosselStyle.slider}>
                    <img src={projeto4} alt="Slide 2" className="img" />
                    <p className={carrosselStyle.legend}></p>
                </div>
                <div className={carrosselStyle.slider}>
                    <img src={projeto5} alt="Slide 3" className="img" />
                    <p className={carrosselStyle.legend}></p>
                </div>
            </Carousel>
            
        </div>
    );
}

export default CarrosselProjeto;

