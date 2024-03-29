import React from "react";
import State from "../State/State";
import "./style.css";

export default function CardTramite({ data }) {
  const tags = data.etiquetas.tags;
  return (
    <a className="card" href="#">
      <div className="card-body">
        <p className="card-text row">
          {tags.map((tag, index) => {
            return (
              <div className="tags" key={index}>
                <State text={tag} />
              </div>
            );
          })}
        </p>
        <h4 className="card-title">{data.nombre}</h4>
        <span>{data.descripcion}</span>
        
        
      </div>
      <span className="accesoRequerido">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7935 10.0011H12.8535C11.9035 7.3111 9.09349 5.5011 5.97349 6.1211C3.68349 6.5811 1.82349 8.4211 1.34349 10.7011C0.523492 14.5811 3.46349 18.0011 7.20349 18.0011C9.81349 18.0011 12.0335 16.3311 12.8535 14.0011H13.2035L14.4935 15.2911C14.8835 15.6811 15.5135 15.6811 15.9035 15.2911L17.2035 14.0011L18.4935 15.2911C18.8835 15.6811 19.5235 15.6811 19.9135 15.2911L22.5035 12.6811C22.8935 12.2911 22.8935 11.6511 22.4935 11.2611L21.5035 10.2911C21.3035 10.1011 21.0535 10.0011 20.7935 10.0011ZM7.20349 15.0011C5.55349 15.0011 4.20349 13.6511 4.20349 12.0011C4.20349 10.3511 5.55349 9.0011 7.20349 9.0011C8.85349 9.0011 10.2035 10.3511 10.2035 12.0011C10.2035 13.6511 8.85349 15.0011 7.20349 15.0011Z"
              fill="black"
            />
          </svg>
          <b>Nivel mínimo de acceso requerido: NIVEL {data.nivelAccesoRequerido}</b>
        </span>
    </a>
  );
}
