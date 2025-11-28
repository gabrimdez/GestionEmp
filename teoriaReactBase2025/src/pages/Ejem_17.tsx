import { useEffect, useState } from "react";

export default function Ejem_17() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count+1)
    console.log('entro en useEffect');
    
  }, [])

  return <div>
    {count}
  </div>
}