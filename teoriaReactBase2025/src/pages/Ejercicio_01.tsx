/*
Crea un componente que se le pase como prop un valor en grados centigrados
Y muestre por pantalla ese valor en grados Farenheit y centigrados
*/
interface Props {
    grados : number
}

function Conversor({grados = 30} : Props) {

    const toFarenheit = (grados : number) => grados * 9/5 + 32
    

    return <div>º{grados} / º{toFarenheit(grados)}</div>
}


export default function Ejercicio_01() {
    return <Conversor grados={32}></Conversor>
}