import React from "react";
import Search from "../../../components/Search/Search";
import Table from "../../../components/Table/Table";
import { useState } from "react";
import { useEffect } from "react";

export default function EnCurso() {
  const [data, setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `../data/tramites/enCurso.json` ); // Reemplaza con la ruta correcta a tu archivo JSON
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
      <h2>Trámites en curso</h2>
      <p style={{maxWidth: '712px'}}>
        Seguí el estado de todos tus trámites que ya cuentan con un número de
        expediente o de solicitud y están siendo gestionados.
      </p>

      <div className="buscador_mistramites">
       <Search />
      </div>
      <Table data={data} />

    </div>
  );
}
