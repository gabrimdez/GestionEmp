import { useState } from "react";

// este hook personalizado deberia estar en una carpeta llamada hooks
function useCounter() {

  const [count, setCount] = useState(0)

  function increment() {
    setCount(count+1)
  }
  function decrement() {
    setCount(count-1)
  }
  function reset() {
    setCount(0)
  }

  return {count, increment, decrement, reset}
}

export default function Ejem_21() {
  
  const {count, increment, decrement ,reset} = useCounter()

  return <div>
    <button onClick={increment}>Sube</button>
    <button onClick={decrement}>Baja</button>
    <button onClick={reset}>Resetear</button>
    <div>{count}</div>
  </div>
}