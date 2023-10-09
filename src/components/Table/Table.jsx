import React, { useEffect, useState } from "react";
import './style.css'
import State from "../State/State";
import CopyEETable from "../CopyEETable/CopyEETable";

export default function Table({ data, pago }) {
  return (
    <table style={{ marginBottom: "32px" }} className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Titular</th>
          <th scope="col">Estado</th>
          {pago === true ? <th scope="col">Monto</th> : <></>}
          <th scope="col">Creación</th>
          {pago === true ? <th scope="col">Vencimiento</th> : <></>}
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.respuesta !== undefined ? (
          data.respuesta.map((item, index) => (
            <tr key={index}>
              <td className="td_nombre d-flex flex-column">
                <a className="item_link">{item.descripcion}</a>
                <CopyEETable text={ item.numeroEE} />
              </td>
              <td>
                {item.nombres} {item.apellidos}
              </td>
              <td>
                <State text={item.estado} ></State>
              </td>
              {pago === true ? <td>{item.monto}</td> : <></>}
              <td>{item.fechaAlta}</td>
              {pago === true ? <td>{item.fechaAlta}</td> : <></>}
              <td>Acciones</td>
            </tr>
          ))
        ) : (
          <>loading</>
        )}
      </tbody>
    </table>
  );
}
