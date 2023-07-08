import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createAlumno, deleteAlumno, getAlumnoById, updateAlumno } from "../api/test.api";
import { toast } from "react-hot-toast";

<div className="text-center text-white text-[30px] font-bold">Crear reserva</div>

export function FormAlumno() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateAlumno(params.id, data);
            toast.success("Alumno actualizado", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        } else {
            await createAlumno(data);
            toast.success("Nuevo Alumno agregado", {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff",
                },
            });
        }

        navigate("/alumnos");
    });

    useEffect(() => {
        async function loadAlumno() {
            if (params.id) {
                const { data } = await getAlumnoById(params.id);

                console.log(data)

                setValue("first_name", data.first_name);
                setValue("last_name", data.last_name);
                setValue("email", data.email);
                setValue("dni", data.dni);
            }
        }

        loadAlumno();
    }, []);

    return (
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
                <input
                    type="text"
                    placeholder="Nombre"
                    {...register("first_name", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                />

                {errors.first_name && <span className="text-red-500 opacity-50">El campo Nombre es requerido</span>}

                <input
                    type="text"
                    placeholder="Apellido"
                    {...register("last_name", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                />

                {errors.last_name && <span className="text-red-500 opacity-50">El campo Apellido es requerido</span>}

                <input
                    type="text"
                    placeholder="Email"
                    {...register("email", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                />

                {errors.email && <span className="text-red-500 opacity-50">El campo Email es requerido</span>}

                <input
                    type="text"
                    placeholder="DNI"
                    {...register("dni", { required: true })}
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    autoFocus
                />

                {errors.dni && <span className="text-red-500 opacity-50">El campo DNI es requerido</span>}

                <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
                    Guardar
                </button>
            </form>

            {params.id && (
                <div className="flex justify-end">
                    <button
                        className="bg-red-500 p-3 rounded-lg w-48 mt-3"
                        onClick={async () => {
                            const accepted = window.confirm("¿Esta seguro que desea borrar el Alumno?");
                            if (accepted) {
                                await deleteAlumno(params.id);
                                toast.success("Alumno removido", {
                                    position: "bottom-right",
                                    style: {
                                        background: "#101010",
                                        color: "#fff",
                                    },
                                });
                                navigate("/alumnos");
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