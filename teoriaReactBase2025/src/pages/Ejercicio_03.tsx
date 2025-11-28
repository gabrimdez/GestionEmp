/*
Crea un componente que reciba 2 valores numericos.
El componente tambien recibe una funcion a ejecutarse
Ej

function sumar(n1, n2) {
    return n1 + n2
}

EL componente tendra que mostrar el resultado de ejecutar la operacion con esos 2 numeros
*/

interface Props {
    n1 : number
    n2 : number
    operacion : (a : number, b : number) => number
}

function Calculadora({n1, n2 , operacion} : Props) {


  return <div>
    Primer numero: {n1}, Segundo numero: {n2} = {operacion(n1,n2)}
  </div>;
}

export default function Ejercicio_03() {

    const sumar = (n1 : number, n2 : number) => n1+n2
    

  return <Calculadora n1={54} n2={6} operacion={sumar}/>
}
