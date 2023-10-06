import React from "react";
import './style.css'

export default function Footer() {
  return (
    <>
      <footer className="" >
        <div className="d-flex flex-column container">

          <div className="images_row col-md-7">
              <img
                alt="Trámites a Distancia - Presidencia de la Nación"
                className="image-responsive para-desktop "
                src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-footer.png"
              />
              <img
                style={{width:'150px',height:'50px', marginLeft:'20px'}}
                alt="Trámites a Distancia - Presidencia de la Nación"
                className="image-responsive para-desktop img-footer"
                src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-ba-blanco-footer.png"
              />
          </div>

          <div className="p-2" >
            <ul  className="lis_col col-md-12">
              <li>
                <a>Preguntas Frecuentes</a>
              </li>
              <li>
                <a
                  target="_blank"
                  ng-reflect-href="https://gestioncolaborativa-hml.gcba.gob.ar/prestaciones"
                  href="https://gestioncolaborativa-hml.gcba.gob.ar/prestaciones"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a>Manual de Usuario</a>
              </li>
              <li>
                <a>Términos y Condiciones</a>
              </li>
            </ul>
          </div>
          
          <div className="version" id="version">
            <p id="infoVersionBack" >
              Version BACK: 1.21.22-RC2-GCABA
            </p>
            <p id="infoVersionFront" >
              Version FRONT: 1.21.19-RC2-GCABA
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
