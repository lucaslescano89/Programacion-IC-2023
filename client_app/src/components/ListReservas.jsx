import { useEffect, useState } from "react";
import { getReservas } from "../api/test.api";
import { CardReserva } from "./CardReserva";

export function ListReservas() {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        async function loadReservas() {
            const res = await getReservas();
            setReservas(res.data);
        }

        loadReservas();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-3">
            {reservas.map((reserva) => (
                <CardReserva key={reserva.id} reserva={reserva} />
            ))}
        </div>
    );
}