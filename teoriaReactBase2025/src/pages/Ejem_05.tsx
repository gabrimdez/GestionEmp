export default function Ejem05() {

const misEstilos = {
    backgroundColor : 'green'
}

  return <>
    <button className="naranja">Pulsame</button>
    <button style={misEstilos}>Pulsame</button>
    <button style={{backgroundColor: 'pink'}}>Pulsame</button>
  </>;
}
