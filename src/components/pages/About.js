import logo_transparent from "../../img/logo_transparent.png";
import aboutExtra1 from "../../img/about-extra-1.svg";
import aboutExtra2 from "../../img/about-extra-2.svg";
import aboutImg from "../../img/about-img.svg";

function About() {
  return (
    <>
      <section>
        <div className="px-4 py-5 my-5 text-center">
          <img
            className="d-block mx-auto mb-4 img-fluid"
            src={logo_transparent}
            alt="logo"
            width="72"
            height="57"
          />
          <h1 className="display-5 fw-bold">Sobre</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              asperiores hic non ratione soluta voluptas temporibus possimus
              alias eius deserunt aut ipsam, nihil quibusdam, facilis id
              dolorem, explicabo fugiat? Ad.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container col-xxl-8 px-4 py-5"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={aboutImg}
                className="d-block mx-lg-auto img-fluid"
                alt="reuniao"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">Nossa história</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                omnis quaerat ipsa, libero blanditiis similique velit eaque
                quasi, vero, natus explicabo enim nulla ratione inventore
                minima? Temporibus possimus sit adipisci.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container col-xxl-8 px-4 py-5"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={aboutExtra1}
                className="d-block mx-lg-auto img-fluid"
                alt="atendimento"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Como podemos lhe ajudar
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                omnis quaerat ipsa, libero blanditiis similique velit eaque
                quasi, vero, natus explicabo enim nulla ratione inventore
                minima? Temporibus possimus sit adipisci. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Voluptatibus consequuntur
                saepe quia dolorum quae totam quis impedit corrupti, quasi
                aliquam et ad possimus modi quisquam odit doloribus nam,
                temporibus eius.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container col-xxl-8 px-4 py-5"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={aboutExtra2}
                className="d-block mx-lg-auto img-fluid"
                alt="anotação"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Porque nos escolher
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
                omnis quaerat ipsa, libero blanditiis similique velit eaque
                quasi, vero, natus explicabo enim nulla ratione inventore
                minima? Temporibus possimus sit adipisci.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
