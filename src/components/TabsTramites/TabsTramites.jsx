import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";

export default function TabsTramites() {
  const navigate = useNavigate();
    
  const tabs = [
    ["En curso" , "/misTramites/enCurso" ],
    ["Tareas pendientes" , "/misTramites/tareasPendientes" ],
    ["Pagos pendientes" , "/misTramites/pagosPendientes" ],
    ["Pagados" , "/misTramites/pagados" ],
    ["Borradores" , "/misTramites/borradores"],
    ["Finalizados" , "/misTramites/finalizados" ],
    ["Tramites externos" , "/misTramites/tramitesExternos" ],
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <nav className="tabs-slider tabsTramites" aria-label="Simple tab list">
      <ul className="nav nav-pills tabs" id="simple-myTab" role="tablist">
        {tabs.map((tabName, index) => {
          return (
            <li key={index} className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-toggle="tab"
                data-target={`#panel-content-${index}`}
                type="button"
                role="tab"
                aria-controls={`panel-content-${index}`}
                aria-selected="false"
                onClick={()=>{handleNavigation(tabName[1])}}
              >
                {tabName[0]}
              </button>
            </li>
          );
        })}
        
      </ul>
    </nav>
  );
}
