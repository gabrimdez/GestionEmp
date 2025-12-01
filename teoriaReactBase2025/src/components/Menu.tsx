import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="w-full bg-gray-900 text-white shadow-lg py-4">
      <ul className="flex flex-wrap gap-3 justify-center px-4">
        {[
          "Ejem1","Ejem2","Ejem3","Ejem4","Ejem5","Ejem6","Ejem7","Ejem8","Ejem9","Ejem10",
          "Ejem11","Ejem12","Ejem13","Ejem14","Ejem15","Ejem16","Ejem17","Ejem18","Ejem19","Ejem20","Ejem21",
          "Ejercicio01","Ejercicio02","Ejercicio03","Ejercicio04","Ejercicio05","Ejercicio06","Ejercicio07", "Ejercicio08"
        ].map((item) => (
          <li key={item}>
            <Link
              to={`/${item}`}
              className="px-3 py-1 rounded-lg bg-gray-700 hover:bg-gray-600 
                         transition-all text-sm font-medium shadow-md"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
