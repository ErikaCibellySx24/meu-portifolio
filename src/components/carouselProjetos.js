import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrosselStyle from "../styles/carousel.modules.css";

import projeto1 from "../assets/meu_portifoli.png";
import projeto2 from "../assets/analise_padroes_nlp.png";
import projeto3 from "../assets/lafepe.png";



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
            </Carousel>
            
        </div>
    );
}

export default CarrosselProjeto;

