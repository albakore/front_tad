import React from "react";
import Search from "../../../components/Search/Search";
import Table from "../../../components/Table/Table";
import { useState } from "react";
import { useEffect } from "react";

export default function Pagados() {
  const [data, setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `../data/tramites/pagados.json` ); // Reemplaza con la ruta correcta a tu archivo JSON
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
      <h2>Pagados</h2>
      <p style={{ maxWidth: "712px" }}>
      Verificá todas las boletas únicas electrónicas (BUIs) que ya tienen el pago registrado en el sistema.
      </p>
      <div className="buscador_mistramites">
       <Search />
      </div>
      <Table pago={true} data={data} />
    </div>
  );
}
