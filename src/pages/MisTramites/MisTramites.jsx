import React from "react";
import TabsTramites from "../../components/TabsTramites/TabsTramites";
import Paginado from "../../components/Paginado/Paginado";
import "./style.css";

export default function MisTramites({ children }) {
  const path = window.location.pathname

  return (
    <div className="container">
      <TabsTramites />
      <div style={{ marginBottom: "24px" }}>{children}</div>
      {
        path !== '/misTramites/tramitesExternos' ? 

        <Paginado />
        :
        <></>
      }
    </div>
  );
}
