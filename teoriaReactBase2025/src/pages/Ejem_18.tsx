import { useState, type ChangeEvent, type FormEvent } from "react"

export default function Ejem_18(){
    const [name, setName] = useState('Gabriel')

    function handleChangeName(event:ChangeEvent<HTMLInputElement>){
        setName(event.target.value) // capturamos asi el nuevo valor que me viene del cambio
    }

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault() // para que no recargue la pagina
        console.log(`El nombre enviado es: ${name}`)
    }
    return <form onSubmit={handleSubmit}>
        <label>
            nombre: <input value={name} onChange={handleChangeName} />
        </label>
        <button type="submit">Enviar</button>
        <br/>
        {name}
    </form>
}