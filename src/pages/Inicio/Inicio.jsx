import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Paginado from "../../components/Paginado/Paginado";
import DescriptionHero from "../../components/DescriptionHero/DescriptionHero";
import CardTramite from "../../components/CardTramite/CardTramite";
import Filtros from "../../components/Filtros/Filtros";

export default function Inicio() {
  const [data, setData] = useState([]);
  const [filtros, setFiltros] = useState([])
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 5;

  //fetch a todos los tramites y filtros:
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realizar ambas solicitudes en paralelo utilizando Promise.all
        const [tramitesResponse, filtrosResponse] = await Promise.all([
          fetch(`../data/allTramites/allTramites.json`),
          fetch(`../data/filtros/filtros.json`),
        ]);
  
        if (!tramitesResponse.ok || !filtrosResponse.ok) {
          throw new Error("Error al cargar uno de los archivos JSON");
        }
  
        const tramitesData = await tramitesResponse.json();
        const filtrosData = await filtrosResponse.json();
  
        // Aquí puedes utilizar tramitesData y filtrosData según sea necesario
        setData(tramitesData);
        setFiltros(filtrosData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Calcular el índice del primer y último elemento a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    data.respuesta?.slice(indexOfFirstItem, indexOfLastItem) || [];

  //configuracion para los desplegables:

  return (
    <div>
      <Hero />
      <div className="container">
        <DescriptionHero />
        <div className="row">
          <div className="col-md-3">
            <h2 style={{ marginBottom: "24px" }}>Filtrar por</h2>
            <Filtros items={filtros} />
          </div>
          <div className="col-md-9">
            {currentItems.map((item, index) => (
              <div style={{ marginBottom: "20px" }} key={index}>
                <CardTramite data={item} />
              </div>
            ))}
          </div>
        </div>

        <Paginado
          itemsPerPage={itemsPerPage}
          totalItems={data.respuesta?.length || 0}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
