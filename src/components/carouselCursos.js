import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrosselStyle from "../styles/carousel.modules.css";

import cursos1 from "../assets/testes/teste1.jpg";
import cursos2 from "../assets/testes/teste2.png";
import cursos3 from "../assets/testes/teste3.jpg";


const CarrosselCurso = () => {
    return (

        <div className='cursos'>
            <Carousel 
                showThumbs={false} 
                autoPlay={false} 
                infiniteLoop={true} 
                showIndicators={true}  
                showStatus={false}  >
               
                    <div className={carrosselStyle.slider}>
                        <img src={cursos1} alt="Slide 1" className={carrosselStyle.img} />
                        <p className={carrosselStyle.legend}></p>
                    </div>
                    <div className={carrosselStyle.slider}>
                        <img src={cursos2} alt="Slide 2" className={carrosselStyle.img} />
                        <p className={carrosselStyle.legend}></p>
                    </div>
                    <div className={carrosselStyle.slider}>
                        <img src={cursos3} alt="Slide 3" className={carrosselStyle.img} />
                        <p className={carrosselStyle.legend}></p>
                    </div>
                
            </Carousel>
        </div>
    );
}

export default CarrosselCurso;
