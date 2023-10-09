import React from "react";

export default function Search() {
  return (
    <div className="storybook__container-form">
      <form className="form-search">
        <div className="form-group">
          <input
            type="search"
            className="form-control input-search"
            id="name-input"
            name="name"
            placeholder="Buscar..."
          />
          <button className="reset" type="reset"></button>
        </div>
      </form>
    </div>
  );
}
