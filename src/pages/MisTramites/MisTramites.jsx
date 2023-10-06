import React from "react";
import Table from "../../components/Table/Table";

export default function MisTramites() {
  return (
    <>
      <section
        className="col-md-12"
        style={{ background: "#fff", border: "none", overflow:'auto'}}
      >


        <div className="container" id="maincontent">
          <header
            className="col-md-12"
            style={{
              padding: 0,
              marginLeft: 0,
              marginBottom: "32px",
            }}
          >
            <div
              className="breadcrumbs col-md-12"
              id="breadcrumbs"
              style={{ padding: 0 }}
            >
              <h2 className="explorador-seleccionado">
                <a className="crumb-item"></a>

                <a className="crumb-name"> Trámites en curso </a>
              </h2>
              <p
                className="explorador-seleccionado"
                style={{ maxWidth: "712px" }}
              >
                Seguí el estado de todos tus trámites que ya cuentan con un
                número de expediente o de solicitud y están siendo gestionados.
              </p>
            </div>
            <div
              className="input-group col-md-9 pad-buscador"
              id="edit-basic"
              style={{ width: "468px", height: "40px", marginBottom: "10px" }}
            >
              <div
                className="form-item"
                id="search"
                style={{ width: "468px", height: "40px" }}
              >
                <input
                  autocomplete="off"
                  className="input-sm form-control ng-untouched ng-pristine ng-valid"
                  dir="auto"
                  id="edit-keys"
                  maxlength="255"
                  name="keys"
                  placeholder="Buscar por Nombre, Estado de trámite o Fecha de creación"
                  size="20"
                  spellcheck="false"
                  title="Buscar"
                  type="search"
                  value=""
                  
                  style={{ width: "468px", height: "40px" }}
                />
              </div>

              <span className="input-group-btn" style={{ height: "100%" }}>
                <button
                  className="btn-primary btn"
                  id="edit-submit"
                  name="op"
                  type="submit"
                  style={{ height: "40px" }}
                >
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </header>

        
        <Table/>

          <div className="contador col-md-12">
            <div className="col-sx-12 col-sm-5">
              <div className="cuantos">
                <span>Mostrando 1 a 5 de 72- ver:</span>
                <div className="cantidad">
                  <select
                    autocomplete="off"
                    className="form-control input-sm ng-untouched ng-pristine ng-valid"
                    id="selectPaginador"
                    value="10"
                    
                  >
                    <option selected="selected" value="5" >
                      5
                    </option>
                    <option value="10" >
                      10
                    </option>
                    <option value="50" >
                      50
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-7 cen-pagina explorador">
              <pagination-controls
                id="misTramitesPag"
                
                
                
              >
                <div
                  
                  
                >
                  <ul
                    className="ng2-pagination"
                    role="navigation"
                    aria-label="Pagination"
                  >
                    <li className="pagination-previous disabled">
                      <span>
                        {" "}
                        Anterior <span className="show-for-sr">page</span>{" "}
                      </span>
                    </li>

                    <li className="current">
                      <div>
                        <span className="show-for-sr">You're on page </span>
                        <span>1</span>
                      </div>
                    </li>
                    <li>
                      <a>
                        <span className="show-for-sr">page </span>
                        <span>2</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="show-for-sr">page </span>
                        <span>3</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="show-for-sr">page </span>
                        <span>4</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="show-for-sr">page </span>
                        <span>5</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="show-for-sr">page </span>
                        <span>...</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="show-for-sr">page </span>
                        <span>15</span>
                      </a>
                    </li>

                    <li className="pagination-next">
                      <a aria-label="Siguiente page">
                        Siguiente <span className="show-for-sr">page</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </pagination-controls>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
