import React from "react";
import Search from "../../../components/Search/Search";
import Table from "../../../components/Table/Table";
import { useState } from "react";
import { useEffect } from "react";

export default function TareasPendientes() {
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
      <h2>Tareas pendientes</h2>
      <p style={{ maxWidth: "712px" }}>
        Corregí datos o sumá la documentación solicitada por la Administración
        Pública de tus trámites en curso.
      </p>
      <div className="buscador_mistramites">
       <Search />
      </div>
      <Table data={data} />
    </div>
  );
}
