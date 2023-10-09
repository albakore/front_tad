import React from "react";

export default function CardTramite({data}) {
  return (
    <a className="card" href="#">
      <div className="card-body">
        <h4 className="card-title">{data.nombre}</h4>
        <p className="card-text">
          Recomendamos en este espacio no utilizar más de 3 líneas, para generar
          una lectura óptima. En este caso agregamos líneas de texto extras y
          mostrar el comportamiento de la card.
        </p>
      </div>
    </a>
  );
}
