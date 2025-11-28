import { useState } from "react";

// este hook personalizado, que maneja la logica del contador, deberia de estar en una carpeta llamada 'hooks'
function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return { count, increment, decrement, reset };
}

export default function Ejem_20() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Ejemplo 20: Contador Simple</h1>
      <p className="mb-6">Has hecho clic {count} veces.</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sube
        </button>

        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Baja
        </button>

        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Resetear
        </button>
      </div>
    </div>
  );
}
