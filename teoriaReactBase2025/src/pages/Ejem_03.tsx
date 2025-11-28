const Admin = () => <p>Soy un panel de administrador</p>
const Invitado = () => <p>Soy un panel de invitado</p>

export default function Ejem_03() {

    const isAdmin = false

    return isAdmin ? <Admin/> : <Invitado/>
}