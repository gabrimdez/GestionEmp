import { useParams } from "react-router-dom"

export default function Ejem_21(){

    const {id} = useParams()
    return <div>
        mostarndo el usuario {id}
    </div>
}