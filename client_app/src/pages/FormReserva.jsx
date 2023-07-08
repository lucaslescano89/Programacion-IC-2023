import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createReserva, deleteReserva, getReservaById, updateReserva, getAlumnos } from "../api/test.api";
import { toast } from "react-hot-toast";

export function FormReserva() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const navigate = useNavigate();

    const params = useParams();
    
    const [alumnos, setAlumnos] = useState([]);

    const onSubmit = handleSubmit(async (data) => {
        
        if (params.id) {
            await updateReserva(params.id, data);
            toast.success("Reserva actualizada", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        } else {
            await createReserva(data);
            toast.success("Nueva reserva agregada", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }

        navigate("/reservas");
    });


    useEffect(() => {
        async function loadReserva() {
            if (params.id) {
                const { data } = await getReservaById(params.id);

                console.log(data)

                setValue("laboratorio", data.laboratorio);
                setValue("date", data.date);
                setValue("herramienta", data.herramienta);
                setValue("alumno", data.alumno);
            }
        }

        async function loadAlumnos() {
            const response = await getAlumnos();
            setAlumnos(response.data);
        }

        loadReserva();
        loadAlumnos();
    }, []);

    return (

        <div className="max-w-xl mx-auto">
            <div className="text-center text-white text-[30px] font-bold">Crear reserva</div>
            <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">

                <select 
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                    {...register("alumno", { required: true })}
                >
                    <option value="" defaultValue="" selected hidden className="text-gray-400">
                        Seleccione alumno
                    </option>
                    {alumnos.map((alumno) => (
                        <option key={alumno.id} value={alumno.id}>
                            {alumno.first_name} {alumno.last_name}
                        </option>
                    ))}
                </select>
                {errors.alumno && <span className="text-red-500 opacity-50">El campo Alumno es requerido</span>}

                
                <input
                    type="text"
                    placeholder="Laboratorio"
                    {...register("laboratorio", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                />
                {errors.laboratorio && <span className="text-red-500 opacity-50">El campo Laboratorio es requerido</span>}

                
                <input
                    type="text"
                    placeholder="Fecha (formato: AAAA-MM-DD)"
                    {...register("date", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                />
                {errors.date && <span className="text-red-500 opacity-50">El campo Fecha es requerido</span>}

                
                <input
                    type="text"
                    placeholder="Instrumentos"
                    {...register("herramienta", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                />
                {errors.herramienta && <span className="text-red-500 opacity-50">El campo Instrumentos es requerido</span>}

                

                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
                    Guardar
                </button>
            </form>

            {params.id && (
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                        onClick={async () => {
                            const accepted = window.confirm("¿Esta seguro que desea borrar la reserva?");
                            if (accepted) {
                                await deleteReserva(params.id);
                                toast.success("Reserva eliminada", {
                                    position: "bottom-right",
                                    style: {
                                        background: "#101010",
                                        color: "#fff",
                                    },
                                });
                                navigate("/reservas");
                            }
                        }}
                    >
                        Borrar
                    </button>
                </div>
            )}
        </div>
    );
}