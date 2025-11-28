import { useState } from "react";

function MiBoton() {
  const [pulsado, setPulsado] = useState(false);

  function handlePulsado() {
    setPulsado(true);
  }

  function handleDesPulsado() {
    setPulsado(false);
  }
  return (
    <button
      style={{ backgroundColor: pulsado ? "red" : "black" }}
      onMouseDown={handlePulsado}
      onMouseUp={handleDesPulsado}
      onMouseLeave={handleDesPulsado}
    >
      {pulsado ? "Me has pulsado" : "Pulsame"}
    </button>
  );
}

export default function Ejem09() {
  return <MiBoton />;
}
