import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function State({ text }) {
  const [clase, setClase] = useState("badge-secondary");
  const textUpperCase = text.toUpperCase();
  console.log(textUpperCase)

  useEffect(() => {
    switch (textUpperCase) {
        case "FIRMAR DOCUMENTO":
        case "ALTA TERCERO":
        case "SUBSANACIÓN":
        case "CREADA":
            setClase('badge-primary')
            break;
            
            case "CANCELADA":
          setClase('badge-danger')
          break;
      
        case "PAGADA":
          setClase('badge-success')
          break;
      }
  }, []);

  return <span class={`badge ${clase}`}>{text}</span>;
}
