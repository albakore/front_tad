import React from "react";
import State from "../State/State";

export default function CardTramite({ data }) {
  const tags = data.etiquetas.tags;
  console.log(typeof tags);
  return (
    <a className="card" href="#">
      <div className="card-body">
        <p className="card-text row">
          {tags.map((tag, index) => {
            return (
              <div className="" key={index}>
                <State text={tag} />
              </div>
            );
          })}
        </p>
        <h4 className="card-title">{data.nombre}</h4>
        <span>
          {data.descripcion}
        </span>
      </div>
    </a>
  );
}
