import { useState } from "react";
import perfumesData from "../data/perfumes";

import TablaPerfumes from "../components/TablaPerfumes";
import Buscador from "../components/Buscador";
import DetallePerfume from "../components/DetallePerfume";
import ModalEliminar from "../components/ModalEliminar";

function Dashboard() {
  const [perfumes, setPerfumes] = useState(perfumesData);

  const [busqueda, setBusqueda] = useState("");

  const [detalle, setDetalle] = useState(null);

  const [eliminar, setEliminar] = useState(null);

  const perfumesFiltrados = perfumes.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.marca.toLowerCase().includes(busqueda.toLowerCase()),
  );

  const confirmarEliminar = () => {
    setPerfumes(perfumes.filter((p) => p.id !== eliminar.id));

    setEliminar(null);
  };

  return (
    <div className="container mt-4">
      <h1>Essenza Beauty</h1>

      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

      <TablaPerfumes
        perfumes={perfumesFiltrados}
        onVer={setDetalle}
        onEditar={(p) => alert(`Editar ${p.nombre}`)}
        onEliminar={setEliminar}
      />

      <DetallePerfume perfume={detalle} />

      <ModalEliminar
        perfume={eliminar}
        onConfirmar={confirmarEliminar}
        onCancelar={() => setEliminar(null)}
      />
    </div>
  );
}

export default Dashboard;
