/*
Mostrar una lista de cosas en pantalla.
El usuario podrá seleccionar (pulsando sobre alguna de ellas) y la cosa se resaltará.
Aparecerá un mensaje por consola indicando que se ha seleccionado el elemento x (o se ha deseleccionado, si ya estaba seleccionado).
Por defecto, aparecerá marcado un elemento (el que se le pase por Props)
*/

import { useState } from "react";


export default function Ejercicio_06() {

    const [selectedItem, setSelectedItem] = useState(1)
    const items = ['Elem1', 'Elem2', 'Elem3', 'Elem4', 'Elem5']

    const handleChange = (index: number) => {
        setSelectedItem(index)
        console.log('Me has pulsado', index)
    }

    return <div>
        {items.map((item, index)=>
        <div className = {index===selectedItem ? 'text-amber-300':''} key = {index} onClick={() => handleChange(index)}>{item}</div>)}
    </div>

}

/*import { useState } from "react";

export default function Ejercicio_06({ selectedDefault }) {
  const items = ["Ejem1", "Ejem2", "Ejem3", "Ejem4"];

  const [seleccionado, setSeleccionado] = useState(selectedDefault);

  const toggleItem = (item) => {
    console.log(
      seleccionado === item
        ? `Se ha deseleccionado el elemento ${item}`
        : `Se ha seleccionado el elemento ${item}`
    );

    setSeleccionado(seleccionado === item ? null : item);
  };

  return (
    <div>
      <h2>Selecciona un elemento</h2>

      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => toggleItem(item)}
            style={{
              cursor: "pointer",
              fontWeight: seleccionado === item ? "bold" : "normal",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
*/