import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import { Search, Heart } from "lucide-react";
import CartButton from "./CartButton";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const cambiarNavbar = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", cambiarNavbar);

    return () => {
      window.removeEventListener("scroll", cambiarNavbar);
    };
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

        <button className="icon-btn">
          <Search size={20} strokeWidth={1.7} />
        </button>

        <button className="icon-btn">
          <Heart size={20} strokeWidth={1.7} />
        </button>

        <CartButton />

      </div>
    </nav>
  );
}

export default Navbar;