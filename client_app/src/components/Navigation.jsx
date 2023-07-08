import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3 items-center">
      <Link to="/alumnos">
        <h1 className="font-bold text-3xl mb-4">Cliente App</h1>
      </Link>
      <div className="flex">
        <button className="bg-indigo-500 p-3 rounded-lg ml-4">
          <Link to="/alumnos-create">Registrar Alumno</Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg ml-4">
          <Link to="/reservas-create">Crear Reserva</Link>
        </button>
        <button className="bg-indigo-500 p-3 rounded-lg ml-4">
          <Link to="/reservas">Reservas</Link>
        </button>
      </div>
    </div>
  );
}
