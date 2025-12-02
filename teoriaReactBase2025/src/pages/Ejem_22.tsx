import { useEffect, useState, type FormEvent } from "react"
import { useSearchParams } from "react-router-dom"

const names = ['Ana', 'Juan', 'Luis', 'Carlos', 'Andrés', 'Antonio']

export default function Ejem_22() {
    const [searchParams, setSearchParams] = useSearchParams()

    const qFromUrl = searchParams.get('q') ?? ''

    const [search, setSearch] = useState(qFromUrl)
    const [nombresFiltrados, setNombresFiltrados] = useState<string[]>(names)

    useEffect(() => {
        setSearch(qFromUrl)

        const query = qFromUrl.trim().toLowerCase()

        if (!query) {
            setNombresFiltrados(names)
            return
        }

        const temp = names.filter(name =>
            name.toLowerCase().startsWith(query)
        )

        setNombresFiltrados(temp)
    }, [qFromUrl])

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const query = search.trim()
        if (query) {
            setSearchParams({ q: query })
        } else {
            setSearchParams({})
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar por nombre..."
                />
                <button type="submit">Buscar</button>
            </form>

            <ul>
                {nombresFiltrados.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    )
}