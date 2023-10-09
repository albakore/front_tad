import React from "react";
import Search from "../../../components/Search/Search";
import Table from "../../../components/Table/Table";
import { useEffect } from "react";
import { useState } from "react";

export default function Borradores() {
  const [data, setData] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch( `../data/tramites/tareasPendientes.json` ); // Reemplaza con la ruta correcta a tu archivo JSON
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
      <h2>Borradores</h2>
      <p style={{ maxWidth: "712px" }}>
        Continuá con los trámites que aún no se han terminado de caratular y
        que, por lo tanto, no cuentan con número de expediente.
      </p>
      <div className="buscador_mistramites">
       <Search />
      </div>
      <Table data={data}/>
    </div>
  );
}
