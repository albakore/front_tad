import React, { useState, useEffect } from "react";
import ListSelection from "../ListSelection/ListSelection";
import "./style.css";

export default function Paginado({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}) {
  const [activePage, setActivePage] = useState(currentPage);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    // Calculamos los números de página a mostrar
    let startPage = activePage - 2;
    let endPage = activePage + 2;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, 5);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - 4);
    }

    const numbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    setPageNumbers(numbers);
  }, [activePage, totalItems, itemsPerPage,currentPage ]);

  const handleClick = (index) => {
    setActivePage(index);
    setCurrentPage(index);
  };

  return (
    <div
      className="storybook__container-pagination paginado_container"
      style={{ marginBottom: "32px" }}
    >
      <ListSelection text={`Mostrando 1 de ${totalItems}`}>
        <option>5</option>
        <option>10</option>
        <option>{totalItems}</option>
      </ListSelection>
      <nav aria-label="Ejemplo de paginado numerado central">
        <ul className="pagination">
          <li style={{display: currentPage == 1 ? 'none' : 'flex'}} className="page-item ">
            <a
              onClick={() => handleClick(activePage - 1)}
              className="page-link"
              
              href="#"
            >
              <span className="page-previous-icon" aria-hidden="true"></span>
              <span className="page-previous-text"> Anterior</span>
            </a>
          </li>

          {pageNumbers.map((pageNumber) => (
            <li
              onClick={() => handleClick(pageNumber)}
              className={`page-item ${
                activePage === pageNumber ? "active" : ""
              }`}
              key={pageNumber}
            >
              <a className="page-link" href="#">
                {pageNumber}
              </a>
            </li>
          ))}

          <li className="page-item no-events">
            <span className="page-link">...</span>
          </li>
          <li className="page-item ">
            <a className="page-link" href="#">
              {activePage + 9}
            </a>
          </li>

          <li className="page-item ">
            <a
              onClick={() => handleClick(activePage + 1)}
              className="page-link"
              href="#"
            >
              <span className="page-next-text">Siguiente </span>
              <span className="page-next-icon" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
