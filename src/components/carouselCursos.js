import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carrosselStyle from "../styles/carousel.modules.css";

import cursos1 from "../assets/certificados/React escrevendo com Typescript - 12h_page-0001.jpg";
import cursos2 from "../assets/certificados/Formação A partir do zero_ HTML e CSS para projetos web - Alura - 52 h_page-0001.jpg";
import cursos3 from "../assets/certificados/Introdução ao  Git e ao GitHub - 3h_page-0001.jpg";
import cursos4 from "../assets/certificados/CERTIFICADO - HACKATHON DAS MANAS - 20H_page-0001.jpg";
import cursos5 from "../assets/certificados/Certificado_-_Nivelamento_-_Hacker_do_bem - 80h (1)_page-0001.jpg";


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
                    <div className={carrosselStyle.slider}>
                        <img src={cursos4} alt="Slide 2" className={carrosselStyle.img} />
                        <p className={carrosselStyle.legend}></p>
                    </div>
                    <div className={carrosselStyle.slider}>
                        <img src={cursos5} alt="Slide 3" className={carrosselStyle.img} />
                        <p className={carrosselStyle.legend}></p>
                    </div>

            </Carousel>
        </div>
    );
}

export default CarrosselCurso;
