/*
Crea un componente que represente un card
El card lo vas a obtener de la libreria de componentes ss flowbite
El card tiene que mostrar: 
- icono
- titulo
- ulr y textoUrl
- decripcion
*/

import Card from "../components/Card";
import RegaloIcon from "../components/icons/RegaloIcon";




export default function Ejercicio_02() {
    return <Card Icon={RegaloIcon} title="Need a help in Claim?" url="https://www.google.es" urlText="See our guideline"> 
    Go to this step by step guideline process on how to certify for your weekly benefits:
    </Card>
}