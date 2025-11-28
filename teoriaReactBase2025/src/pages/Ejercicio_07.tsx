/*
Crea un componente de react que muestre el precio actual del bitcoin (en tiempo real)
usa este api gratuita

https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur
https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR
*/

import { useEffect, useState } from "react";

const URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur";

export default function Ejercicio_07() {

    const [price, setPrice] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //TODO: mover esto a la carpeta services
    async function bitcoinApiCall(){

        try{
            const response = await fetch(URL)
            if(!response.ok) throw new Error('Error en la llamada a la API')
            const data = await response.json()
            setPrice(data.bitcoin.eur)
            setLoading(false)
        } catch (error) {
            console.log('Error:', error)
            setError('Error en la llamada a la API')
        } finally {
            setLoading(false)
        }
    }
    //Este useEffect se llama una sola vez cuando el componente se monta
    useEffect(() => {
        bitcoinApiCall()
    }, [])

    if(error) return <div>Error: {error}</div>
    if(loading) return <div>Llamando al API...</div>
    return <div>
        El bitcoin vale {price}€
    </div>
}
