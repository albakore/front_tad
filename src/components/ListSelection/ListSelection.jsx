import React from "react";
import './style.css'

export default function ListSelection({text, children}) {
  return (
    <div className="storybook__container-form bg-light p-4 list_selection">
      <div className="form-group">
        <label for="lista-de-seleccion">{text}</label>
        <select className="custom-select" id="lista-de-seleccion">
          {
            children
          }
        </select>
      </div>
    </div>
  );
}
