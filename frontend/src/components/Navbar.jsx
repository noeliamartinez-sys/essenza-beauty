import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import { Search, Heart, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

function Navbar({ abrirCarrito }) {
  const [scroll, setScroll] = useState(false);
  const [menuUsuario, setMenuUsuario] = useState(false);

  useEffect(() => {
    const cambiarNavbar = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", cambiarNavbar);

    return () => {
      window.removeEventListener("scroll", cambiarNavbar);
    };
  }, []);

  const token = localStorage.getItem("token");

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
          <Search size={20} />
        </button>

        <button className="icon-btn">
          <Heart size={20} />
        </button>

        {token ? (
          <div className="user-dropdown">
            <button
              className="icon-btn"
              onClick={() => setMenuUsuario(!menuUsuario)}
            >
              <User size={20} />
            </button>

            {menuUsuario && (
              <div className="dropdown-menu">
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  <LogOut size={18} />
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="auth-btn">
              <User size={18} />
              <span>Iniciar sesión</span>
            </Link>

            <Link to="/register" className="auth-btn secondary">
              Registrarse
            </Link>
          </div>
        )}

        <CartButton abrirCarrito={abrirCarrito} />
      </div>
    </nav>
  );
}

export default Navbar;