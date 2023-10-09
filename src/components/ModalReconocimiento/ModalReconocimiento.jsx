import React from "react";

export default function ModalReconocimiento({smallText, text }) {
  return (
    <div
      className="modal fade"
      tabindex="-1"
      role="dialog"
      id="exampleModal3"
      style={{display:'none'}}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
          <div className="modal-header unbordered">
            <small>{smallText}</small>
            <h4 className="modal-title">{text}</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
