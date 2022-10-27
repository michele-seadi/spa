import aprendizado_mainsection from '../../img/aprendizado_mainsection.png'
import aluno_01 from '../../img/aluno_01.jpg'
import aluno_02 from '../../img/aluno_02.jpg'
import aluno_03 from '../../img/aluno_03.jpg'
import aluno_04 from '../../img/aluno_04.jpg'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home(){

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
    <>
        {/*  Primeira Imagem */}
        <section>
            <div className="container-fluid col-xxl-8 px-4 py-5" >
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img src={aprendizado_mainsection} className="d-block mx-lg-auto img-fluid" alt="desenho"/> 
                  </div>
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Do zero ao Tech</h1>
                    <p className="lead">Cursos do iniciante ao avançado, comece hoje mesmo e dê um upgrade na sua carreira.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Cadastre-se</button>
                    </div>
                  </div>
                </div>
              </div>
        </section>

        {/* Conheça nossos cursos */}
        
        <section>  
            <div className="container-fluid mt-5">
                <h1 className="text-lg-start">
                    Conheça nossos cursos
                </h1>   
                <h3 className="mb-3"> Uma variedade pra você começar agora </h3>        
            </div>

             {/* <!-- <div className="todos-cursos"> --> */}
            <div>
                    <a href="video.html">
                        <img className="classNameeIMG" src={aluno_01} alt="#" title="#"/>
                    </a>
                    <h3 className="#">Sistema Operacional</h3>
                    <p>Organizara as pastas e enteder com se organiza o seu computador.</p>
                    <a href="video.html">
                    <button type="button" className="button">Assistir</button>                    
                </a>   
            </div>
            <div className="detalhe-curso">
                <a href="/">
                    <img className="classNameeIMG" src={aluno_02} alt="#" title="#"/>
                </a>
                <h3 className="#">HTML Básico</h3>
                <p>Html explicado de forma simples e clara.</p>
                <button type="button" className="button">Conhecer</button>
            </div>

            <div className="detalhe-curso">
                <a href="/">
                    <img className="classNameeIMG" src={aluno_03} alt="#" title="#"/>
                </a>
                <h3 className="#">CSS Básico</h3>
                <p>Css, aprendendo a colocar cor e estilo em seu projeto.</p>
                <button type="button" className="button">Conhecer</button>
            </div>

            <div className="detalhe-curso">
                <a href="/">
                    <img className="classNameeIMG" src={aluno_04} alt="#" title="#"/>
                </a>
                <h3 className="#">JavaScript Básico</h3>
                <p>Hora de fazer tudo funcionar com JavaScrpt.</p>
                <button type="button" className="button">Conhecer</button>
            </div>


            <div className="detalhe-curso">
                <a href="/">
                    <img className="classNameeIMG" src={aluno_02} alt="#" title="#"/>
                </a>
                <h3 className="#">Sistema Operacional Windows</h3>
                <p>Organizara as pastas e enteder como se organiza o seu computador.</p>
                <button type="button" className="button">Conhecer</button>
            </div>
            

            <div className="detalhe-curso">
                <a href="/">
                    <img className="classNameeIMG" src={aluno_04} alt="#" title="#"/>
                </a>
                <h3 className="#">HTML Básico</h3>
                <p>Html explicado de forma simples e clara.</p>
                <button type="button" className="button">Conhecer</button>
            </div>


            <div className="detalhe-curso">
                <a href="/">
                    <img className="classNameeIMG" src={aluno_03} alt="#" title="#"/>
                </a>
                <h3 className="#">CSS Básico</h3>
                <p>Css, aprendendo a colocar cor e estilo em seu projeto.</p>
                <button type="button" className="button">Conhecer</button>
            </div>

            <div className="detalhe-curso">
                <a href="/">
                    {/* <img className="classNameeIMG" src="assets\img\aluno_03.jpg" alt="#" title="#"> */}
                </a>
                <h3 className="#">JavaScript Básico</h3>
                <p>Hora de fazer tudo funcionar com JavaScrpt.</p>
                <button type="button" className="button">Conhecer</button>
            </div>
        
            {/* <!--</div>--> */} 
        </section> 
        {/* Carousel */}
        <section>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aluno_01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Antônio Nunes</h3>
          <p>"Hoje me sinto muito mais segura em assuntos relacionados à tecnologias!"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aluno_02}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Juliana Pereira</h3>
          <p>Com a Zetta eu consegui ir mais longe. - Cursou JavaScript Avançado</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={aluno_03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ana Luiza</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </section>
    </>
    )
}

export default Home