
interface Props {
  children : React.ReactNode
}

function MiComponente({children}:Props) {
  return <div>{children}</div>
}

export default function Ejem08() {
  return <div>
    <MiComponente>hola</MiComponente>
  </div>;
}

