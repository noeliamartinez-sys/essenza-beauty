import { useEffect, useState } from "react";
import api from "../services/api";

import FormularioAgregarPerfume from "../components/FormularioAgregarPerfume";
import TablaPerfumes from "../components/TablaPerfumes";
import Buscador from "../components/Buscador";
import DetallePerfume from "../components/DetallePerfume";
import ModalEliminar from "../components/ModalEliminar";

function Dashboard() {
  const [perfumes, setPerfumes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [detalle, setDetalle] = useState(null);
  const [eliminar, setEliminar] = useState(null);

  useEffect(() => {
    cargarPerfumes();
  }, []);

  const cargarPerfumes = async () => {
    try {
      const response = await api.get("/products");
      setPerfumes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const confirmarEliminar = async () => {
    try {
      await api.delete(`/products/${eliminar.id}`);

      cargarPerfumes();

      setEliminar(null);

      alert("Perfume eliminado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar perfume");
    }
  };

  const perfumesFiltrados = perfumes.filter(
    (p) =>
      p.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.marca?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <h1>Essenza Beauty</h1>

      <Buscador
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <FormularioAgregarPerfume
        onProductoCreado={cargarPerfumes}
      />

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