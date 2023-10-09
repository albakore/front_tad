import React, { useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./style.css";

export default function SubHeader() {
  const [repSel, setRepSel] = useState("Seleccione a quién representar");

  const handleClick = (text) => {
    console.log(text);
    setRepSel(text);
  };

  return (
    <div className="container sub_header">
      <div className="d-flex justify-content-between ">
        <UserInfo name={repSel}>
          <a
            onClick={() => handleClick("Leandro Silva")}
            className="dropdown-item"
            href="#"
          >
            <span className="item-text">Leandro Silva</span>
          </a>
          <a
            onClick={() => handleClick("Silvio Felipe Rodriguez")}
            className="dropdown-item"
            href="#"
          >
            <span className="item-text">Silvio Felipe Rodriguez</span>
          </a>

          <a
            onClick={() => handleClick("Luis Miguel")}
            className="dropdown-item"
            href="#"
          >
            <span className="item-text">Luis Miguel</span>
          </a>
        </UserInfo>

        <UserInfo name={"Leandro Silva"} level={" (Nivel 3)"}>
          <a className="dropdown-item" href="#">
            <span className="item-text">Mis datos</span>
          </a>
          <a className="dropdown-item item-danger" href="#">
            <span className="material-icons-round">logout</span>
            <span className="item-text">Salir</span>
          </a>
        </UserInfo>
      </div>
    </div>
  );
}
