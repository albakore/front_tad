import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="storybook__container-footer">
      <footer className="main-footer">
        <div className="container">
          <section>
            <h4>Teléfonos útiles</h4>
            <ul className="list-inline">
              <li className="list-inline-item phone-items">
                <a href="tel:102">102 - Niñez y Adolescencia</a>
              </li>
              <li className="list-inline-item phone-items">
                <a href="tel:103">103 - Emergencias</a>
              </li>
              <li className="list-inline-item phone-items">
                <a href="tel:107">107 - SAME</a>
              </li>
              <li className="list-inline-item phone-items">
                <a href="tel:911">911 - Policía</a>
              </li>
              <li className="list-inline-item phone-items">
                <a href="tel:144">144 - Violencia de género</a>
              </li>
              <li className="list-inline-item phone-items">
                <a href="tel:147">147 - Atención ciudadana</a>
              </li>
            </ul>
            <a href="https://www.buenosaires.gob.ar/laciudad/telefonosutiles">
              Ver todos los teléfonos
            </a>
          </section>
          <section>
            <h4>Redes de la ciudad</h4>
            <ul className="list-inline">
              <li className="list-inline-item redes-items">
                <a href="https://www.facebook.com/GCBA">
                  <i className="bx bxl-facebook-circle"></i>
                  Facebook
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://www.instagram.com/gcba/">
                  <i className="bx bxl-instagram-alt"></i>
                  Instagram
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://twitter.com/buenosaires">
                  <i className="bx bxl-twitter"></i>
                  Twitter
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://www.youtube.com/user/GCBA">
                  <i className="bx bxl-youtube"></i>
                  YouTube
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires">
                  <i className="bx bxl-linkedin-square"></i>
                  LinkedIn
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://www.tiktok.com/@buenosaires">
                  <i className="bx bxl-tiktok"></i>
                  TikTok
                </a>
              </li>
              <li className="list-inline-item redes-items">
                <a href="https://www.pinterest.es/buenosaires/">
                  <i className="bx bxl-pinterest"></i>
                  Pinterest
                </a>
              </li>
            </ul>
          </section>
        </div>
        <hr className="divider" />
        <div className="container">
          <section className="footer-legal-section">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                <img
                  className="d-lg-none"
                  src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-footer.png"
                  alt="Ciudad de Buenos Aires"
                  height="48"
                />
                <img
                  className="d-none d-lg-inline"
                  src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-ba-blanco-footer.png"
                  alt="Ciudad de Buenos Aires"
                  height="40"
                />
                <img
                  className="img-vamos-ba"
                  src="footer/vamos-ba.svg"
                  alt="Vamos Buenos Aires"
                />
              </div>
              <div className="col-12">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="https://boletinoficial.buenosaires.gob.ar">
                      Boletín oficial
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://buenosaires.gob.ar/jefaturadegabinete/innovacion/terminos-y-condiciones">
                      Términos y condiciones
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.buenosaires.gob.ar/privacidad">
                      Política de privacidad
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales">
                      Oficios judiciales
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.buenosaires.gob.ar/gobierno/transparencia">
                      Transparencia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <div className="footer-license-text">
              Los contenidos de buenosaires.gob.ar están licenciados bajo
              Creative Commons Reconocimiento 2.5 Argentina License.
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
