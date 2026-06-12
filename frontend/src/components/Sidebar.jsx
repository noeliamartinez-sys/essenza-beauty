import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <aside className="sidebar">
      <h2>Essenza Beauty</h2>

      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>

        <li>
          <Link to="/">Productos</Link>
        </li>

        <li>
          <Link to="/">Marcas</Link>
        </li>

        <li>
          <Link to="/">Categorías</Link>
        </li>

        <li>
          <Link to="/">Usuarios</Link>
        </li>

        <li>
          <Link to="/">Reportes</Link>
        </li>

        <li>
          <Link to="/">Configuración</Link>
        </li>

        <li>
          <button
            className="btn btn-danger mt-3"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;