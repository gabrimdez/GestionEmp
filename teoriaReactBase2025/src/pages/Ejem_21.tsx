import { useParams } from "react-router-dom";

export default function Ejem_21() {
  const { id } = useParams();

  return <div>Monstrando el usuario {id}</div>;
}
