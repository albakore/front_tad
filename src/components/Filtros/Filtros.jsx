import React, { useEffect, useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

export default function Desplegable({ items }) {
  const [categoria, setCategoria] = useState([]);
  const [itemArea, setItemArea] = useState([]);
  console.log(items.respuesta);

  useEffect(() => {
    const itemArea = [];
    const categorias = [];
    items.respuesta?.forEach((element) => {
      // Comprueba si el elemento tiene una categoría
      if (element.categorias.includes("Categoría")) {
        categorias.push(element.tag);
      }

      // Comprueba si el elemento tiene un área
      if (element.categorias.includes("Área")) {
        itemArea.push(element.tag);
      }
    });

    // Actualizar el estado de categoria
    setCategoria(categorias);
    setItemArea(itemArea);
  }, [items]);

  return (
    <div className="storybook__container-accordion">
      <div className="accordion" id="accordionExample">
        <div className="card">
          <button
            className="card-header collapsed card-link"
            data-toggle="collapse"
            data-target="#collapseOne"
          >
            Categoría
          </button>
          <div
            id="collapseOne"
            className="collapse"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              {categoria.length !== 0 ? (
                categoria.map((name, index) => (
                  <div key={index}>
                    <CheckBox text={name} />
                  </div>
                ))
              ) : (
                <>Loading</>
              )}
            </div>
          </div>
        </div>
        <div className="card">
          <button
            className="card-header collapsed card-link"
            data-toggle="collapse"
            data-target="#collapseTwo"
          >
            Área
          </button>
          <div
            id="collapseTwo"
            className="collapse"
            data-parent="#accordionExample"
          >
            <div className="card-body">
            {itemArea.length !== 0 ? (
                itemArea.map((name, index) => (
                  <div key={index}>
                    <CheckBox text={name} />
                  </div>
                ))
              ) : (
                <>Loading</>
              )}
            </div>
          </div>
        </div>
        <div className="card">
          <button
            className="card-header collapsed card-link"
            data-toggle="collapse"
            data-target="#collapseThree"
          >
            Tipologia del trámite
          </button>
          <div
            id="collapseThree"
            className="collapse"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Esta es la descripción que se encuentra dentro de un colapsable.
              Recomendamos no utilizar demasiado texto, para generar una lectura
              óptima.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
