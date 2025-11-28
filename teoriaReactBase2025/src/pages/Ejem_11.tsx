const nombres = ['Antonio', 'Pepe', 'Isabel', 'Angel']



export default function Ejem_11() {
  return <div>
    <ul>
      {nombres.map(nombre => <li key={nombre}>{nombre.toUpperCase()}</li>)}
    </ul>

    <br />

    <ul>
      {nombres.map((nombre, index) => <li key={index}>{nombre.toUpperCase()}</li>)}
    </ul>
  </div>
}
