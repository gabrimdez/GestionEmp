import { useEffect, useState } from "react";

export default function Ejem_16() {

  const [myKey, setMyKey] = useState("")

  function controlTecla(event: KeyboardEvent) {
    console.log('se pulso una tecla: ', event.key)
    setMyKey(event.key)
  }

  useEffect(() => {
    window.addEventListener('keydown',controlTecla )
    return () =>{
      window.removeEventListener('keydown', controlTecla)
    }
  },[])

  return <div>
    La tecla que has pulsado es: {myKey}
  </div>
}
