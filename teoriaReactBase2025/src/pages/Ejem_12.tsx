import { useState } from "react"

function Contador({initialValue = 0}) {
  const [count, setCount] = useState(initialValue)

  function handleClick() {
    return setCount(count+1)
  }

  return <button onClick={handleClick}>{count}</button>
}

export default function Ejem_12() {
  return <div>
    <Contador initialValue={0}/>
  </div>
}
