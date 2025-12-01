/*
Crea un formulario que nos permita guardar un post en una base de datos para esta
práctica. Vamos a usar jsonplaceholder, que nos permite hacer peticiones HTTP a una URL
simulando el comportamiento de una API real.

Los datos a guardar son:
- title: string
- body: string

Hay que lanzar una petición por POST a:
https://jsonplaceholder.typicode.com/posts

Enviando en el body los datos del formulario.
*/


import { useState } from "react";

export default function Ejem_18() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
        });

        const data = await res.json();
        setResponse(data);
    };

    return (
        <div>
            <h2>Ejemplo 18</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Contenido:</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Guardar Post</button>
            </form>

            {response && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Respuesta de la API:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
