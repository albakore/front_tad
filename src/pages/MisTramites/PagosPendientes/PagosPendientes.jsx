import React from "react";
import Search from "../../../components/Search/Search";
import Table from "../../../components/Table/Table";
import { useEffect } from "react";
import { useState } from "react";

export default function PagosPendientes() {
  const [data, setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `../data/tramites/pagosPendientes.json` ); // Reemplaza con la ruta correcta a tu archivo JSON
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Pagos pendientes</h2>
      <p style={{ maxWidth: "712px" }}>
        Pagá las boletas únicas electrónicas que se generaron al finalizar de
        caratular un expediente para que tu trámite avance.
      </p>
      <div className="buscador_mistramites">
       <Search />
      </div>
      <Table pago={true} data={data} />
    </div>
  );
}
