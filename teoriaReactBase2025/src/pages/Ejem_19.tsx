import { useState, type ChangeEvent, type FormEvent } from "react";

export default function Ejem_19() {
  const [form, setForm] = useState({
    name: "Gabriel",
    surname: "Acevedo",
    email: "acemengab@gmail.com",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //const value = event.target.value;
    //const name = event.target.name;
    const {value, name} = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // para que no recargue la pagina
    console.log(`El nombre enviado es: ${form.name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        nombre: <input name="name" value={form.name} onChange={handleChange} />
      </label>
      <label>
        apellido: <input name="surname" value={form.surname} onChange={handleChange} />
      </label>
      <label>
        email: <input name="email"value={form.email} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
      <br />
      {form.name}
    </form>
  );
}
