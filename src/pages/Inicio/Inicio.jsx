import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Paginado from '../../components/Paginado/Paginado';
import DescriptionHero from '../../components/DescriptionHero/DescriptionHero';
import CardTramite from '../../components/CardTramite/CardTramite';

export default function Inicio() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`../data/allTramites/allTramites.json`);
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

  // Calcular el índice del primer y último elemento a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.respuesta?.slice(indexOfFirstItem, indexOfLastItem) || [];

  return (
    <div>
      <Hero />
      <div className='container'>
        <DescriptionHero />
        {currentItems.map((item, index) => (
          <div style={{ marginBottom: '20px' }} key={index}>
            <CardTramite data={item} />
          </div>
        ))}
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
