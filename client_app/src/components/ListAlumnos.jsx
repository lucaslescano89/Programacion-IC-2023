import { useEffect, useState } from "react";
import { getAlumnos } from "../api/test.api";
import { CardAlumno } from "./CardAlumno";

export function ListAlumnos() {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        async function loadAlumnos() {
            const res = await getAlumnos();
            setAlumnos(res.data);
        }
  
        loadAlumnos();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3">
            {alumnos.map((alumno) => (
                <CardAlumno key={alumno.id} alumno={alumno} />
            ))}
        </div>
    );
}