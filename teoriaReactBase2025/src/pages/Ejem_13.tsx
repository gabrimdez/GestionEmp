import { useEffect, useState } from "react";

export default function Ejem_13() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function miAccion() {
    console.log("hola");
  }

  useEffect(
    () => console.log('hola es que no lo siento')
    ,
    [count2]
  );

  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
    </div>
  );
}
