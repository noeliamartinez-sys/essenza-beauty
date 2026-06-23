import { useEffect, useState } from "react";
import api from "../services/api";
import TablaPerfumes from "../components/TablaPerfumes";
import src from "..assets/hero.jpg";
function Perfumes() {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    cargarPerfumes();
  }, []);

  const cargarPerfumes = async () => {
    try {
      const response = await api.get("/products");
      setPerfumes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarPerfume = async (perfume) => {
    try {
      await api.delete(`/products/${perfume.id}`);
      cargarPerfumes();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Gestión de Perfumes</h2>

      <TablaPerfumes
        perfumes={perfumes}
        onEliminar={eliminarPerfume}
        onEditar={() => {}}
        onVer={() => {}}
      />
    </div>
  );
}

export default Perfumes;