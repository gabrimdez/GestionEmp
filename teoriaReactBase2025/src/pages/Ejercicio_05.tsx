/* 
Crea un componente que simule el lanzamiento de un dado.
Al pulsar un botón, mostrará un número aleatorio entre 1 y 5.
*/

import { useState } from "react";

export default function Ejercicio_05() {
  // Estado donde guardamos el número del dado
  const [resultado, setResultado] = useState<number | null>(null);

  // Función que genera un número aleatorio entre 1 y 5
  function lanzarDado() {
    setResultado (Math.floor(Math.random() * 6) + 1)
  }

  return (
    <div>
      <h2>Simulador de dado</h2>
        <button onClick={lanzarDado}>Lanzar dado</button>
      <p>Resultado: <span>{resultado}</span></p>

    </div>
  );
}
