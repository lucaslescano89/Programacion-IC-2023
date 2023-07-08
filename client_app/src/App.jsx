import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Alumnos } from "./pages/Alumnos";
import { FormAlumno } from "./pages/FormAlumno";
import { Reservas } from "./pages/Reservas";
import { FormReserva } from "./pages/FormReserva";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/alumnos" />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/alumnos/:id" element={<FormAlumno />} />
          <Route path="/alumnos-create" element={<FormAlumno />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/reservas/:id" element={<FormReserva />} />
          <Route path="/reservas-create" element={<FormReserva />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
