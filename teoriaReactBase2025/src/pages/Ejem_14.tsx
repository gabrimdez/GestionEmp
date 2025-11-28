import { useEffect, useState } from "react";

export default function Ejem_14() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSecond((pre)=> pre+1), 1000)
    console.log("componente montado")
    return () => {
        console.log('El componente se desmonto')
        clearInterval(interval)
        }
    },
    []
  );

  

  return <div>Segundo {second}</div>;
}
