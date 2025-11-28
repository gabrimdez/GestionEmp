import { useState } from "react";




export default function Ejem10({initialValue = 200}) {

  const [valor,setValor] = useState(initialValue)

  function handeleIncrement() {
      setValor(valor+1)
  }

  function handreDecrement() {
    setValor(valor-1)
  }

  return <div className="flex-row">
      {valor} <br />
      <div className="flex justify-evenly mx-16">
        
      <button onClick={handeleIncrement}>Incrementar</button>
      <button onClick={handreDecrement}>Decrementar</button>
      </div>
  </div>;
}
