import { Package, Gem, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import perfumes from "../data/perfumesData";

import "../styles/Dashboard.css";

function Dashboard() {

  const totalPerfumes = perfumes.length;

  const totalMarcas = [...new Set(perfumes.map(p => p.marca))].length;

  const totalCatalogo = perfumes.reduce(
    (acc, p) => acc + p.precio,
    0
  );

  return (

    <div className="dashboard">

      <aside className="dashboard-sidebar">

        <h2>ESSENZA</h2>

        <nav>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/perfumes">
            Gestión Perfumes
          </Link>

        </nav>

      </aside>

      <main className="dashboard-main">

        <h1>Panel de Administración</h1>

        <div className="dashboard-cards">

          <div className="dashboard-card">

            <Package size={34} />

            <h2>{totalPerfumes}</h2>

            <span>Perfumes</span>

          </div>

          <div className="dashboard-card">

            <Gem size={34} />

            <h2>{totalMarcas}</h2>

            <span>Marcas</span>

          </div>

          <div className="dashboard-card">

            <DollarSign size={34} />

            <h2>${totalCatalogo}</h2>

            <span>Valor catálogo</span>

          </div>

        </div>

        <div className="dashboard-box">

          <h2>

            Bienvenido al panel de administración

          </h2>

          <p>

            Desde aquí podrás administrar todos los perfumes
            disponibles en Essenza.

          </p>

          <Link
            className="dashboard-btn"
            to="/perfumes"
          >

            Gestionar perfumes

          </Link>

        </div>

      </main>

    </div>

  );

}

export default Dashboard;