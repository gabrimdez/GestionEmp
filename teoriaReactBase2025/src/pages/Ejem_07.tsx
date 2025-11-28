import { useState } from "react";

export default function Ejem07() {
  //let numerito = 56
  const [numerito, setNumerito] = useState(100);

  function handleClick() {
    setNumerito(numerito+1);
  }

  return <div onClick={handleClick}>{numerito}</div>;
}
