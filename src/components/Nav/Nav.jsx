import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function Nav() {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <header className="navbar navbar-light navbar-md">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            alt="Brand"
            src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-tad.svg"
          />
          <h1 className="">
            Trámites a Distancia <br />
            <small className="titleGobierno">Gobierno de la Ciudad</small>
          </h1>
        </a>
        <button
          className="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav nav-pills">
            <li className="nav-item inicio">
              <a onClick={()=>{handleNavigation('/')}} className="nav-link active">
                <span>INICIO</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{handleNavigation('/misTramites/enCurso')}} className="nav-link">
                <span>MIS TRÁMITES</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{handleNavigation('/misObras')}} className="nav-link">
                <span>MIS OBRAS</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{handleNavigation('/notificaciones')}} className="nav-link">
                <span>NOTIFICACIONES</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{handleNavigation('/apoderados')}} className="nav-link">
                <span>APODERADOS</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{handleNavigation('/consultarTramites')}} className="nav-link">
                <span>CONSULTAR TRÁMITES</span>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
}
