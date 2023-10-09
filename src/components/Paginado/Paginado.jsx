import React from "react";
import ListSelection from "../ListSelection/ListSelection";
import './style.css'

export default function Paginado() {
  return (
    <div style={{ marginBottom: "32px" }} className="container d-flex paginado_container">
      <ListSelection text={"Mostrando 1 de 500"}>
        <option>5</option>
        <option>10</option>
        <option>50</option>
      </ListSelection>
      <div className="storybook__container-pagination">
        <nav aria-label="Ejemplo de paginado numerado inicial">
          <ul className="pagination">
            <li className="page-item" style={{ opacity: "0" }}>
              <span className="page-link">
                <span className="page-previous-icon" aria-hidden="true"></span>
                <span className="page-previous-text"> Anterior</span>
              </span>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                5
              </a>
            </li>
            <li className="page-item no-events">
              <span className="page-link">...</span>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                10
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                <span className="page-next-text">Siguiente </span>
                <span className="page-next-icon" aria-hidden="true"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
