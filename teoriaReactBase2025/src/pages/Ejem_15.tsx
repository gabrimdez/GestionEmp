import { useEffect, useState } from "react";

interface Pokemon {
  name : string
}

export default function Ejem_15() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function loadPokemons() {

    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon').
        then(res => res.json())
        setPokemons(response.results)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  
  }
  useEffect(() => {
    loadPokemons()
  }, [])

  if(loading) return <div>Cargando la lista de pokemons...</div>
  if (error) return <div>Hay problemas al cargar los pokemons</div>   

  
  return <div>
    {pokemons.map(pokemon => <div key={pokemon.name}>{pokemon.name}</div>)}
  </div>
}