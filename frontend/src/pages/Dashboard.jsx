import TablaPerfumes from "../components/TablaPerfumes";
import About from "../components/About";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div>

      <section className="hero">

        <div className="hero-content">

          <img
            className="hero-logo"
            src="/logo.png"
            alt="logo"
          />

          <h1>ESSENZA BEAUTY</h1>
          <p>Luxury Fragrances · Elegancia · Exclusividad</p>

        </div>

      </section>

      <TablaPerfumes />
      <About />

    </div>
  );
}

export default Dashboard;
