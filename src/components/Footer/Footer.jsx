import React from "react";
import './style.css'

export default function Footer() {
  return (
    <>
      <footer className="main-footer" >
        <div className="container all-footer" >
          <div
            className="col-xs-12 col-sm-4 institu logoCiudadFooter"
            id="logoCiudadFooter2"
          >
            <img
              alt="Trámites a Distancia - Presidencia de la Nación"
              className="image-responsive para-mobile"
              src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-footer.png"
            />
            <img
              alt="Trámites a Distancia - Presidencia de la Nación"
              className="image-responsive para-desktop"
              src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-footer.png"
            />
          </div>
          <div
            className="col-12 col-md-5 col-xl-4 institu logoCiudadFooter"
            id="logoCiudadFooter1"
          >
            <img
              alt="Trámites a Distancia - Presidencia de la Nación"
              className="image-responsive para-mobile"
              src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-ba-blanco-footer.png"
            />
            <img
              alt="Trámites a Distancia - Presidencia de la Nación"
              className="image-responsive para-desktop img-footer"
              src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-ba-blanco-footer.png"
            />
          </div>

          <div className="col-xs-12 col-sm-8 ayudas">
            <ul>
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
          <div id="version" style={{height: 'fit-content'}}>
            <div id="infoVersionBack" style={{height: 'fit-content'}}>
              Version BACK: 1.21.22-RC2-GCABA
            </div>
            <div id="separacion" style={{height: 'fit-content'}}></div>
            <div id="infoVersionFront" style={{height: 'fit-content'}}>
              Version FRONT: 1.21.19-RC2-GCABA
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
