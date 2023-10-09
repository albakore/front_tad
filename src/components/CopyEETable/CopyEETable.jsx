import React from "react";
import ModalReconocimiento from "../ModalReconocimiento/ModalReconocimiento";
import { useState } from "react";

export default function CopyEETable({ text }) {
  const [show, setShow] = useState("");

  const handleClick = () => {
    // Crear un elemento de textarea temporal para copiar el texto
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Eliminar el elemento de textarea temporal
    document.body.removeChild(textarea);

    // Puedes mostrar una notificación o realizar alguna otra acción después de copiar el texto
    return <ModalReconocimiento />;
  };

  return (
    <>
      <span
        data-toggle="modal"
        data-target="#exampleModal3"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
        className="copy_EE"
      >
        <svg
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.625 15.5928H4.125V5.84277C4.125 5.43027 3.7875 5.09277 3.375 5.09277C2.9625 5.09277 2.625 5.43027 2.625 5.84277V15.5928C2.625 16.4178 3.3 17.0928 4.125 17.0928H11.625C12.0375 17.0928 12.375 16.7553 12.375 16.3428C12.375 15.9303 12.0375 15.5928 11.625 15.5928ZM15.375 12.5928V3.59277C15.375 2.76777 14.7 2.09277 13.875 2.09277H7.125C6.3 2.09277 5.625 2.76777 5.625 3.59277V12.5928C5.625 13.4178 6.3 14.0928 7.125 14.0928H13.875C14.7 14.0928 15.375 13.4178 15.375 12.5928ZM13.875 12.5928H7.125V3.59277H13.875V12.5928Z"
            fill="#424242"
          />
        </svg>

        {text}
      </span>
      <ModalReconocimiento
        smallText={text}
        text={"Número de expediente copiado correctamente."}
      />
    </>
  );
}
