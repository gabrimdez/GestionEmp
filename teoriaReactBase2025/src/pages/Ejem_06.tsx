interface Props {
  mensaje : string
  color : string
  modoDeFormatear : (texto : string) => string
}

function MiComponente({mensaje, color, modoDeFormatear}: Props) {
  return <div style={{backgroundColor : color}}>
      Me has dicho: {mensaje}
  </div>
}

export default function Ejem06() {

  function formatearElTextoEnMayuscula(texto : string) {
    return texto.toUpperCase()
  }

  return <MiComponente mensaje="Cebem" color="red" modoDeFormatear={formatearElTextoEnMayuscula}/>
}
