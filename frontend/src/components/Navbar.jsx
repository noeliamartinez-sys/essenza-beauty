import "../styles/Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {

  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    const cambiarNavbar = () => {

      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }

    };

    window.addEventListener("scroll", cambiarNavbar);

    return () => window.removeEventListener("scroll", cambiarNavbar);

  }, []);

  return (

    <nav className={scroll ? "navbar navbar-scroll" : "navbar"}>

      <div className="logo">

        <span>✦</span>

        <h2>ESSENZA</h2>

      </div>

      <div className="nav-links">

        <a href="#inicio">Inicio</a>

        <a href="#marcas">Marcas</a>

        <a href="#coleccion">Colección</a>

        <a href="#nosotros">Nosotros</a>

        <a href="#contacto">Contacto</a>

      </div>

      <div className="nav-icons">

        <button>🔍</button>

        <button>♡</button>

        <button>👜</button>

      </div>

    </nav>

  );

}

export default Navbar;