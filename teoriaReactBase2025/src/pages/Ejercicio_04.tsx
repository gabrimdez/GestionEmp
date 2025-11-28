/*
Crea un componente que muestre un texto y un botón. Cuando se pulse el botón, el texto desaparecerá.
Si se vuelve a pulsar el botón, el texto volverá a aparecer.
Así continuamente, a modo de toggle.
*/

import { useState } from "react";

export default function Ejercicio_04() {
  // Estado para controlar si se muestra o no el texto
  const [mostrarTexto, setMostrarTexto] = useState(true);

  // Función que invierte el valor actual

  /* function handleToggle() {
    setMostrarTexto(!mostrarTexto); 
  }
    */
  const handleToggle = () => setMostrarTexto(!mostrarTexto);

  return (
    <div className="p-4">
      {mostrarTexto && <p>Este es el texto que aparece y desaparece.</p>}

      <button onClick={handleToggle}>Mostrar / Ocultar</button>
    </div>
  );
}
