import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrosselStyle from "../styles/carousel.modules.css";

import projeto1 from "../assets/testes/teste1.jpg";
import projeto2 from "../assets/testes/teste2.png";
import projeto3 from "../assets/testes/teste3.jpg";

const CarrosselProjeto = () => {
    return (

        
        <div className="projetos">
            
            <Carousel 
            showThumbs={false} 
            autoPlay={true} 
            infiniteLoop={true} 
            showIndicators={false}       
        >
                <div className={carrosselStyle.slider}>
                    <img src={projeto1} alt="Slide 1" className={carrosselStyle.img} />
                    <p className={carrosselStyle.legend}></p>
                </div>
                <div className={carrosselStyle.slider}>
                    <img src={projeto2} alt="Slide 2" className={carrosselStyle.img} />
                    <p className={carrosselStyle.legend}></p>
                </div>
                <div className={carrosselStyle.slider}>
                    <img src={projeto3} alt="Slide 3" className={carrosselStyle.img} />
                    <p className={carrosselStyle.legend}></p>
                </div>
            </Carousel>
            
        </div>
    );
}

export default CarrosselProjeto;
