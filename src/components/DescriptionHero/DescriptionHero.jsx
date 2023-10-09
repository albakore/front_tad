import React from "react";
import './style.css'

export default function DescriptionHero() {
  return (
    <p className="description_hero">
      <b>Los trámites requieren un nivel mínimo de acceso para su gestión.</b> Si
      querés conocer el nivel de seguridad asociado a tu cuenta, podés verlo
      dentro de la sección Mis Datos.<br/> Para más información sobre niveles de
      seguridad de MiBA podés <a>consultar en la web</a>. Para niveles de AGIP, podés
      descargar el manual.
    </p>
  );
}
