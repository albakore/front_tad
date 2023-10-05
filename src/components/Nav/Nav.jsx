import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {

  const navigate = useNavigate()

  const handleNavigation = (route) =>{
    navigate(route)
  }

  return (
    <nav  className="navbar navbar-top navbar-default" role="navigation">
          <div  className="container">
            <div >
              <div  className="navbar-header">
                <button  className="navbar-toggle" data-target="#main-navbar-collapse" data-toggle="collapse" type="button">
                  <span  className="sr-only">Toggle navigation</span>
                  <span  className="icon-bar"></span>
                  <span  className="icon-bar"></span>
                  <span  className="icon-bar"></span>
                </button>
                <a  className="navbar-brand logoGobierno">
                  <img  alt="Brand" src="https://sade-tad3-hml.gcba.gob.ar/tramitesadistancia/images/logo-tad.svg" />
                  <h1  className="">
                    Trámites a Distancia <br />
                    <small  className="titleGobierno">Gobierno de la Ciudad</small>
                  </h1>
                </a>

                
              </div>
              <div  className="collapse navbar-collapse" id="main-navbar-collapse">
                
                <ul  className="nav navbar-nav navbar-right">
                  <li >
                    <a onClick={()=>{handleNavigation('/')}}>Inicio</a>
                  </li>

                  <li >
                    <a onClick={()=>{handleNavigation('/misTramites')}}>Mis trámites
                     <span  className="badge">2</span>
                    </a>
                  </li>
                  <li >
                    <a  onClick={()=>{handleNavigation('/misObras')}} >Mis Obras</a>
                  </li>

                  <li >
                    <a  onClick={()=>{handleNavigation('/notificaciones')}} >Notificaciones
                      <span  className="badge">13</span></a>
                  </li>
                  
                  <li >
                    <a  onClick={()=>{handleNavigation('/apoderados')}} >Apoderados</a>
                  </li>

                  <li >
                    <a  onClick={()=>{handleNavigation('/consultarTramites')}} >Consultar trámites</a>
                  </li>

                 
                </ul>
                
              </div>
            </div>
          </div>
        </nav>
  )
}
