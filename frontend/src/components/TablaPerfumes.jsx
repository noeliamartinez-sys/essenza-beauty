import { useState } from "react";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import perfumes from "../data/perfumesData";
import ModalEliminar from "./ModalEliminar";

import "../styles/TablaPerfumes.css";

function TablaPerfumes() {

  const [perfumeEliminar, setPerfumeEliminar] = useState(null);

  const confirmarEliminar = () => {

    alert(`"${perfumeEliminar.nombre}" eliminado correctamente`);

    setPerfumeEliminar(null);

  };

  return (

    <div className="tabla-container">

      <div className="tabla-header">

        <h2>Gestión de Perfumes</h2>

        <Link
          to="/agregar-perfume"
          className="btn-agregar"
        >
          <Plus size={18} />
          Agregar perfume
        </Link>

      </div>

      <table>

        <thead>

          <tr>

            <th>Imagen</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Acciones</th>

          </tr>

        </thead>

        <tbody>

          {perfumes.map((perfume) => (

            <tr key={perfume.id}>

              <td>

                <img
                  src={perfume.imagen}
                  alt={perfume.nombre}
                />

              </td>

              <td>{perfume.nombre}</td>

              <td>{perfume.marca}</td>

              <td>${perfume.precio}</td>

              <td className="acciones">

                <Link
                  to={`/ver-perfume/${perfume.id}`}
                  className="accion ver"
                >
                  <Eye size={18} />
                </Link>

                <Link
                  to={`/editar-perfume/${perfume.id}`}
                  className="accion editar"
                >
                  <Pencil size={18} />
                </Link>

                <button
                  className="accion eliminar"
                  onClick={() => setPerfumeEliminar(perfume)}
                >
                  <Trash2 size={18} />
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <ModalEliminar
        perfume={perfumeEliminar}
        onConfirmar={confirmarEliminar}
        onCancelar={() => setPerfumeEliminar(null)}
      />

    </div>

  );

}

export default TablaPerfumes;