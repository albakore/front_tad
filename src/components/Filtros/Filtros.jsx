import React from "react";
import CheckBox from "../CheckBox/CheckBox";

export default function Desplegable({ items }) {

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
              <CheckBox />
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
              Esta es la descripción que se encuentra dentro de un colapsable.
              Recomendamos no utilizar demasiado texto, para generar una lectura
              óptima.
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
