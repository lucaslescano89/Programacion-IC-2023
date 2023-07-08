import axios from "axios";

const URL =
    process.env.NODE_ENV === "production"
        ? import.meta.env.VITE_BACKEND_URL
        : "http://localhost:8000";

console.log(URL);

const alumnosApi = axios.create({
    baseURL: `${URL}/api/v1/alumnos`,
});

const reservasApi = axios.create({
    baseURL: `${URL}/api/v1/reservas`,
});

export const getAlumnos = () => alumnosApi.get("/");
export const getAlumnoById = (id) => alumnosApi.get(`/${id}/`);
export const createAlumno = (alumno) => alumnosApi.post("/", alumno);
export const updateAlumno = (id, alumno) => alumnosApi.put(`/${id}/`, alumno);
export const deleteAlumno = (id) => alumnosApi.delete(`/${id}`);

export const getReservas = () => reservasApi.get("/");
export const getReservaById = (id) => reservasApi.get(`/${id}/`);
export const createReserva = (reserva) => reservasApi.post("/", reserva);
export const updateReserva = (id, reserva) => reservasApi.put(`/${id}/`, reserva);
export const deleteReserva = (id) => reservasApi.delete(`/${id}`);