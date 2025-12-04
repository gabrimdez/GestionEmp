/* 
Crea un formulario en react, que se conecta al endpoint que hemos construido con python (flask)
*/

/* 
Formulario en React que se conecta al endpoint /api/suma de Flask
*/

import { useState, type ChangeEvent, type FormEvent } from 'react';

export default function Ejercicio_09() {
  const [form, setForm] = useState({
    num1: 0,
    num2: 0,
  });
  const [resultado, setResultado] = useState('');
  const [loading,setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true)
    try {
      const response = await fetch('http://127.0.0.1:5000/api/suma', {
        method: 'POST',
        body: JSON.stringify({
          num1: Number(form.num1),
          num2: Number(form.num2),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.log('error');
      }

      const data = await response.json();

      setResultado(data.resultado);
      setLoading(false)

    } catch (error) {
      console.error('Error', error);
    } finally {
          setLoading(false)

    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  }

  return (
    <div>
      <h2>API /api/suma (Flask)</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-2xl border items-center justify-center"
      >
        <label>Número 1:</label>
        <input
          className="border rounded-2xl p-4"
          type="number"
          name="num1"
          value={form.num1}
          onChange={handleChange}
          required
        />

        <label>Número 2:</label>
        <input
          className="border rounded-2xl p-4"
          type="number"
          name="num2"
          value={form.num2}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading} className='hover:bg-blue-600 bg-blue-300 rounded-2xl p-4 m-4'>Enviar</button>
      </form>

      {loading?'Calculando':<h3>Resultado: {resultado}</h3>}
    </div>
  );
}