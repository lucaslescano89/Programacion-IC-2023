import { useNavigate } from "react-router-dom";

export function CardAlumno({ alumno }) {
    const navigate = useNavigate();

    return (
        <div
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
            onClick={() => {
                navigate(`/alumnos/${alumno.id}`);
            }}
        >
            <h1 className="text-white font-bold uppercase rounded-lg">
                {alumno.first_name} {alumno.last_name}
            </h1>
            <p className="text-slate-400">{alumno.email}</p>
            <p className="text-slate-400">{alumno.dni}</p>
        </div>
    );
}