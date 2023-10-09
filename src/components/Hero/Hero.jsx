import React from "react";
import Search from "../Search/Search";
import "./style.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container container_hero">
        <div className="d-flex flex-column justify-content-around" id="titulos">
          <div className="">
            <h1>Trámites a Distancia (TAD)</h1>
          </div>

          <span className="subtitulo">
            Encontrá y gestioná tus trámites de la Administración Pública a
            través de la plataforma
          </span>

          <div style={{maxWidth:'712px'}}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
